import { useState } from "react";
import { FaBars, FaPhone, FaEnvelope, FaMapMarkerAlt, FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { motion } from "framer-motion";

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  return (
    <>
      {/* Hamburger Button */}
      <button
        className="fixed top-4 left-4 z-50 text-yellow-400 text-2xl focus:outline-none"
        onClick={() => setIsOpen(!isOpen)} // Toggle the sidebar
      >
        <FaBars />
      </button>

      {/* Sidebar */}
      <motion.div
        className={`fixed top-0 left-0 h-screen w-64 bg-[#1a1a1a] text-gray-200 p-6 shadow-lg transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out`}
      >
        {/* Profile Section */}
        <motion.img
          src="https://ui-avatars.com/api/?name=Justin&background=1a1a1a&color=ffffff"
          alt="Profile"
          className="w-24 h-24 rounded-full border-4 border-yellow-400 mb-4"
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        />
        <h2 className="text-xl font-semibold">Justin</h2>
        <p className="text-sm text-gray-400 mb-4">Creative Developer</p>

        {/* Contact Section */}
        <div className="text-sm space-y-2 mb-6">
          <p className="flex items-center gap-2">
            <FaPhone /> +123 456 789
          </p>
          <p className="flex items-center gap-2">
            <FaEnvelope /> you@email.com
          </p>
          <p className="flex items-center gap-2">
            <FaMapMarkerAlt /> San Jose del Monte, Philippines
          </p>
        </div>

        {/* Social Links */}
        <div className="flex gap-4 mt-auto">
          {[
            { icon: FaGithub, label: "GitHub" },
            { icon: FaLinkedin, label: "LinkedIn" },
            { icon: FaTwitter, label: "Twitter" },
          ].map(({ icon: Icon, label }, idx) => (
            <motion.div
              key={idx}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3 }}
              className="relative group"
              aria-label={label}
            >
              <Icon className="hover:text-yellow-400 cursor-pointer" />
              <span className="absolute -top-6 left-1/2 transform -translate-x-1/2 px-2 py-1 bg-gray-700 text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {label}
              </span>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </>
  );
}
