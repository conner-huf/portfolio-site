import { Canvas, useFrame } from '@react-three/fiber'
import { useRef } from 'react'

import './SpinningCube.css'

const Cube = ({ position, args, color }) => {

    const ref = useRef()

    useFrame((state, delta) => {
        ref.current.rotation.x += delta * 0.5
        ref.current.rotation.y += Math.sin(state.clock.getElapsedTime()) * 0.02

        ref.current.position.z = 3 + Math.sin(state.clock.getElapsedTime()) * 0.1
    })

    return (
        <mesh 
        position={position} 
        ref={ref}
        >
            <sphereGeometry args={args} />
            <meshStandardMaterial
                wireframe={true}
                factor={1}
                speed={1}
                color={color}
            />
        </mesh>
    )
}

export const SpinningCube = () => {

    return (
        <Canvas>
            <directionalLight position={[0, 0, 2]} />
            <ambientLight intensity={0.4} />

            <Cube position={[0, 0, 3]} args={[1, 50, 30, 16]} color={'#e6cb0c'}/>
        </Canvas>
    )

}