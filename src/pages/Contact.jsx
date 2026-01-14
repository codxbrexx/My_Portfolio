import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FiMail, FiPhone, FiMapPin, FiArrowRight } from "react-icons/fi";
import { PROFILE_DATA } from "../utils/data";
import ContactForm from "../components/ContactForm";

const Contact = ({ theme }) => {
    const [activeTab, setActiveTab] = useState("info");

    return (
        <section className="min-h-screen pt-32 px-6 pb-20 overflow-y-auto">
            <div className="text-center mb-12 relative z-10">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    <h2 className={`text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r ${theme === 'light'
                        ? 'from-gray-900 via-gray-900 to-gray-900'
                        : 'from-violet-200 via-white to-violet-200'
                        } mb-6`}>
                        Let&apos;s Work Together
                    </h2>
                    <p className={`max-w-2xl mx-auto text-lg mb-8 ${theme === 'light' ? 'text-gray-600' : 'text-blue-200/60'}`}>
                        Have a project in mind? Let&apos;s discuss how we can create something amazing together.
                    </p>

                    {/* Tabs */}
                    <div className={`inline-flex p-1 backdrop-blur-md rounded-xl border mb-8 ${theme === 'light' ? 'bg-gray-100 border-gray-200' : 'bg-white/5 border-white/10'}`}>
                        {['info', 'form'].map((tab) => (
                            <button
                                key={tab}
                                onClick={() => setActiveTab(tab)}
                                className={`
                                relative px-6 py-2.5 rounded-lg text-sm font-medium transition-all duration-300
                                ${activeTab === tab
                                        ? (theme === 'light' ? 'text-white' : 'text-white')
                                        : (theme === 'light' ? 'text-gray-500 hover:text-gray-900' : 'text-gray-400 hover:text-white')
                                    }
                            `}
                            >
                                {activeTab === tab && (
                                    <motion.div
                                        layoutId="contactTab"
                                        className="absolute inset-0 bg-violet-600 rounded-lg shadow-lg shadow-violet-500/20"
                                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                                    />
                                )}
                                <span className="relative z-10 flex items-center gap-2">
                                    {tab === 'info' ? '📍 Contact Info' : '✉️ Send Message'}
                                </span>
                            </button>
                        ))}
                    </div>
                </motion.div>
            </div>

            <div className="relative max-w-4xl mx-auto z-10 min-h-[500px]">
                <AnimatePresence mode="wait">
                    {activeTab === 'info' ? (
                        <motion.div
                            key="info"
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            exit={{ opacity: 0, x: 20 }}
                            transition={{ duration: 0.3 }}
                            className="space-y-6"
                        >
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                                <ContactCard
                                    icon={<FiMail />}
                                    title="Email"
                                    value={PROFILE_DATA.email}
                                    href={`mailto:${PROFILE_DATA.email}`}
                                    color="bg-violet-500/20 text-violet-400 border-violet-500/20"
                                    theme={theme}
                                />
                                <ContactCard
                                    icon={<FiPhone />}
                                    title="Phone"
                                    value={PROFILE_DATA.phone}
                                    href={`tel:${PROFILE_DATA.phone}`}
                                    color="bg-cyan-500/20 text-cyan-400 border-cyan-500/20"
                                    theme={theme}
                                />
                                <ContactCard
                                    icon={<FiMapPin />}
                                    title="Location"
                                    value={PROFILE_DATA.location}
                                    color="bg-pink-500/20 text-pink-400 border-pink-500/20"
                                    theme={theme}
                                />
                            </div>

                            {/* CTA Box */}
                            <div className={`mt-12 p-8 rounded-2xl border text-center backdrop-blur-md ${theme === 'light'
                                ? 'bg-white border-gray-200 shadow-xl'
                                : 'bg-gradient-to-br from-white/5 to-white/[0.02] border border-white/10'
                                }`}>
                                <h3 className={`text-2xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>Ready to start?</h3>
                                <p className={`mb-6 ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>Initiate a conversation by filling out the detailed form.</p>
                                <button
                                    onClick={() => setActiveTab('form')}
                                    className={`inline-flex items-center gap-2 px-6 py-3 rounded-xl font-semibold transition-colors ${theme === 'light'
                                        ? 'bg-black text-white hover:bg-gray-800'
                                        : 'bg-white text-black hover:bg-gray-200'
                                        }`}
                                >
                                    Go to Contact Form <FiArrowRight />
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
                        >
                            <ContactForm theme={theme} />
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>
        </section>
    );
};

const ContactCard = ({ icon, title, value, href, color, theme }) => (
    <div className={`p-6 rounded-2xl border flex flex-col items-center text-center transition-all duration-300 group ${theme === 'light'
        ? 'bg-white/60 border-gray-200 hover:border-violet-500/50 hover:shadow-xl hover:shadow-violet-500/10 backdrop-blur-md'
        : 'bg-[#0a0a0a]/40 border-white/5 hover:border-violet-500/30 hover:bg-white/5 hover:shadow-xl hover:shadow-violet-500/10 backdrop-blur-md'
        }`}>
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-2xl mb-4 border transition-transform duration-500 group-hover:scale-110 group-hover:rotate-6 ${color} ${theme === 'light' ? 'bg-opacity-20' : 'bg-opacity-10'}`}>
            {icon}
        </div>
        <h3 className={`text-xl font-bold mb-2 ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{title}</h3>
        {href ? (
            <a href={href} className={`text-sm transition-colors break-all font-medium ${theme === 'light'
                ? 'text-gray-600 group-hover:text-violet-600'
                : 'text-gray-400 group-hover:text-white'
                }`}>{value}</a>
        ) : (
            <p className={`text-sm ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'}`}>{value}</p>
        )}
    </div>
);

export default Contact;
