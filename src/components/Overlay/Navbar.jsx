import { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { FaMoon, FaSun, FaBars, FaTimes } from "react-icons/fa";
import { AnimatePresence, motion } from "framer-motion";

const Navbar = ({ theme, toggleTheme }) => {
    const [isOpen, setIsOpen] = useState(false);
    const location = useLocation();

    // Close menu when route changes
    useEffect(() => {
        setIsOpen(false);
    }, [location]);

    // Prevent scrolling when menu is open
    useEffect(() => {
        if (isOpen) {
            document.body.style.overflow = "hidden";
        } else {
            document.body.style.overflow = "unset";
        }
        return () => {
            document.body.style.overflow = "unset";
        };
    }, [isOpen]);

    const navItems = [
        { name: "Home", path: "/" },
        { name: "Works", path: "/projects" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    const menuVariants = {
        closed: {
            opacity: 0,
            x: "100%",
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.05,
                staggerDirection: -1
            }
        },
        open: {
            opacity: 1,
            x: 0,
            transition: {
                type: "spring",
                stiffness: 400,
                damping: 40,
                staggerChildren: 0.07,
                delayChildren: 0.2
            }
        }
    };

    const itemVariants = {
        closed: { opacity: 0, y: 50 },
        open: { opacity: 1, y: 0 }
    };

    return (
        <nav className="w-full p-6 md:p-8 flex justify-between items-center pointer-events-auto relative z-50">
            <NavLink
                to="/"
                className={`text-xl md:text-2xl font-bold tracking-tighter uppercase transition-colors duration-500 z-50 relative ${isOpen
                    ? (theme === 'light' ? 'text-black' : 'text-white')
                    : (theme === 'light' ? 'text-black' : 'text-white')
                    }`}
            >
                CODXBREXX
            </NavLink>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
                <div className="flex gap-8">
                    {navItems.map((item) => (
                        <NavLink
                            key={item.name}
                            to={item.path}
                            className={({ isActive }) => `text-sm font-bold uppercase tracking-widest transition-all duration-300 hover:scale-110 ${theme === 'light'
                                ? (isActive ? 'text-black border-b-2 border-black' : 'text-gray-500 hover:text-black')
                                : (isActive ? 'text-white border-b-2 border-white' : 'text-gray-400 hover:text-white')
                                }`}
                        >
                            {item.name}
                        </NavLink>
                    ))}
                </div>

                <button
                    onClick={toggleTheme}
                    className={`p-3 rounded-full transition-all duration-500 ease-in-out ${theme === "light"
                        ? "bg-black text-white hover:rotate-180"
                        : "bg-white text-black hover:rotate-180"
                        }`}
                >
                    {theme === "light" ? <FaMoon size={20} /> : <FaSun size={20} />}
                </button>
            </div>

            {/* Mobile Hamburger & Theme Toggle */}
            <div className="flex items-center gap-4 md:hidden z-50">
                <button
                    onClick={toggleTheme}
                    className={`p-2 rounded-full transition-all duration-300 ${theme === "light" ? "bg-gray-100 text-black" : "bg-gray-800 text-white"
                        }`}
                >
                    {theme === "light" ? <FaMoon size={16} /> : <FaSun size={16} />}
                </button>

                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className={`text-2xl transition-colors duration-300 ${theme === 'light' ? 'text-black' : 'text-white'
                        }`}
                    aria-label="Toggle Menu"
                >
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu Overlay */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial="closed"
                        animate="open"
                        exit="closed"
                        variants={menuVariants}
                        className={`fixed inset-0 w-full h-full flex flex-col items-center overflow-y-auto mobile-menu-container ${theme === 'light' ? 'bg-white/95 text-black' : 'bg-black/95 text-white'
                            } backdrop-blur-md z-40 py-20`}
                    >
                        <div className="flex flex-col items-center gap-8 my-auto">
                            {navItems.map((item) => (
                                <motion.div key={item.name} variants={itemVariants}>
                                    <NavLink
                                        to={item.path}
                                        className={({ isActive }) => `text-4xl font-black uppercase tracking-tighter hover:text-indigo-500 transition-colors ${isActive ? 'text-indigo-600' : ''
                                            }`}
                                    >
                                        {item.name}
                                    </NavLink>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
