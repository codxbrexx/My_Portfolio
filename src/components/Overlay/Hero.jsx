import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { PROFILE_DATA, HERO_CONTENT } from "../../utils/data";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import HeroImage from "../../assets/hero-gen.png";

const Hero = ({ theme }) => {
    const containerRef = useRef();
    const logoRef = useRef();
    const nameRef = useRef();
    const titleRef = useRef();
    const bioRef = useRef();
    const actionsRef = useRef();
    const socialsRef = useRef();

    useEffect(() => {
        const tl = gsap.timeline({ defaults: { ease: "power4.out" } });

        tl.fromTo(
            logoRef.current,
            { scale: 0, opacity: 0 },
            { scale: 1, opacity: 1, duration: 1, ease: "elastic.out(1, 0.5)" }
        )
            .fromTo(
                nameRef.current,
                { y: 50, opacity: 0 },
                { y: 0, opacity: 1, duration: 1 },
                "-=0.5"
            )
            .fromTo(
                titleRef.current,
                { y: 30, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            )
            .fromTo(
                bioRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            )
            .fromTo(
                actionsRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            )
            .fromTo(
                socialsRef.current,
                { y: 20, opacity: 0 },
                { y: 0, opacity: 1, duration: 0.8 },
                "-=0.6"
            );
    }, []);

    return (
        <div
            ref={containerRef}
            className={`flex-1 flex flex-col justify-center items-center text-center pointer-events-auto transition-colors duration-500 px-6 ${theme === 'light' ? 'text-gray-900' : 'text-white'
                }`}
        >
            {/* Logo / Avatar */}
            <div ref={logoRef} className="mb-8 relative group">
                <div className="absolute -inset-1 bg-gradient-to-r from-indigo-500 via-indigo-600 to-indigo-500 rounded-full blur opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200"></div>
                <img
                    src={HeroImage}
                    alt="Logo"
                    className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-white/10 shadow-2xl"
                />
            </div>

            {/* Name */}
            <h1
                ref={nameRef}
                className={`text-5xl md:text-8xl font-black tracking-tighter mb-4 ${theme === 'light' ? 'text-gray-950 drop-shadow-2xl' : 'text-white shadow-white/10'
                    }`}
            >
                {PROFILE_DATA.name}
            </h1>

            {/* Title */}
            <div ref={titleRef} className="text-2xl md:text-4xl font-light mb-8 opacity-0">
                <span className={`font-bold text-transparent bg-clip-text ${theme === 'light'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600 drop-shadow-sm'
                    : 'bg-gradient-to-r from-indigo-400 to-indigo-400 animate-gradient'
                    }`}>
                    Full Stack Developer | Algorithmic Thinker
                </span>
            </div>

            {/* Bio */}
            <p
                ref={bioRef}
                className={`text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 opacity-0 ${theme === 'light' ? 'text-gray-900' : 'text-slate-300'}`}
            >
                {HERO_CONTENT.introduction}
            </p>

            {/* Actions */}
            <div
                ref={actionsRef}
                className="flex flex-col md:flex-row items-center gap-6 mb-16 opacity-0"
            >
                <a
                    href={HERO_CONTENT.resumeLink}
                    download
                    className={`flex items-center gap-2 px-8 py-3.5 rounded-full font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 ${theme === 'light'
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-white text-black hover:bg-gray-200'
                        }`}
                >
                    Download CV
                </a>
                <Link
                    to="/contact"
                    className={`px-8 py-3.5 rounded-full border font-bold uppercase tracking-widest text-sm transition-all hover:scale-105 active:scale-95 ${theme === 'light'
                        ? 'border-black text-black hover:bg-black hover:text-white'
                        : 'border-white text-white hover:bg-white hover:text-black'
                        }`}
                >
                    Contact Me
                </Link>
            </div>

            {/* Socials */}
            <div
                ref={socialsRef}
                className={`flex items-center gap-8 text-2xl opacity-0 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}
            >
                <a href="https://github.com/codxbrexx" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 hover:scale-125 transition-all duration-300">
                    <FaGithub />
                </a>
                <a href="https://linkedin.com/in/mozammilali" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 hover:scale-125 transition-all duration-300">
                    <FaLinkedin />
                </a>
                <a href="https://twitter.com/mozammilali" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-500 hover:scale-125 transition-all duration-300">
                    <FaTwitter />
                </a>
            </div>
        </div>
    );
};

export default Hero;
