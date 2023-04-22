
import React, { useRef, useLayoutEffect, useMemo, Suspense } from "react";
import { Html } from "@react-three/drei";
import * as THREE from "three";
import { Pelvis } from '../../components/Pelvis_and_femurs'
import MyLine from "./MyCircleLine";

function Line() {
  const ref = useRef()

  const curve = useMemo(() => {
    const radius = 8; // radius of the circle
    const angleStep = (2 * Math.PI) / 8; // angle between adjacent control points

    const points = [];
    for (let i = 0; i < 8; i++) {
      const angle = i * angleStep;
      const x = Math.cos(angle) * radius;
      const y = 0;
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
      <line ref={ref} position={[0, .1, 0]}>
        <bufferGeometry />
        <lineBasicMaterial color="hotpink" />
      </line>
    </>
  )
}
function Box(props) {
  const mesh = useRef();

  return (
    <mesh {...props} ref={mesh}>
      <boxGeometry args={[3, 3, 3]} />
      <meshStandardMaterial color={"white"} />
    </mesh>
  );
}
const MeasureScene = (props) => {

  return (
    <>
      <group name="lighting">
        <ambientLight intensity={.4} />
        <directionalLight position={[7, 59, 7]} />
      </group>
      <Line />
      <MyLine />
      <Pelvis scale={.004} position={[0, -1.3, 3]} />
      {/* <Box position={[0, 0, 0]} scale={.06} /> */}
    </>
  )
}

export default MeasureScene