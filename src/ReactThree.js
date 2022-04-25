import React, {Suspense, useRef } from "react";
import {Canvas, useFrame } from "@react-three/fiber";
import {  PerspectiveCamera } from "@react-three/drei";
import { EffectComposer, Bloom } from '@react-three/postprocessing';

import SpacePod from './components/SpacePod';
import SpaceBackground from "./components/SpaceBackground";
import CameraFunction from './components/Camera';


function CameraDefault() {
  const scene = useRef();
  useFrame(() => {
    scene.current.position.x = -11
    scene.current.position.y = 5
    scene.current.position.z = -20
    scene.current.rotation.y = 9.8
    
  });
  return (
      <group ref={scene}>
        <PerspectiveCamera makeDefault ></PerspectiveCamera>
      </group>
  )
}


 export default function ReactThree() {
    return (
      <div className="MainTest">
        <Canvas>
          <color attach="background" args={['#161c24']}/>
          <ambientLight intensity={0.01} />
          <pointLight position={[1, 10, 10]} />
          <Suspense fallback={null}>
            
            <SpacePod/>
            <SpaceBackground/>

            <CameraDefault/>
            <CameraFunction/>
            
            <EffectComposer>
            <Bloom intensity={0.5} kernelSize={3} luminanceThreshold={0} luminanceSmoothing={0.4} />
            </EffectComposer>
          </Suspense>
        </Canvas>
      </div>
    );
}
