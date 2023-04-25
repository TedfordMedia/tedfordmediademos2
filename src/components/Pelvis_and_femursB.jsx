import React, { useEffect, useRef } from 'react'
import { useGLTF, Bvh, Box, Html } from '@react-three/drei'
import useSceneStore from '../useSceneStore';
import * as THREE from "three";

function MiniMarker(props) {
  return (
    <>
      <sphereGeometry args={[0.005, 32, 32]} />
      <meshStandardMaterial color={props.color} />
    </>
  );
}
export function Pelvis(props) {
  let markersCount = 0;
  useSceneStore.setState({ markerCount: 0 });
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
    useSceneStore.setState({ markerCount: markersCount });
  }
  function Line({ start, end }) {
    const markerCount = useSceneStore((state) => state.markerCount);
    const distance = useSceneStore((state) => state.distance);
    const ref = useRef()

    useEffect(() => {
      if (markerCount === 2) {
        ref.current.geometry.setFromPoints([MarkerA.current.position, MarkerB.current.position])
        useSceneStore.setState({ distance: MarkerA.current.position.distanceTo(MarkerB.current.position) });
      } else {
        ref.current.geometry.setFromPoints([[0, 0, 0], [0, 0, 0]].map((point) => new THREE.Vector3(...point)))
      }

    }, [MarkerA, MarkerB, markerCount])
    return (
      <>
        <line ref={ref}>
          <bufferGeometry />
          <lineBasicMaterial color="hotpink" />
        </line>
        {markerCount === 2 && (
          <Html><br /><br /><br /><h2 style={{ color: 'white', position: 'absolute', fontSize: '10px' }}>{(distance.toFixed(4)) * 1}&nbsp;m</h2></Html>
        )}
      </>
    )
  }
  return (
    <>
      <group {...props} dispose={null}>
        <group scale={.5} position={[0, 670.38, -670.47]} rotation={[-Math.PI, 0, 0]}>
          <mesh>
            <Bvh firstHitOnly>
              <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials.mtl228823} onClick={(e) => didClick(e)} />
              <mesh castShadow receiveShadow geometry={nodes.Object_2.geometry} material={materials.mtl1} onClick={(e) => didClick(e)} />
              <mesh castShadow receiveShadow geometry={nodes.Object_3.geometry} material={materials.mtl1} onClick={(e) => didClick(e)} />
              <mesh castShadow receiveShadow geometry={nodes.Object_4.geometry} material={materials.mtl1} onClick={(e) => didClick(e)} />
              <mesh castShadow receiveShadow geometry={nodes.Object_5.geometry} material={materials.mtl156635} onClick={(e) => didClick(e)} />
              <mesh castShadow receiveShadow geometry={nodes.Object_6.geometry} material={materials.mtl156635} onClick={(e) => didClick(e)} />
              <mesh castShadow receiveShadow geometry={nodes.Object_7.geometry} material={materials.mtl228823} onClick={(e) => didClick(e)} />
            </Bvh>
          </mesh>
        </group>
      </group>
      {/* <Box /> */}
      <group name='markers'>
        <mesh position={[0, 0, 0]} visible={false} ref={MarkerA}><MiniMarker color='blue' /></mesh>
        <mesh position={[0, 0, 0]} visible={false} ref={MarkerB}><MiniMarker color='red' /></mesh>
        <Line start={[0, 0, 0]} end={[10, 0, 0]} />
      </group >
    </>
  )
}

useGLTF.preload('/pelvis_and_femurs.glb')
