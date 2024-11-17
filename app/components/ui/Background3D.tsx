'use client'

import { Canvas, useFrame } from '@react-three/fiber'
import { Sphere, OrbitControls } from '@react-three/drei'
import { useRef } from 'react'
import * as THREE from 'three'

const FloatingParticle = ({ position }: { position: [number, number, number] }) => {
  const mesh = useRef<THREE.Mesh>(null)
  useFrame((state) => {
    if (mesh.current) {
      mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2
    }
  })
  return (
    <Sphere ref={mesh} args={[0.1, 16, 16]} position={position}>
      <meshStandardMaterial color="#4B0082" emissive="#4B0082" emissiveIntensity={0.5} />
    </Sphere>
  )
}

export default function Background3D() {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      {Array.from({ length: 50 }).map((_, i) => (
        <FloatingParticle key={i} position={[
          Math.random() * 20 - 10,
          Math.random() * 20 - 10,
          Math.random() * 20 - 15
        ]} />
      ))}
    </Canvas>
  )
}