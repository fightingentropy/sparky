import { useEffect, useMemo, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { ContactShadows, Environment, OrbitControls, Text } from "@react-three/drei";
import type { Group, Mesh } from "three";
import "./PanelTrainer.css";

type Pole = 1 | 2;
type AWG = 14 | 12 | 10 | 8 | 6 | 4 | 2;
type Side = "L" | "R";
type Rating = 15 | 20 | 30 | 40 | 60;

type LibraryItem = { key: string; rating: Rating; poles: Pole; label: string };

type Breaker = {
  id: string;
  rating: Rating;
  poles: Pole;
  slot: number; // primary slot, lowest of the two for double-pole
  side: Side;
  on: boolean;
  tripped: boolean;
  awg: AWG;
  loadAmps: number;
  name: string;
  hasWire: boolean;
};

type Warning = { id: string; level: "error" | "warn"; message: string };

const TOTAL_SLOTS = 40;
const SLOTS_PER_SIDE = 20;

const LIBRARY: LibraryItem[] = [
  { key: "sp-15", rating: 15, poles: 1, label: "15A 1P" },
  { key: "sp-20", rating: 20, poles: 1, label: "20A 1P" },
  { key: "sp-30", rating: 30, poles: 1, label: "30A 1P" },
  { key: "sp-40", rating: 40, poles: 1, label: "40A 1P" },
  { key: "sp-60", rating: 60, poles: 1, label: "60A 1P" },
  { key: "dp-30", rating: 30, poles: 2, label: "30A 2P" },
  { key: "dp-60", rating: 60, poles: 2, label: "60A 2P" }
];

const AWG_AMPACITY: Record<AWG, number> = { 14: 15, 12: 20, 10: 30, 8: 50, 6: 65, 4: 85, 2: 115 };

const AWG_OPTIONS: AWG[] = [14, 12, 10, 8, 6, 4, 2];

const TIPS = [
  "Single-pole breakers serve 120V circuits. Double-pole breakers span both buses for 240V loads.",
  "Continuous loads must be sized at 125% per NEC 210.19/220.10.",
  "The neutral bar is for grounded conductors; the ground bar bonds equipment grounds.",
  "Slot numbering alternates: 1 left, 2 right, 3 left, 4 right…",
  "A 20A breaker requires at least 12 AWG copper per NEC 240.4(D).",
  "Torque every lug to manufacturer spec — loose connections start fires."
];

// ---- helpers ----------------------------------------------------------------

function slotToSide(slot: number): Side {
  return slot % 2 === 1 ? "L" : "R";
}

function slotToRow(slot: number): number {
  // Row 0 is the topmost pair (slots 1,2). Row 19 is bottom (slots 39,40).
  return Math.floor((slot - 1) / 2);
}

function nextFreeSlot(breakers: Breaker[], poles: Pole): number | null {
  const occupied = new Set<number>();
  for (const b of breakers) {
    occupied.add(b.slot);
    if (b.poles === 2) occupied.add(b.slot + 2);
  }
  for (let s = 1; s <= TOTAL_SLOTS; s++) {
    if (occupied.has(s)) continue;
    if (poles === 1) return s;
    const partner = s + 2;
    if (partner > TOTAL_SLOTS) continue;
    if (occupied.has(partner)) continue;
    if (slotToSide(s) !== slotToSide(partner)) continue;
    return s;
  }
  return null;
}

function defaultAwgForRating(rating: Rating): AWG {
  if (rating <= 15) return 14;
  if (rating <= 20) return 12;
  if (rating <= 30) return 10;
  if (rating <= 50) return 8;
  if (rating <= 60) return 6;
  return 4;
}

function uid(prefix: string): string {
  return `${prefix}-${Math.random().toString(36).slice(2, 8)}`;
}

function warningsFor(b: Breaker): Warning[] {
  const out: Warning[] = [];
  if (AWG_AMPACITY[b.awg] < b.rating) {
    out.push({
      id: `${b.id}-awg`,
      level: "error",
      message: `Wire too small — ${b.awg} AWG protects only ${AWG_AMPACITY[b.awg]}A. NEC 240.4(D).`
    });
  }
  if (b.loadAmps > b.rating) {
    out.push({ id: `${b.id}-overload`, level: "error", message: "Load exceeds breaker rating." });
  } else if (b.loadAmps > 0.8 * b.rating) {
    out.push({
      id: `${b.id}-cont`,
      level: "warn",
      message: "Continuous load > 80% — size at 125% per NEC 210.19/220.10."
    });
  }
  return out;
}

// ---- panel geometry constants (meters) --------------------------------------

const PANEL = {
  width: 0.42,
  height: 0.66,
  depth: 0.10,
  wallThickness: 0.012,
  centerY: 1.0
};

const INTERIOR = {
  width: PANEL.width - PANEL.wallThickness * 2,
  height: PANEL.height - PANEL.wallThickness * 2,
  depth: PANEL.depth - PANEL.wallThickness
};

const MAIN_BREAKER_HEIGHT = 0.07;
const SLOT_HEIGHT = (INTERIOR.height - MAIN_BREAKER_HEIGHT - 0.05) / SLOTS_PER_SIDE;
const SLOT_WIDTH = 0.085;
const SLOT_DEPTH = 0.032;

function slotLocalPosition(slot: number): [number, number, number] {
  const side = slotToSide(slot);
  const row = slotToRow(slot);
  const xCenter = side === "L" ? -SLOT_WIDTH / 2 - 0.004 : SLOT_WIDTH / 2 + 0.004;
  const topY = INTERIOR.height / 2 - MAIN_BREAKER_HEIGHT - 0.025;
  const y = topY - row * SLOT_HEIGHT - SLOT_HEIGHT / 2;
  const z = -INTERIOR.depth / 2 + SLOT_DEPTH / 2 + 0.012;
  return [xCenter, y, z];
}

// ---- 3D pieces --------------------------------------------------------------

function SteelPanel({ args, position }: { args: [number, number, number]; position: [number, number, number] }) {
  return (
    <mesh receiveShadow castShadow position={position}>
      <boxGeometry args={args} />
      <meshStandardMaterial color="#9ea4ab" metalness={0.6} roughness={0.45} />
    </mesh>
  );
}

function Knockout({ position, rotation }: { position: [number, number, number]; rotation: [number, number, number] }) {
  return (
    <mesh position={position} rotation={rotation}>
      <circleGeometry args={[0.018, 24]} />
      <meshStandardMaterial color="#1c1f24" metalness={0.4} roughness={0.7} />
    </mesh>
  );
}

function CornerScrew({ position }: { position: [number, number, number] }) {
  return (
    <mesh position={position} rotation={[Math.PI / 2, 0, 0]}>
      <cylinderGeometry args={[0.005, 0.005, 0.003, 16]} />
      <meshStandardMaterial color="#bfc4cb" metalness={0.85} roughness={0.3} />
    </mesh>
  );
}

function CabinetShell() {
  const wall = PANEL.wallThickness;
  const w = PANEL.width;
  const h = PANEL.height;
  const d = PANEL.depth;
  const knockoutXs = [-0.10, 0, 0.10];
  const screwSpots: [number, number][] = [
    [-w / 2 + 0.018, h / 2 - 0.018],
    [w / 2 - 0.018, h / 2 - 0.018],
    [-w / 2 + 0.018, -h / 2 + 0.018],
    [w / 2 - 0.018, -h / 2 + 0.018]
  ];
  return (
    <group>
      <mesh receiveShadow castShadow position={[0, 0, -d / 2]}>
        <boxGeometry args={[w, h, wall]} />
        <meshStandardMaterial color="#3a3e45" metalness={0.5} roughness={0.55} />
      </mesh>
      <SteelPanel args={[w, wall, d]} position={[0, h / 2 - wall / 2, 0]} />
      <SteelPanel args={[w, wall, d]} position={[0, -h / 2 + wall / 2, 0]} />
      <SteelPanel args={[wall, h, d]} position={[-w / 2 + wall / 2, 0, 0]} />
      <SteelPanel args={[wall, h, d]} position={[w / 2 - wall / 2, 0, 0]} />
      {knockoutXs.map((kx) => (
        <Knockout key={`kt-${kx}`} position={[kx, h / 2 - wall / 2 + 0.0011, 0]} rotation={[-Math.PI / 2, 0, 0]} />
      ))}
      {knockoutXs.map((kx) => (
        <Knockout key={`kb-${kx}`} position={[kx, -h / 2 + wall / 2 - 0.0011, 0]} rotation={[Math.PI / 2, 0, 0]} />
      ))}
      {screwSpots.map(([sx, sy], i) => (
        <CornerScrew key={`screw-${i}`} position={[sx, sy, d / 2 - 0.001]} />
      ))}
    </group>
  );
}

function DoorDirectory() {
  const items: number[] = [];
  for (let i = 1; i <= TOTAL_SLOTS; i++) items.push(i);
  const xSpan = PANEL.width * 0.42;
  const ySpan = PANEL.height * 0.6;
  return (
    <group position={[0, 0, -0.0005]} rotation={[0, Math.PI, 0]}>
      <Text fontSize={0.014} color="#202024" position={[0, PANEL.height * 0.32, 0]} anchorX="center" anchorY="middle">
        CIRCUIT DIRECTORY
      </Text>
      {items.map((n) => {
        const col = (n - 1) % 2;
        const row = Math.floor((n - 1) / 2);
        const x = -xSpan / 2 + col * xSpan;
        const y = ySpan / 2 - 0.02 - (row * ySpan) / 20;
        return (
          <Text key={`dir-${n}`} fontSize={0.0085} color="#444" position={[x, y, 0]} anchorX="left" anchorY="middle">
            {`${n}.`}
          </Text>
        );
      })}
    </group>
  );
}

function CabinetDoor() {
  const w = PANEL.width;
  const h = PANEL.height;
  const wall = PANEL.wallThickness;
  return (
    <group position={[w / 2, 0, PANEL.depth / 2]} rotation={[0, -Math.PI * (110 / 180), 0]}>
      <group position={[-w / 2, 0, 0]}>
        <mesh castShadow receiveShadow position={[0, 0, wall / 2]}>
          <boxGeometry args={[w, h, wall]} />
          <meshStandardMaterial color="#9ea4ab" metalness={0.6} roughness={0.45} />
        </mesh>
        <mesh position={[-w / 2 + 0.04, 0, wall + 0.001]}>
          <boxGeometry args={[0.04, 0.06, 0.004]} />
          <meshStandardMaterial color="#7d828a" metalness={0.7} roughness={0.4} />
        </mesh>
        <mesh position={[-w / 2 + 0.04, 0, wall + 0.006]} rotation={[0, 0, Math.PI / 2]}>
          <cylinderGeometry args={[0.005, 0.005, 0.025, 16]} />
          <meshStandardMaterial color="#cfd2d7" metalness={0.85} roughness={0.25} />
        </mesh>
        <mesh position={[0, 0, -0.001]}>
          <planeGeometry args={[w * 0.55, h * 0.78]} />
          <meshStandardMaterial color="#f2f2ee" roughness={0.85} metalness={0.0} />
        </mesh>
        <DoorDirectory />
      </group>
    </group>
  );
}

function BusBars() {
  const busW = 0.012;
  const busD = 0.006;
  const h = INTERIOR.height - MAIN_BREAKER_HEIGHT - 0.06;
  const yCenter = -MAIN_BREAKER_HEIGHT / 2 - 0.005;
  const z = -INTERIOR.depth / 2 + 0.018;
  const xs: [number, number] = [-0.014, 0.014];
  const stepY = h / SLOTS_PER_SIDE;
  return (
    <group>
      {xs.map((x) => (
        <mesh key={`bus-${x}`} position={[x, yCenter, z]} castShadow>
          <boxGeometry args={[busW, h, busD]} />
          <meshStandardMaterial color="#b87333" metalness={0.85} roughness={0.3} />
        </mesh>
      ))}
      {xs.map((x) =>
        Array.from({ length: SLOTS_PER_SIDE }, (_, i) => {
          const y = yCenter + h / 2 - i * stepY - stepY / 2;
          const stabX = x + (x < 0 ? busW / 2 + 0.003 : -(busW / 2 + 0.003));
          return (
            <mesh key={`stab-${x}-${i}`} position={[stabX, y, z]}>
              <boxGeometry args={[0.006, 0.006, 0.004]} />
              <meshStandardMaterial color="#a06228" metalness={0.85} roughness={0.35} />
            </mesh>
          );
        })
      )}
    </group>
  );
}

function BarRail({ x, color, label }: { x: number; color: string; label: string }) {
  const h = INTERIOR.height - MAIN_BREAKER_HEIGHT - 0.04;
  const y = -MAIN_BREAKER_HEIGHT / 2 - 0.005;
  const z = -INTERIOR.depth / 2 + 0.008;
  return (
    <group position={[x, y, z]}>
      <mesh castShadow>
        <boxGeometry args={[0.014, h, 0.006]} />
        <meshStandardMaterial color={color} metalness={0.7} roughness={0.5} />
      </mesh>
      {Array.from({ length: 14 }, (_, i) => (
        <mesh key={`scr-${i}`} position={[0, h / 2 - 0.012 - i * (h / 14), 0.004]} rotation={[Math.PI / 2, 0, 0]}>
          <cylinderGeometry args={[0.0025, 0.0025, 0.002, 12]} />
          <meshStandardMaterial color="#d4d8de" metalness={0.9} roughness={0.25} />
        </mesh>
      ))}
      <Text fontSize={0.008} color="#dfe2e7" position={[0, h / 2 + 0.012, 0.004]} anchorX="center" anchorY="middle">
        {label}
      </Text>
    </group>
  );
}

function MainHandle({ x }: { x: number }) {
  return (
    <mesh position={[x, 0, SLOT_DEPTH / 2 + 0.006]} rotation={[0.4, 0, 0]} castShadow>
      <boxGeometry args={[0.014, 0.026, 0.012]} />
      <meshStandardMaterial color="#f5f5f5" metalness={0.05} roughness={0.5} />
    </mesh>
  );
}

function MainBreaker() {
  const yTop = INTERIOR.height / 2 - MAIN_BREAKER_HEIGHT / 2 - 0.005;
  const z = -INTERIOR.depth / 2 + SLOT_DEPTH / 2 + 0.018;
  return (
    <group position={[0, yTop, z]}>
      <mesh castShadow receiveShadow>
        <boxGeometry args={[0.18, MAIN_BREAKER_HEIGHT, SLOT_DEPTH]} />
        <meshStandardMaterial color="#15171a" metalness={0.05} roughness={0.55} />
      </mesh>
      <MainHandle x={-0.018} />
      <MainHandle x={0.018} />
      <mesh position={[0, 0.012, SLOT_DEPTH / 2 + 0.014]}>
        <boxGeometry args={[0.04, 0.004, 0.004]} />
        <meshStandardMaterial color="#e2e2e2" metalness={0.1} roughness={0.5} />
      </mesh>
      <Text fontSize={0.012} color="#f5f5f5" position={[0, 0.018, SLOT_DEPTH / 2 + 0.001]} anchorX="center" anchorY="middle">
        MAIN 200A
      </Text>
      <Text fontSize={0.008} color="#bbb" position={[0, -0.018, SLOT_DEPTH / 2 + 0.001]} anchorX="center" anchorY="middle">
        240V
      </Text>
    </group>
  );
}

type EmptySlotProps = {
  slot: number;
  hovered: boolean;
  onPointerOver: () => void;
  onPointerOut: () => void;
};

function EmptySlotMarker({ slot, hovered, onPointerOver, onPointerOut }: EmptySlotProps) {
  const [x, y, z] = slotLocalPosition(slot);
  const stop = (cb: () => void) => (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    cb();
  };
  return (
    <mesh position={[x, y, z - SLOT_DEPTH / 2 + 0.002]} onPointerOver={stop(onPointerOver)} onPointerOut={stop(onPointerOut)}>
      <boxGeometry args={[SLOT_WIDTH * 0.95, SLOT_HEIGHT * 0.92, 0.002]} />
      <meshStandardMaterial
        color={hovered ? "#f59e0b" : "#1f2228"}
        emissive={hovered ? "#f59e0b" : "#000000"}
        emissiveIntensity={hovered ? 0.55 : 0}
        roughness={0.85}
        metalness={0.05}
        transparent
        opacity={hovered ? 0.85 : 0.7}
      />
    </mesh>
  );
}

function BreakerToggle({ on, tripped }: { on: boolean; tripped: boolean }) {
  const ref = useRef<Mesh>(null);
  const target = tripped ? 0 : on ? 0.4 : -0.4;
  useFrame((_, dt) => {
    const m = ref.current;
    if (!m) return;
    const cur = m.rotation.x;
    const next = cur + (target - cur) * Math.min(1, dt * 8);
    m.rotation.x = next;
  });
  return (
    <mesh ref={ref} position={[0, 0, SLOT_DEPTH / 2 + 0.006]} castShadow>
      <boxGeometry args={[0.012, 0.022, 0.010]} />
      <meshStandardMaterial color="#f5f5f5" metalness={0.05} roughness={0.5} />
    </mesh>
  );
}

function WireStrand({ x, color }: { x: number; color: string }) {
  return (
    <mesh position={[x, 0, 0]} castShadow>
      <cylinderGeometry args={[0.0035, 0.0035, 0.10, 16]} />
      <meshStandardMaterial color={color} metalness={0.05} roughness={0.45} />
    </mesh>
  );
}

function WireBundle({ bodyHeight, side }: { bodyHeight: number; side: Side }) {
  const startY = -bodyHeight / 2 - 0.005;
  const len = 0.10;
  const offsetX = side === "L" ? -0.012 : 0.012;
  const z = SLOT_DEPTH / 2 - 0.003;
  return (
    <group position={[offsetX, startY - len / 2, z]}>
      <WireStrand x={-0.006} color="#101013" />
      <WireStrand x={0} color="#ececec" />
      <WireStrand x={0.006} color="#2f8f3a" />
    </group>
  );
}

function WarningBadge({ bodyHeight }: { bodyHeight: number }) {
  return (
    <group position={[0, bodyHeight / 2 + 0.018, SLOT_DEPTH / 2 + 0.005]}>
      <mesh>
        <planeGeometry args={[0.024, 0.018]} />
        <meshStandardMaterial color="#ef5350" emissive="#ef5350" emissiveIntensity={0.4} />
      </mesh>
      <Text fontSize={0.012} color="#fff" position={[0, 0, 0.001]} anchorX="center" anchorY="middle">
        !
      </Text>
    </group>
  );
}

type BreakerObjectProps = {
  breaker: Breaker;
  selected: boolean;
  hovered: boolean;
  warnings: Warning[];
  onClick: () => void;
  onPointerOver: () => void;
  onPointerOut: () => void;
};

function BreakerObject({ breaker, selected, hovered, warnings, onClick, onPointerOver, onPointerOut }: BreakerObjectProps) {
  const [x, y, z] = slotLocalPosition(breaker.slot);
  const isDouble = breaker.poles === 2;
  const partnerSlot = isDouble ? breaker.slot + 2 : breaker.slot;
  const [, yPartner] = slotLocalPosition(partnerSlot);
  const yMid = isDouble ? (y + yPartner) / 2 : y;
  const bodyHeight = isDouble ? Math.abs(y - yPartner) + SLOT_HEIGHT * 0.92 : SLOT_HEIGHT * 0.92;
  const hasError = warnings.some((w) => w.level === "error");
  const emissive = selected ? "#fbbf24" : hovered ? "#f59e0b" : breaker.tripped ? "#ef5350" : "#000000";
  const emissiveIntensity = selected ? 0.5 : hovered ? 0.4 : breaker.tripped ? 0.4 : 0;
  const stop = (cb: () => void) => (e: { stopPropagation: () => void }) => {
    e.stopPropagation();
    cb();
  };
  return (
    <group position={[x, yMid, z]}>
      <mesh castShadow receiveShadow onPointerOver={stop(onPointerOver)} onPointerOut={stop(onPointerOut)} onClick={stop(onClick)}>
        <boxGeometry args={[SLOT_WIDTH * 0.95, bodyHeight, SLOT_DEPTH]} />
        <meshStandardMaterial color="#15171a" metalness={0.05} roughness={0.55} emissive={emissive} emissiveIntensity={emissiveIntensity} />
      </mesh>
      <mesh position={[0, bodyHeight / 2 - 0.003, SLOT_DEPTH / 2 + 0.0005]}>
        <boxGeometry args={[SLOT_WIDTH * 0.92, 0.003, 0.001]} />
        <meshStandardMaterial
          color={breaker.tripped ? "#f59e0b" : "#2a2d33"}
          emissive={breaker.tripped ? "#f59e0b" : "#000000"}
          emissiveIntensity={breaker.tripped ? 0.8 : 0}
        />
      </mesh>
      <mesh position={[SLOT_WIDTH / 2 - 0.012, bodyHeight / 2 - 0.012, SLOT_DEPTH / 2 + 0.001]}>
        <cylinderGeometry args={[0.002, 0.002, 0.002, 12]} />
        <meshStandardMaterial color="#c0392b" metalness={0.2} roughness={0.4} />
      </mesh>
      <Text
        fontSize={0.012}
        color="#f5f5f5"
        position={[0, isDouble ? -bodyHeight / 4 : 0, SLOT_DEPTH / 2 + 0.001]}
        anchorX="center"
        anchorY="middle"
      >
        {`${breaker.rating}A`}
      </Text>
      {isDouble ? (
        <Text fontSize={0.008} color="#bbb" position={[0, bodyHeight / 4, SLOT_DEPTH / 2 + 0.001]} anchorX="center" anchorY="middle">
          240V
        </Text>
      ) : null}
      <BreakerToggle on={breaker.on} tripped={breaker.tripped} />
      {breaker.hasWire ? <WireBundle bodyHeight={bodyHeight} side={breaker.side} /> : null}
      {hasError ? <WarningBadge bodyHeight={bodyHeight} /> : null}
    </group>
  );
}

function ReflectiveFloor() {
  return (
    <mesh rotation={[-Math.PI / 2, 0, 0]} position={[0, PANEL.centerY - PANEL.height / 2 - 0.4, 0]} receiveShadow>
      <planeGeometry args={[6, 6]} />
      <meshStandardMaterial color="#0e1116" metalness={0.4} roughness={0.7} />
    </mesh>
  );
}

type PanelSceneProps = {
  breakers: Breaker[];
  selectedId: string | null;
  hoverSlot: number | null;
  onSelectBreaker: (id: string) => void;
  onHoverSlot: (slot: number) => void;
  onUnhoverSlot: (slot: number) => void;
};

function PanelScene({ breakers, selectedId, hoverSlot, onSelectBreaker, onHoverSlot, onUnhoverSlot }: PanelSceneProps) {
  const groupRef = useRef<Group>(null);
  const occupied = useMemo(() => {
    const set = new Set<number>();
    for (const b of breakers) {
      set.add(b.slot);
      if (b.poles === 2) set.add(b.slot + 2);
    }
    return set;
  }, [breakers]);
  const allSlots: number[] = useMemo(() => {
    const out: number[] = [];
    for (let i = 1; i <= TOTAL_SLOTS; i++) out.push(i);
    return out;
  }, []);
  const breakerWarnings = useMemo(() => {
    const map: Record<string, Warning[]> = {};
    for (const b of breakers) map[b.id] = warningsFor(b);
    return map;
  }, [breakers]);
  const [hoverBreakerId, setHoverBreakerId] = useState<string | null>(null);
  return (
    <group ref={groupRef} position={[0, PANEL.centerY, 0]}>
      <CabinetShell />
      <CabinetDoor />
      <group>
        <MainBreaker />
        <BusBars />
        <BarRail x={-INTERIOR.width / 2 + 0.012} color="#c0c4c8" label="N" />
        <BarRail x={INTERIOR.width / 2 - 0.012} color="#c0c4c8" label="G" />
        {allSlots.map((slot) =>
          occupied.has(slot) ? null : (
            <EmptySlotMarker
              key={`empty-${slot}`}
              slot={slot}
              hovered={hoverSlot === slot}
              onPointerOver={() => onHoverSlot(slot)}
              onPointerOut={() => onUnhoverSlot(slot)}
            />
          )
        )}
        {breakers.map((b) => (
          <BreakerObject
            key={b.id}
            breaker={b}
            selected={selectedId === b.id}
            hovered={hoverBreakerId === b.id}
            warnings={breakerWarnings[b.id] ?? []}
            onClick={() => onSelectBreaker(b.id)}
            onPointerOver={() => setHoverBreakerId(b.id)}
            onPointerOut={() => setHoverBreakerId((prev) => (prev === b.id ? null : prev))}
          />
        ))}
      </group>
    </group>
  );
}

// ---- right HUD --------------------------------------------------------------

function BreakerIcon({ poles }: { poles: Pole }) {
  const w = poles === 2 ? 26 : 16;
  return (
    <svg width={w} height={28} viewBox={`0 0 ${w} 28`} aria-hidden="true">
      <rect
        x={1}
        y={2}
        width={w - 2}
        height={24}
        rx={3}
        fill="#15171a"
        stroke="currentColor"
        strokeOpacity={0.35}
      />
      <rect x={w / 2 - 3} y={9} width={6} height={4} rx={1} fill="currentColor" opacity={0.8} />
      <line
        x1={2}
        x2={w - 2}
        y1={18}
        y2={18}
        stroke="currentColor"
        strokeOpacity={0.2}
        strokeWidth={0.6}
      />
      <line
        x1={2}
        x2={w - 2}
        y1={22}
        y2={22}
        stroke="currentColor"
        strokeOpacity={0.2}
        strokeWidth={0.6}
      />
    </svg>
  );
}

type CardBoxProps = {
  title?: string;
  subtitle?: string;
  badge?: string;
  children: React.ReactNode;
  className?: string;
};

function CardBox({ title, subtitle, badge, children, className }: CardBoxProps) {
  const cls = className ? `pt-card ${className}` : "pt-card";
  return (
    <section className={cls}>
      {title || subtitle || badge ? (
        <header className="pt-card-header">
          <div>
            {title ? <h3 className="pt-card-title">{title}</h3> : null}
            {subtitle ? <p className="pt-card-subtitle">{subtitle}</p> : null}
          </div>
          {badge ? <span className="pt-card-badge">{badge}</span> : null}
        </header>
      ) : null}
      {children}
    </section>
  );
}

function LibraryPanel({ onPick }: { onPick: (item: LibraryItem) => void }) {
  const [pulseKey, setPulseKey] = useState<string | null>(null);
  function handlePick(item: LibraryItem) {
    setPulseKey(item.key);
    onPick(item);
    window.setTimeout(() => {
      setPulseKey((cur) => (cur === item.key ? null : cur));
    }, 380);
  }
  return (
    <div className="pt-library-grid">
      {LIBRARY.map((it) => {
        const cls = `pt-library-button${pulseKey === it.key ? " is-pulsing" : ""}`;
        const polesLabel = it.poles === 2 ? "2-POLE" : "1-POLE";
        return (
          <button
            key={it.key}
            type="button"
            onClick={() => handlePick(it)}
            className={cls}
            aria-label={`Install ${it.rating} amp ${polesLabel} breaker`}
          >
            <span className="pt-library-button-text">
              <span className="pt-library-rating">{it.rating}A</span>
              <span className="pt-library-poles">{polesLabel}</span>
            </span>
            <span className="pt-library-icon">
              <BreakerIcon poles={it.poles} />
            </span>
          </button>
        );
      })}
    </div>
  );
}

type CircuitRowProps = {
  breaker: Breaker;
  selected: boolean;
  warnings: Warning[];
  onUpdate: (patch: Partial<Breaker>) => void;
  onRemove: () => void;
  onSelect: () => void;
  onTrip: () => void;
};

function CircuitRow({ breaker, selected, warnings, onUpdate, onRemove, onSelect, onTrip }: CircuitRowProps) {
  const slotLabel = breaker.poles === 2 ? `${breaker.slot}/${breaker.slot + 2}` : `${breaker.slot}`;
  const live = breaker.on && !breaker.tripped;
  const hasError = warnings.some((w) => w.level === "error");
  const hasWarn = warnings.some((w) => w.level === "warn");
  const stopper =
    (cb: () => void) =>
    (e: React.MouseEvent | React.PointerEvent) => {
      e.stopPropagation();
      cb();
    };
  const switchLabel = breaker.tripped ? "TRIP" : live ? "ON" : "OFF";
  const switchLabelCls = breaker.tripped
    ? "pt-switch-label is-tripped"
    : live
      ? "pt-switch-label is-on"
      : "pt-switch-label";
  const trackCls = breaker.tripped ? "pt-switch-track is-tripped" : "pt-switch-track";
  const cardCls = `pt-circuit${selected ? " is-selected" : ""}`;
  return (
    <div
      onClick={onSelect}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          onSelect();
        }
      }}
      role="button"
      tabIndex={0}
      className={cardCls}
      aria-pressed={selected}
    >
      <div className="pt-circuit-top">
        <span className="pt-slot-pill">#{slotLabel}</span>
        <span className="pt-circuit-rating">{breaker.rating}A</span>
        <span className="pt-pole-tag">{breaker.poles === 2 ? "2P" : "1P"}</span>
        {hasError ? (
          <span className="pt-status-dot is-error" aria-label="Has error" title="Has error" />
        ) : hasWarn ? (
          <span className="pt-status-dot is-warn" aria-label="Has warning" title="Has warning" />
        ) : null}
      </div>

      <input
        type="text"
        value={breaker.name}
        placeholder="Circuit name (e.g., Kitchen lights)"
        onChange={(e) => onUpdate({ name: e.target.value })}
        onClick={(e) => e.stopPropagation()}
        className="pt-circuit-name"
      />

      <div className="pt-field-row" onClick={(e) => e.stopPropagation()}>
        <div className="pt-field">
          <label className="pt-field-label" htmlFor={`pt-awg-${breaker.id}`}>
            Wire
          </label>
          <select
            id={`pt-awg-${breaker.id}`}
            value={breaker.awg}
            onChange={(e) => onUpdate({ awg: Number(e.target.value) as AWG })}
            className="pt-select"
          >
            {AWG_OPTIONS.map((awg) => (
              <option key={awg} value={awg}>
                {awg} AWG
              </option>
            ))}
          </select>
        </div>
        <div className="pt-field">
          <label className="pt-field-label" htmlFor={`pt-load-${breaker.id}`}>
            Load
          </label>
          <span className="pt-amp-wrap">
            <input
              id={`pt-load-${breaker.id}`}
              type="number"
              min={0}
              step={0.1}
              value={breaker.loadAmps}
              onChange={(e) => {
                const v = Number(e.target.value);
                onUpdate({ loadAmps: Number.isFinite(v) && v >= 0 ? v : 0 });
              }}
              className="pt-amp-input"
            />
            <span className="pt-amp-suffix">A</span>
          </span>
        </div>
        <div className="pt-field">
          <label className="pt-field-label" htmlFor={`pt-on-${breaker.id}`}>
            Power
          </label>
          <label className="pt-switch" htmlFor={`pt-on-${breaker.id}`}>
            <input
              id={`pt-on-${breaker.id}`}
              type="checkbox"
              role="switch"
              aria-checked={live}
              checked={live}
              onChange={() => onUpdate({ on: !breaker.on, tripped: false })}
              className="pt-switch-input"
            />
            <span className={trackCls} aria-hidden="true">
              <span className="pt-switch-knob" />
            </span>
            <span className={switchLabelCls}>{switchLabel}</span>
          </label>
        </div>
      </div>

      <div className="pt-actions">
        <button
          type="button"
          onClick={stopper(onTrip)}
          className="pt-icon-btn is-trip"
          title="Simulate trip"
          aria-label="Simulate trip"
        >
          {"↯"}
        </button>
        <button
          type="button"
          onClick={stopper(onRemove)}
          className="pt-icon-btn is-danger"
          title="Remove breaker"
          aria-label="Remove breaker"
        >
          {"✕"}
        </button>
      </div>

      {warnings.length > 0 ? (
        <ul className="pt-warnings">
          {warnings.map((w) => {
            const isErr = w.level === "error";
            const chipCls = `pt-warning-chip ${isErr ? "is-error" : "is-warn"}`;
            return (
              <li key={w.id} className={chipCls}>
                <span className="pt-warning-icon" aria-hidden="true">
                  {isErr ? "!" : "i"}
                </span>
                <span>{w.message}</span>
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function SummaryStat({
  label,
  value,
  unit,
  alert
}: {
  label: string;
  value: string;
  unit?: string;
  alert?: boolean;
}) {
  const cls = alert ? "pt-stat is-alert" : "pt-stat";
  return (
    <div className={cls}>
      <div className="pt-stat-label">{label}</div>
      <div className="pt-stat-value">
        <span>{value}</span>
        {unit ? <span className="pt-stat-unit">{unit}</span> : null}
      </div>
    </div>
  );
}

// ---- main component ---------------------------------------------------------

export function PanelTrainer() {
  const [breakers, setBreakers] = useState<Breaker[]>([]);
  const [selectedId, setSelectedId] = useState<string | null>(null);
  const [hoverSlot, setHoverSlot] = useState<number | null>(null);
  const [tipIndex, setTipIndex] = useState(0);

  const breakerWarnings = useMemo(() => {
    const map: Record<string, Warning[]> = {};
    for (const b of breakers) map[b.id] = warningsFor(b);
    return map;
  }, [breakers]);

  const allWarnings = useMemo(() => {
    let count = 0;
    for (const id in breakerWarnings) count += breakerWarnings[id].length;
    return count;
  }, [breakerWarnings]);

  const totalConnected = useMemo(
    () => breakers.reduce((sum, b) => sum + (b.on && !b.tripped ? b.loadAmps : 0), 0),
    [breakers]
  );
  const totalContinuous = useMemo(() => totalConnected * 1.25, [totalConnected]);

  const slotsUsed = useMemo(() => {
    let count = 0;
    for (const b of breakers) count += b.poles === 2 ? 2 : 1;
    return count;
  }, [breakers]);

  function installFromLibrary(item: LibraryItem) {
    const free = nextFreeSlot(breakers, item.poles);
    if (free === null) return;
    const id = uid("br");
    const next: Breaker = {
      id,
      rating: item.rating,
      poles: item.poles,
      slot: free,
      side: slotToSide(free),
      on: true,
      tripped: false,
      awg: defaultAwgForRating(item.rating),
      loadAmps: 0,
      name: "",
      hasWire: true
    };
    setBreakers((prev) => [...prev, next].sort((a, b) => a.slot - b.slot));
    setSelectedId(id);
  }

  function updateBreaker(id: string, patch: Partial<Breaker>) {
    setBreakers((prev) => prev.map((b) => (b.id === id ? { ...b, ...patch } : b)));
  }

  function removeBreaker(id: string) {
    setBreakers((prev) => prev.filter((b) => b.id !== id));
    if (selectedId === id) setSelectedId(null);
  }

  function tripBreaker(id: string) {
    setBreakers((prev) =>
      prev.map((b) => (b.id === id ? { ...b, tripped: true, on: false } : b))
    );
  }

  // Auto-scroll selected circuit into view
  const selectedRef = useRef<string | null>(null);
  useEffect(() => {
    selectedRef.current = selectedId;
  }, [selectedId]);

  const tipText = useMemo(() => {
    if (breakers.length === 0)
      return "Click a rating in the breaker library to install it in the next slot.";
    return TIPS[tipIndex % TIPS.length];
  }, [breakers.length, tipIndex]);

  const selected = breakers.find((b) => b.id === selectedId) ?? null;

  return (
    <div className="pt-shell">
      <div className="pt-scene">
        <Canvas shadows camera={{ position: [0, 1.1, 1.45], fov: 32 }}>
          <color attach="background" args={["#0e1116"]} />
          <ambientLight intensity={0.45} />
          <directionalLight position={[2, 4, 3]} intensity={1.4} castShadow shadow-mapSize-width={1024} shadow-mapSize-height={1024} />
          <directionalLight position={[-2, 2, 1]} intensity={0.4} color="#fff5e0" />
          <Environment preset="warehouse" />
          <ReflectiveFloor />
          <ContactShadows position={[0, PANEL.centerY - PANEL.height / 2 - 0.005, 0]} opacity={0.45} blur={2.4} scale={3} far={1.5} />
          <PanelScene
            breakers={breakers}
            selectedId={selectedId}
            hoverSlot={hoverSlot}
            onSelectBreaker={setSelectedId}
            onHoverSlot={(slot) => setHoverSlot(slot)}
            onUnhoverSlot={(slot) => setHoverSlot((prev) => (prev === slot ? null : prev))}
          />
          <OrbitControls enablePan={false} target={[0, 1, 0]} minDistance={1.1} maxDistance={4} />
        </Canvas>
        <div className="pt-scene-overlay">200A Split-Phase Load Center</div>
      </div>

      <aside className="pt-hud">
        <CardBox title="Breaker Library" subtitle="Click to install in next free slot.">
          <LibraryPanel onPick={installFromLibrary} />
        </CardBox>

        <CardBox
          title="Installed Circuits"
          badge={`${slotsUsed} of ${TOTAL_SLOTS} slots used`}
        >
          {breakers.length === 0 ? (
            <div className="pt-empty">
              <span className="pt-empty-icon" aria-hidden="true">
                {"ⓘ"}
              </span>
              <span>Install a breaker from the library to begin.</span>
            </div>
          ) : (
            <div className="pt-circuit-list">
              {breakers.map((b) => (
                <CircuitRow
                  key={b.id}
                  breaker={b}
                  selected={selectedId === b.id}
                  warnings={breakerWarnings[b.id] ?? []}
                  onSelect={() => setSelectedId(b.id)}
                  onUpdate={(patch) => updateBreaker(b.id, patch)}
                  onRemove={() => removeBreaker(b.id)}
                  onTrip={() => tripBreaker(b.id)}
                />
              ))}
            </div>
          )}
        </CardBox>

        <CardBox title="Panel Summary">
          <div className="pt-summary-grid">
            <SummaryStat label="Connected" value={totalConnected.toFixed(1)} unit="A" />
            <SummaryStat
              label={"Continuous (×1.25)"}
              value={totalContinuous.toFixed(1)}
              unit="A"
            />
            <SummaryStat label="Breakers" value={String(breakers.length)} />
            <SummaryStat
              label="Warnings"
              value={String(allWarnings)}
              alert={allWarnings > 0}
            />
          </div>
          {selected ? (
            <div className="pt-selected-note">
              Selected:{" "}
              <strong>
                slot {selected.poles === 2 ? `${selected.slot}/${selected.slot + 2}` : selected.slot}
              </strong>{" "}
              {selected.rating}A {selected.poles === 2 ? "2P" : "1P"}
              {selected.name ? ` — ${selected.name}` : ""}
            </div>
          ) : null}
        </CardBox>

        <CardBox title="Teaching Tip" className="pt-tip-card">
          <span className="pt-tip-bar" aria-hidden="true" />
          <div className="pt-tip-body">
            <p className="pt-tip-text">{tipText}</p>
            {breakers.length > 0 ? (
              <div className="pt-tip-actions">
                <button
                  type="button"
                  onClick={() => setTipIndex((i) => i + 1)}
                  className="pt-ghost-btn"
                >
                  Next tip {"↻"}
                </button>
              </div>
            ) : null}
          </div>
        </CardBox>
      </aside>
    </div>
  );
}
