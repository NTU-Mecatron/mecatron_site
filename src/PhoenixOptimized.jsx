import React from 'react'
import { useGLTF } from '@react-three/drei'

export function PhoenixOptimized({ modelUrl = '/phoenixsmalloutput.glb', ...props }) {
  const { nodes, materials } = useGLTF(modelUrl)
  const material = Object.values(materials)[0]
  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.textured_meshobj.geometry} material={material} />
    </group>
  )
}

useGLTF.preload('/phoenixsmalloutput.glb')
