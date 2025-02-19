import { useState } from "react";
import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaHome, FaHeart, FaBriefcase, FaFileAlt, FaInstagram, FaBars, FaTimes } from "react-icons/fa";

const getLinksData = () => {
    return {
        navLinks: [
            { name: "Về mình", path: "/", icon: <FaHome /> },
            { name: "Sở thích", path: "*", icon: <FaHeart /> },
            { name: "Công Việc", path: "*", icon: <FaBriefcase /> },
            { name: "Resumé", path: "*", icon: <FaFileAlt /> },
        ],
        socialLinks: [
            { icon: <FaFacebook />, href: "https://www.facebook.com/tran.vu.ngoc.linh.147959" },
            { icon: <FaTwitter />, href: "#" },
            { icon: <FaInstagram />, href: "#" }
        ]
    };
};

const Navbar = () => {
    const { navLinks, socialLinks } = getLinksData();
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="w-full bg-rose-200 bg-opacity-80 py-4 px-6 shadow-lg text-gray-900 relative">
            <div className="flex justify-between items-center">
                {/* Logo */}
                <div className="text-2xl font-bold text-gray-900">
                    <span className="text-rose-400">Linh Ta</span>Linh Tinh
                </div>

                {/* Navigation Links - Desktop */}
                <ul className="invisible lg:visible lg:flex gap-8 text-lg font-semibold">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 transition-all duration-300 hover:text-pink-600 ${isActive ? "font-bold text-pink-600" : "text-rose-400"}`
                                }
                            >
                                {link.icon}{link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>

                {/* Social Media Links - Desktop */}
                <div className="invisible lg:visible lg:flex gap-4 text-xl">
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.href} className="hover:text-pink-600 transition-colors duration-300">
                            {link.icon}
                        </a>
                    ))}
                </div>

                {/* Hamburger Menu */}
                <button onClick={() => setIsOpen(!isOpen)} className="lg:hidden text-2xl focus:outline-none">
                    {isOpen ? <FaTimes /> : <FaBars />}
                </button>
            </div>

            {/* Mobile Menu */}
            <div className={`lg:hidden fixed inset-0 bg-white z-50 transform transition-transform duration-300 ${isOpen ? "translate-x-0" : "-translate-x-full"}`}>
                <div className="flex justify-between items-center p-6 border-b">
                    <div className="text-2xl font-bold text-gray-900">
                        <span className="text-rose-400">Linh Ta</span>Linh Tinh
                    </div>
                    <button onClick={() => setIsOpen(false)} className="text-2xl">
                        <FaTimes />
                    </button>
                </div>
                <ul className="flex flex-col items-center py-6 gap-6 text-lg font-semibold">
                    {navLinks.map((link) => (
                        <li key={link.path}>
                            <NavLink
                                to={link.path}
                                className={({ isActive }) =>
                                    `flex items-center gap-2 transition-all duration-300 hover:text-pink-600 ${isActive ? "font-bold text-pink-600" : "text-rose-400"}`
                                }
                                onClick={() => setIsOpen(false)}
                            >
                                {link.icon}{link.name}
                            </NavLink>
                        </li>
                    ))}
                </ul>
                <div className="flex justify-center gap-6 text-xl py-6 border-t">
                    {socialLinks.map((link, index) => (
                        <a key={index} href={link.href} className="hover:text-pink-600 transition-colors duration-300">
                            {link.icon}
                        </a>
                    ))}
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
