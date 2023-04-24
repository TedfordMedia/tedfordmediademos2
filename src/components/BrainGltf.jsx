import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useTexture, Decal } from '@react-three/drei'
import useSceneStore from '../useSceneStore';
import { MeshStandardMaterial } from 'three';
import { Color, Matrix4 } from 'three';
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";
import { BrainMarker } from './BrainMarker';
import { Geometry, Base, Subtraction, Addition } from '@react-three/csg'


export function Brain(props) {
  const { nodes, materials } = useGLTF('/epilep.glb')
  const boneOpacity = useSceneStore((state) => state.boneOpacity);
  const skinOpacty = useSceneStore((state) => state.skinOpacty);
  const boneDecal = useSceneStore((state) => state.boneDecal);
  const brainOpacity = useSceneStore((state) => state.brainOpacity);

  const skin = useSceneStore((state) => state.skin);
  const brain = useSceneStore((state) => state.brain);
  const [shapesOnCanvas, setShapesOnCanvas] = useState([]);

  const [isAnimating, setIsAnimating] = useState(true);

  const brainMat = new MeshStandardMaterial({
    metalness: 0.5,
    roughness: 0.4,
    color: "#f66a8e",
  });
  let myDecal = useRef();

  const [pmndrs] = useTexture(['/images/square_logoRev.png'])

  useEffect(() => {
    materials.material_3.color = new Color(0xFFFFFF);
    var tl = gsap.timeline();
    materials.material_0.opacity = 1;
    tl.to(materials.material_0, {
      opacity: skinOpacty,
      delay: 1.5,
      duration: 2.5,
      onComplete: function () {
        setIsAnimating(false);
      }
    });
  }, []);

  useFrame(() => {
    if (boneDecal && myDecal.current.position.x < 50) {
      myDecal.current.position.x += 0.1
    };
  });

  useEffect(() => {
    materials.material_3.transparent = true;
    materials.material_3.opacity = boneOpacity;
    if (boneOpacity === 0) {
      materials.material_3.visible = false;
    } else {
      materials.material_3.visible = true;
    }
  }, [boneOpacity]);

  useEffect(() => {
    materials.material_0.transparent = true;
    materials.material_0.depthWrite = true;
    if (!isAnimating) {
      materials.material_0.opacity = skinOpacty;
      if (skinOpacty === 0 || boneDecal) {
        materials.material_0.visible = false;
      } else {
        materials.material_0.visible = true;
      }
    }
  }, [skinOpacty, boneDecal]);

  function amendMaterial(material, opacity) {
    material.transparent = true;
    if (!isAnimating) {
      material.opacity = opacity;
      if (brainOpacity === 0) {
        material.visible = false;
      } else {
        material.visible = true;
      }
    }
  }

  useEffect(() => {
    brainMat.depthWrite = true;
    amendMaterial(brainMat, brainOpacity);
  }, [brainOpacity, brainMat]);

  function twoClick(e) {
    e.stopPropagation();
    addObjectToClickPoint(e);
    useSceneStore.setState({ bottomPanelOpen: false })
  }

  function addObjectToClickPoint(e) {
    useSceneStore.setState({ selectedMarker: null });
    const newShapes = [...shapesOnCanvas, <BrainMarker shapesOnCanvas={shapesOnCanvas} thisNum={shapesOnCanvas.length} scale={.3} key={e.point.x} position={[e.point.x, e.point.y, e.point.z]} />];
    setShapesOnCanvas(newShapes);
  }

  return (
    <>
      <group {...props} dispose={null}>
        <group rotation={[-Math.PI / 2, 0, 0]}>
          <mesh geometry={nodes.Object_3.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_4.geometry} material={materials.material_3} />
          <mesh geometry={nodes.Object_5.geometry} material={materials.material_3} >
            {boneDecal ? <Decal ref={myDecal} position={[50, -90, -60]} rotation={-2.7} scale={50} map={pmndrs} map-anisotropy={16} /> : null}
          </mesh>

          <mesh geometry={nodes.Object_6.geometry} material={materials.material_3} />

          <mesh geometry={nodes.Object_8.geometry} material={materials.material_2} />
          <mesh geometry={nodes.Object_9.geometry} material={materials.material_2} />
          <mesh geometry={nodes.Object_10.geometry} material={materials.material_2} />
          <mesh geometry={nodes.Object_11.geometry} material={materials.material_2} />
          <mesh geometry={nodes.Object_12.geometry} material={materials.material_2} />
          <mesh geometry={nodes.Object_13.geometry} material={materials.material_2} />
          <mesh geometry={nodes.Object_14.geometry} material={materials.material_2} />
          <mesh geometry={nodes.Object_15.geometry} material={materials.material_2} />
          <mesh geometry={nodes.Object_16.geometry} material={materials.material_2} />
          <mesh geometry={nodes.Object_17.geometry} material={materials.material_2} />
          <mesh geometry={nodes.Object_18.geometry} material={materials.material_2} />
          <mesh geometry={nodes.Object_19.geometry} material={materials.material_2} />
          <mesh geometry={nodes.Object_20.geometry} material={materials.material_2} />
          <mesh geometry={nodes.Object_21.geometry} material={materials.material_2} />
          <mesh geometry={nodes.Object_22.geometry} material={materials.material_2} />
          <mesh geometry={nodes.Object_23.geometry} material={materials.material_2} />
          <mesh geometry={nodes.Object_24.geometry} material={materials.material_2} />
          <group visible={brain}>
            <mesh geometry={nodes.Object_26.geometry} material={brainMat} onDoubleClick={(e) => twoClick(e)} />
            <mesh geometry={nodes.Object_27.geometry} material={brainMat} onDoubleClick={(e) => twoClick(e)} />
            <mesh geometry={nodes.Object_28.geometry} material={brainMat} onDoubleClick={(e) => twoClick(e)} />
          </group>
          <group visible={skin}>
            <mesh geometry={nodes.Object_30.geometry} material={materials.material_0} />
            <mesh geometry={nodes.Object_31.geometry} material={materials.material_0} />
          </group>
        </group>
      </group>
      {/* <group scale={30} position={[0, 0, 0]}>
        <mesh castShadow receiveShadow>
          <Geometry useGroups>
            <Base>
              <sphereGeometry args={[0.3, 40, 40]} attach="geometry" />
              <meshStandardMaterial attach="material" color={'pink'} />
            </Base>
            <Subtraction position={[0, 0, 0]}>
              <boxGeometry args={[.2, 2, .6]} />
            </Subtraction>
          </Geometry>
        </mesh>
      </group> */}
      {[...shapesOnCanvas]}
    </>
  )
}

useGLTF.preload('/epilep.glb')
