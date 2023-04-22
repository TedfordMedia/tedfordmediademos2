import React, { useEffect, useRef, useState } from 'react'
import { useGLTF, useTexture, Decal } from '@react-three/drei'
import useSceneStore from '../useSceneStore';
import { MeshStandardMaterial } from 'three';
import { Color } from 'three';
import { useFrame } from "@react-three/fiber";
import gsap from "gsap";

export function Brain(props) {
  const { nodes, materials } = useGLTF('/epilep2.glb')
  const boneOpacity = useSceneStore((state) => state.boneOpacity);
  const skinOpacty = useSceneStore((state) => state.skinOpacty);
  const boneDecal = useSceneStore((state) => state.boneDecal);
  const brainOpacity = useSceneStore((state) => state.brainOpacity);
  const skin = useSceneStore((state) => state.skin);
  const brain = useSceneStore((state) => state.brain);

  const [isAnimating, setIsAnimating] = useState(true);

  const brainMat = new MeshStandardMaterial({
    metalness: 0.5,
    roughness: 0.4,
    color: "#f66a8e",
  });
  let myDecal = useRef();

  const [pmndrs] = useTexture(['/images/square_logoRev.png'])

  useEffect(() => {
    console.log('CAN YOUOUOUOUOU SEEE')
    materials.material_3.color = new Color(0xFFFFFF);
    var tl = gsap.timeline();
    materials.material_0.opacity = 1;
    tl.to(materials.material_0, {
      opacity: skinOpacty,
      delay: 1,
      duration: 2,
      onComplete: function () {
        setIsAnimating(false);
      }
    });
  }, []);

  useFrame(() => {
    if (boneDecal) myDecal.current.position.x += 0.1;
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
      console.log('bonedecl', boneDecal)
    }
  }, [skinOpacty, boneDecal]);

  useEffect(() => {
    brainMat.transparent = true;
    brainMat.depthWrite = true;
    if (!isAnimating) {
      brainMat.opacity = brainOpacity;
      if (brainOpacity === 0) {
        brainMat.visible = false;
      } else {
        brainMat.visible = true;
      }
    }
  }, [brainOpacity, brainMat]);

  return (
    <group {...props} dispose={null}>
      <group rotation={[-Math.PI / 2, 0, 0]}>
        <mesh geometry={nodes.Object_10.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_10001.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_10002.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_10003.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_10004.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_10005.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_10006.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_10007.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_10008.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_10009.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_10010.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11001.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11002.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11003.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11004.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11005.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11006.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11007.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11008.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11009.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11010.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11011.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11012.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11013.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11014.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11015.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11016.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11017.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11018.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11019.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11020.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11021.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11022.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11023.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11024.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11025.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_11026.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_12.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_12001.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_12002.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_12003.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_12004.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_12005.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_12006.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_12007.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_12008.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_12009.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_12010.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_12011.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_13.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_13001.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_13002.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_13003.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_13004.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_13005.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_13006.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_13007.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_13008.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14001.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14002.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14003.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14004.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14005.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14006.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14007.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14008.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14009.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14010.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14011.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14012.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14013.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14014.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14015.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14016.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14017.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14018.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14019.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14020.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14021.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14022.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14023.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14024.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_14025.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15001.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15002.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15003.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15004.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15005.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15006.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15007.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15008.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15009.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15010.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15011.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15012.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15013.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15014.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15015.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15016.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15017.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15018.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15019.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15020.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_15021.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16001.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16002.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16003.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16004.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16005.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16006.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16007.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16008.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16009.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16010.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16011.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16012.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16013.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16014.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16015.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16016.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16017.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16018.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16019.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16020.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16021.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16022.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16023.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16024.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16025.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16026.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16027.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16028.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16029.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16030.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16031.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_16032.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_17.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_17001.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_17002.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_17003.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_17004.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_17005.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_17006.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_17007.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_17008.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_17009.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_17010.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_17011.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_18.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_18001.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_18002.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_18003.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_18004.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_18005.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_18006.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_18007.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_18008.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_18009.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_18010.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_18011.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_18012.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_18013.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_18014.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_19.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_19001.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_19002.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_19003.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_19004.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_19005.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_19006.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_19007.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_19008.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_19009.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_19010.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_20.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_20001.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_20002.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_20003.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_20004.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_20005.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_20006.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_20007.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_20008.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_20009.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_20010.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_20011.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_20012.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_20013.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_20014.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_20015.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_20016.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_20017.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_20018.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21001.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21002.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21003.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21004.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21005.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21006.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21007.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21008.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21009.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21010.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21011.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21012.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21013.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21014.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21015.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21016.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21017.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21018.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21019.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_21020.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_22.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_22001.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_22002.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_22003.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_22004.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_22005.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_22006.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_22007.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_22008.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_22009.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_22010.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_22011.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_22012.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_22013.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_22014.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_22015.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_22016.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_23.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_23001.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_23002.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_23003.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_23004.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_23005.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_23006.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_23007.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_23008.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_23009.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_23010.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_23011.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_23012.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_23013.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_23014.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24001.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24002.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24003.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24004.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24005.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24006.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24007.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24008.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24009.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24010.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24011.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24012.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24013.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24014.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24015.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24016.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24017.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24018.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24019.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24020.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24021.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24022.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24023.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24024.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24025.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24026.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_24027.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8001.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8002.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8003.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8004.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8005.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8006.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8007.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8008.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8009.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8010.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8011.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8012.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8013.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8014.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8015.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8016.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8017.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8018.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8019.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8020.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8021.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8022.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8023.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8024.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8025.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_8026.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_9.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_9001.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_9002.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_9003.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_9004.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_9005.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_9006.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_9007.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_9008.geometry} material={materials.material_2} />
        <mesh geometry={nodes.Object_9009.geometry} material={materials.material_2} />

        <group visible={brain}>
          <mesh geometry={nodes.Object_26.geometry} material={brainMat} />
          <mesh geometry={nodes.Object_27.geometry} material={brainMat} />
          <mesh geometry={nodes.Object_28.geometry} material={brainMat} />
        </group>
        <group visible={skin}>
          <mesh geometry={nodes.Object_30.geometry} material={materials.material_0} />
          <mesh geometry={nodes.Object_31.geometry} material={materials.material_0} />
        </group>

        <mesh geometry={nodes.Object_3.geometry} material={materials.material_3} />
        <mesh geometry={nodes.Object_4.geometry} material={materials.material_3} />
        <mesh geometry={nodes.Object_5.geometry} material={materials.material_3} >
          {boneDecal ? <Decal ref={myDecal} position={[50, -90, -60]} rotation={-2.7} scale={50.25} map={pmndrs} map-anisotropy={16} /> : null}
        </mesh>
        <mesh geometry={nodes.Object_6.geometry} material={materials.material_3} />
      </group>
    </group>
  )
}

useGLTF.preload('/epilep2.glb')
