import React, { useRef } from 'react'
import { useGLTF, AccumulativeShadows, RandomizedLight, OrbitControls, PivotControls, MeshTransmissionMaterial, Center, Environment } from '@react-three/drei'
import { Geometry, Base, Addition, Subtraction } from '@react-three/csg'

export function Brain(props) {
  const { nodes, materials } = useGLTF('/bunny-transformed.glb')
  const csg = useRef()
  return (
    <group {...props} scale={0.01} >


      <Geometry ref={csg} useGroups>
        <Base scale={0.01} position={[0, -1.04, 0]} geometry={nodes.bunny.geometry} >
          <meshStandardMaterial color="skyblue" />
          {/* <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} scale={0.01} ></mesh> */}
        </Base>

      </Geometry>

      {/* <mesh geometry={nodes.Object_5.geometry} material={materials.material_0} scale={0.01} ></mesh> */}
    </group>
  )
}

useGLTF.preload('/human_brain.glb')
