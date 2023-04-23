import * as THREE from 'three'
import React, { useRef, Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Sky, useTexture, } from '@react-three/drei'
import LogoDiv from '../../components/LogoDiv';
import MySceneThings from "./MySceneThings";
import Floor from "../../components/Floor";

function Logo(props) {
  const myytexture = useTexture('/images/square_logo.png')

  const ref = useRef()
  return (
    <mesh {...props} rotation={[-Math.PI / 2, 0, 0]} receiveShadow ref={ref} scale={25}>
      <planeGeometry />
      <meshStandardMaterial color={"white"} map={myytexture} />
    </mesh>
  )
}

const CirclePage = (props) => (
  <>
    <Canvas
      shadows
      camera={{ position: [-20, 10, 10], fov: 42 }}
      onCreated={({ gl, camera, scene }) => {
        scene.background = new THREE.Color(0xa2b9e7);
        gl.shadowMap.enabled = true;
        gl.shadowMap.type = THREE.PCFShadowMap;
        gl.shadowMap.autoUpdate = true;
        gl.toneMapping = THREE.ACESFilmicToneMapping;
      }}>

      <ambientLight intensity={.4} />
      <Suspense fallback={null}>
        <Logo position={[0, 0, 1.6]} />
      </Suspense>
      <Floor />

      <MySceneThings />

      {/* <Sky scale={100} sunPosition={[400, 500, -1000]} turbidity={0.1} /> */}
      <OrbitControls
        enableDamping
        dampingFactor={0.2}
        maxDistance={50}
        autoRotate autoRotateSpeed={-.2} />
    </Canvas>

    <LogoDiv />
  </>
)

export default CirclePage  