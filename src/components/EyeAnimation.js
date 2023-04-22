import React, { useState, useEffect, useMemo } from "react";
import { useThree } from "@react-three/fiber";
import * as THREE from "three";
import { useSpring, a, config } from "@react-spring/three";
import useSceneStore from '../useSceneStore';

const t = new THREE.Vector3();

const defaultPosition = {
    position: [21, 0, 36],
    target: [0, 0, 0]
};

const preset = {
    value: 0,
    min: 0,
    max: 1,
    step: 1
}
const CameraWrapper = ({ cameraPosition, target }) => {
    const { camera } = useThree();
    camera.position.set(...cameraPosition);
    camera.lookAt(t.set(...target));
    return null;
};

const ControlsWrapper = ({ target }) => {
    const { controls } = useThree();
    if (controls) {
        controls.target.set(...target);
    }
    return null;
};
function AnimateEyeToTarget({ position, target }) {
    const { camera, controls } = useThree();
    const s = useSpring({
        from: defaultPosition,
        config: config.slow,//gentle, wobbly, slow, molasses 
        onStart: () => {
            if (!controls) return;
            controls.enabled = false;
        },
        onRest: () => {
            if (!controls) return;
            controls.enabled = true;
        }
    });
    console.log('camera position: ', camera.position.toArray())
    s.position.start({ from: camera.position.toArray(), to: position });
    s.target.start({
        from: controls ? controls.target.toArray() : [0, 0, 0],
        to: target
    });

    const AnimateControls = useMemo(() => a(ControlsWrapper), []);
    const AnimatedNavigation = useMemo(() => a(CameraWrapper), []);

    return (
        <>
            <AnimatedNavigation cameraPosition={s.position} target={s.target} />
            <AnimateControls target={s.target} />
        </>
    );
}

function EyeAnimation() {
    const [cameraSettings, setCameraSettings] = useState(defaultPosition);
    const camSubject = useSceneStore((state) => state.camSubject);
    useEffect(() => {
        if (preset === 0) {
            setCameraSettings(camSubject);
        }
    }, [preset, camSubject]);

    return (
        <>
            <AnimateEyeToTarget
                position={cameraSettings.position}
                target={cameraSettings.target}
            />
        </>
    );
}
export default EyeAnimation;

