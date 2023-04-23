import React, { useRef, useLayoutEffect, useMemo, Suspense } from "react";
import * as THREE from "three";
import { useGLTF, AccumulativeShadows, RandomizedLight, OrbitControls, PivotControls, MeshTransmissionMaterial, Center, Environment } from '@react-three/drei'
import { Pelvis } from '../../components/Pelvis_and_femurs'
import useSceneStore from '../../useSceneStore';
import { Geometry, Base, Subtraction, Addition } from '@react-three/csg'


const box = new THREE.BoxGeometry()
const cyl = new THREE.CylinderGeometry(1, 1, 2, 20)
const tri = new THREE.CylinderGeometry(1, 1, 2, 3)


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


const Chimney = (props) => (
  <Addition name="chimney" {...props}>
    <Geometry>
      <Base name="base" geometry={box} scale={[1, 2, 1]} />
      <Subtraction name="hole" geometry={box} scale={[0.7, 2, 0.7]} position={[0, 0.5, 0]} />
    </Geometry>
  </Addition>
)

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
      {/* <Chimney position={[-20, 0, 0]} /> */}
    </>
  )
}

export default CsgScene