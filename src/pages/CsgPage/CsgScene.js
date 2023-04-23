import React, { useRef, useLayoutEffect, useMemo, Suspense } from "react";
import * as THREE from "three";
import { Pelvis } from '../../components/Pelvis_and_femurs'
import useSceneStore from '../../useSceneStore';

function hellosay(e) {
  console.log('hello', e)
}
const FakeSphere = () => {
  return (
    <mesh castShadow receiveShadow>
      <sphereBufferGeometry args={[0.3, 40, 40]} attach="geometry" />
      <meshStandardMaterial attach="material" />
    </mesh>
  );
}
const CsgScene = (props) => {
  const ambientIntensity = useSceneStore((state) => state.ambientIntensity);
  const directionalIntensity = useSceneStore((state) => state.directionalIntensity);

  return (
    <>
      <group name="lighting">
        <ambientLight intensity={ambientIntensity} />
        <directionalLight position={[7, 19, 2]}
          shadow-mapSize-height={1024}
          shadow-mapSize-width={1024}
          shadow-radius={4}
          intensity={directionalIntensity}
          castShadow
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
          shadow-camera-left={-20}
          shadow-camera-right={20} />
      </group>
      <Pelvis clickFunction={hellosay} scale={.004} position={[0, -1.3, 3]} />
      <primitive position={[0, .001, 0]} object={new THREE.AxesHelper(1)} />
      <primitive object={new THREE.GridHelper(1, 20)} />
      <FakeSphere />
    </>
  )
}

export default CsgScene