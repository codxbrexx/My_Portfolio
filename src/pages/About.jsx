import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_BRAND_DATA } from '../utils/data';
import Skills from '../components/Skills';
import GitHubActivity from '../components/GitHubActivity';
import { FiArrowUpRight, FiGithub, FiGlobe } from "react-icons/fi";
import ProfileImage from '../assets/Hero6.png';

const About = ({ theme }) => {
    const [activeTab, setActiveTab] = useState('skills');

    const tabs = [
        { id: 'skills', label: 'Skills' },
        { id: 'bio', label: 'Biography' },
        { id: 'achievements', label: 'Achievements' },
        { id: 'github', label: 'Activity' },
    ];

    return (
        <section className={`min-h-screen pt-28 px-4 md:px-12 pointer-events-auto overflow-y-auto ${theme === 'light' ? 'bg-gray-50 text-gray-900' : 'bg-[#0a0a0a] text-white'}`}>
            <div className="max-w-7xl mx-auto pb-20">
                {/* Header Section */}
                <div className="mb-16 border-b border-current pb-8 flex flex-col md:flex-row justify-between items-end gap-6">
                    <div>
                        <h1 className="text-7xl md:text-9xl font-black uppercase tracking-tighter leading-none mb-2">
                            About
                        </h1>
                        <div className="flex items-center gap-4">
                            <span className="text-xl md:text-2xl font-light tracking-widest uppercase opacity-60">
                                The Developer
                            </span>
                            <div className={`h-px w-24 ${theme === 'light' ? 'bg-black' : 'bg-white'}`} />
                        </div>
                    </div>
                    <div className="text-right font-mono text-sm opacity-60">
                        <p>EST. 2024</p>
                        <p>IIIT LUCKNOW</p>
                    </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12">
                    {/* Left Column: Profile Card */}
                    <div className="lg:col-span-4 xl:col-span-3">
                        <div className={`sticky top-32 p-6 border-2 transition-all duration-300 ${theme === 'light'
                            ? 'border-black bg-white shadow-[8px_8px_0px_0px_rgba(0,0,0,1)]'
                            : 'border-white bg-zinc-900 shadow-[8px_8px_0px_0px_rgba(255,255,255,0.2)]'
                            }`}>
                            <div className="aspect-square mb-6 overflow-hidden border border-current grayscale hover:grayscale-0 transition-all duration-500 cursor-none">
                                <img
                                    src={ProfileImage}
                                    alt="Profile"
                                    className="w-full h-full object-cover transform hover:scale-110 transition-transform duration-700"
                                />
                            </div>

                            <h2 className="text-3xl font-black uppercase tracking-tighter mb-1 leading-none">
                                {PERSONAL_BRAND_DATA.name}
                            </h2>
                            <p className="text-xs font-bold uppercase tracking-widest mb-6 opacity-60">
                                {PERSONAL_BRAND_DATA.jobTitle}
                            </p>

                            <div className="space-y-4 font-mono text-xs border-t border-dashed border-current pt-6">
                                <div className="flex justify-between items-center group">
                                    <span className="opacity-60 group-hover:opacity-100 transition-opacity">Location</span>
                                    <span className="font-bold">{PERSONAL_BRAND_DATA.location}</span>
                                </div>
                                <div className="flex justify-between items-center group">
                                    <span className="opacity-60 group-hover:opacity-100 transition-opacity">Experience</span>
                                    <span className="font-bold">{PERSONAL_BRAND_DATA.yearsOfExperience} Year</span>
                                </div>
                                <div className="flex justify-between items-center group">
                                    <span className="opacity-60 group-hover:opacity-100 transition-opacity">Status</span>
                                    <span className="font-bold text-green-500">Available</span>
                                </div>
                            </div>

                            <div className="mt-8 flex gap-3">
                                <a
                                    href="https://github.com/codxbrexx"
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`flex-1 py-3 border border-current flex items-center justify-center gap-2 font-bold uppercase text-xs transition-all hover:-translate-y-1 ${theme === 'light' ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'}`}
                                >
                                    <FiGithub size={16} />
                                    GitHub
                                </a>
                                <a
                                    href={PERSONAL_BRAND_DATA.website}
                                    target="_blank"
                                    rel="noreferrer"
                                    className={`flex-1 py-3 border border-current flex items-center justify-center gap-2 font-bold uppercase text-xs transition-all hover:-translate-y-1 ${theme === 'light' ? 'hover:bg-black hover:text-white' : 'hover:bg-white hover:text-black'}`}
                                >
                                    <FiGlobe size={16} />
                                    Website
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Right Column: Content */}
                    <div className="lg:col-span-8 xl:col-span-9">
                        {/* Tabs Navigation */}
                        <div className="flex flex-wrap gap-x-8 gap-y-4 mb-12 border-b border-current pb-4">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`relative text-xl font-black uppercase tracking-wider transition-all duration-300 ${activeTab === tab.id
                                        ? 'opacity-100'
                                        : 'opacity-40 hover:opacity-100'
                                        }`}
                                >
                                    {tab.label}
                                    {activeTab === tab.id && (
                                        <motion.div
                                            layoutId="activeTab"
                                            className={`absolute -bottom-[17px] left-0 right-0 h-1 ${theme === 'light' ? 'bg-black' : 'bg-white'}`}
                                        />
                                    )}
                                </button>
                            ))}
                        </div>

                        {/* Content Area */}
                        <div className="min-h-[500px]">
                            <AnimatePresence mode="wait">
                                <motion.div
                                    key={activeTab}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{ opacity: 1, y: 0 }}
                                    exit={{ opacity: 0, y: -20 }}
                                    transition={{ duration: 0.3, ease: "circOut" }}
                                >
                                    {activeTab === 'skills' && (
                                        <div className="space-y-8">
                                            <Skills theme={theme} />
                                        </div>
                                    )}
                                    {activeTab === 'bio' && <BioSection theme={theme} />}
                                    {activeTab === 'achievements' && <AchievementsSection theme={theme} />}
                                    {activeTab === 'github' && <GitHubActivity theme={theme} />}
                                </motion.div>
                            </AnimatePresence>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

