import { useEffect, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import gsap from 'gsap';

const PageTransition = ({ children }) => {
    const location = useLocation();
    const transitionRef = useRef(null);

    useEffect(() => {
        const ctx = gsap.context(() => {
            // "Crazy" transition: Screen wipe + Scale effect
            const tl = gsap.timeline();

            // Intro animation
            tl.fromTo(transitionRef.current,
                { scaleY: 1, transformOrigin: "bottom" },
                { scaleY: 0, duration: 0.8, ease: "power4.inOut", delay: 0.2 }
            );
        });

        return () => ctx.revert();
    }, [location]);

    return (
        <div className="relative w-full h-full">
            {/* Transition Curtain */}
            <div
                ref={transitionRef}
                className="fixed inset-0 z-50 bg-black pointer-events-none"
                style={{ transformOrigin: 'bottom' }}
            />
            {children}
        </div>
    );
};

export default PageTransition;
