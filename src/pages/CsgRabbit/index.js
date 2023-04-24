import LogoDiv from '../../components/LogoDiv';
import useSceneStore from '../../useSceneStore';
import * as THREE from 'three'
import { Canvas } from '@react-three/fiber'
import { useGLTF, AccumulativeShadows, RandomizedLight, OrbitControls, PivotControls, MeshTransmissionMaterial, Center, Environment } from '@react-three/drei'
import { useRef, useEffect } from 'react'
import { Geometry, Base, Addition, Subtraction } from '@react-three/csg'

const boxGeometry = new THREE.BoxGeometry()
function CrossGeometry() {
    return (
        <Geometry>
            <Base geometry={boxGeometry} scale={[2, 0.5, 0.5]} />
            <Addition geometry={boxGeometry} scale={[0.5, 2, 0.5]} />
        </Geometry>
    )
}
function Bunny() {
    const csg = useRef()
    const { nodes } = useGLTF('/bunny-transformed.glb')
    return (
        <mesh receiveShadow castShadow>

            <Geometry ref={csg} useGroups>
                <Base scale={1.5} position={[0, -1.04, 0]} geometry={nodes.bunny.geometry}>
                    <meshStandardMaterial color="blue" />
                </Base>
                <Subtraction position={[-1, 1, 1]}>
                    <sphereGeometry args={[0.4, 32, 32]} />
                    <meshStandardMaterial color="orange" />
                </Subtraction>
                <Addition scale={0.5} rotation={[0.5, 0.2, Math.PI / 4]} position={[-0.75, 0.5, -0.25]}>
                    <CrossGeometry />
                    <meshStandardMaterial color="skyblue" />
                </Addition>
                <group scale={0.65} position={[0.5, 0.5, 0.9]}>
                    <Subtraction>
                        <dodecahedronGeometry />
                        <meshStandardMaterial color="hotpink" />
                    </Subtraction>
                </group>
            </Geometry><meshStandardMaterial color="blue" />
        </mesh>
    )
}


function CsgRabbitPage(props) {

    const controls = useRef();

    useEffect(() => {
        if (controls) {
            useSceneStore.setState({ controls: controls })
        }
    }, [controls])

    return (
        <>
            <Canvas shadows camera={{ position: [4, 0.5, 10], fov: 25 }}>
                <color attach="background" args={['#202025']} />
                <ambientLight intensity={0.5} />
                <directionalLight position={[5, 8, -4]} shadow-mapSize={1024} castShadow />
                <group position={[0.5, -1.25, 0]}>
                    <Center top>
                        <Bunny />
                    </Center>
                    <AccumulativeShadows temporal frames={100} alphaTest={0.85} opacity={0.85} scale={12}>
                        <RandomizedLight amount={8} radius={5} ambient={0.5} intensity={1} position={[5, 5, -5]} bias={0.001} />
                    </AccumulativeShadows>
                </group>
                <Environment preset="city" />
                <OrbitControls makeDefault />
            </Canvas>
            <LogoDiv />
        </>
    )
};

export default CsgRabbitPage;
