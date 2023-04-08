import { OrbitControls, Stage } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React, { Suspense } from 'react'
import Adidas from './Adidas'

const ProductDesign = () => {
  return (
    <Canvas>
      <OrbitControls enableZoom={false} autoRotate />
      <ambientLight intensity={1} />
      <directionalLight intensity={0.5} />
      <Suspense fallback={null}>
        <Adidas scale={[6, 6, 6]} />
      </Suspense>
    </Canvas>
  )
}

export default ProductDesign