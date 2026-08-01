import { resolve } from "node:path";

const ROOT_DIR = resolve(import.meta.dirname, "..");

async function run(command: string[], environment = process.env): Promise<void> {
  const child = Bun.spawn(command, {
    cwd: ROOT_DIR,
    env: environment,
    stdout: "inherit",
    stderr: "inherit",
  });
  const exitCode = await child.exited;
  if (exitCode !== 0) process.exit(exitCode);
}

async function output(command: string[]): Promise<string> {
  const child = Bun.spawn(command, {
    cwd: ROOT_DIR,
    env: process.env,
    stdout: "pipe",
    stderr: "inherit",
  });
  const text = await new Response(child.stdout).text();
  const exitCode = await child.exited;
  if (exitCode !== 0) process.exit(exitCode);
  return text;
}

type Simulator = {
  isAvailable?: boolean;
  name?: string;
  state?: string;
  udid?: string;
};

await run(["xcodegen", "generate", "--spec", "ios/project.yml"]);

const simulatorList = JSON.parse(
  await output(["xcrun", "simctl", "list", "devices", "available", "-j"]),
) as { devices?: Record<string, Simulator[]> };
const runtimeEntries = Object.entries(simulatorList.devices ?? {})
  .filter(([runtime]) => runtime.includes(".iOS-"))
  .sort(([left], [right]) => right.localeCompare(left, "en-GB"));
const candidates = runtimeEntries.flatMap(([, devices]) =>
  devices.filter(
    (device) =>
      device.isAvailable !== false &&
      device.name?.startsWith("iPhone") &&
      typeof device.udid === "string",
  ),
);
const simulator =
  candidates.find((candidate) => candidate.state === "Booted") ?? candidates[0];

if (!simulator?.udid) {
  throw new Error(
    "No available iPhone simulator was found. Install an iOS Simulator runtime for the selected Xcode.",
  );
}

console.log(`Running Sparky tests on ${simulator.name} (${simulator.udid}).`);
await run([
  "xcodebuild",
  "test",
  "-quiet",
  "-project",
  "ios/Sparky.xcodeproj",
  "-scheme",
  "Sparky",
  "-destination",
  `platform=iOS Simulator,id=${simulator.udid}`,
  "CODE_SIGNING_ALLOWED=NO",
]);
