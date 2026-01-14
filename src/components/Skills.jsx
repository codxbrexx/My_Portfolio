import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { SKILLS } from "../utils/data";
import { IoIosArrowDown } from "react-icons/io";

const SkillBar = ({ skill, index, isVisible, theme }) => {
  const [animatedLevel, setAnimatedLevel] = useState(0);

  useEffect(() => {
    if (isVisible) {
      const timer = setTimeout(() => {
        setAnimatedLevel(skill.level);
      }, index * 100);
      return () => clearTimeout(timer);
    } else {
      setAnimatedLevel(0);
    }
  }, [isVisible, skill.level, index]);

  const getSkillLevel = (level) => {
    if (level >= 90) return { text: "Expert", color: "text-green-400" };
    if (level >= 80) return { text: "Advanced", color: "text-blue-400" };
    if (level >= 70) return { text: "Intermediate", color: "text-yellow-400" };
    return { text: "Learning", color: "text-purple-400" };
  };

  const skillLevel = getSkillLevel(skill.level);

  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ delay: index * 0.05, duration: 0.5 }}
      className="mb-4 last:mb-0 group"
    >
      <div className="flex justify-between items-center mb-1">
        <div className="flex items-center gap-2">
          {skill.icon && <skill.icon className="text-[#0f9df8]" />}
          <span className={`font-medium text-sm ${theme === 'light' ? 'text-gray-700' : 'text-blue-100/90'}`}>
            {skill.name}
          </span>
          <span className={`text-[10px] px-2 py-0.5 rounded-full ${skillLevel.color} bg-white/5 border border-white/5`}>
            {skillLevel.text}
          </span>
        </div>
        <span className="text-xs text-blue-300/80 font-mono">
          {animatedLevel}%
        </span>
      </div>

      <div className="relative h-1.5 bg-blue-900/30 rounded-full overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#0f9df8] to-blue-400"
          initial={{ width: "0%" }}
          animate={{ width: `${animatedLevel}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
        <motion.div
          className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-[#0f9df8] to-blue-400 blur-sm opacity-50"
          initial={{ width: "0%" }}
          animate={{ width: `${animatedLevel}%` }}
          transition={{ duration: 1, ease: "easeOut" }}
        />
      </div>
    </motion.div>
  );
};

const Skills = ({ theme }) => {
  const [activeCategory, setActiveCategory] = useState(0);

  return (
    <section className="max-w-6xl mx-auto px-0 py-0 md:py-8">
      <motion.div
        className="text-center mb-12"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
      >
        <p className={`max-w-2xl mx-auto text-lg ${theme === 'light' ? 'text-gray-600' : 'text-blue-200/60'}`}>
          Interactive visualization of my technical skills and proficiency levels.
          Click on categories to explore.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {SKILLS.map((category, index) => {
          const isActive = activeCategory === index;
          return (
            <motion.div
              key={index}
              layout
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              onClick={() => setActiveCategory(isActive ? null : index)}
              className={`
                relative backdrop-blur-md rounded-2xl border 
                ${isActive
                  ? (theme === 'light' ? 'border-indigo-500/50 bg-white/60 shadow-lg' : 'border-[#0f9df8]/50 bg-[#0a0a0a]/40')
                  : (theme === 'light' ? 'border-gray-200 bg-white/40 hover:border-indigo-300' : 'border-white/10 bg-[#0a0a0a]/40 hover:border-white/20')
                }
                p-6 cursor-pointer transition-all duration-300 overflow-hidden
              `}
            >
              <div
                className={`absolute inset-0 opacity-0 transition-opacity duration-500 pointer-events-none -z-10
                    bg-gradient-to-br ${category.color} blur-3xl`}
                style={{ opacity: isActive ? (theme === 'light' ? 0.15 : 0.05) : 0 }}
              />

              <div className="flex items-center justify-between mb-2">
                <div className="flex items-center gap-4">
                  <div className={`p-3 rounded-lg bg-gradient-to-br ${category.color} bg-opacity-10`}>
                    <category.icon className={`${theme === 'light' ? 'text-white' : 'text-white'} text-xl`} />
                  </div>
                  <h3 className={`text-xl font-bold ${theme === 'light' ? 'text-gray-900' : 'text-white'}`}>{category.title}</h3>
                </div>
                <motion.div
                  animate={{ rotate: isActive ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <IoIosArrowDown className={theme === 'light' ? 'text-gray-500' : 'text-gray-400'} />
                </motion.div>
              </div>

              {!isActive && (
                <div className="flex flex-wrap gap-2 mt-4 ml-14">
                  {category.skills.slice(0, 3).map((skill, i) => (
                    <span key={i} className={`text-xs px-2 py-1 rounded-md ${theme === 'light' ? 'bg-gray-100 text-gray-600' : 'bg-white/5 text-gray-400'}`}>
                      {skill.name}
                    </span>
                  ))}
                  {category.skills.length > 3 && (
                    <span className={`text-xs px-2 py-1 rounded-md ${theme === 'light' ? 'bg-gray-100 text-gray-500' : 'bg-white/5 text-gray-500'}`}>
                      +{category.skills.length - 3} more
                    </span>
                  )}
                </div>
              )}

              <AnimatePresence>
                {isActive && (
                  <motion.div
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    transition={{ duration: 0.3 }}
                    className="mt-6 pl-2 pr-2"
                  >
                    <div className={`h-px w-full mb-6 ${theme === 'light' ? 'bg-gray-200' : 'bg-white/10'}`} />
                    <div className="space-y-5">
                      {category.skills.map((skill, i) => (
                        <SkillBar
                          key={i}
                          skill={skill}
                          index={i}
                          isVisible={isActive}
                          theme={theme}
                        />
                      ))}
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
