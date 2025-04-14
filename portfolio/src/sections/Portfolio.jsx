import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// ==================== DATA ====================
const ITEMS = [
  {
    title: "S.C.A.M. APP",
    category: "App",
    description: "Developed a collaborative note-taking system with real-time synchronization via Socket.IO",
    featured: true,
    image: "SCAM.jpg"
  },
  {
    title: "Personal website",
    category: "Web",
    description: "This website was built using React and Vite, styled with Tailwind CSS, and animated with Framer Motion.",
    image: "Pwebsite.jpg"
  },
  {
    title: "DSA Visualizer",
    category: "Web",
    description: "Created an interactive educational tool demonstrating data structures and algorithms.",
    featured: true,
    image: "DSA.jpg"
  },
];

const CATEGORIES = ["All", "Web", "App"];

// ==================== COMPONENTS ====================
const CategoryButton = ({ category, isActive, onClick }) => (
  <motion.button
    onClick={onClick}
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.95 }}
    className={`px-4 py-2 rounded-full text-sm font-medium border transition-colors
      ${
        isActive
          ? "bg-primary text-black shadow-glow"
          : "border-primary text-primary hover:bg-primary/10"
      }`}
    aria-label={`Filter by ${category}`}
  >
    {category}
  </motion.button>
);

const PortfolioItemCard = ({ item }) => (
  <motion.div 
    whileHover={{ scale: 1.02 }}
    whileTap={{ scale: 0.98 }}
    className="relative bg-secondary rounded-xl border-2 border-primary overflow-hidden group cursor-pointer"
  >
    <div className="relative h-48 overflow-hidden">
      <img 
        src={item.image} 
        alt={item.title}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
    </div>
    
    <div className="p-4">
      <div className="flex items-center gap-2 mb-2">
        <span className="text-xs px-2 py-1 rounded-full bg-primary text-black uppercase font-bold">
          {item.category}
        </span>
        {item.featured && (
          <span className="text-xs px-2 py-1 rounded-full bg-yellow-400 text-black">
            ⭐ Featured
          </span>
        )}
      </div>
      
      <h3 className="text-lg font-bold text-primary mb-1">{item.title}</h3>
      <p className="text-sm text-gray-300">{item.description}</p>
      
      <motion.button 
        whileHover={{ x: 5 }}
        className="mt-3 text-primary font-semibold flex items-center gap-1"
      >
        Explore Project <span className="text-xl">→</span>
      </motion.button>
    </div>
  </motion.div>
);

// ==================== MAIN COMPONENT ====================
export default function Portfolio() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [activeProject, setActiveProject] = useState(0);
  const [isDragging, setIsDragging] = useState(false);

  const filteredItems = ITEMS.filter(item =>
    selectedCategory === "All" ? true : item.category === selectedCategory
  );

  // Drag to navigate
  const handleDragEnd = (event, info) => {
    if (Math.abs(info.offset.x) > 50) {
      setActiveProject(prev => 
        info.offset.x > 0 
          ? (prev - 1 + filteredItems.length) % filteredItems.length
          : (prev + 1) % filteredItems.length
      );
    }
    setIsDragging(false);
  };

  return (
    <section
      id="portfolio"
      className="min-h-screen px-4 md:px-10 py-16 bg-background text-text flex flex-col items-center"
    >
      <motion.h2 
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="text-5xl font-bold mb-12 text-center bg-gradient-to-r from-primary to-yellow-400 bg-clip-text text-transparent"
      >
        My Creations
      </motion.h2>

      {/* Category Filter */}
      <motion.div className="mb-12 flex flex-wrap gap-4 justify-center">
        {CATEGORIES.map(cat => (
          <CategoryButton
            key={cat}
            category={cat}
            isActive={selectedCategory === cat}
            onClick={() => setSelectedCategory(cat)}
          />
        ))}
      </motion.div>

      {/* Interactive Slider */}
      <div className="w-full max-w-4xl mb-16">
        <motion.div 
          drag="x"
          dragConstraints={{ left: 0, right: 0 }}
          onDragStart={() => setIsDragging(true)}
          onDragEnd={handleDragEnd}
          className="relative h-[500px] cursor-grab active:cursor-grabbing"
        >
          <AnimatePresence mode="wait">
            <motion.div
              key={filteredItems[activeProject]?.title}
              initial={{ scale: 0.9, opacity: 0, rotate: isDragging ? 0 : -5 }}
              animate={{ scale: 1, opacity: 1, rotate: 0 }}
              exit={{ scale: 0.8, opacity: 0, rotate: 5 }}
              transition={{ type: "spring", stiffness: 100 }}
              className="absolute w-full h-full"
            >
              <div className="relative h-full bg-secondary rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src={filteredItems[activeProject]?.image} 
                  alt={filteredItems[activeProject]?.title}
                  className="w-full h-full object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/90">
                  <h3 className="text-3xl font-bold text-primary mb-2">
                    {filteredItems[activeProject]?.title}
                  </h3>
                  <p className="text-gray-300">
                    {filteredItems[activeProject]?.description}
                  </p>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Project Grid */}
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-6xl"
      >
        {ITEMS.map((item, i) => (
          <PortfolioItemCard key={i} item={item} />
        ))}
      </motion.div>

      {/* Fun Background Elements */}
      <div className="fixed inset-0 -z-10 opacity-20">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-primary rounded-full"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, 40, 0],
              opacity: [0.2, 1, 0.2],
            }}
            transition={{
              duration: 2 + Math.random() * 3,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          />
        ))}
      </div>
    </section>
  );
}