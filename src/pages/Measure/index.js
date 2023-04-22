import React, { useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from '@react-three/drei'
import * as THREE from "three";
import useSceneStore from '../../useSceneStore';
import MeasureScene from './MeasureScene';
import "../../styles.css";
function Box(props) {
    const mesh = useRef();

    return (
        <mesh {...props} ref={mesh}>
            <boxGeometry args={[3, 3, 3]} />
            <meshStandardMaterial color={"orange"} />
        </mesh>
    );
}
export default function Measure() {
    const canvasClicked = useSceneStore((state) => state.canvasClicked);
    const controls = useRef();

    useEffect(() => {
        if (controls) {
            useSceneStore.setState({ controls: controls })
        }
    }, [controls])

    return (
        <>
            <div id="canvasholder">
                <Canvas
                    shadows
                    camera={{ fov: 42, position: [4, 0, 10] }}
                    onPointerMissed={() => canvasClicked()}
                    onCreated={({ gl, camera, scene }) => {
                        gl.useLegacyLights = false;
                        scene.background = new THREE.Color(0x000000);
                        gl.shadowMap.enabled = true;
                        gl.shadowMap.type = THREE.PCFSoftShadowMap;
                        gl.shadowMap.autoUpdate = true;
                        gl.toneMapping = THREE.ACESFilmicToneMapping
                    }}>

                    <OrbitControls ref={controls} />
                    <axesHelper args={[5]} />
                    <Box />
                    <MeasureScene />
                    {/* <MyBrainScene2 />
                    <EyeAnimation /> */}
                </Canvas>
            </div>
        </>
    );
}
