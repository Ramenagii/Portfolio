import { motion } from "framer-motion";
import { FaDownload, FaGraduationCap, FaBriefcase, FaTools } from "react-icons/fa";

const sectionVariants = {
  hidden: { opacity: 0, x: 100 }, // Slide in from the right
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

// Interactive and colorful skills array
const skills = [
  { skill: "React JS", level: 85, color: "bg-blue-400" },
  { skill: "Tailwind CSS", level: 80, color: "bg-green-400" },
  { skill: "AutoCAD", level: 75, color: "bg-red-400" },
  { skill: "OOP", level: 80, color: "bg-purple-400" },
  { skill: "Python (Tkinter, SQLite3)", level: 70, color: "bg-yellow-400" },
];

export default function Resume() {
  return (
    <motion.section
      id="resume"
      className="min-h-screen px-10 py-16 bg-[#121212] text-gray-200"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      variants={sectionVariants}
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-10">
        <h2 className="text-3xl font-bold text-yellow-400 flex items-center gap-2">
          <FaBriefcase /> Resume
        </h2>
        <motion.a
          href="/resume.pdf"
          download
          className="flex items-center gap-2 bg-yellow-400 text-black px-4 py-2 rounded hover:bg-yellow-300 transition"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <FaDownload /> Download Resume
        </motion.a>
      </div>

      {/* Profile Summary */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <p className="text-gray-300 leading-relaxed">
          A highly motivated <span className="text-yellow-400">Computer Engineering</span> student with strong foundations in <span className="text-yellow-400">mathematics, programming, and hardware systems</span>. Passionate about technology and problem-solving, with growing expertise in web development and computer hardware. Adaptive in teams and capable of independent technical problem-solving.
        </p>
      </motion.div>

      {/* Education */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaGraduationCap /> Education
        </h3>
        <div className="space-y-4">
          <div>
            <p className="text-yellow-400 font-medium">Polytechnic University of the Philippines - Mabini</p>
            <p className="text-sm text-gray-400">BS in Computer Engineering — Graduating 2027</p>
            <p className="text-sm mt-1">Honor: Academic Achiever</p>
          </div>
          <div>
            <p className="text-yellow-400 font-medium">Colegio De San Jose Del Monte</p>
            <p className="text-sm text-gray-400">STEM Strand Graduate — With Honors</p>
          </div>
        </div>
      </motion.div>

      {/* Experience */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaBriefcase /> Experience
        </h3>
        <div>
          <p className="text-yellow-400 font-medium">RKEA Builders and Supply</p>
          <p className="text-sm text-gray-400">Construction Project Assistant</p>
          <p className="text-sm mt-1">
            Assisted in project planning, AutoCAD layouts, and coordination with engineers for optimized workflows.
          </p>
        </div>
      </motion.div>

      {/* Contributions */}
      <motion.div
        className="mb-12"
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <FaTools /> Contributions
        </h3>
        <ul className="list-disc list-inside space-y-2 text-gray-300">
          <li>Developed algorithm visualizer using JavaScript and CSS frameworks.</li>
          <li>Implemented flashcards and notes feature in a student activity management app.</li>
        </ul>
      </motion.div>

      {/* Interactive Technical Skills */}
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8 }}
      >
        <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
        {skills.map(({ skill, level, color }, idx) => (
          <motion.div
            key={idx}
            className="mb-4"
            whileHover={{ scale: 1.05 }} // Hover interaction
            whileTap={{ scale: 0.95 }} // Click interaction
          >
            {/* Skill Title and Level */}
            <div className="flex justify-between text-sm mb-1">
              <span>{skill}</span>
              <motion.span
                animate={{ x: [0, 5, -5, 0] }} // Wiggle animation
                transition={{ repeat: Infinity, duration: 1, ease: "easeInOut" }}
              >
                {level}%
              </motion.span>
            </div>

            {/* Interactive Progress Bar */}
            <motion.div
              className="w-full h-2 bg-gray-700 rounded relative overflow-hidden"
              drag="x" // Drag interaction
              dragConstraints={{ left: 0, right: 200 }} 
            >
              <motion.div
                className={`h-2 ${color} rounded`}
                initial={{ width: 0 }}
                animate={{ width: `${level}%` }} 
                whileHover={{
                  backgroundColor: ["#fff", "#000"], 
                }}
                transition={{ duration: 0.8 }}
              ></motion.div>
            </motion.div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
