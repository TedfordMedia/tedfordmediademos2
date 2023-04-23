import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import MyCurvedLine from './MyCurvedLine'
import MeasureScene from "./MeasureScene";
import LogoDiv from '../../components/LogoDiv';
import useSceneStore from '../../useSceneStore';

function MeasurePage(props) {

    const controls = useRef();

    useEffect(() => {
        if (controls) {
            useSceneStore.setState({ controls: controls })
        }
    }, [controls])

    return (
        <>
            <Canvas
                camera={{ position: [2, 1, 3], fov: 22, far: 1000, near: 0.1, target: [0, 0, 0] }}
                onCreated={({ gl, camera, scene }) => {
                    scene.background = new THREE.Color(0x000000);
                    gl.shadowMap.autoUpdate = true;
                    gl.toneMapping = THREE.ACESFilmicToneMapping;
                }}>

                <MeasureScene />
                <MyCurvedLine />

                <OrbitControls
                    target={[0, 0, 0]}
                    enableDamping />
            </Canvas>
            <LogoDiv />
        </>
    )
};

export default MeasurePage;
