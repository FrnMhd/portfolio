"use client";

import React, { useRef, useMemo } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import * as THREE from "three";
import { useTheme } from "@/context/ThemeContext";

// Global mouse tracker ref (normalized -1 to 1) so it works even through pointer-events-none
const mouseState = { x: 0, y: 0 };

if (typeof window !== "undefined") {
  window.addEventListener(
    "pointermove",
    (e) => {
      mouseState.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouseState.y = -(e.clientY / window.innerHeight) * 2 + 1;
    },
    { passive: true }
  );
}

// ============================================================================
// INTERSTELLAR SPACETIME CURVATURE & TIDAL WAVE MESH
// Inspired by Kip Thorne's gravitational physics & Miller's planetary wave swells
// ============================================================================
function InterstellarSpacetimeLattice({ isDark }: { isDark: boolean }) {
  const meshRef = useRef<THREE.Mesh>(null);

  // Mesh resolution & dimensions: broad cinematic horizon
  const width = 24;
  const height = 18;
  const widthSegments = 88;
  const heightSegments = 66;

  // Single shared BufferGeometry for both solid surface and wireframe grid
  const geom = useMemo(
    () => new THREE.PlaneGeometry(width, height, widthSegments, heightSegments),
    [width, height, widthSegments, heightSegments]
  );

  // Cache base (flat) positions
  const basePositions = useMemo(() => {
    return new Float32Array(geom.attributes.position.array);
  }, [geom]);

  // Smooth mouse target interpolation (celestial gravitational center)
  const currentMouse = useRef({ x: 0, y: 0 });

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // Lerp mouse coordinates smoothly (gentle celestial inertia)
    currentMouse.current.x = THREE.MathUtils.lerp(
      currentMouse.current.x,
      mouseState.x * 7.5,
      0.05
    );
    currentMouse.current.y = THREE.MathUtils.lerp(
      currentMouse.current.y,
      mouseState.y * 5.5,
      0.05
    );

    const pos = geom.attributes.position;
    const count = pos.count;
    const targetX = currentMouse.current.x;
    const targetY = currentMouse.current.y;

    for (let i = 0; i < count; i++) {
      const uX = basePositions[i * 3];
      const uY = basePositions[i * 3 + 1];

      // 1. Miller's Colossal Tidal Swell (slow, majestic harmonic waves)
      const swell1 = Math.sin(uX * 0.32 + time * 0.42) * 0.52;
      const swell2 = Math.cos(uY * 0.28 + time * 0.34) * 0.44;
      const tidalCross = Math.sin((uX * 0.4 - uY * 0.3) + time * 0.55) * 0.2;

      // 2. Gravitational Singularity / Spacetime Curvature (General Relativity)
      // The cursor curves the spacetime fabric inward like a celestial gravitational well
      const dx = uX - targetX;
      const dy = uY - targetY;
      const dist = Math.sqrt(dx * dx + dy * dy);

      // Smooth gravitational depression (Einstein rubber-sheet spacetime)
      const gravityWell = -1.5 / (1.0 + Math.pow(dist * 0.7, 1.8));

      // Propagating relativistic gravitational waves (LIGO / Thorne ripple)
      const gravWaves =
        Math.sin(dist * 1.5 - time * 1.8) * Math.exp(-dist * 0.32) * 0.35;

      const z = swell1 + swell2 + tidalCross + gravityWell + gravWaves;
      pos.setZ(i, z);
    }

    pos.needsUpdate = true;
    geom.computeVertexNormals();

    if (meshRef.current) {
      // Slow, orbital celestial pitch
      meshRef.current.rotation.z = 0.18 + Math.sin(time * 0.08) * 0.018;
    }
  });

  const wireColor = isDark ? "#c2a678" : "#8c6b38";
  const surfaceColor = isDark ? "#121211" : "#eae7e0";

  return (
    <group
      ref={meshRef}
      position={[2.2, -0.9, -1.6]}
      rotation={[-Math.PI / 2.32, 0, 0.18]}
    >
      {/* 1. Underlying Dark Matter Surface (Catches Gargantua accretion specular glints) */}
      <mesh geometry={geom}>
        <meshStandardMaterial
          color={surfaceColor}
          metalness={isDark ? 0.9 : 0.2}
          roughness={isDark ? 0.36 : 0.55}
          side={THREE.DoubleSide}
        />
      </mesh>

      {/* 2. Overlaid Spacetime Geodesic Grid */}
      <mesh geometry={geom} position={[0, 0, 0.015]}>
        <meshBasicMaterial
          color={wireColor}
          wireframe
          transparent
          opacity={isDark ? 0.42 : 0.28}
        />
      </mesh>
    </group>
  );
}

// ============================================================================
// MAIN COMPONENT: FULL-BLEED INTERSTELLAR SPACETIME TERRAIN
// Pure, crisp, high-precision geometry without boxy particle billboards
// ============================================================================
export default function AmbientWireframeTerrain() {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const fogColor = isDark ? "#121211" : "#f5f4ef";

  return (
    <div className="absolute inset-0 w-full h-full pointer-events-none overflow-hidden z-0 select-none">
      <Canvas
        camera={{ position: [0, 0, 5], fov: 48 }}
        gl={{ antialias: true, alpha: true }}
        dpr={[1, 1.5]}
      >
        {/* Deep Space Fog: Seamlessly dissolves the spacetime lattice into the background */}
        <fog attach="fog" args={[fogColor, 4.2, 14.0]} />

        {/* Ambient Void Light */}
        <ambientLight intensity={isDark ? 0.75 : 1.25} />

        {/* Gargantua Accretion Horizon Light (Warm Golden/Amber Sweep) */}
        <directionalLight
          position={[8, 10, 6]}
          intensity={isDark ? 2.8 : 2.0}
          color={isDark ? "#f9a85d" : "#ffeed8"}
        />

        {/* Deep Cosmic Terracotta Glow */}
        <pointLight
          position={[-7, 5, 3]}
          intensity={isDark ? 2.6 : 1.5}
          color="#c87040"
        />

        {/* Starlight Rim Fill */}
        <pointLight
          position={[6, -4, 4]}
          intensity={isDark ? 1.8 : 1.1}
          color="#c2a678"
        />

        {/* Spacetime Lattice Mesh */}
        <InterstellarSpacetimeLattice isDark={isDark} />
      </Canvas>
    </div>
  );
}
