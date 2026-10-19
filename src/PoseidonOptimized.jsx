import React from 'react'
import { useGLTF } from '@react-three/drei'

export function PoseidonOptimized({
	modelUrl = '/poseidonsmalloutput.glb',
	rotation = [0, -Math.PI / 2, 0],
	...props
}) {
	const { nodes, materials } = useGLTF(modelUrl)
	const material = Object.values(materials)[0]

	return (
		<group {...props} rotation={rotation} dispose={null}>
			<mesh
				geometry={nodes.textured_meshobj.geometry}
				material={material}
			/>
		</group>
	)
}

useGLTF.preload('/poseidonsmalloutput.glb')
