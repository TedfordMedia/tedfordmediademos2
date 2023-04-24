import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { useGLTF, AccumulativeShadows, RandomizedLight, OrbitControls, PivotControls, MeshTransmissionMaterial, Center, Environment } from '@react-three/drei'
import { useRef } from 'react'
import { Geometry, Base, Addition, Subtraction } from '@react-three/csg'

export default function CsgHandPage() {
    return (
        <Canvas shadows camera={{ position: [4, 0.5, 10], fov: 25 }}>
            <color attach="background" args={['#202025']} />
            <ambientLight intensity={0.5} />
            <directionalLight position={[5, 8, -4]} shadow-mapSize={1024} castShadow />
            <group position={[0.5, -.25, 0]} rotation={[0, 0, -0.2]}>
                <Center>
                    {/* <Bunny /> */}
                    <Bunny2 />
                </Center>
            </group>
            <Environment preset="city" />
            <OrbitControls makeDefault />
        </Canvas>
    )
}
function Model(props) {
    const { nodes, materials } = useGLTF('/tedmedia3dlogo.glb')
    return (
        <group {...props} dispose={null}>
            <mesh geometry={nodes.Curve027.geometry} material={materials['SVGMat.028']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve026.geometry} material={materials['SVGMat.027']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve025.geometry} material={materials['SVGMat.026']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve024.geometry} material={materials['SVGMat.025']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve023.geometry} material={materials['SVGMat.024']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve022.geometry} material={materials['SVGMat.023']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve021.geometry} material={materials['SVGMat.022']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve020.geometry} material={materials['SVGMat.021']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve019.geometry} material={materials['SVGMat.020']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve018.geometry} material={materials['SVGMat.019']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve017.geometry} material={materials['SVGMat.018']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve016.geometry} material={materials['SVGMat.017']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve015.geometry} material={materials['SVGMat.016']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve014.geometry} material={materials['SVGMat.015']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve013.geometry} material={materials['SVGMat.014']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve012.geometry} material={materials['SVGMat.013']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve011.geometry} material={materials['SVGMat.012']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve010.geometry} material={materials['SVGMat.011']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve009.geometry} material={materials['SVGMat.010']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve008.geometry} material={materials['SVGMat.009']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve007.geometry} material={materials['SVGMat.008']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve006.geometry} material={materials['SVGMat.007']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve005.geometry} material={materials['SVGMat.006']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve004.geometry} material={materials['SVGMat.005']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve003.geometry} material={materials['SVGMat.004']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve001.geometry} material={materials['SVGMat.002']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve.geometry} material={materials['SVGMat.001']} position={[-0.11, 0, -0.07]} scale={1.42} />
            <mesh geometry={nodes.Curve002.geometry} material={materials['SVGMat.003']} position={[-0.11, 0, -0.07]} scale={1.42} />
        </group>
    )
}

function Bunny2() {
    const csg = useRef()
    const { nodes, materials } = useGLTF('/man_hand_low_poly_model.glb')
    return (
        <group>
            <mesh receiveShadow castShadow>
                <Geometry ref={csg} useGroups>
                    <Base scale={.1} position={[0, -1.04, 0]} geometry={nodes.Object_2.geometry} material={materials.material_0} rotation={[-Math.PI / 2, 0, 0]}>
                        {/* <meshStandardMaterial color="orange" /> */}
                    </Base>
                    <Subtraction position={[-1, 1, 1]}>
                        <sphereGeometry args={[0.4, 32, 32]} />
                        <meshStandardMaterial color="orange" />
                    </Subtraction>
                    <Addition scale={0.5} rotation={[0., 0.1, Math.PI / 4]} position={[0.25, -0.8, -.1]}>
                        <CrossGeometry />
                        <meshStandardMaterial color="skyblue" />
                    </Addition>
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

const boxGeometry = new THREE.BoxGeometry()
function CrossGeometry() {
    return (
        <Geometry>
            <Base geometry={boxGeometry} scale={[2, 0.5, 2.5]} />
            <Addition geometry={boxGeometry} scale={[0.5, 2, 2.5]} />
        </Geometry>
    )
}

// useGLTF.preload('/man_hand_low_poly_model.glb')
// function CsgHandPage(props) {

//     const controls = useRef();

//     useEffect(() => {
//         if (controls) {
//             useSceneStore.setState({ controls: controls })
//         }
//     }, [controls])

//     return (
//         <>
//             <Canvas shadows camera={{ position: [4, 0.5, 10], fov: 25 }}>
//                 <color attach="background" args={['#202025']} />
//                 <ambientLight intensity={0.5} />
//                 <directionalLight position={[5, 8, -4]} shadow-mapSize={1024} castShadow />
//                 <group position={[0.5, -1.25, 0]}>
//                     <Center top>
//                         <Bunny />
//                     </Center>

//                 </group>
//                 <Environment preset="city" />
//                 <OrbitControls makeDefault />
//             </Canvas>
//             <LogoDiv />
//         </>
//     )
// };