const BioSection = ({ theme }) => (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
        <div>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center border ${theme === 'light' ? 'border-black' : 'border-white'}`}>1</span>
                Philosophy
            </h3>
            <ul className="space-y-6">
                {PERSONAL_BRAND_DATA.philosophy.map((item, idx) => (
                    <motion.li
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.1 }}
                        key={idx}
                        className="flex gap-6 group"
                    >
                        <span className="font-mono text-sm opacity-40 pt-1">0{idx + 1}</span>
                        <p className={`text-lg font-medium leading-relaxed group-hover:translate-x-2 transition-transform duration-300 ${theme === 'light' ? 'text-gray-800' : 'text-gray-200'}`}>
                            {item}
                        </p>
                    </motion.li>
                ))}
            </ul>
        </div>
        <div>
            <h3 className="text-2xl font-black uppercase tracking-tighter mb-8 flex items-center gap-3">
                <span className={`w-8 h-8 rounded-full flex items-center justify-center border ${theme === 'light' ? 'border-black' : 'border-white'}`}>2</span>
                The Journey
            </h3>
            <div className={`p-8 border-l-2 ${theme === 'light' ? 'border-black bg-gray-50' : 'border-white bg-white/5'}`}>
                <p className="text-lg leading-relaxed italic opacity-80">
                    "{PERSONAL_BRAND_DATA.journey.description}"
                </p>
            </div>

            <div className="mt-12">
                <h4 className="font-mono text-sm uppercase opacity-50 mb-6">Core Values</h4>
                <div className="grid grid-cols-2 gap-4">
                    {PERSONAL_BRAND_DATA.values.slice(0, 4).map((val, idx) => (
                        <div key={idx} className={`p-4 border hover:bg-current hover:text-white transition-colors duration-300 group ${theme === 'light' ? 'border-gray-200 hover:text-white' : 'border-gray-800 hover:text-black'}`}>
                            <div className="font-bold text-sm uppercase tracking-wide group-hover:text-gray-900">
                                {val.title}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    </div>
);

const AchievementsSection = ({ theme }) => (
    <div className="space-y-4">
        {PERSONAL_BRAND_DATA.achievements.map((item, idx) => (
            <motion.div
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`p-6 border-b flex items-start gap-6 group transition-colors ${theme === 'light'
                    ? 'border-gray-200 hover:bg-gray-50'
                    : 'border-white/10 hover:bg-white/5'
                    }`}
            >
                <span className="font-mono text-xl opacity-30 group-hover:opacity-100 transition-opacity">
                    0{idx + 1}
                </span>
                <div className="flex-1">
                    <p className="text-xl font-bold leading-tight group-hover:translate-x-2 transition-transform duration-300">
                        {item}
                    </p>
                </div>
                <FiArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity transform group-hover:translate-x-1 group-hover:-translate-y-1" size={24} />
            </motion.div>
        ))}
    </div>
);

export default About;
