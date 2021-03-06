/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

export default function Sushi({ ...props }) {
  const group = useRef()
  const newTexture = useTexture("/baked.jpg");
  const { nodes } = useGLTF('/sushi-joined.glb')
  console.log(nodes)
  return (
  <group ref={group} {...props} dispose={null}>
  
    <group position={[0.1, 0.3, 2.44]} rotation={[-3.14, 0.01, 3.12]}>
    {Object.keys(nodes).map((key) => (
    <mesh geometry={nodes[key].geometry}>
      <meshBasicMaterial map={newTexture} map-flipY={false} />
    </mesh>
    ))}
    </group>
  </group>
  )
}

useGLTF.preload('/sushi-unwrap.glb')
