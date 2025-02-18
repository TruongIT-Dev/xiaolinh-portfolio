import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaHome, FaHeart, FaBriefcase, FaFileAlt, FaInstagram } from "react-icons/fa";

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

    return (
        <nav className="relative w-full bg-rose-200 bg-opacity-80 py-4 px-8 flex justify-between items-center shadow-lg text-gray-900">
            {/* Logo */}
            <div className="text-2xl font-bold text-white">
                <span className="text-rose-400">Linh Ta</span>Linh Tinh
            </div>

            {/* Navigation Links */}
            <ul className="flex gap-12 text-lg font-semibold">
                {navLinks.map((link) => (
                    <li key={link.path}>
                        <NavLink
                            to={link.path}
                            className={({ isActive }) =>
                                `relative flex items-center gap-1 capitalize transition-all duration-300 hover:text-pink-600 hover:font-bold ${isActive ? "font-bold text-pink-600" : "text-rose-400"}`
                            }
                        >
                            {link.icon}{link.name}
                            <span className="absolute left-1/2 bottom-0 w-0 h-[2px] bg-blue-400 transition-all duration-300 transform -translate-x-1/2 hover:w-full"></span>
                        </NavLink>
                    </li>
                ))}
            </ul>

            {/* Social Media Links */}
            <div className="flex gap-6 text-xl">
                {socialLinks.map((link, index) => (
                    <a key={index} href={link.href} className="hover:text-pink-600 hover:font-bold transition-colors duration-300">
                        {link.icon}
                    </a>
                ))}
            </div>
        </nav>
    );
};

export default Navbar;