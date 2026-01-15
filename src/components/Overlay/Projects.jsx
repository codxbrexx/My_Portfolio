import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import Tilt from "react-parallax-tilt";
import { PROJECTS } from "../../utils/data";
import { FiGithub, FiExternalLink, FiArrowUpRight } from "react-icons/fi";

const Projects = ({ theme }) => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start end", "end start"]
    });

    const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

    return (
        <section ref={containerRef} id="projects" className="relative w-full py-32 px-6 pointer-events-auto overflow-hidden">
            {/* Background Decor */}
            <div className={`absolute inset-0 opacity-20 pointer-events-none ${theme === 'light' ? 'bg-grid-black/[0.05]' : 'bg-grid-white/[0.05]'}`} />

            <motion.div
                style={{ y }}
                className="relative z-10 max-w-7xl mx-auto"
            >
                <div className="text-center mb-24">
                    <motion.h2
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8, ease: "circOut" }}
                        className={`text-5xl md:text-9xl font-black uppercase tracking-tighter mb-4 ${theme === 'light' ? 'text-black' : 'text-transparent bg-clip-text bg-gradient-to-b from-white to-white/20'
                            }`}
                    >
                        SELECTED <br />WORKS
                    </motion.h2>
                    <motion.div
                        initial={{ scaleX: 0 }}
                        whileInView={{ scaleX: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.5, duration: 1, ease: "circOut" }}
                        className={`h-1 w-24 mx-auto ${theme === 'light' ? 'bg-black' : 'bg-white'}`}
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-12">
                    {PROJECTS.map((project, index) => (
                        <ProjectCard key={project.id} project={project} index={index} theme={theme} />
                    ))}
                </div>
            </motion.div>
        </section>
    );
};

const ProjectCard = ({ project, index, theme }) => {
    const isLiveUrlValid = project.liveUrl && project.liveUrl.startsWith('http');

    return (
        <motion.div
            initial={{ opacity: 0, y: 100 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.1, ease: "circOut" }}
        >
            <Tilt
                tiltMaxAngleX={5}
                tiltMaxAngleY={5}
                perspective={1000}
                scale={1.02}
                className="h-full"
            >
                <div className={`group relative h-full flex flex-col rounded-3xl overflow-hidden border backdrop-blur-md transition-all duration-500 ${theme === 'light'
                    ? 'bg-white/60 border-white/60 hover:border-indigo-500/30 hover:shadow-2xl hover:shadow-indigo-500/10'
                    : 'bg-white/5 border-white/10 hover:border-indigo-500/40 hover:shadow-2xl hover:shadow-indigo-500/20'
                    }`}>
                    {/* Image Area */}
                    <div className="relative h-64 overflow-hidden border-b border-white/5">
                        <div className={`absolute inset-0 z-10 transition-opacity duration-300 ${theme === 'light' ? 'bg-black/0 group-hover:bg-black/10' : 'bg-black/20 group-hover:bg-black/40'
                            }`} />

                        <img
                            src={project.image}
                            alt={project.title}
                            className="w-full h-full object-cover transform transition-transform duration-700 ease-out group-hover:scale-110"
                        />

                        {/* Overlay Actions */}
                        <div className="absolute inset-0 z-20 flex items-center justify-center gap-4 opacity-0 group-hover:opacity-100 transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                            {project.githubUrl && (
                                <a
                                    href={project.githubUrl}
                                    target="_blank"
                                    rel="noreferrer"
                                    className="p-3.5 rounded-full bg-white text-black hover:bg-black hover:text-white hover:scale-110 transition-all duration-300 shadow-xl"
                                    title="View Code"
                                >
                                    <FiGithub size={22} />
                                </a>
                            )}
                            {project.liveUrl && (
                                isLiveUrlValid ? (
                                    <a
                                        href={project.liveUrl}
                                        target="_blank"
                                        rel="noreferrer"
                                        className="p-3.5 rounded-full bg-indigo-600 text-white hover:bg-indigo-700 hover:scale-110 transition-all duration-300 shadow-xl shadow-indigo-500/30"
                                        title="View Live Site"
                                    >
                                        <FiExternalLink size={22} />
                                    </a>
                                ) : (
                                    <div
                                        className="p-3.5 rounded-full bg-gray-500/50 text-white/50 cursor-not-allowed transition-all duration-300"
                                        title={project.liveUrl}
                                    >
                                        <FiExternalLink size={22} />
                                    </div>
                                )
                            )}
                        </div>

                        {/* Category Badge */}
                        <div className="absolute top-4 left-4 z-20">
                            <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider backdrop-blur-md border shadow-sm ${theme === 'light'
                                ? 'bg-white/90 border-white text-indigo-600'
                                : 'bg-black/60 border-white/10 text-indigo-400'
                                }`}>
                                {project.category}
                            </span>
                        </div>
                    </div>

                    {/* Content Area */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col relative z-20">
                        <div className="mb-auto">
                            <h3 className={`text-2xl font-black mb-3 flex items-center gap-2 tracking-tight ${theme === 'light' ? 'text-gray-900' : 'text-white'
                                }`}>
                                {project.title}
                                <FiArrowUpRight className={`opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform group-hover:translate-x-1 group-hover:-translate-y-1 ${theme === 'light' ? 'text-indigo-600' : 'text-indigo-400'
                                    }`} />
                            </h3>
                            <p className={`text-sm leading-relaxed mb-6 line-clamp-3 font-medium ${theme === 'light' ? 'text-gray-600' : 'text-gray-400'
                                }`}>
                                {project.description}
                            </p>
                        </div>

                        {/* Skills */}
                        <div className={`flex flex-wrap gap-2 mt-4 pt-4 border-t border-dashed ${theme === 'light' ? 'border-gray-200' : 'border-white/10'}`}>
                            {project.skills.slice(0, 4).map((skill, idx) => (
                                <span
                                    key={idx}
                                    className={`text-[10px] uppercase tracking-wider font-bold px-3 py-1.5 rounded-md ${theme === 'light'
                                        ? 'bg-indigo-50 text-indigo-600'
                                        : 'bg-indigo-500/10 text-indigo-300'
                                        }`}
                                >
                                    {skill}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>
            </Tilt>
        </motion.div>
    );
};

export default Projects;
