import { useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import gsap from "gsap";
import { PROFILE_DATA, HERO_CONTENT } from "../../utils/data";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiCodeforces, SiLeetcode, SiCodechef } from "react-icons/si";
import HeroImage from "../../assets/Hero6.png";

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
                <div className="absolute -inset-1 rounded-full bg-gradient-to-r from-blue-700 via-blue-600 to-blue-700 opacity-75 group-hover:opacity-100 transition duration-1000 group-hover:duration-200 blur-sm"></div>
                <img
                    src={HeroImage}
                    alt="Logo"
                    className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-2 border-white/20 shadow-2xl transition-transform duration-500 group-hover:scale-105"
                />
            </div>

            {/* Name */}
            <h1
                ref={nameRef}
                className={`text-4xl md:text-7xl font-['Syne'] font-black tracking-tighter mb-6 uppercase ${theme === 'light' ? 'text-black' : 'text-white'
                    }`}
            >
                {PROFILE_DATA.name}
            </h1>

            {/* Title */}
            <div ref={titleRef} className="text-xl md:text-4xl font-light mb-8 opacity-0">
                <span className={`font-mono text-xs md:text-sm tracking-[0.5em] uppercase block mb-4 opacity-50`}>
                    Full Stack Developer
                </span>
                <span className={`font-bold text-transparent bg-clip-text ${theme === 'light'
                    ? 'bg-gradient-to-r from-purple-600 to-indigo-600'
                    : 'bg-gradient-to-r from-white via-indigo-200 to-white animate-gradient'
                    }`}>
                    Algorithmic Thinker
                </span>
            </div>

            {/* Bio */}
            <p
                ref={bioRef}
                className={`text-lg md:text-xl leading-relaxed max-w-2xl mx-auto mb-12 opacity-0 font-sans ${theme === 'light' ? 'text-gray-800' : 'text-gray-400'}`}
            >
                {HERO_CONTENT.introduction}
            </p>

            {/* Coding Profiles */}
            <div
                className="flex items-center gap-6 mb-12 opacity-80"
            >
                <SocialLink href="https://codeforces.com/profile/mozammilali" icon={<SiCodeforces />} color="hover:text-red-500" theme={theme} />
                <SocialLink href="https://leetcode.com/mozammilali01" icon={<SiLeetcode />} color="hover:text-yellow-500" theme={theme} />
                <SocialLink href="https://www.codechef.com/users/" icon={<SiCodechef />} color="hover:text-amber-700" theme={theme} />
            </div>

            {/* Actions */}
            <div
                ref={actionsRef}
                className="flex flex-col md:flex-row items-center gap-6 mb-16 opacity-0 w-full md:w-auto"
            >
                <a
                    href={HERO_CONTENT.resumeLink}
                    download
                    className={`flex items-center gap-2 px-10 py-4 font-['Syne'] font-bold uppercase tracking-widest text-sm transition-all hover:-translate-y-1 hover:shadow-lg ${theme === 'light'
                        ? 'bg-black text-white hover:bg-gray-800'
                        : 'bg-white text-black hover:bg-gray-200'
                        }`}
                >
                    Download CV
                </a>
                <Link
                    to="/contact"
                    className={`px-10 py-4 border-2 font-['Syne'] font-bold uppercase tracking-widest text-sm transition-all hover:-translate-y-1 hover:shadow-lg ${theme === 'light'
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
                className={`flex items-center gap-8 text-2xl opacity-0 ${theme === 'light' ? 'text-gray-600' : 'text-gray-500'}`}
            >
                <SocialLink href="https://github.com/codxbrexx" icon={<FaGithub />} color="hover:text-white" theme={theme} />
                <SocialLink href="https://linkedin.com/in/mozammilali" icon={<FaLinkedin />} color="hover:text-blue-500" theme={theme} />
                <SocialLink href="https://twitter.com/mozammilali" icon={<FaTwitter />} color="hover:text-sky-500" theme={theme} />
            </div>
        </div>
    );
};

const SocialLink = ({ href, icon, color, theme }) => (
    <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className={`transition-all duration-300 hover:scale-110 ${theme === 'light' ? 'text-gray-700' : 'text-gray-400'} ${color}`}
    >
        <span className="text-3xl">{icon}</span>
    </a>
);

export default Hero;
