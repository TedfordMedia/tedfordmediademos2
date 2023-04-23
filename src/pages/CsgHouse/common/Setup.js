import React from 'react'
import { Vector3 } from 'three'
import { Canvas } from '@react-three/fiber'
import { OrbitControls } from '@react-three/drei'

const Setup = ({
  children,
  cameraFov = 55,
  cameraPosition = new Vector3(-5, 4, 4),
  controls = true,
  lights = true,
  ...restProps
}) => (
  <Canvas shadows camera={{ position: cameraPosition, fov: cameraFov }} {...restProps}>
    {children}
    {lights && (
      <>
        <ambientLight intensity={0.8} />
        <pointLight intensity={1} position={[0, 6, 0]} />
      </>
    )}
    {controls && <OrbitControls />}
  </Canvas>
)

export default Setup
