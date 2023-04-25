import react, { Suspense } from "react";
import * as THREE from "three";
import { Pelvis } from '../../components/Pelvis_and_femursB'
import useSceneStore from '../../useSceneStore';
import { Html } from '@react-three/drei';

const PelvisScene = (props) => {
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

      <Suspense fallback={<Html><h1 style={{ color: 'white' }}>Loading...</h1></Html>}>
        <Pelvis scale={.004} position={[0, -1.3, 3]} />
      </Suspense>
      <primitive position={[0, .001, 0]} object={new THREE.AxesHelper(1)} />
      <primitive object={new THREE.GridHelper(1, 20)} />
    </>
  )
}

export default PelvisScene