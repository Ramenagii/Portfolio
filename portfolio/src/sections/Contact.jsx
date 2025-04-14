import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { FiMail, FiLinkedin, FiGithub, FiSend, FiCheckCircle, FiAlertCircle } from "react-icons/fi";
import * as emailjs from '@emailjs/browser';

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [error, setError] = useState(null);

  // These values are hardcoded based on your provided credentials
  const EMAILJS_PUBLIC_KEY = 'm9GfbucyX_376WnYu';
  const EMAILJS_SERVICE_ID = 'service_6l06v78';
  const EMAILJS_TEMPLATE_ID = 'template_6blczcb';

  // Initialize EmailJS
  useEffect(() => {
    try {
      emailjs.init(EMAILJS_PUBLIC_KEY);
      console.log("EmailJS initialized successfully");
    } catch (err) {
      console.error("Failed to initialize EmailJS:", err);
      setError("Email service initialization failed. Please try again later.");
    }
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError(null);
    
    try {
      // Format time for the email
      const currentTime = new Date().toLocaleString();
      
      // Prepare template parameters - matching the names in your template
      const templateParams = {
        name: formData.name,       // Name parameter for template
        email: formData.email,     // Email parameter for template
        message: formData.message, // Message parameter for template
        time: currentTime          // Time parameter for template
      };
      
      // Send email using EmailJS
      const response = await emailjs.send(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        templateParams
      );
      
      console.log("Email sent successfully:", response);
      
      // Reset form on success
      setIsSubmitted(true);
      setFormData({ name: "", email: "", message: "" });
      
      // Reset submission status after 5 seconds
      setTimeout(() => setIsSubmitted(false), 5000);
    } catch (err) {
      console.error("Email sending failed:", err);
      setError("Failed to send message. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleInput = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact" className="min-h-screen px-6 sm:px-12 py-16 bg-[#121212] text-gray-200 relative overflow-hidden">
      {/* Animated Background Particles */}
      <div className="absolute inset-0 opacity-10">
        {[...Array(15)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            animate={{
              y: [0, 40, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
          />
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
        className="max-w-2xl mx-auto relative"
      >
        {/* Section Header */}
        <div className="mb-12 text-center">
          <motion.h2 
            className="text-4xl font-bold mb-4 bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent"
            whileHover={{ scale: 1.05 }}
          >
            Let's Build Tomorrow 🚀
          </motion.h2>
          <motion.p 
            className="text-lg mb-8 text-gray-400"
            whileHover={{ x: 5 }}
          >
            "The best way to predict the future is to create it."<br />
            - Abraham Lincoln
          </motion.p>
        </div>

        {/* Interactive Form Container */}
        <motion.form 
          onSubmit={handleSubmit}
          className="space-y-6 bg-[#1f1f1f]/50 backdrop-blur-sm p-8 rounded-2xl border border-yellow-400/20 shadow-2xl shadow-yellow-400/10"
          onHoverStart={() => setIsHovered(true)}
          onHoverEnd={() => setIsHovered(false)}
        >
          <AnimatePresence>
            {isHovered && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                className="absolute inset-0 bg-gradient-to-r from-yellow-400/5 to-transparent -z-10"
              />
            )}
          </AnimatePresence>

          {/* Form Inputs */}
          <motion.div whileHover={{ scale: 1.01 }}>
            <input
              name="name"
              value={formData.name}
              placeholder="Your Name"
              className="w-full bg-[#2d2d2d] p-4 rounded-xl border border-yellow-400/20 focus:border-yellow-400 focus:outline-none placeholder-gray-500"
              onChange={handleInput}
              required
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }}>
            <input
              name="email"
              type="email"
              value={formData.email}
              placeholder="your.email@domain.com"
              className="w-full bg-[#2d2d2d] p-4 rounded-xl border border-yellow-400/20 focus:border-yellow-400 focus:outline-none placeholder-gray-500"
              onChange={handleInput}
              required
            />
          </motion.div>

          <motion.div whileHover={{ scale: 1.01 }}>
            <textarea
              name="message"
              rows="4"
              value={formData.message}
              placeholder="Your vision starts here..."
              className="w-full bg-[#2d2d2d] p-4 rounded-xl border border-yellow-400/20 focus:border-yellow-400 focus:outline-none placeholder-gray-500"
              onChange={handleInput}
              required
            />
          </motion.div>

          {/* Submit Button */}
          <motion.button
            type="submit"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            disabled={isSubmitting || !Object.values(formData).every(Boolean)}
            className={`w-full py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-all
              ${isSubmitting || !Object.values(formData).every(Boolean) 
                ? "bg-gray-800 text-gray-500 cursor-not-allowed" 
                : "bg-yellow-400 text-black hover:bg-yellow-500"}`}
          >
            {isSubmitting ? (
              <motion.div 
                animate={{ rotate: 360 }}
                transition={{ duration: 1, repeat: Infinity }}
                className="w-5 h-5 border-2 border-black rounded-full border-t-transparent"
              />
            ) : (
              <>
                <FiSend className="text-xl" />
                {Object.values(formData).every(Boolean) ? "Launch Message" : "Complete All Fields"}
              </>
            )}
          </motion.button>
        </motion.form>

        {/* Social Connections */}
        <motion.div 
          className="mt-12 flex flex-col items-center gap-6"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
        >
          <p className="text-gray-400">Or connect directly:</p>
          
          <div className="flex gap-6">
            <motion.a
              href="https://linkedin.com/in/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#2d2d2d] hover:bg-yellow-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FiLinkedin className="text-2xl" />
            </motion.a>

            <motion.a
              href="https://github.com/your-profile"
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 rounded-full bg-[#2d2d2d] hover:bg-yellow-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FiGithub className="text-2xl" />
            </motion.a>

            <motion.a
              href="mailto:your.email@domain.com"
              className="p-3 rounded-full bg-[#2d2d2d] hover:bg-yellow-400 transition-colors"
              whileHover={{ scale: 1.1 }}
            >
              <FiMail className="text-2xl" />
            </motion.a>
          </div>
        </motion.div>

        {/* Submission Feedback */}
        <AnimatePresence>
          {isSubmitted && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8 p-4 bg-green-900/50 text-green-400 rounded-xl flex items-center gap-3 border border-green-400/20"
            >
              <FiCheckCircle className="text-2xl flex-shrink-0" />
              <div>
                <p className="font-semibold">Message received! 🎉</p>
                <p className="text-sm mt-1">Let's make amazing things happen - I'll respond within 24 hours!</p>
              </div>
            </motion.div>
          )}

          {error && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0 }}
              className="mt-8 p-4 bg-red-900/50 text-red-400 rounded-xl flex items-center gap-3 border border-red-400/20"
            >
              <FiAlertCircle className="text-2xl flex-shrink-0" />
              <div>
                <p className="font-semibold">Oops! Something went wrong.</p>
                <p className="text-sm mt-1">{error}</p>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}