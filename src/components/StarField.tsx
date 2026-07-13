'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import * as THREE from 'three';

// Seeded random for consistent star positions
function seededRandom(seed: number) {
  const x = Math.sin(seed) * 10000;
  return x - Math.floor(x);
}

// Stars component - reduced count for mobile per spec
function Stars({ count = 720 }: { count?: number }) {
  const mesh = useRef<THREE.Points>(null);
  
  const positions = useMemo(() => {
    const positions = new Float32Array(count * 3);
    
    for (let i = 0; i < count; i++) {
      positions[i * 3] = (seededRandom(i * 1) - 0.5) * 100;
      positions[i * 3 + 1] = (seededRandom(i * 2) - 0.5) * 100;
      positions[i * 3 + 2] = (seededRandom(i * 3) - 0.5) * 100;
    }
    
    return positions;
  }, [count]);
  
  const geometry = useMemo(() => {
    const geo = new THREE.BufferGeometry();
    geo.setAttribute('position', new THREE.BufferAttribute(positions, 3));
    return geo;
  }, [positions]);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.0001;
      mesh.current.rotation.x += 0.00005;
    }
  });
  
  return (
    <points ref={mesh} geometry={geometry}>
      <pointsMaterial
        size={0.12}
        sizeAttenuation
        transparent
        opacity={0.5}
        color="#ffffff"
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function Nebula() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.z += 0.0002;
    }
  });
  
  return (
    <mesh ref={mesh} position={[30, -20, -40]}>
      <sphereGeometry args={[20, 32, 32]} />
      <meshBasicMaterial
        color="#1a2744"
        transparent
        opacity={0.1}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

function DistantNebula() {
  const mesh = useRef<THREE.Mesh>(null);
  
  useFrame(() => {
    if (mesh.current) {
      mesh.current.rotation.y += 0.0001;
    }
  });
  
  return (
    <mesh ref={mesh} position={[-40, 30, -60]}>
      <sphereGeometry args={[30, 32, 32]} />
      <meshBasicMaterial
        color="#0a1628"
        transparent
        opacity={0.06}
        side={THREE.BackSide}
      />
    </mesh>
  );
}

export default function StarField() {
  return (
    <div className="fixed inset-0 -z-10 pointer-events-none">
      <Canvas camera={{ position: [0, 0, 50], fov: 75 }}>
        <Stars count={720} />
        <Nebula />
        <DistantNebula />
      </Canvas>
    </div>
  );
}
