/* eslint-disable react/no-unknown-property */
import { useRef } from "react";
import { useFrame, useThree } from "@react-three/fiber";
import { MeshDistortMaterial, Stars, Sparkles } from "@react-three/drei";
import * as THREE from 'three';

const FloatingShape = ({ theme }) => {
    const meshRef = useRef();

    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (meshRef.current) {
            meshRef.current.rotation.x = t * 0.2;
            meshRef.current.rotation.y = t * 0.3;
            const scale = 1 + Math.sin(t * 1.5) * 0.1;
            meshRef.current.scale.set(scale, scale, scale);
        }
    });

    return (
        <mesh ref={meshRef} position={[0, 0, 0]}>
            <icosahedronGeometry args={[1.5, 2]} />
            <MeshDistortMaterial
                color={theme === "light" ? "#000000ff" : "#000000ff"}
                attach="material"
                distort={0.5}
                speed={2}
                roughness={0.1}
                metalness={0.8}
                wireframe={theme === 'dark'}
            />
        </mesh>
    );
}

const ShootingStar = () => {
    const ref = useRef();
    useFrame((state) => {
        const t = state.clock.getElapsedTime();
        if (ref.current) {
            ref.current.position.x = (t * 10) % 100 - 50;
            ref.current.position.y = Math.sin(t * 2) * 2 + 10;
            ref.current.position.z = Math.cos(t * 2) * 2 - 10;
        }
    });
    return (
        <mesh ref={ref}>
            <sphereGeometry args={[0.1, 8, 8]} />
            <meshBasicMaterial color="white" />
        </mesh>
    );
};

export const Scene = ({ theme }) => {
    const { mouse } = useThree();

    useFrame((state) => {
        // Parallax camera movement
        state.camera.position.x = THREE.MathUtils.lerp(state.camera.position.x, mouse.x * 2, 0.05);
        state.camera.position.y = THREE.MathUtils.lerp(state.camera.position.y, mouse.y * 2, 0.05);
    });

    return (
        <>
            <ambientLight intensity={1} />
            <Stars
                radius={100}
                depth={50}
                count={5000}
                factor={4}
                saturation={0}
                fade
                speed={1}
            />
            <Sparkles count={50} scale={10} size={4} speed={0.4} opacity={0.6} color={theme === 'light' ? '#6366f1' : '#e879f9'} />
            <ShootingStar />
            <FloatingShape theme={theme} />
        </>
    );
};
