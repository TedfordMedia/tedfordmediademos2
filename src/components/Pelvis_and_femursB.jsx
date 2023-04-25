import React, { useState, useEffect, useRef } from 'react'
import { useGLTF, Bvh } from '@react-three/drei'
import useSceneStore from '../useSceneStore';

function MiniMarker(props) {
  return (
    <>
      <sphereGeometry args={[0.005, 32, 32]} />
      <meshStandardMaterial color={props.color} />
    </>
  );
}
export function Pelvis(props) {
  const [shapesOnCanvas, setShapesOnCanvas] = useState([]);
  let markersCount = 0;
  const { nodes, materials } = useGLTF('/pelvis_and_femurs.glb');
  const boneOpacity = useSceneStore((state) => state.boneOpacity);
  const MarkerA = useRef();
  const MarkerB = useRef();

  useEffect(() => {
    materials.mtl1.transparent = true;
    materials.mtl1.opacity = boneOpacity;
    materials.mtl156635.transparent = true;
    materials.mtl156635.opacity = boneOpacity;
    materials.mtl228823.transparent = true;
    materials.mtl228823.opacity = boneOpacity;

    if (boneOpacity === 0) {
      materials.mtl1.visible = false;
      materials.mtl156635.visible = false;
      materials.mtl228823.visible = false;
    } else {
      materials.mtl1.visible = true;
      materials.mtl156635.visible = true;
      materials.mtl228823.visible = true;
    }
  }, [boneOpacity]);

  function didClick(e) {
    e.stopPropagation();

    markersCount += 1;
    if (markersCount > 2) {
      markersCount = 1
    }

    if (markersCount === 1) {
      MarkerA.current.position.set(e.point.x, e.point.y, e.point.z);
      MarkerB.current.visible = false;
      MarkerA.current.visible = true;
    } else {
      MarkerB.current.position.set(e.point.x, e.point.y, e.point.z);
      MarkerB.current.visible = true;
    }
  }

  return (
    <>
      <group {...props} dispose={null}>
        <group position={[0, 920.38, -608.47]} rotation={[-Math.PI, 0, 0]}>
          <Bvh firstHitOnly>
            <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials.mtl228823} onClick={(e) => didClick(e)} />
            <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.mtl1} onClick={(e) => didClick(e)} />
            <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.mtl1} onClick={(e) => didClick(e)} />
            <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.mtl1} onClick={(e) => didClick(e)} />
            <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.mtl156635} onClick={(e) => didClick(e)} />
            <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.mtl156635} onClick={(e) => didClick(e)} />
            <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials.mtl228823} onClick={(e) => didClick(e)} />
          </Bvh>
        </group>
      </group>
      <group name='markers'>
        <mesh position={[-1, 0, 0]} visible={false} ref={MarkerA}><MiniMarker color='blue' /></mesh>
        <mesh position={[-1, 1, 0]} visible={false} ref={MarkerB}><MiniMarker color='red' /></mesh>
      </group >
      {/* <BVHHelper ref={bvhRef} /> */}
      {[...shapesOnCanvas]}
    </>
  )
}

useGLTF.preload('/pelvis_and_femurs.glb')
