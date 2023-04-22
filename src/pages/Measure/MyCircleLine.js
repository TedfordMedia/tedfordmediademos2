
import React, { useRef, useLayoutEffect, useMemo, Suspense } from "react";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { Bird } from "../../components/Phoenix_bird";


function MyLine() {
    const ref = useRef()

    const curve = useMemo(() => {
        const radius = 8; // radius of the circle
        const angleStep = (2 * Math.PI) / 8; // angle between adjacent control points

        const points = [];
        for (let i = 0; i < 8; i++) {
            const angle = i * angleStep;
            const x = Math.cos(angle) * radius;
            const y = 10;
            const z = Math.sin(angle) * radius;
            points.push(new THREE.Vector3(x, y, z));
        }

        return new THREE.CatmullRomCurve3(points, true);
    }, [])

    useLayoutEffect(() => {
        curve.closed = true;
        const points = curve.getPoints(50);
        ref.current.geometry = new THREE.BufferGeometry().setFromPoints(points);
    }, [])

    return (
        <>
            <line ref={ref}>
                <bufferGeometry />
                <lineBasicMaterial color="blue" />
            </line>
            {/* <group position={[0, 1.5, 0]}>
        <Suspense fallback={<Html>loading</Html>}>
          <Bird curve={curve} speed={.05} scale={[.002, .002, .002]} position={[0, 0, .1]} />
        </Suspense>
      </group > */}
        </>
    )
}


export default MyLine;