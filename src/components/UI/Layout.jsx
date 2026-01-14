/* eslint-disable react/no-unknown-property */
import { Canvas } from "@react-three/fiber";
import { Scene } from "../3d/Scene";
import { OrbitControls } from "@react-three/drei";
import Navbar from "../Overlay/Navbar";
import { Outlet, useLocation } from "react-router-dom";
import PageTransition from "./PageTransition";

import CustomCursor from "./CustomCursor";

const Layout = ({ theme, toggleTheme }) => {
    const location = useLocation();
    return (
        <div className={`relative w-full h-screen overflow-hidden ${theme === 'light' ? 'bg-white' : 'bg-black'}`}>
            <CustomCursor />
            {/* Persistent 3D Background - Only on Home */}
            {location.pathname === '/' && (
                <div className="fixed inset-0 z-0 pointer-events-none">
                    <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                        <color attach="background" args={[theme === 'light' ? '#ffffff' : '#000000']} />
                        <ambientLight intensity={0.5} />
                        <pointLight position={[10, 10, 10]} intensity={1} />
                        <Scene theme={theme} />
                        <OrbitControls enableZoom={false} enablePan={false} />
                    </Canvas>
                </div>
            )}

            {/* Foreground Content */}
            <div className="relative z-10 w-full h-full flex flex-col">
                <Navbar theme={theme} toggleTheme={toggleTheme} />

                <div className="flex-1 overflow-y-auto w-full">
                    <PageTransition>
                        <Outlet />
                    </PageTransition>
                </div>
            </div>
        </div>
    );
};

export default Layout;
