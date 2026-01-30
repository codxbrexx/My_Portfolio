import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";
import { PROFILE_DATA } from "../utils/data";
import ContactForm from "../components/ContactForm";

const Contact = ({ theme }) => {
    const [activeTab, setActiveTab] = useState("info");

    return (
        <section className={`min-h-screen pt-32 px-6 pb-20 pointer-events-auto ${theme === 'light' ? 'bg-gray-50' : 'bg-black'}`}>
            <div className="max-w-7xl mx-auto">
                <div className="mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className={`text-3xl md:text-9xl font-black uppercase tracking-tighter mb-8 font-['Syne'] ${theme === 'light' ? 'text-black' : 'text-white'}`}
                    >
                        Get in Touch
                    </motion.h2>

                    {/* Sharp Tabs */}
                    <div className="flex gap-8 border-b border-gray-800 pb-px">
                        {['info', 'form'].map((tab) => (
                            <button                                                                                                     
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`
                                    relative pb-4 text-sm font-bold uppercase tracking-widest transition-colors duration-300
                                    ${activeTab === tab
                                        ? (theme === 'light' ? 'text-black' : 'text-white')
                                        : 'text-gray-500 hover:text-gray-400'
                                    }
                                `}
                            >
                                {tab === 'info' ? 'Contact Details' : 'Message Form'}
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="contactTabLine"
                                        className={`absolute bottom-0 left-0 right-0 h-1 ${theme === 'light' ? 'bg-black' : 'bg-white'}`}
                                    />
                                )}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="relative min-h-[500px]">
                    <AnimatePresence mode="wait">
                        {activeTab === 'info' ? (
                            <motion.div
                                key="info"
                                initial={{ opacity: 0, scale: 0.98 }}
                                animate={{ opacity: 1, scale: 1 }}
                                exit={{ opacity: 0, scale: 0.98 }}
                                transition={{ duration: 0.4, ease: "circOut" }}
                            >
                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8"> {/* Increased gap */}
                                    <ContactCard
                                        icon={<FiMail />}
                                        title="Email"
                                        value={PROFILE_DATA.email}
                                        href={`mailto:${PROFILE_DATA.email}`}
                                        accentColor="hover:border-violet-500 hover:shadow-[8px_8px_0px_0px_rgba(139,92,246,1)]"
                                        iconColor="text-violet-500"
                                        theme={theme}
                                    />
                                    <ContactCard
                                        icon={<FiPhone />}
                                        title="Phone"
                                        value={PROFILE_DATA.phone}
                                        href={`tel:${PROFILE_DATA.phone}`}
                                        accentColor="hover:border-cyan-500 hover:shadow-[8px_8px_0px_0px_rgba(6,182,212,1)]"
                                        iconColor="text-cyan-500"
                                        theme={theme}
                                    />
                                    <ContactCard
                                        icon={<FiMapPin />}
                                        title="Location"
                                        value={PROFILE_DATA.location}
                                        accentColor="hover:border-pink-500 hover:shadow-[8px_8px_0px_0px_rgba(236,72,153,1)]"
                                        iconColor="text-pink-500"
                                        theme={theme}
                                    />
                                </div>

                                {/* Sharp CTA */}
                                <div className={`mt-20 p-12 border-2 text-center transition-all duration-300 group ${theme === 'light'
                                    ? 'border-gray-200 bg-white hover:border-black'
                                    : 'border-white/10 bg-white/5 hover:border-white'
                                    }`}>
                                    <h3 className={`text-4xl font-['Syne'] font-bold mb-4 uppercase ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                                        Start a Project?
                                    </h3>
                                    <p className={`mb-8 font-mono text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>
                                        Initiate a dedicated conversation to build something exceptional.
                                    </p>
                                    <button
                                        onClick={() => setActiveTab('form')}
                                        className={`inline-flex items-center gap-3 px-8 py-4 text-sm font-bold uppercase tracking-wider border-2 transition-all duration-300 ${theme === 'light'
                                            ? 'bg-black text-white border-black hover:bg-transparent hover:text-black'
                                            : 'bg-white text-black border-white hover:bg-transparent hover:text-white'
                                            }`}
                                    >
                                        Launch Form <FiArrowRight />
                                    </button>
                                </div>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="form"
                                initial={{ opacity: 0, x: 20 }}
                                animate={{ opacity: 1, x: 0 }}
                                exit={{ opacity: 0, x: -20 }}
                                transition={{ duration: 0.3 }}
                                className="max-w-2xl mx-auto"
                            >
                                <div className={`p-1 border-2 ${theme === 'light' ? 'border-gray-100' : 'border-white/5'}`}>
                                    <ContactForm theme={theme} />
                                </div>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </div>
        </section>
    );
};

const ContactCard = ({ icon, title, value, href, accentColor, iconColor, theme }) => (
    <a
        href={href}
        className={`
            block p-8 border-2 transition-all duration-300 relative group min-h-[280px] flex flex-col justify-between
            ${theme === 'light'
                ? `bg-white border-gray-200 ${accentColor}`
                : `bg-[#0a0a0a] border-white/10 ${accentColor}`
            }
        `}
    >
        <div className={`
             mb-6 w-12 h-12 flex items-center justify-center border-2
             ${theme === 'light' ? 'border-gray-100 bg-gray-50' : 'border-white/10 bg-white/5'}
             group-hover:scale-110 transition-transform duration-300
        `}>
            <span className={`text-2xl ${iconColor}`}>{icon}</span>
        </div>

        <div>
            <h3 className={`text-2xl font-['Syne'] font-bold mb-2 uppercase ${theme === 'light' ? 'text-black' : 'text-white'}`}>
                {title}
            </h3>
            <p className={`font-mono text-sm break-all opacity-60 group-hover:opacity-100 transition-opacity ${theme === 'light' ? 'text-gray-600' : 'text-gray-300'}`}>
                {value}
            </p>
        </div>

        <div className={`absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 ${iconColor}`}>
            <FiArrowRight size={20} className="-rotate-45" />
        </div>
    </a>
);

export default Contact;
