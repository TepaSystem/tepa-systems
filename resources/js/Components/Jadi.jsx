/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
Command: npx gltfjsx@6.2.14 .\jadi.gltf -k 
*/

import React, { useRef } from 'react'
import { useGLTF } from '@react-three/drei'

export function Model(props) {
  const { nodes, materials } = useGLTF('/jadi.gltf')
  return (
    <group {...props} dispose={null}>
      <mesh name="Plane" geometry={nodes.Plane.geometry} material={materials['Material.005']} scale={[9.942, 2.17, 4.99]} />
      <mesh name="Man" geometry={nodes.Man.geometry} material={nodes.Man.material} position={[-11.705, 0, 0]} scale={0.427} />
      <mesh name="Jalan" geometry={nodes.Jalan.geometry} material={materials['Material.010']} scale={[9.942, 2.17, 4.99]} />
      <mesh name="lantai1" geometry={nodes.lantai1.geometry} material={materials['Material.012']} scale={[9.942, 2.17, 4.99]} />
      <mesh name="Plane001" geometry={nodes.Plane001.geometry} material={materials['Material.008']} position={[0, 0.255, -0.529]} scale={[7.862, 1, 3.163]} />
      <mesh name="Cube" geometry={nodes.Cube.geometry} material={materials.oren} position={[0, 4.249, -0.534]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-7.999, -0.25, -3.308]} />
      <mesh name="Cube001" geometry={nodes.Cube001.geometry} material={materials.oren} position={[0, 8.581, -0.534]} rotation={[-Math.PI, 0, -Math.PI]} scale={[-7.999, -0.25, -3.308]} />
      <mesh name="Green_Pillar" geometry={nodes.Green_Pillar.geometry} material={materials.ijo} position={[7.109, 2.22, 2.868]} scale={[0.114, 2.145, 0.316]} />
      <mesh name="Green_Pillar001" geometry={nodes.Green_Pillar001.geometry} material={materials.ijo} position={[7.109, 6.455, 2.641]} scale={[0.114, 2.145, 0.316]} />
      <mesh name="Tepa" geometry={nodes.Tepa.geometry} material={materials.Tepa} position={[-1.873, 3.611, 2.697]} rotation={[Math.PI / 2, 0, 0]} scale={[11.082, 2.423, 9.49]} />
      <mesh name="Tepa001" geometry={nodes.Tepa001.geometry} material={materials.Tepa} position={[3.665, 3.738, 2.697]} rotation={[Math.PI / 2, 0, 0]} scale={[10.682, 2.423, 9.49]} />
      <mesh name="Tepa002" geometry={nodes.Tepa002.geometry} material={materials.Tepa} position={[4.29, 3.611, 2.697]} rotation={[Math.PI / 2, 0, 0]} scale={[15.307, 2.423, 9.49]} />
      <mesh name="Cube003" geometry={nodes.Cube003.geometry} material={materials['Material.006']} position={[-0.055, 3.28, 2.051]} scale={[7.156, 0.151, 1]} />
      <mesh name="Plane002" geometry={nodes.Plane002.geometry} material={materials.kaca} position={[-0.027, 1.716, 2.976]} rotation={[Math.PI / 2, 0, 0]} scale={[7.078, 1, 1.514]} />
      <mesh name="Plane003" geometry={nodes.Plane003.geometry} material={materials['Material.013']} position={[0, 0.255, -0.549]} scale={[7.862, 1, 3.163]} />
      <mesh name="Plane004" geometry={nodes.Plane004.geometry} material={materials.kaca} position={[0.004, 6.826, 2.645]} rotation={[Math.PI / 2, 0, 0]} scale={[2.119, 1, 0.798]} />
      <mesh name="Plane005" geometry={nodes.Plane005.geometry} material={materials.kaca} position={[-5.027, 6.826, 2.645]} rotation={[Math.PI / 2, 0, 0]} scale={[1.951, 1, 0.798]} />
      <mesh name="Plane006" geometry={nodes.Plane006.geometry} material={materials.kaca} position={[4.985, 6.826, 2.645]} rotation={[Math.PI / 2, 0, 0]} scale={[1.951, 1, 0.798]} />
      <mesh name="Cube005" geometry={nodes.Cube005.geometry} material={materials['Material.001']} position={[2.01, 5.011, 2.827]} scale={[0.747, 0.545, 0.347]} />
      <mesh name="Cylinder" geometry={nodes.Cylinder.geometry} material={nodes.Cylinder.material} position={[1.82, 4.978, 3.064]} rotation={[Math.PI / 2, 0, 0]} scale={[0.398, 0.27, 0.398]} />
      <mesh name="Circle" geometry={nodes.Circle.geometry} material={materials['Material.002']} position={[1.814, 4.976, 3.009]} rotation={[Math.PI / 2, -0.449, 0]} scale={0.327} />
      <mesh name="Cylinder001" geometry={nodes.Cylinder001.geometry} material={materials['Material.007']} position={[1.822, 4.977, 2.802]} rotation={[Math.PI / 2, 0, 0]} scale={[0.052, 0.214, 0.052]} />
      <mesh name="Cube006" geometry={nodes.Cube006.geometry} material={materials['Material.001']} position={[6.227, 5.011, 2.827]} scale={[0.747, 0.545, 0.347]} />
      <mesh name="Cylinder002" geometry={nodes.Cylinder002.geometry} material={nodes.Cylinder002.material} position={[6.036, 4.978, 3.064]} rotation={[Math.PI / 2, 0, 0]} scale={[0.398, 0.27, 0.398]} />
      <mesh name="Circle001" geometry={nodes.Circle001.geometry} material={materials['Material.002']} position={[6.031, 4.976, 3.009]} rotation={[Math.PI / 2, -0.449, 0]} scale={0.327} />
      <mesh name="Cylinder003" geometry={nodes.Cylinder003.geometry} material={materials['Material.008']} position={[6.038, 4.977, 2.802]} rotation={[Math.PI / 2, 0, 0]} scale={[0.052, 0.214, 0.052]} />
      <mesh name="Cube007" geometry={nodes.Cube007.geometry} material={materials['Material.001']} position={[-3.808, 5.011, 2.827]} scale={[0.747, 0.545, 0.347]} />
      <mesh name="Cylinder004" geometry={nodes.Cylinder004.geometry} material={nodes.Cylinder004.material} position={[-3.998, 4.978, 3.064]} rotation={[Math.PI / 2, 0, 0]} scale={[0.398, 0.27, 0.398]} />
      <mesh name="Circle002" geometry={nodes.Circle002.geometry} material={materials['Material.002']} position={[-4.004, 4.976, 3.009]} rotation={[Math.PI / 2, -0.449, 0]} scale={0.327} />
      <mesh name="Cylinder005" geometry={nodes.Cylinder005.geometry} material={materials['Material.009']} position={[-3.997, 4.977, 2.802]} rotation={[Math.PI / 2, 0, 0]} scale={[0.052, 0.214, 0.052]} />
      <mesh name="Cube004" geometry={nodes.Cube004.geometry} material={materials['Material.004']} position={[9.613, 3.909, -1.237]} scale={[0.176, 3.813, 3.501]} />
      <mesh name="Cube008" geometry={nodes.Cube008.geometry} material={materials.oren} position={[9.613, 3.909, -1.237]} scale={[0.176, 3.813, 3.501]} />
      <mesh name="Cube002" geometry={nodes.Cube002.geometry} material={materials['Material.011']} position={[8.354, 4.327, -1.561]} rotation={[0, Math.PI / 2, 0]} scale={[2.958, 3.783, 0.182]} />
    </group>
  )
}

useGLTF.preload('/jadi.gltf')
