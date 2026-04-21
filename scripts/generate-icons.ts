import sharp from "sharp";
import { readFile, writeFile } from "node:fs/promises";
import { join, dirname } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const iconsDir = join(here, "..", "public", "icons");

async function render(svgPath: string, outPath: string, size: number) {
  const svg = await readFile(svgPath);
  const buffer = await sharp(svg, { density: 512 })
    .resize(size, size, { fit: "contain", background: { r: 0, g: 0, b: 0, alpha: 0 } })
    .png({ compressionLevel: 9 })
    .toBuffer();
  await writeFile(outPath, buffer);
  console.log(`wrote ${outPath} (${size}x${size}, ${buffer.length} bytes)`);
}

const iconSvg = join(iconsDir, "icon.svg");
const maskableSvg = join(iconsDir, "maskable.svg");

await render(iconSvg, join(iconsDir, "icon-192.png"), 192);
await render(iconSvg, join(iconsDir, "icon-512.png"), 512);
await render(iconSvg, join(iconsDir, "icon.png"), 512);
await render(iconSvg, join(iconsDir, "apple-touch-icon.png"), 180);
await render(maskableSvg, join(iconsDir, "maskable-512.png"), 512);
await render(maskableSvg, join(iconsDir, "maskable.png"), 512);
