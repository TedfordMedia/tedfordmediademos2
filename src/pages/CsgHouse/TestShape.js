
import React from "react";
import { Geometry, Base, Subtraction, Addition } from '@react-three/csg'
import { BoxBlendGeometry, HeartGeometry } from './common'
4

function TestShape(props) {

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