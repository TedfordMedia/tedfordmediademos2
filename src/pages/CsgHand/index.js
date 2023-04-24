import { useRef, useEffect } from "react";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei'
import ManHandMain from './ManHandMain'
import useSceneStore from '../../useSceneStore';
import HandHtml from '../../components/HandHtml';

export default function CsgHandPage() {

    const canvasClicked = useSceneStore((state) => state.canvasClicked);
    const ambientIntensity = useSceneStore((state) => state.ambientIntensity);
    const autoRotate = useSceneStore((state) => state.autoRotate);

    const controls = useRef();

    useEffect(() => {
        if (controls) {
            useSceneStore.setState({ controls: controls })
        }
    }, [controls])

    return (
        <>
            <Canvas
                shadows
                camera={{ position: [4, 0.5, 10], fov: 25 }}
                onPointerMissed={() => canvasClicked()}
            >
                <color attach="background" args={['#000000']} />
                <ambientLight intensity={ambientIntensity} />
                <directionalLight position={[5, 8, -4]} shadow-mapSize={1024} castShadow />
                <group position={[0.5, -.25, 0]} rotation={[0, 0, -0.2]}>
                    <ManHandMain />
                </group>
                <Environment preset="city" />
                <OrbitControls makeDefault autoRotate={autoRotate} />
            </Canvas>
            <HandHtml />
        </>
    )
}


