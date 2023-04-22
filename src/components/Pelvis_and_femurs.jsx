import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Pelvis(props) {
  const { nodes, materials } = useGLTF('/pelvis_and_femurs.glb')
  return (
    <group {...props} dispose={null}>
      <group position={[0, 920.38, -608.47]} rotation={[-Math.PI, 0, 0]}>
        <mesh geometry={nodes.Object_2.geometry} material={materials.mtl1} />
        <mesh geometry={nodes.Object_3.geometry} material={materials.mtl1} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.mtl1} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.mtl156635} />
        <mesh geometry={nodes.Object_6.geometry} material={materials.mtl156635} />
        <mesh geometry={nodes.Object_7.geometry} material={materials.mtl228823} />
      </group>
    </group>
  )
}

useGLTF.preload('/pelvis_and_femurs.glb')
