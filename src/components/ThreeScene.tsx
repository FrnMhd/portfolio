"use client";

import React, { useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial } from "@react-three/drei";
import * as THREE from "three";

// Generates simple random points for the particle field
function ParticleField() {
  const ref = useRef<THREE.Points>(null);
  
  // Create random points in a sphere shape
  const count = 300;
  const positions = new Float32Array(count * 3);
  for (let i = 0; i < count; i++) {
    const r = 3 + Math.random() * 4;
    const theta = Math.random() * Math.PI * 2;
    const phi = Math.acos(2 * Math.random() - 1);
    
    positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
    positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
    positions[i * 3 + 2] = r * Math.cos(phi);
  }

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = state.clock.getElapsedTime() * 0.05;
      ref.current.rotation.x = state.clock.getElapsedTime() * 0.03;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3}>
      <PointMaterial
        transparent
        color="#c2a678" // Brass color
        size={0.03}
        sizeAttenuation={true}
        depthWrite={false}
        opacity={0.3}
      />
    </Points>
  );
}

function WireframeMesh() {
  const outerRef = useRef<THREE.Mesh>(null);
  const innerRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    const mx = state.pointer.x * 0.5;
    const my = state.pointer.y * 0.5;

    if (outerRef.current) {
      // Slow rotation + mouse influence
      outerRef.current.rotation.y = time * 0.08 + mx;
      outerRef.current.rotation.x = time * 0.05 + my;
    }

    if (innerRef.current) {
      // Opposite rotation + mouse influence
      innerRef.current.rotation.y = -time * 0.12 - mx;
      innerRef.current.rotation.x = -time * 0.08 - my;
    }
  });

  return (
    <group>
      {/* Outer Icosahedron */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshBasicMaterial
          color="#c87040" // Rust color
          wireframe
          transparent
          opacity={0.4}
        />
      </mesh>
      
      {/* Vertex markers for outer structure to make it look like a CAD model */}
      <mesh ref={outerRef}>
        <icosahedronGeometry args={[2, 1]} />
        <meshBasicMaterial
          color="#c2a678" // Brass color
          transparent
          opacity={0.15}
        />
      </mesh>

      {/* Inner Dodecahedron */}
      <mesh ref={innerRef}>
        <dodecahedronGeometry args={[1.1, 0]} />
        <meshBasicMaterial
          color="#c2a678" // Brass color
          wireframe
          transparent
          opacity={0.5}
        />
      </mesh>
    </group>
  );
}

export default function ThreeScene() {
  return (
    <div className="w-full h-full min-h-[400px] md:min-h-[500px] relative">
      <Canvas
        camera={{ position: [0, 0, 5.5], fov: 45 }}
        gl={{ antialias: true }}
      >
        <ambientLight intensity={0.5} />
        <pointLight position={[10, 10, 10]} intensity={1.5} />
        <WireframeMesh />
        <ParticleField />
      </Canvas>
    </div>
  );
}
