"use client";

import React, { useRef, useMemo, useEffect } from "react";
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
// INTERSTELLAR SPACETIME CURVATURE & GRAVITATIONAL GENESIS WAVE
// ============================================================================
function InterstellarSpacetimeLattice({ isDark }: { isDark: boolean }) {
  const meshRef = useRef<THREE.Group>(null);
  const wireMatRef = useRef<THREE.MeshBasicMaterial>(null);
  const surfaceMatRef = useRef<THREE.MeshStandardMaterial>(null);

  // Mesh resolution & dimensions
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

  // Mouse target interpolation
  const currentMouse = useRef({ x: 0, y: 0 });

  // Genesis Animation State (Triggered when hello intro opens or on load)
  const genesisStartTime = useRef<number | null>(null);
  const genesisTriggered = useRef<boolean>(false);

  useEffect(() => {
    const startGenesis = () => {
      genesisTriggered.current = true;
      genesisStartTime.current = null; // Will capture next frame's clock time
    };

    const resetGenesis = () => {
      genesisTriggered.current = false;
      genesisStartTime.current = null;
    };

    // Check if intro has already run in this session
    const hasSeen =
      typeof window !== "undefined" &&
      sessionStorage.getItem("hasSeenHelloIntro") === "true";

    if (hasSeen) {
      // Start genesis immediately on mount
      const timer = setTimeout(startGenesis, 200);
      return () => clearTimeout(timer);
    } else {
      // Wait for intro curtain to open
      window.addEventListener("intro-curtain-open", startGenesis);
      window.addEventListener("intro-start", resetGenesis);
      window.addEventListener("replay-hello-intro", resetGenesis);

      // Safety fallback: if intro event wasn't caught, start after 3.6s
      const fallbackTimer = setTimeout(startGenesis, 3600);

      return () => {
        window.removeEventListener("intro-curtain-open", startGenesis);
        window.removeEventListener("intro-start", resetGenesis);
        window.removeEventListener("replay-hello-intro", resetGenesis);
        clearTimeout(fallbackTimer);
      };
    }
  }, []);

  const targetWireOpacity = isDark ? 0.42 : 0.28;

  useFrame((state) => {
    const time = state.clock.getElapsedTime();

    // 1. Manage Genesis Timing
    if (genesisTriggered.current && genesisStartTime.current === null) {
      genesisStartTime.current = time;
    }

    let genesisProgress = 1.0;
    let waveRadius = 999.0;

    if (!genesisTriggered.current) {
      genesisProgress = 0.0;
      waveRadius = 0.0;
    } else if (genesisStartTime.current !== null) {
      const elapsed = time - genesisStartTime.current;
      const duration = 2.4; // 2.4s cinematic genesis wave
      const rawProgress = Math.min(Math.max(elapsed / duration, 0), 1);
      // Decelerating cubic-bezier curve (fast initial wave, gentle majestic settle)
      genesisProgress = 1.0 - Math.pow(1.0 - rawProgress, 3.2);
      waveRadius = genesisProgress * 24.0; // spans across entire 24x18 grid
    }

    // 2. Smoothly track mouse
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

    // Center of the Genesis shockwave: Right-Center of hero
    const originX = 2.2;
    const originY = -0.6;

    for (let i = 0; i < count; i++) {
      const uX = basePositions[i * 3];
      const uY = basePositions[i * 3 + 1];

      if (genesisProgress <= 0.001) {
        // Dormant flat grid before curtain opens
        pos.setZ(i, 0);
        continue;
      }

      // Distance from Genesis shockwave origin
      const dGenX = uX - originX;
      const dGenY = uY - originY;
      const distFromOrigin = Math.sqrt(dGenX * dGenX + dGenY * dGenY);
      const delta = waveRadius - distFromOrigin;

      // If wavefront has not reached this vertex yet, it remains flat
      if (delta < 0 && genesisProgress < 1.0) {
        pos.setZ(i, 0);
        continue;
      }

      // 1. Ambient Miller's Tidal Harmonic Waves
      const swell1 = Math.sin(uX * 0.32 + time * 0.42) * 0.52;
      const swell2 = Math.cos(uY * 0.28 + time * 0.34) * 0.44;
      const tidalCross = Math.sin((uX * 0.4 - uY * 0.3) + time * 0.55) * 0.2;

      // 2. Gravitational Singularity / Spacetime Curvature
      const dx = uX - targetX;
      const dy = uY - targetY;
      const distMouse = Math.sqrt(dx * dx + dy * dy);

      const gravityWell = -1.5 / (1.0 + Math.pow(distMouse * 0.7, 1.8));
      const gravWaves =
        Math.sin(distMouse * 1.5 - time * 1.8) *
        Math.exp(-distMouse * 0.32) *
        0.35;

      const ambientZ = swell1 + swell2 + tidalCross + gravityWell + gravWaves;

      if (genesisProgress < 1.0 && delta < 3.4) {
        // Active Genesis Wavefront Pulse
        const pulse = Math.sin((delta / 3.4) * Math.PI) * 0.95; // energetic crest
        const settleRatio = delta / 3.4;
        pos.setZ(i, ambientZ * settleRatio + pulse);
      } else {
        // Fully materialized into active spacetime
        pos.setZ(i, ambientZ);
      }
    }

    pos.needsUpdate = true;
    geom.computeVertexNormals();

    // 3. Dynamic Opacity & Spatial Tilt during Genesis
    if (wireMatRef.current) {
      wireMatRef.current.opacity =
        Math.min(1.0, genesisProgress * 1.4) * targetWireOpacity;
    }

    if (surfaceMatRef.current) {
      surfaceMatRef.current.opacity = Math.min(1.0, genesisProgress * 1.2);
    }

    if (meshRef.current) {
      // Perspective pitch settles into position as wave unfolds
      const rotX = THREE.MathUtils.lerp(
        -Math.PI / 2.18,
        -Math.PI / 2.32,
        genesisProgress
      );
      const posZ = THREE.MathUtils.lerp(-2.3, -1.6, genesisProgress);

      meshRef.current.rotation.x = rotX;
      meshRef.current.position.z = posZ;
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
      {/* 1. Underlying Dark Matter Surface */}
      <mesh geometry={geom}>
        <meshStandardMaterial
          ref={surfaceMatRef}
          color={surfaceColor}
          metalness={isDark ? 0.9 : 0.2}
          roughness={isDark ? 0.36 : 0.55}
          side={THREE.DoubleSide}
          transparent
          opacity={0}
        />
      </mesh>

      {/* 2. Overlaid Spacetime Geodesic Grid */}
      <mesh geometry={geom} position={[0, 0, 0.015]}>
        <meshBasicMaterial
          ref={wireMatRef}
          color={wireColor}
          wireframe
          transparent
          opacity={0}
        />
      </mesh>
    </group>
  );
}

// ============================================================================
// MAIN COMPONENT: FULL-BLEED INTERSTELLAR SPACETIME TERRAIN
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
        {/* Deep Space Fog */}
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

        {/* Spacetime Lattice Mesh with Gravitational Genesis Wave */}
        <InterstellarSpacetimeLattice isDark={isDark} />
      </Canvas>
    </div>
  );
}
