/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 .\TepaSangatRil-EDITED.gltf -k 
*/

import React, { useRef } from 'react'
import { useGLTF, useTexture } from '@react-three/drei'

import * as THREE from 'three'

export default function Tepad(props) {
  const { nodes, materials } = useGLTF('/3d/RILLJADI.gltf')
  const texture = useTexture('/3d/BAKED.png')
  texture.flipY = false;
  texture.colorSpace = THREE.SRGBColorSpace;

  const textureMaterial = new THREE.MeshStandardMaterial({
    map: texture,
  })

  return (
    <group {...props} dispose={null} scale={0.2}>
      <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={textureMaterial} position={[0, 0.255, -0.529]} />
      <mesh name="Green_Pillar" geometry={nodes.Green_Pillar.geometry} material={textureMaterial} position={[7.109, 2.22, 2.868]} />
      <mesh name="Green_Pillar001" geometry={nodes.Green_Pillar001.geometry} material={textureMaterial} position={[7.109, 6.455, 2.641]} />
      <mesh name="Tepa" geometry={nodes.Tepa.geometry} material={textureMaterial} position={[-1.873, 3.611, 2.697]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh name="Tepa001" geometry={nodes.Tepa001.geometry} material={textureMaterial} position={[3.665, 3.738, 2.697]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh name="Tepa002" geometry={nodes.Tepa002.geometry} material={textureMaterial} position={[4.29, 3.611, 2.697]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={textureMaterial} position={[-0.055, 3.28, 2.051]} />
      <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={textureMaterial} position={[-0.027, 1.716, 2.976]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={textureMaterial} position={[0, 0.255, -0.549]} />
      <mesh name="Plane004" geometry={nodes.Plane004.geometry} material={textureMaterial} position={[0.004, 6.826, 2.645]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh name="Plane005" geometry={nodes.Plane005.geometry} material={textureMaterial} position={[-5.027, 6.826, 2.645]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh name="Plane006" geometry={nodes.Plane006.geometry} material={textureMaterial} position={[4.985, 6.826, 2.645]} rotation={[Math.PI / 2, 0, 0]} />
      <mesh name="Circle" geometry={nodes.Circle.geometry} material={textureMaterial} position={[1.822, 5.004, 2.917]} rotation={[Math.PI / 2, 0.301, 0]} scale={1.006} />
      <mesh name="Circle001" geometry={nodes.Circle001.geometry} material={textureMaterial} position={[6.031, 4.976, 3.009]} rotation={[Math.PI / 2, -0.449, 0]} />
      <mesh name="Circle002" geometry={nodes.Circle002.geometry} material={textureMaterial} position={[-4.004, 4.976, 3.009]} rotation={[Math.PI / 2, -0.449, 0]} />
      <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={textureMaterial} position={[9.613, 3.909, -1.237]} />
      <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={textureMaterial} position={[9.613, 3.909, -1.237]} />
      <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={textureMaterial} position={[0, 9.639, -0.43]} />
      <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={textureMaterial} position={[0, 3.554, -2.07]} />
      <mesh name="AC" geometry={nodes.AC.geometry} material={textureMaterial} position={[-3.57, 4.882, 2.097]} />
      <mesh name="AC001" geometry={nodes.AC001.geometry} material={textureMaterial} position={[6.43, 4.882, 2.097]} />
      <mesh name="AC002" geometry={nodes.AC002.geometry} material={textureMaterial} position={[2.23, 4.882, 2.097]} />
      <mesh name="Plane" geometry={nodes.Plane.geometry} material={textureMaterial} />
    </group>
  )
}

useGLTF.preload('/3d/RILLJADI.gltf')