'use client';

import { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Environment, Sparkles } from '@react-three/drei';
import * as THREE from 'three';

function AbstractObject() {
  const meshRef = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.2) * 0.2;
      meshRef.current.rotation.y += 0.002;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.5} floatIntensity={1}>
      <mesh ref={meshRef} scale={1.5}>
        <icosahedronGeometry args={[1, 0]} />
        <MeshDistortMaterial 
          color="#111111" 
          roughness={0.1} 
          metalness={0.8}
          distort={0.4} 
          speed={2} 
          envMapIntensity={1}
        />
      </mesh>
    </Float>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 -z-10 bg-black opacity-80 mix-blend-screen pointer-events-none">
      <Canvas camera={{ position: [0, 0, 5], fov: 45 }} gl={{ antialias: false }}>
        <color attach="background" args={['#000000']} />
        
        <ambientLight intensity={0.5} />
        <directionalLight position={[10, 10, 10]} intensity={1} color="#ffffff" />
        <spotLight position={[-10, -10, -10]} intensity={0.5} color="#4444ff" />
        
        <AbstractObject />
        <Sparkles count={100} scale={10} size={1} speed={0.4} opacity={0.1} color="#ffffff" />
        
        <Environment preset="city" />
      </Canvas>
    </div>
  );
}
