import React, { Suspense } from "react";
import { Html } from '@react-three/drei';
import { Brain } from "../../components/BrainGltf";
import useSceneStore from '../../useSceneStore';

const MyBrainScene = () => {
  const ambientIntensity = useSceneStore((state) => state.ambientIntensity);
  const directionalIntensity = useSceneStore((state) => state.directionalIntensity);

  return (
    <>
      <group name="lighting">
        <ambientLight intensity={ambientIntensity} />
        <directionalLight position={[27, 59, 27]}
          shadow-mapSize-height={2048}
          shadow-mapSize-width={2048}
          shadow-radius={2}
          intensity={directionalIntensity} castShadow
          shadow-camera-top={20}
          shadow-camera-bottom={-20}
          shadow-camera-left={-20}
          shadow-camera-right={20} />
      </group>
      <Suspense fallback={<Html>Loading...</Html>}>
        <Brain decal={false} scale={.1} position={[1, 4, -5]} />
      </Suspense>
    </>
  );
};

export default MyBrainScene;

