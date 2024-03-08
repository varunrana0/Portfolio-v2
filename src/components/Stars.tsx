"use client";

import { PointMaterial, Sparkles } from "@react-three/drei";
import { Canvas, useFrame } from "@react-three/fiber";
import { random } from "maath";
import { Suspense, useRef, useState } from "react";

const StarBackground = (props: any) => {
    const ref = useRef<any>();
    const [sphere] = useState(
        () =>
            random.inSphere(new Float32Array(5000), {
                radius: 2.2,
            }) as Float32Array
    );
    useFrame((_, delta: number) => {
        ref.current.rotation.x -= delta / 4;
        ref.current.rotation.y -= delta / 5;
    });

    return (
        <group rotation={[0, 0, Math.PI / 10]}>
            <Sparkles
                ref={ref}
                positions={sphere}
                stride={3}
                scale={3}
                frustumCulled
                {...props}
            >
                <PointMaterial
                    transparent
                    color="#fff"
                    size={0.008}
                    sizeAttenuation
                    dethWrite={false}
                />
            </Sparkles>
        </group>
    );
};

const StarCanvas = () => {
    return (
        <div className="w-full h-auto fixed inset-0 z-[20]">
            <Canvas camera={{ position: [0, 0, 1] }}>
                <Suspense fallback={null}>
                    <StarBackground />
                </Suspense>
            </Canvas>
        </div>
    );
};

export default StarCanvas;
