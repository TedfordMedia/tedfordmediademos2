import React, { useState, useEffect } from 'react'
import { useGLTF } from '@react-three/drei'
import useSceneStore from '../useSceneStore';
import { PelvisMarker } from './PelvisMarker';

export function Pelvis(props) {
  const [shapesOnCanvas, setShapesOnCanvas] = useState([]);
  const { nodes, materials } = useGLTF('/pelvis_and_femurs.glb')
  const boneOpacity = useSceneStore((state) => state.boneOpacity);

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

  function twoClick(e) {
    e.stopPropagation();
    addObjectToClickPoint(e);
    useSceneStore.setState({ bottomPanelOpen: false })
  }
  function addObjectToClickPoint(e) {
    console.log('addObjectToClickPoint 1')
    e.stopPropagation();
    useSceneStore.setState({ selectedMarker: null });
    const newShapes = [...shapesOnCanvas, <PelvisMarker shapesOnCanvas={shapesOnCanvas} thisNum={shapesOnCanvas.length} scale={.03} key={e.point.x} position={[e.point.x, e.point.y, e.point.z]} />];
    setShapesOnCanvas(newShapes);
    console.log('addObjectToClickPoint 2')
  }

  return (
    <>
      <group {...props} dispose={null}>
        <group position={[0, 920.38, -608.47]} rotation={[-Math.PI, 0, 0]}>
          <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.mtl1} onDoubleClick={(e) => twoClick(e)} />
          <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.mtl1} onDoubleClick={(e) => twoClick(e)} />
          <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.mtl1} onDoubleClick={(e) => twoClick(e)} />
          <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.mtl156635} onDoubleClick={(e) => twoClick(e)} />
          <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.mtl156635} onDoubleClick={(e) => twoClick(e)} />
          <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials.mtl228823} onDoubleClick={(e) => twoClick(e)} />
        </group>

      </group>
      {[...shapesOnCanvas]}
    </>
  )
}

useGLTF.preload('/pelvis_and_femurs.glb')
