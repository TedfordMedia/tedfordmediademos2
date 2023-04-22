import React, { Suspense } from "react";
import { Html } from '@react-three/drei';
import useSceneStore from '../../useSceneStore';

const MeasureScene = () => {
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
    </>
  );
};

export default MeasureScene;

