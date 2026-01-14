import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { PERSONAL_BRAND_DATA } from '../utils/data';
import Skills from '../components/Skills';
import GitHubActivity from '../components/GitHubActivity';
import { FiUser, FiCode, FiGithub, FiAward } from "react-icons/fi";
import ProfileImage from '../assets/hero-gen.png';

const About = ({ theme }) => {
    const [activeTab, setActiveTab] = useState('skills');

    const tabs = [
        { id: 'skills', label: 'Skills', icon: FiCode },
        { id: 'bio', label: 'Biography', icon: FiUser },
        { id: 'achievements', label: 'Achievements', icon: FiAward },
        { id: 'github', label: 'Activity', icon: FiGithub },
    ];

    return (
        <section className={`min-h-screen pt-32 px-6 md:px-12 pointer-events-auto overflow-y-auto ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>
            <div className="max-w-6xl mx-auto pb-20">
                <h1 className="text-6xl md:text-8xl font-black mb-12 uppercase tracking-tighter">About Me</h1>
            </div>
            <div className="max-w-7xl mx-auto pb-20 grid grid-cols-1 lg:grid-cols-12 gap-12">

                {/* Left Column: Profile Card (Static Glass) */}
                <div className="lg:col-span-4 xl:col-span-3">
                    <div className={`p-8 rounded-3xl border backdrop-blur-md h-full flex flex-col items-center text-center transition-all duration-300 ${theme === 'light'
                        ? 'bg-white/40 border-white/60 shadow-xl shadow-black/5'
                        : 'bg-white/5 border-white/10 shadow-lg shadow-purple-500/10'
                        }`}>
                        <div className="relative w-48 h-48 mb-6 group">
                            <div className={`absolute inset-0 rounded-full blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 ${theme === 'light' ? 'bg-indigo-400' : 'bg-indigo-600'
                                }`} />
                            <img
                                src={ProfileImage}
                                alt="Profile"
                                className="relative w-full h-full rounded-full object-cover border-4 border-white/20 shadow-2xl"
                            />
                        </div>

                        <h2 className={`text-3xl font-black uppercase tracking-tighter mb-2 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                            {PERSONAL_BRAND_DATA.name}
                        </h2>
                        <p className={`text-sm font-bold uppercase tracking-widest mb-4 ${theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'}`}>
                            {PERSONAL_BRAND_DATA.jobTitle}
                        </p>

                        <p className={`text-sm leading-relaxed mb-6 opacity-80 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}>
                            {PERSONAL_BRAND_DATA.tagline}
                        </p>

                        <div className="flex flex-wrap justify-center gap-3 mb-8">
                            <div className={`px-4 py-2 rounded-full text-xs font-bold border ${theme === 'light' ? 'bg-white/50 border-gray-200 text-gray-700' : 'bg-white/5 border-white/10 text-gray-300'}`}>
                                📍 {PERSONAL_BRAND_DATA.location}
                            </div>
                            <div className={`px-4 py-2 rounded-full text-xs font-bold border ${theme === 'light' ? 'bg-white/50 border-gray-200 text-gray-700' : 'bg-white/5 border-white/10 text-gray-300'}`}>
                                🎂 {PERSONAL_BRAND_DATA.yearsOfExperience} Year Exp.
                            </div>
                        </div>

                        <div className="w-full h-px bg-gradient-to-r from-transparent via-current to-transparent opacity-20 mb-8" />

                        <div className="flex gap-4 mb-8">
                            <a href="https://github.com/codxbrexx" target="_blank" rel="noreferrer" className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${theme === 'light' ? 'bg-gray-100 text-gray-700 hover:bg-black hover:text-white' : 'bg-white/5 text-gray-400 hover:bg-white hover:text-black'}`}>
                                <FiGithub size={20} />
                            </a>
                            <a href={PERSONAL_BRAND_DATA.website} target="_blank" rel="noreferrer" className={`p-3 rounded-full transition-all duration-300 hover:scale-110 ${theme === 'light' ? 'bg-gray-100 text-gray-700 hover:bg-blue-600 hover:text-white' : 'bg-white/5 text-gray-400 hover:bg-blue-500 hover:text-white'}`}>
                                <FiUser size={20} />
                            </a>
                        </div>

                        <div className="grid grid-cols-2 gap-4 w-full">
                            {PERSONAL_BRAND_DATA.stats.map((stat, idx) => (
                                <div key={idx} className={`p-3 rounded-2xl border ${theme === 'light' ? 'bg-white/50 border-white text-gray-800' : 'bg-black/20 border-white/5 text-gray-200'
                                    }`}>
                                    <div className="text-xl font-bold">{stat.value}</div>
                                    <div className="text-[10px] uppercase tracking-wide opacity-70">{stat.label}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Right Column: Content Tabs */}
                <div className="lg:col-span-8 xl:col-span-9">
                    {/* Tabs Navigation */}
                    <div className="flex flex-wrap gap-4 mb-8">
                        {tabs.map((tab) => (
                            <button
                                key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                className={`flex items-center gap-2 px-6 py-3 rounded-full font-bold uppercase tracking-wider text-sm transition-all duration-300 ${activeTab === tab.id
                                    ? (theme === 'light'
                                        ? 'bg-black text-white shadow-lg transform scale-105'
                                        : 'bg-white text-black shadow-lg shadow-white/20 transform scale-105')
                                    : (theme === 'light'
                                        ? 'bg-white/50 text-gray-600 hover:bg-white hover:text-black'
                                        : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white')
                                    }`}
                            >
                                <tab.icon size={18} />
                                {tab.label}
                            </button>
                        ))}
                    </div>

                    {/* Tab Content Area */}
                    <div className={`rounded-3xl border backdrop-blur-md p-6 md:p-8 min-h-[500px] ${theme === 'light'
                        ? 'bg-white/40 border-white/60 shadow-xl'
                        : 'bg-white/5 border-white/10'
                        }`}>
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={activeTab}
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="h-full"
                            >
                                {activeTab === 'skills' && <SkillsSection theme={theme} />}
                                {activeTab === 'bio' && <BioSection theme={theme} />}
                                {activeTab === 'achievements' && <AchievementsSection theme={theme} />}
                                {activeTab === 'github' && <GithubSection theme={theme} />}
                            </motion.div>
                        </AnimatePresence>
                    </div>
                </div>
            </div>
        </section>
    );
};

const SkillsSection = ({ theme }) => (
    <div className="h-full">
        <h3 className={`text-2xl font-black uppercase tracking-tighter mb-8 ${theme === 'light' ? 'text-black' : 'text-white'}`}>Technical Arsenal</h3>
        <Skills theme={theme} />
    </div>
);

const BioSection = ({ theme }) => (
    <div className="space-y-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div>
                <h3 className={`text-2xl font-black uppercase tracking-tighter mb-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>Philosophy</h3>
                <ul className="space-y-6">
                    {PERSONAL_BRAND_DATA.philosophy.map((item, idx) => (
                        <motion.li
                            initial={{ opacity: 0, y: 10 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: idx * 0.1 }}
                            key={idx}
                            className={`text-lg font-medium flex gap-4 ${theme === 'light' ? 'text-gray-700' : 'text-gray-300'}`}
                        >
                            <span className="text-indigo-500 font-bold min-w-[20px]">0{idx + 1}.</span>
                            {item}
                        </motion.li>
                    ))}
                </ul>
            </div>
            <div>
                <h3 className={`text-2xl font-black uppercase tracking-tighter mb-6 ${theme === 'light' ? 'text-black' : 'text-white'}`}>The Journey</h3>
                <div className={`p-6 rounded-2xl border ${theme === 'light' ? 'bg-white/60 border-white text-gray-700' : 'bg-black/20 border-white/10 text-gray-300'}`}>
                    <p className="text-lg leading-relaxed">
                        {PERSONAL_BRAND_DATA.journey.description}
                    </p>
                </div>

                <div className="mt-8">
                    <h4 className={`text-lg font-bold uppercase tracking-wider mb-4 ${theme === 'light' ? 'text-black' : 'text-white'}`}>Core Values</h4>
                    <div className="grid grid-cols-2 gap-4">
                        {PERSONAL_BRAND_DATA.values.slice(0, 4).map((val, idx) => (
                            <div key={idx} className={`p-3 rounded-xl border text-center ${theme === 'light' ? 'bg-white/40 border-gray-200' : 'bg-white/5 border-white/5'}`}>
                                <div className={`font-bold text-sm ${theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'}`}>{val.title}</div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    </div>
);



const AchievementsSection = ({ theme }) => (
    <div className="space-y-8">
        <h3 className={`text-2xl font-black uppercase tracking-tighter mb-8 ${theme === 'light' ? 'text-black' : 'text-white'}`}>
            Honors & Achievements
        </h3>
        <div className="grid grid-cols-1 gap-4">
            {PERSONAL_BRAND_DATA.achievements.map((item, idx) => (
                <motion.div
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: idx * 0.1 }}
                    className={`p-6 rounded-2xl border flex items-center gap-4 transition-all duration-300 hover:scale-[1.02] ${theme === 'light'
                        ? 'bg-white/60 border-gray-200 text-gray-800 hover:border-indigo-500/30 hover:shadow-lg'
                        : 'bg-white/5 border-white/10 text-gray-200 hover:bg-white/10 hover:border-white/20'
                        }`}
                >
                    <div className={`p-3 rounded-full ${theme === 'light' ? 'bg-indigo-100 text-indigo-600' : 'bg-indigo-500/20 text-indigo-400'}`}>
                        <FiAward size={24} />
                    </div>
                    <span className="text-lg font-medium">{item}</span>
                </motion.div>
            ))}
        </div>
    </div>
);

const GithubSection = ({ theme }) => (
    <GitHubActivity theme={theme} />
);

export default About;
