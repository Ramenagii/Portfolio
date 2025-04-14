import { motion, useScroll } from "framer-motion";
import { useState } from "react";
import { 
  FaPaintBrush, FaCode, FaMobileAlt, FaCamera, 
  FaDownload, FaGraduationCap, FaBriefcase, FaTools,
  FaHtml5, FaCss3, FaJs, FaReact, FaGitAlt, FaGithub,
  FaPhone, FaEnvelope, FaMapMarkerAlt, FaCalendarAlt,
  FaFlag, FaMars, FaUser, FaPray, FaWeight, FaRulerVertical,
  FaLanguage
} from "react-icons/fa";
import { SiTailwindcss } from "react-icons/si";

// Animation variants
const sectionVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.8 } },
};

const slideRightVariants = {
  hidden: { opacity: 0, x: 100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

const slideLeftVariants = {
  hidden: { opacity: 0, x: -100 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.8 } },
};

// Decorative animated component
const WiggleCircle = () => (
  <motion.div
    className="w-10 h-10 mr-2 bg-yellow-400 rounded-full"
    animate={{ y: [-5, 5, -5], rotate: [0, 15, -15, 0] }}
    transition={{ duration: 2, repeat: Infinity }}
  />
);

// Service skills array
const services = [
  {
    title: "Web Design",
    description: "Creative and functional web designs.",
    icon: FaPaintBrush,
  },
  {
    title: "Development",
    description: "Clean and efficient code.",
    icon: FaCode,
  },
  {
    title: "Apps",
    description: "Innovative mobile solutions.",
    icon: FaMobileAlt,
  },
  {
    title: "Photography",
    description: "Capturing moments with style.",
    icon: FaCamera,
  },
];

// Updated tech stack array with specific technologies and appropriate colors
const techCategories = {
  "Tech Stack": [
    { name: "HTML", icon: FaHtml5, color: "text-orange-500" },
    { name: "CSS", icon: FaCss3, color: "text-blue-500" },
    { name: "JavaScript", icon: FaJs, color: "text-yellow-500" },
    { name: "React", icon: FaReact, color: "text-blue-400" },
    { name: "Tailwind", icon: SiTailwindcss, color: "text-cyan-400" },
  ],
  "Tools": [
    { name: "Git", icon: FaGitAlt, color: "text-orange-600" },
    { name: "GitHub", icon: FaGithub, color: "text-gray-200" },
  ]
};

// Interactive technical skills array with proficiency levels
const skillsWithLevels = [
  { skill: "React JS", level: 85, color: "bg-blue-400" },
  { skill: "Tailwind CSS", level: 80, color: "bg-green-400" },
  { skill: "AutoCAD", level: 75, color: "bg-red-400" },
  { skill: "OOP", level: 80, color: "bg-purple-400" },
  { skill: "Python (Tkinter, SQLite3)", level: 70, color: "bg-yellow-400" },
];

export default function Profile() {
  const { scrollYProgress } = useScroll();
  const [activeCategory, setActiveCategory] = useState("Tech Stack");
  const [detailsCategory, setDetailsCategory] = useState("Basic");

  return (
    <>
      {/* About Section */}
      <section
        id="about"
        className="relative bg-gradient-to-br from-[#1f1f1f] via-[#181818] to-[#121212] min-h-screen px-6 sm:px-10 pt-20 pb-10 text-gray-200 overflow-hidden"
      >
        {/* Scroll Progress Bar */}
        <motion.div
          className="fixed top-0 left-0 h-1 bg-yellow-400 z-50 origin-left"
          style={{ scaleX: scrollYProgress }}
        />

        <motion.div
          className="grid md:grid-cols-3 gap-10"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.5 }}
          variants={sectionVariants}
        >
          {/* Personal Details */}
          <div className="bg-[#1f1f1f]/60 backdrop-blur-md p-6 rounded-xl border border-yellow-200/30 shadow-lg flex flex-col space-y-4">
            <h3 className="text-2xl font-bold text-yellow-400">Personal Details</h3>
            
            {/* Basic details / Contact toggles */}
            <div className="flex space-x-2">
              <motion.button
                className={`px-3 py-1 text-sm rounded-lg font-medium transition ${
                  detailsCategory === "Basic"
                    ? "bg-yellow-400 text-black"
                    : "bg-[#252525] text-gray-300 hover:bg-[#2a2a2a]"
                }`}
                onClick={() => setDetailsCategory("Basic")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Basic Info
              </motion.button>
              <motion.button
                className={`px-3 py-1 text-sm rounded-lg font-medium transition ${
                  detailsCategory === "Contact"
                    ? "bg-yellow-400 text-black"
                    : "bg-[#252525] text-gray-300 hover:bg-[#2a2a2a]"
                }`}
                onClick={() => setDetailsCategory("Contact")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Contact
              </motion.button>
              <motion.button
                className={`px-3 py-1 text-sm rounded-lg font-medium transition ${
                  detailsCategory === "Personal"
                    ? "bg-yellow-400 text-black"
                    : "bg-[#252525] text-gray-300 hover:bg-[#2a2a2a]"
                }`}
                onClick={() => setDetailsCategory("Personal")}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Personal
              </motion.button>
            </div>
            
            {/* Basic Info */}
            {detailsCategory === "Basic" && (
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-400">
                  <span className="font-semibold text-gray-300">Name:</span> Justin Lorenzo
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold text-gray-300">Age:</span> 19
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold text-gray-300">Hobbies:</span> Coding, Photography, Gaming, Music Production
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold text-gray-300">Education:</span> BS in Computer Engineering (PUP Mabini)
                </p>
                <p className="text-gray-400">
                  <span className="font-semibold text-gray-300">Nickname:</span> "Shoti"
                </p>
              </motion.div>
            )}
            
            {/* Contact Info */}
            {detailsCategory === "Contact" && (
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-400 flex items-center gap-2">
                  <FaPhone className="text-yellow-400" /> 
                  <span>+63 916 412 5045</span>
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <FaEnvelope className="text-yellow-400" /> 
                  <span>justinlorenzo@gmail.com</span>
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <FaMapMarkerAlt className="text-yellow-400" /> 
                  <span>City of San Jose del Monte, Bulacan, Philippines</span>
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <FaGithub className="text-yellow-400" /> 
                  <span>github.com/justinlrz</span>
                </p>
              </motion.div>
            )}
            
            {/* Personal Data */}
            {detailsCategory === "Personal" && (
              <motion.div 
                className="space-y-3"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                <p className="text-gray-400 flex items-center gap-2">
                  <FaCalendarAlt className="text-yellow-400" /> 
                  <span className="font-semibold text-gray-300">Date of Birth:</span> December 15, 2005
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <FaFlag className="text-yellow-400" /> 
                  <span className="font-semibold text-gray-300">Citizenship:</span> Filipino
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <FaMars className="text-yellow-400" /> 
                  <span className="font-semibold text-gray-300">Sex:</span> Male
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <FaUser className="text-yellow-400" /> 
                  <span className="font-semibold text-gray-300">Pronouns:</span> He/Him
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <FaUser className="text-yellow-400" /> 
                  <span className="font-semibold text-gray-300">Civil Status:</span> Single
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <FaPray className="text-yellow-400" /> 
                  <span className="font-semibold text-gray-300">Religion:</span> Roman Catholic
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <FaWeight className="text-yellow-400" /> 
                  <span className="font-semibold text-gray-300">Weight:</span> 55 kg
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <FaRulerVertical className="text-yellow-400" /> 
                  <span className="font-semibold text-gray-300">Height:</span> 5'6" / 168 cm
                </p>
                <p className="text-gray-400 flex items-center gap-2">
                  <FaLanguage className="text-yellow-400" /> 
                  <span className="font-semibold text-gray-300">Languages:</span> English (Fluent), Filipino (Native)
                </p>
              </motion.div>
            )}
          </div>

          {/* Main About Content */}
          <div className="md:col-span-2 space-y-10">
            {/* About Section */}
            <div>
              <h2 className="text-4xl font-bold text-yellow-400 flex items-center mb-4">
                <WiggleCircle />
                About Me
              </h2>
              <motion.div
                className="h-1 w-24 bg-yellow-400 rounded-full mb-6"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1 }}
              />
              <p className="text-gray-400 leading-relaxed text-base sm:text-lg">
                Hey there! I'm Justin—a Computer Engineering student with a flair for creativity, coding, and quirky ideas. 
                My work blends clean design with technical expertise to build engaging digital experiences. Highly motivated with 
                strong foundations in mathematics, programming, and hardware systems. Passionate about technology and problem-solving, 
                with growing expertise in web development and computer hardware.
              </p>
            </div>

            {/* What I Do */}
            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">What I Do</h3>
              <motion.div
                className="h-1 w-24 bg-yellow-400 rounded-full mb-6"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.2 }}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {services.map(({ title, description, icon: Icon }, idx) => (
                  <motion.div
                    key={idx}
                    className="relative bg-[#1f1f1f]/60 backdrop-blur-md p-6 rounded-xl border border-yellow-200/20 shadow transition-transform hover:scale-[1.03] hover:shadow-lg"
                    whileHover={{ scale: 1.03, rotate: 1 }}
                    transition={{ duration: 0.3 }}
                  >
                    <div
                      className="absolute top-2 right-2 text-yellow-400 p-2 rounded-full hover:ring hover:ring-yellow-300/40"
                      aria-label={title}
                    >
                      <Icon />
                    </div>
                    <h4 className="text-yellow-400 font-semibold mb-2">{title}</h4>
                    <p className="text-sm text-gray-400">{description}</p>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Tech Stack & Tools Section with Clickable Categories */}
            <div>
              <h3 className="text-2xl font-semibold text-yellow-400 mb-4">Tech Stack & Tools</h3>
              <motion.div
                className="h-1 w-24 bg-yellow-400 rounded-full mb-6"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 1, delay: 0.4 }}
              />

              {/* Tech Category Navigation */}
              <div className="flex items-center space-x-2 mb-6">
                {Object.keys(techCategories).map((category) => (
                  <motion.button
                    key={category}
                    className={`px-4 py-2 rounded-lg font-medium transition ${
                      activeCategory === category
                        ? "bg-yellow-400 text-black"
                        : "bg-[#1f1f1f]/60 text-gray-300 hover:bg-[#252525]"
                    }`}
                    onClick={() => setActiveCategory(category)}
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    {category}
                  </motion.button>
                ))}
              </div>

              {/* Tech Items Display */}
              <motion.div
                className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
                key={activeCategory} // Force re-render animation when category changes
              >
                {techCategories[activeCategory].map(({ name, icon: Icon, color }, idx) => (
                  <motion.div
                    key={idx}
                    className="bg-[#1f1f1f]/60 backdrop-blur-md p-3 rounded-lg border border-yellow-200/20 shadow hover:shadow-lg transition-transform flex items-center gap-3"
                    whileHover={{ scale: 1.05 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3, delay: idx * 0.05 }}
                  >
                    <Icon className={`text-2xl ${color}`} />
                    <p className="text-sm text-gray-300 font-medium">{name}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Resume Section */}
      <motion.section
        id="resume"
        className="min-h-screen px-6 sm:px-10 py-16 bg-[#121212] text-gray-200"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        variants={slideRightVariants}
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
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaDownload /> Download Resume
          </motion.a>
        </div>

        <div className="grid md:grid-cols-2 gap-10">
          <div className="space-y-10">
            {/* Education */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaGraduationCap /> Education
              </h3>
              <div className="space-y-4">
                <motion.div 
                  className="bg-[#1f1f1f]/60 backdrop-blur-md p-4 rounded-xl border border-yellow-200/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-yellow-400 font-medium">Polytechnic University of the Philippines - Mabini</p>
                  <p className="text-sm text-gray-400">BS in Computer Engineering — Graduating 2027</p>
                  <p className="text-sm mt-1">Honor: Academic Achiever</p>
                </motion.div>
                <motion.div 
                  className="bg-[#1f1f1f]/60 backdrop-blur-md p-4 rounded-xl border border-yellow-200/20"
                  whileHover={{ scale: 1.02 }}
                >
                  <p className="text-yellow-400 font-medium">Colegio De San Jose Del Monte</p>
                  <p className="text-sm text-gray-400">STEM Strand Graduate — With Honors</p>
                </motion.div>
              </div>
            </motion.div>

            {/* Experience */}
            <motion.div
              initial={{ opacity: 0, x: 100 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaBriefcase /> Experience
              </h3>
              <motion.div 
                className="bg-[#1f1f1f]/60 backdrop-blur-md p-4 rounded-xl border border-yellow-200/20"
                whileHover={{ scale: 1.02 }}
              >
                <p className="text-yellow-400 font-medium">RKEA Builders and Supply</p>
                <p className="text-sm text-gray-400">Construction Project Assistant</p>
                <p className="text-sm mt-1">
                  Assisted in project planning, AutoCAD layouts, and coordination with engineers for optimized workflows.
                </p>
              </motion.div>
            </motion.div>

            {/* Contributions */}
            <motion.div
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{ duration: 0.8 }}
            >
              <h3 className="text-xl font-semibold mb-4 flex items-center gap-2">
                <FaTools /> Contributions
              </h3>
              <motion.div 
                className="bg-[#1f1f1f]/60 backdrop-blur-md p-4 rounded-xl border border-yellow-200/20"
                whileHover={{ scale: 1.02 }}
              >
                <ul className="list-disc list-inside space-y-2 text-gray-300">
                  <li>Developed algorithm visualizer using JavaScript and CSS frameworks.</li>
                  <li>Implemented flashcards and notes feature in a student activity management app.</li>
                </ul>
              </motion.div>
            </motion.div>
          </div>

          {/* Interactive Technical Skills */}
          <motion.div
            className="bg-[#1f1f1f]/60 backdrop-blur-md p-6 rounded-xl border border-yellow-200/20"
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-xl font-semibold mb-6">Technical Skills</h3>
            {skillsWithLevels.map(({ skill, level, color }, idx) => (
              <motion.div
                key={idx}
                className="mb-6"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {/* Skill Title and Level */}
                <div className="flex justify-between text-sm mb-2">
                  <span>{skill}</span>
                  <motion.span
                    animate={{ x: [0, 5, -5, 0] }}
                    transition={{ repeat: Infinity, duration: 1, ease: "easeInOut", repeatDelay: 2 }}
                  >
                    {level}%
                  </motion.span>
                </div>

                {/* Interactive Progress Bar */}
                <div className="w-full h-2 bg-gray-700 rounded relative overflow-hidden">
                  <motion.div
                    className={`h-2 ${color} rounded`}
                    initial={{ width: 0 }}
                    whileInView={{ width: `${level}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 1.2 }}
                  ></motion.div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </motion.section>
    </>
  );
}