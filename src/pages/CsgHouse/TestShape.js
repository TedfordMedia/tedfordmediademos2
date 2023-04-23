
import React, { useRef, useLayoutEffect, useMemo, Suspense } from "react";
import * as THREE from "three";
import { useGLTF, AccumulativeShadows, RandomizedLight, OrbitControls, PivotControls, MeshTransmissionMaterial, Center, Environment } from '@react-three/drei'
import { Pelvis } from '../../components/Pelvis_and_femurs'
import useSceneStore from '../../useSceneStore';
import { Geometry, Base, Subtraction, Addition } from '@react-three/csg'
import { BoxBlendGeometry, HeartGeometry } from './common'
4

function TestShape(props) {
    console.log('hellloo');

    return (
        <mesh receiveShadow castShadow {...props}>
            <Geometry >
                <Base rotation={[0, Math.PI / 2, 0]} position={[-0.35, 0.4, 0.4]}>
                    <BoxBlendGeometry receiveShadow castShadow depth={0.75} />
                </Base>
                <Subtraction position={[-0.35, 0.4, 0.4]}>
                    <HeartGeometry radius={0.6} depth={3} />
                </Subtraction>
            </Geometry>
            <meshNormalMaterial />
        </mesh>
    )
}
export default TestShape;