import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { useEffect, useRef, useState, type ReactNode } from "react";
import type { Group } from "three";

export function SceneCanvas({
  children,
  className = "",
}: {
  children: (motionEnabled: boolean) => ReactNode;
  className?: string;
}) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isNearViewport, setIsNearViewport] = useState(false);
  const [isActive, setIsActive] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    const updateMotionPreference = () => setReducedMotion(motionQuery.matches);
    updateMotionPreference();
    motionQuery.addEventListener("change", updateMotionPreference);

    const container = containerRef.current;
    if (!container) return () => motionQuery.removeEventListener("change", updateMotionPreference);

    if (!("IntersectionObserver" in window)) {
      setIsNearViewport(true);
      setIsActive(true);
      return () => motionQuery.removeEventListener("change", updateMotionPreference);
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsNearViewport(true);
        }
        setIsActive(entry.isIntersecting);
      },
      { rootMargin: "180px" },
    );
    observer.observe(container);

    return () => {
      observer.disconnect();
      motionQuery.removeEventListener("change", updateMotionPreference);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className={`relative isolate overflow-hidden ${className}`.trim()}
      aria-hidden="true"
    >
      {isNearViewport && (
        <Canvas
          camera={{ position: [0, 0, 7], fov: 38 }}
          dpr={[1, 1.5]}
          frameloop={isActive && !reducedMotion ? "always" : "demand"}
          gl={{ antialias: true, alpha: true, powerPreference: "low-power" }}
          onCreated={({ gl }) => {
            gl.setClearColor(0x000000, 0);
          }}
        >
          {children(!reducedMotion)}
        </Canvas>
      )}
    </div>
  );
}

export function MotionGroup({
  children,
  enabled,
  speed = 0.12,
  float = 0.04,
}: {
  children: ReactNode;
  enabled: boolean;
  speed?: number;
  float?: number;
}) {
  const groupRef = useRef<Group>(null);
  const pointer = useThree((state) => state.pointer);

  useFrame((state, delta) => {
    const group = groupRef.current;
    if (!group || !enabled) return;
    const elapsed = state.clock.elapsedTime;
    group.rotation.y +=
      (pointer.x * 0.08 + speed * delta - group.rotation.y) * Math.min(delta * 1.4, 1);
    group.rotation.x += (pointer.y * -0.04 - group.rotation.x) * Math.min(delta, 1);
    group.position.y = Math.sin(elapsed * 0.5) * float;
  });

  return <group ref={groupRef}>{children}</group>;
}

export function SceneLights() {
  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[4, 5, 6]} intensity={2.2} color="#fff1d4" />
      <pointLight position={[-4, -2, 3]} intensity={14} distance={12} color="#c89548" />
    </>
  );
}
