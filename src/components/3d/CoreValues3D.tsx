import { Line } from "@react-three/drei";
import { Vector3 } from "three";
import { MotionGroup, SceneCanvas, SceneLights } from "./scene-shared";

const tradeNodes = [
  new Vector3(-2.2, 1.15, 0),
  new Vector3(2.2, 0.95, 0),
  new Vector3(0, -1.55, 0),
];

function CoffeeBeans({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[0.1, 0.2, -0.25]}>
      <mesh scale={[0.32, 0.2, 0.16]} rotation={[0, 0, -0.5]}>
        <sphereGeometry args={[1, 24, 18]} />
        <meshPhysicalMaterial color="#56301d" roughness={0.3} metalness={0.08} clearcoat={0.45} />
      </mesh>
      <mesh scale={[0.31, 0.19, 0.16]} position={[0.22, -0.13, 0.08]} rotation={[0, 0, 0.6]}>
        <sphereGeometry args={[1, 24, 18]} />
        <meshPhysicalMaterial color="#744328" roughness={0.32} metalness={0.05} clearcoat={0.35} />
      </mesh>
      <mesh position={[-0.04, 0.02, 0.15]} rotation={[0, 0, -0.5]}>
        <torusGeometry args={[0.12, 0.012, 6, 24, Math.PI]} />
        <meshStandardMaterial color="#bd8c55" roughness={0.48} />
      </mesh>
    </group>
  );
}

function MedicalMark({ position }: { position: [number, number, number] }) {
  return (
    <group position={position} rotation={[0.15, -0.3, 0.1]}>
      <mesh>
        <boxGeometry args={[0.48, 0.58, 0.2]} />
        <meshPhysicalMaterial color="#f2eee4" roughness={0.24} metalness={0.08} clearcoat={0.5} />
      </mesh>
      <mesh position={[0, 0, 0.13]}>
        <boxGeometry args={[0.1, 0.34, 0.025]} />
        <meshStandardMaterial color="#a8793f" metalness={0.45} roughness={0.32} />
      </mesh>
      <mesh position={[0, 0, 0.13]}>
        <boxGeometry args={[0.3, 0.1, 0.025]} />
        <meshStandardMaterial color="#a8793f" metalness={0.45} roughness={0.32} />
      </mesh>
    </group>
  );
}

function CoreScene({ motionEnabled }: { motionEnabled: boolean }) {
  return (
    <>
      <SceneLights />
      {tradeNodes.map((node) => (
        <Line
          key={`${node.x}-${node.y}`}
          points={[node, new Vector3(0, 0, 0)]}
          color="#bd914d"
          lineWidth={1}
          transparent
          opacity={0.5}
        />
      ))}
      <MotionGroup enabled={motionEnabled} speed={0.06} float={0.035}>
        <mesh position={[0, 0, 0]}>
          <icosahedronGeometry args={[0.62, 1]} />
          <meshPhysicalMaterial
            color="#8e6135"
            roughness={0.22}
            metalness={0.38}
            clearcoat={0.8}
            clearcoatRoughness={0.18}
          />
        </mesh>
        <mesh rotation={[0.8, 0.2, 0.35]}>
          <torusGeometry args={[0.92, 0.018, 8, 96]} />
          <meshStandardMaterial color="#c69c5a" metalness={0.68} roughness={0.28} />
        </mesh>
        <mesh rotation={[-0.35, 0.6, -0.5]}>
          <torusGeometry args={[1.12, 0.009, 6, 96]} />
          <meshStandardMaterial color="#d4b477" metalness={0.55} roughness={0.35} />
        </mesh>
        <CoffeeBeans position={[-2.2, 1.15, 0]} />
        <mesh position={[2.2, 0.95, 0]} rotation={[0.3, 0.15, 0.2]}>
          <dodecahedronGeometry args={[0.4, 0]} />
          <meshPhysicalMaterial
            color="#e9e3d6"
            roughness={0.18}
            metalness={0.04}
            transmission={0.28}
            thickness={0.7}
          />
        </mesh>
        <MedicalMark position={[0, -1.55, 0]} />
      </MotionGroup>
    </>
  );
}

export default function CoreValues3D({ className = "" }: { className?: string }) {
  return (
    <SceneCanvas className={className}>
      {(motionEnabled) => <CoreScene motionEnabled={motionEnabled} />}
    </SceneCanvas>
  );
}
