
import React, { useRef, useLayoutEffect, useMemo, Suspense } from "react";
import * as THREE from "three";

function MyCurvedLine() {
    const ref = useRef()

    const curve = useMemo(() => {
        const radius = 3; // radius of the circle
        const angleStep = (2 * Math.PI) / 8; // angle between adjacent control points

        const points = [new THREE.Vector3(29.76843686945404, 22.51481137238443, 16.10018915737797),
        new THREE.Vector3(- 15.56300074753207, 13.49711742836848, - 14.495472686253045),
        new THREE.Vector3(- 21.40118730204415, 8.4306956436485, - 6.958271935582161),
        new THREE.Vector3(- 17.785318791128, 2.1365363371675, 17.869296953772746)];


        // for (let i = 0; i < 8; i++) {
        //     const angle = i * angleStep;
        //     const x = Math.cos(angle) * radius;
        //     const y = 5;
        //     const z = Math.sin(angle) * radius;
        //     points.push(new THREE.Vector3(x, y, z));
        // }

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


export default MyCurvedLine;