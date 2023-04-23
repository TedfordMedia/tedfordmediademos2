import * as THREE from 'three'
import React, { useRef, useEffect } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'
import CsgHouse from "./CsgHouse";
import LogoDiv from '../../components/LogoDiv';
import useSceneStore from '../../useSceneStore';
import PelvisHtml from "../../components/PelvisHtml";

function CsgPage(props) {

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

                <CsgHouse />

                <OrbitControls
                    target={[0, 0, 0]}
                    enableDamping />
            </Canvas>
            <LogoDiv />
        </>
    )
};

export default CsgPage;
