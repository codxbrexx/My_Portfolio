import { useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";

const CustomCursor = () => {
    const cursorX = useMotionValue(-100);
    const cursorY = useMotionValue(-100);
    const [isHovering, setIsHovering] = useState(false);

    useEffect(() => {
        const mouseMove = (e) => {
            cursorX.set(e.clientX - 16);
            cursorY.set(e.clientY - 16);
        }

        window.addEventListener("mousemove", mouseMove);

        // Add hover effect listeners for interactive elements
        const handleMouseOver = (e) => {
            if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button')) {
                setIsHovering(true);
            }
        };

        const handleMouseOut = () => {
            setIsHovering(false);
        };

        document.addEventListener("mouseover", handleMouseOver);
        document.addEventListener("mouseout", handleMouseOut);

        return () => {
            window.removeEventListener("mousemove", mouseMove);
            document.removeEventListener("mouseover", handleMouseOver);
            document.removeEventListener("mouseout", handleMouseOut);
        }
    }, [cursorX, cursorY]);

    return (
        <motion.div
            className="fixed top-0 left-0 w-8 h-8 border border-cyan-400 rounded-full pointer-events-none z-50 flex items-center justify-center mix-blend-difference"
            style={{
                x: cursorX,
                y: cursorY,
            }}
            animate={{
                scale: isHovering ? 1.5 : 1,
                backgroundColor: isHovering ? "rgba(34, 211, 238, 0.2)" : "transparent",
            }}
            transition={{
                duration: 0.1, // Very fast hover transition
                ease: "easeOut"
            }}
        >
            <div className="w-1 h-1 bg-cyan-400 rounded-full" />
        </motion.div>
    );
};

export default CustomCursor;
