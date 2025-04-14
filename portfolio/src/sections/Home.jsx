import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";

export default function Home() {
  const navigate = useNavigate();
  const [typingComplete, setTypingComplete] = useState(false);

  const titleText = "Computer Engineering Student";
  const titleArray = titleText.split("");

  // Animation variants
  const typingVariants = {
    hidden: { opacity: 0, y: -10 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: { delay: i * 0.08, duration: 0.2, ease: "easeOut" }
    })
  };

  const cursorVariants = {
    blinking: {
      opacity: [0, 1],
      transition: { duration: 1.5, repeat: Infinity }
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#0a0a0a] flex items-center justify-center relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="absolute inset-0 z-0">
        {/* Floating Gradient Mesh */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,#1a1a1a_0%,#0a0a0a_100%)]"></div>

      </div>

      {/* Content Card */}
      <motion.div
        className="relative z-10 w-full max-w-2xl px-4"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <div className="bg-[#1a1a1a]/90 backdrop-blur-xl border border-yellow-400/10 rounded-xl shadow-2xl p-8 relative overflow-hidden">
          {/* Animated Card Border */}
          <motion.div
            className="absolute inset-0 rounded-xl pointer-events-none"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 2 }}
          >
            <div className="absolute inset-0 bg-[conic-gradient(from_90deg_at_50%_50%,#1a1a1a_0%,#fbbf2450_25%,#1a1a1a_50%)] animate-spin-slow opacity-20"></div>
          </motion.div>

          {/* Profile Section */}
          <div className="flex justify-center mb-8 relative">
            <motion.div 
              className="w-48 h-48 rounded-full overflow-hidden border-4 border-yellow-400/30 relative group"
              whileHover={{ scale: 1.02 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <div className="absolute inset-0 bg-yellow-400/10 animate-pulse rounded-full" />
              <img
                src="pfp.jpg"
                alt="Profile"
                className="w-full h-full object-cover relative z-10"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-transparent mix-blend-overlay" />
            </motion.div>
          </div>

          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="text-center"
          >
            <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
              Justin R. Lorenzo
            </h1>

            {/* Typing Animation */}
            <div className="flex justify-center items-center h-12 mb-8">
              <motion.div
                className="text-xl text-gray-300 font-mono whitespace-nowrap"
                onAnimationComplete={() => setTypingComplete(true)}
              >
                {titleArray.map((char, i) => (
                  <motion.span
                    key={i}
                    custom={i}
                    variants={typingVariants}
                    initial="hidden"
                    animate="visible"
                  >
                    {char}
                  </motion.span>
                ))}
              </motion.div>
              <motion.div
                className="ml-1 w-2 h-8 bg-yellow-400"
                variants={cursorVariants}
                animate="blinking"
                initial={{ opacity: 0 }}
              />
            </div>

            <p className="text-gray-300 text-lg mb-8">
              Bridging hardware innovation with software excellence
              <br />
              Let's engineer the future together 👨💻
            </p>
          </motion.div>

          {/* Interactive Button */}
          <div className="flex justify-center">
            <motion.button
              onClick={() => navigate("/about")}
              whileHover={{ scale: 1.05, backgroundSize: '200%' }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-gradient-to-r from-yellow-400 to-yellow-600 text-black font-semibold rounded-lg 
                        transition-all bg-[length:100%_100%] hover:shadow-xl hover:shadow-yellow-400/20"
            >
              Explore Innovations →
            </motion.button>
          </div>
        </div>
      </motion.div>
    </div>
  );
}