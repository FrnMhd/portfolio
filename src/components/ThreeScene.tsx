"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  const count = 300;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 2.0 + Math.random() * 3.5;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.04;
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.02;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#d4af37" // Bright gold
        size={0.025}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.35}
      />
    </Points>
  );
}

function Gyroscope() {
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);
  const ring3Ref = useRef<THREE.Mesh>(null);
  const coreRef = useRef<THREE.Mesh>(null);
  const coreOuterRef = useRef<THREE.Mesh>(null);
  const lightRef = useRef<THREE.PointLight>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const pointerX = state.pointer.x * 0.5;
    const pointerY = state.pointer.y * 0.5;

    // Orbiting light to create dynamic reflections along the rings
    if (lightRef.current) {
      lightRef.current.position.x = Math.sin(time * 2.0) * 3;
      lightRef.current.position.y = Math.cos(time * 1.5) * 3;
      lightRef.current.position.z = Math.sin(time * 1.0) * 2;
    }

    // Outer Ring (Vibrant Rust)
    if (ring1Ref.current) {
      ring1Ref.current.rotation.y = time * 0.15 + pointerX;
      ring1Ref.current.rotation.x = pointerY;
    }

    // Middle Ring (Gold/Brass)
    if (ring2Ref.current) {
      ring2Ref.current.rotation.x = time * 0.22 + pointerY;
      ring2Ref.current.rotation.y = -pointerX;
    }

    // Inner Ring (Vibrant Rust)
    if (ring3Ref.current) {
      ring3Ref.current.rotation.z = time * 0.3 + pointerX;
      ring3Ref.current.rotation.y = time * 0.1 - pointerY;
    }

    // Pulsate the core to give it "life"
    const pulseScale = 1.0 + Math.sin(time * 4.0) * 0.08;
    if (coreRef.current) {
      coreRef.current.scale.set(pulseScale, pulseScale, pulseScale);
      coreRef.current.rotation.y = -time * 0.4;
      coreRef.current.rotation.x = time * 0.25;
    }
    if (coreOuterRef.current) {
      coreOuterRef.current.scale.set(pulseScale * 1.05, pulseScale * 1.05, pulseScale * 1.05);
      coreOuterRef.current.rotation.y = time * 0.3;
      coreOuterRef.current.rotation.z = -time * 0.2;
    }
  });

  return (
    <group scale={1.1}>
      {/* Orbiting light inside the gyroscope */}
      <pointLight ref={lightRef} intensity={5.0} distance={8} color="#ff9030" />

      {/* Outer Ring */}
      <mesh ref={ring1Ref}>
        <torusGeometry args={[1.5, 0.035, 12, 64]} />
        <meshStandardMaterial
          color="#e65c19" // Vibrant Rust
          roughness={0.15}
          metalness={0.9}
          emissive="#381000"
        />
      </mesh>

      {/* Middle Ring */}
      <mesh ref={ring2Ref}>
        <torusGeometry args={[1.2, 0.035, 12, 64]} />
        <meshStandardMaterial
          color="#d4af37" // Vibrant Brass/Gold
          roughness={0.1}
          metalness={0.95}
          emissive="#281a00"
        />
      </mesh>

      {/* Inner Ring */}
      <mesh ref={ring3Ref}>
        <torusGeometry args={[0.9, 0.035, 12, 64]} />
        <meshStandardMaterial
          color="#e65c19" // Vibrant Rust
          roughness={0.15}
          metalness={0.9}
          emissive="#381000"
        />
      </mesh>

      {/* Outer Core Wireframe (Gold) */}
      <mesh ref={coreOuterRef}>
        <dodecahedronGeometry args={[0.35, 0]} />
        <meshStandardMaterial
          color="#d4af37"
          roughness={0.1}
          metalness={0.9}
          wireframe
        />
      </mesh>
      
      {/* Glowing Inner Solid Core (Pulsates) */}
      <mesh ref={coreRef}>
        <dodecahedronGeometry args={[0.3, 0]} />
        <meshStandardMaterial
          color="#ff7c30" // Hot amber orange core
          emissive="#e65c19"
          emissiveIntensity={2.5}
          roughness={0.2}
          metalness={0.9}
        />
      </mesh>
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full min-h-[300px] md:min-h-[450px] relative">
      <Canvas
        camera={{ position: [0, 0, 4.5], fov: 45 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.7} />
        {/* Dynamic bright directional light */}
        <directionalLight position={[5, 8, 5]} intensity={3.0} color="#f4f4f0" />
        <pointLight position={[-6, -6, -4]} intensity={2.0} color="#e65c19" />
        <Gyroscope />
        <ParticleField />
      </Canvas>
    </div>
  );
}
