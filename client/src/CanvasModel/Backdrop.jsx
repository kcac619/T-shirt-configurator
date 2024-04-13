import React, { useRef } from 'react';
import {easing} from 'maath';
import {useFrame} from '@react-three/fiber';
import { AccumulativeShadows, RandomizedLight } from '@react-three/drei';

const Backdrop = () => {
  const shadows= useRef();
  return (

    <AccumulativeShadows
    ref={shadows} position={[0,0,-0.2]} 
    frames={60}
    alphaTest={0.85}
    scale={10}
    rotation={[1.57,0,0]}>
      <RandomizedLight
        amount={4}
        radius={9}
        
        ambient={0.25}
        intensity={3}
      />
      <RandomizedLight
        amount={1}
        radius={9}
        
        
        intensity={2}
      />
    </AccumulativeShadows>
  )
}

export default Backdrop