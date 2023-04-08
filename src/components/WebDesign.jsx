import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Ipad from './Ipad'




const WebDesign = () => {
  return (
    <>
      <Canvas>
        <OrbitControls enableZoom={false} autoRotate />
        <ambientLight intensity={1} />
        <directionalLight intensity={0.5} />
        <Suspense fallback={null}>
          <Ipad scale={[0.1, 0.1, 0.1]} />
        </Suspense>
      </Canvas>
    </>


  )
}

export default WebDesign