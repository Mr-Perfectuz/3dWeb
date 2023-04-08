import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import React_logo from './React_logo'


const Development = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={1} />
      <directionalLight intensity={0.5} />
      <Suspense fallback={null}>
        <React_logo scale={[0.6, 0.6, 0.6]} />
      </Suspense>
    </Canvas>


  )
}

export default Development