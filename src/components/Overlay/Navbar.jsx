import { NavLink } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";

const Navbar = ({ theme, toggleTheme }) => {
    const navItems = [
        { name: "Home", path: "/" },
        { name: "Works", path: "/projects" },
        { name: "About", path: "/about" },
        { name: "Contact", path: "/contact" },
    ];

    return (
        <nav className="w-full p-8 flex justify-between items-center pointer-events-auto relative z-50">
            <NavLink
                to="/"
                className={`text-2xl font-bold tracking-tighter uppercase transition-colors duration-500 ${theme === 'light' ? 'text-black' : 'text-white'
                    }`}
            >
                CODXBREXX
            </NavLink>

            <div className="flex items-center gap-8">
                <div className="hidden md:flex gap-8">
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
        </nav>
    );
};

export default Navbar;
