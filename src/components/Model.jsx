"use client"
import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import * as THREE from 'three';
function Box(props) {
    // This reference will give us direct access to the mesh
    const meshRef = useRef()

    const rotationProps = new THREE.Euler(Math.PI / 90, 0, 0);
    // Set up state for the hovered and active state
    const [hovered, setHover] = useState(false)
    const [active, setActive] = useState(false)
    // Subscribe this component to the render-loop, rotate the mesh every frame
    //useFrame((state, delta) => (meshRef.current.rotation.x += delta))
    
   
    
    // Return view, these are regular three.js elements expressed in JSX
    return (
        <mesh
            {...props}
            ref={meshRef}
            //scale={active ? 1.5 : 1}
            /* rotation={rotationProps} */
            onClick={(event) => setActive(!active)}
            onPointerOver={(event) => setHover(true)}
            onPointerOut={(event) => setHover(false)}>
            <boxGeometry args={[1, 1, 1]}  />
            <meshStandardMaterial color={hovered ? 'gray' : 'black'} />
        </mesh>
    )
}

export default function Model() {
    return (
        <Canvas >
            <ambientLight />
            {/* <pointLight position={[10, 10, 10]} /> */}
            <pointLight position={[0, 1, -0.5]} />
            <Box position={[0, 0, 0]} />
            
        </Canvas>
    )
}
