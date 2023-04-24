import * as THREE from 'three'
import { useGLTF } from '@react-three/drei'
import { useRef } from 'react'
import { Geometry, Base, Addition, Subtraction, Intersection, Difference } from '@react-three/csg'
import useSceneStore from '../../useSceneStore';

const boxGeometry = new THREE.BoxGeometry()

function CrossGeometry() {
    return (
        <Geometry>
            <Base geometry={boxGeometry} scale={[2, 0.5, 2.5]} />
            <Addition geometry={boxGeometry} scale={[0.5, 2, 2.5]} />
        </Geometry>
    )
}

function ManHandMain() {
    const csg = useRef()
    const { nodes, materials } = useGLTF('/man_hand_low_poly_model.glb')
    const showOperations = useSceneStore(state => state.showOperations)
    const handObjectX = useSceneStore(state => state.handObjectX)
    const handObjectY = useSceneStore(state => state.handObjectY)
    const handObjectZ = useSceneStore(state => state.handObjectZ)

    return (
        <group>
            <mesh receiveShadow castShadow>
                <Geometry ref={csg} useGroups showOperations={showOperations}>
                    <Base scale={.1} position={[0, -1.04, 0]} geometry={nodes.Object_2.geometry} material={materials.material_0} rotation={[-Math.PI / 2, 0, 0]}>
                        {/* <meshStandardMaterial color="orange" /> */}
                    </Base>
                    <Subtraction scale={0.5} rotation={[0., 0.1, Math.PI / 4]} position={[handObjectX, handObjectY, handObjectZ]}>
                        <CrossGeometry />
                        <meshStandardMaterial color="skyblue" />
                    </Subtraction>
                    <group scale={0.65} position={[0.45, 0.5, 0.89]}>
                        <Subtraction>
                            <dodecahedronGeometry />
                            <meshStandardMaterial color="grey" />
                        </Subtraction>
                    </group>
                </Geometry>
            </mesh>
        </group>
    )
}
export default ManHandMain;
