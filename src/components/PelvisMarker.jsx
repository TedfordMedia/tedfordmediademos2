import React, { useEffect, useRef, useState } from 'react'
import { TransformControls } from '@react-three/drei'
import useSceneStore from '../useSceneStore';
import { Mesh, SphereGeometry, MeshStandardMaterial } from 'three';

export const PelvisMarker = (props) => {
    const transform = useRef()
    const marker = useRef()
    const orbit = useSceneStore((state) => state.controls);
    const [showTransforms, setShowTransforms] = useState(false);

    const transformType = useSceneStore((state) => state.transformType);
    const modelMarkers = useSceneStore((state) => state.modelMarkers);
    const selectedMarker = useSceneStore((state) => state.selectedMarker);

    useEffect(() => {
        if (selectedMarker == props.thisNum) {
            setShowTransforms(true);
        } else {
            setShowTransforms(false);
        }
    }), [selectedMarker, modelMarkers, showTransforms];

    useEffect(() => {
        if (transform.current) {
            const controls = transform.current
            controls.object = marker.current
            controls.setMode(transformType)
            const callback = event => (orbit.current.enabled = !event.value)
            controls.addEventListener("dragging-changed", callback)
            transform.visible = false;
            return () => controls.removeEventListener("dragging-changed", callback)
        }
    }, [showTransforms, transform, marker, transformType, orbit]);

    useEffect(() => {
        const newMarkers = [...modelMarkers, marker];
        useSceneStore.setState({ modelMarkers: newMarkers })
    }, [])

    function oneClick(e) {
        useSceneStore.setState({ selectedMarker: props.thisNum })
        transform.current.object = marker.current;
        e.stopPropagation();
        setShowTransforms(true)
        useSceneStore.setState({ bottomPanelOpen: true })
    }

    return (
        <TransformControls
            name={props.shapesOnCanvas.length}
            showX={showTransforms ? true : false}
            showY={showTransforms ? true : false}
            showZ={showTransforms ? true : false}
            ref={transform}>
            <mesh ref={marker} {...props} onClick={(e) => oneClick(e)}>
                <sphereGeometry args={[0.5, 32, 32]} />
                <meshStandardMaterial color={"cyan"} />
            </mesh>
        </TransformControls>
    );
};
