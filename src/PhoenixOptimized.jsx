import React from 'react'
import { useGLTF } from '@react-three/drei'

export function PhoenixOptimized({ modelUrl = '/phoenixsmalloutput.glb', ...props }) {
  const { scene } = useGLTF(modelUrl)
  return (
    <group {...props} dispose={null}>
      <primitive object={scene} scale={2.5} />
    </group>
  )
}

useGLTF.preload('/phoenixsmalloutput.glb')
