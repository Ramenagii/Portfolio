import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

const sections = [
  { id: "home", path: "/" },
  { id: "about", path: "/about" },
  { id: "portfolio", path: "/portfolio" },
  { id: "blog", path: "/blog" },
  { id: "contact", path: "/contact" },
];

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;
    setIsVisible(currentScrollY < lastScrollY || currentScrollY < 10);
    setLastScrollY(currentScrollY);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 left-1/2 transform -translate-x-1/2 z-40 bg-transparent px-10 py-4 flex justify-center space-x-6 text-lg border-b border-transparent transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
    >
      <div className="flex items-center space-x-4">
        {/* Logo */}
        <div className="text-yellow-400 text-xl font-bold">
          <i className="fas fa-code"></i> MyLogo
        </div>

        {/* Navigation Links */}
        {sections.map((section) => (
          <div key={section.id} className="relative">
            <NavLink
              to={section.path}
              className={({ isActive }) =>
                `capitalize px-4 py-2 transition-all duration-300 ease-in-out hover:text-yellow-400 ${
                  isActive
                    ? "text-yellow-500 font-semibold bg-yellow-100 rounded-md"
                    : "text-gray-400"
                }`
              }
            >
              {section.id === "home" ? "Home" : section.id}
            </NavLink>
          </div>
        ))}
      </div>
    </nav>
  );
}