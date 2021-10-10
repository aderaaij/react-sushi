import React, { Suspense } from 'react'
import Sushi from './components/sushi'
import { Canvas } from '@react-three/fiber'

import { Html, OrbitControls } from '@react-three/drei'
function App() {
  return (
    <Canvas camera={{ fov: 45, position: [-8, 6, -8] }}>
      <color attach="background" args={['#FFB002']} />
      <Suspense fallback={<Html center>loading...</Html>}>
        <ambientLight intensity={1} />
        <group
          position={[9.46, 13.38, -9.46]}
          rotation={[0, Math.PI / 4, -Math.PI / 4]}
          scale={[1.65, 1.65, 1.65]}
        >
          <directionalLight
            intensity={3}
            decay={0}
            rotation={[Math.PI / 2, 0, 0]}
          />
          <spotLight intensity={0.5}></spotLight>
        </group>
        <Sushi />
      </Suspense>
      <OrbitControls />
    </Canvas>
  )
}

export default App
