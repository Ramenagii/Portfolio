import { motion } from "framer-motion";
import { FiArrowUpRight, FiSearch, FiCalendar, FiClock, FiTag, FiBookmark, FiHeart } from "react-icons/fi";
import { useState, useEffect } from "react";

export default function Blog() {
  // State for blog functionality
  const [posts, setPosts] = useState([]);
  const [filteredPosts, setFilteredPosts] = useState([]);
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [bookmarkedPosts, setBookmarkedPosts] = useState([]);
  const [likedPosts, setLikedPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  // Available categories
  const categories = ["All", "Tech Insights", "Web Design", "Programming", "AI & ML"];

  // Generate mock posts data on component mount
  useEffect(() => {
    // Mock posts data with various categories and dates
    const mockPosts = [
      {
        id: 1,
        title: "The Future of Web Development",
        category: "Tech Insights",
        date: "Jan 15, 2025",
        readTime: "5 min read",
        excerpt: "Exploring cutting-edge technologies shaping tomorrow's web experiences. Dive into the latest trends and innovations in quantum computing integration, AI-driven development environments, and holographic UI frameworks.",
        imageEmoji: "📝"
      },
      {
        id: 2,
        title: "Mastering React Hooks in 2025",
        category: "Programming",
        date: "Feb 3, 2025",
        readTime: "7 min read",
        excerpt: "A comprehensive guide to using React Hooks effectively in modern applications. Learn advanced patterns, performance optimizations, and how to create custom hooks for reusable logic.",
        imageEmoji: "⚛️"
      },
      {
        id: 3,
        title: "Design Systems That Scale",
        category: "Web Design",
        date: "Mar 12, 2025",
        readTime: "4 min read",
        excerpt: "Building robust design systems that grow with your product. Discover strategies for maintaining consistency across platforms while allowing for flexibility and evolution.",
        imageEmoji: "🎨"
      },
      {
        id: 4,
        title: "AI-Powered Code Generation",
        category: "AI & ML",
        date: "Apr 8, 2025",
        readTime: "6 min read",
        excerpt: "How machine learning is transforming the way we write code. Explore the ethical implications, productivity gains, and potential limitations of AI pair programming tools.",
        imageEmoji: "🤖"
      }
    ];

    // Simulate loading delay
    setTimeout(() => {
      setPosts(mockPosts);
      setFilteredPosts(mockPosts);
      setIsLoading(false);
    }, 1000);
  }, []);

  // Filter posts based on search query and category
  useEffect(() => {
    let result = [...posts];
    
    // Filter by search query
    if (searchQuery) {
      result = result.filter(post => 
        post.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
        post.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
      );
    }
    
    // Filter by category
    if (selectedCategory !== "All") {
      result = result.filter(post => post.category === selectedCategory);
    }
    
    setFilteredPosts(result);
  }, [searchQuery, selectedCategory, posts]);

  // Toggle bookmark for a post
  const toggleBookmark = (postId) => {
    if (bookmarkedPosts.includes(postId)) {
      setBookmarkedPosts(bookmarkedPosts.filter(id => id !== postId));
    } else {
      setBookmarkedPosts([...bookmarkedPosts, postId]);
    }
  };

  // Toggle like for a post
  const toggleLike = (postId) => {
    if (likedPosts.includes(postId)) {
      setLikedPosts(likedPosts.filter(id => id !== postId));
    } else {
      setLikedPosts([...likedPosts, postId]);
    }
  };

  // Enhanced card animation variants
  const cardVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        delay: i * 0.1,
        duration: 0.4,
        ease: "easeOut"
      }
    })
  };

  // Skeleton loader animation
  const skeletonVariants = {
    initial: { opacity: 0.6 },
    animate: { opacity: 1 },
    transition: {
      repeat: Infinity,
      repeatType: "reverse",
      duration: 1
    }
  };

  return (
    <section id="blog" className="min-h-screen px-6 sm:px-12 py-16 bg-[#121212] text-gray-200 relative overflow-hidden">
      {/* Enhanced particle background */}
      <div className="absolute inset-0 opacity-10 pointer-events-none">
        {[...Array(20)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute w-1 h-1 bg-yellow-400 rounded-full"
            animate={{
              y: [0, 40, 0],
              opacity: [0.2, 1, 0.2],
              scale: [0.8, 1.2, 0.8]
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

      {/* Enhanced header */}
      <motion.h2 
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        className="text-4xl md:text-5xl font-bold mb-8 flex items-center group"
      >
        <motion.div
          className="w-12 h-12 mr-3 bg-yellow-400 rounded-full flex items-center justify-center shadow-glow"
          animate={{
            rotate: [0, 360],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: 4,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <span className="text-black text-2xl">✍️</span>
        </motion.div>
        <span className="bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 bg-clip-text text-transparent">
          Digital Chronicles
        </span>
      </motion.h2>

      {/* Search and filter section */}
      <motion.div 
        className="mb-10 space-y-6"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2, duration: 0.6 }}
      >
        {/* Search bar */}
        <div className="relative w-full max-w-xl">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full px-4 py-3 pl-12 bg-[#1f1f1f]/80 border border-yellow-400/20 rounded-xl focus:border-yellow-400/50 focus:outline-none focus:ring-1 focus:ring-yellow-400/30 text-gray-200 placeholder-gray-500 transition-all"
          />
          <FiSearch className="absolute left-4 top-1/2 transform -translate-y-1/2 text-yellow-400/60" />
        </div>

        {/* Category filter */}
        <div className="flex flex-wrap gap-2">
          {categories.map((category) => (
            <motion.button
              key={category}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                selectedCategory === category
                  ? "bg-yellow-400 text-black shadow-glow"
                  : "bg-[#1f1f1f]/80 text-gray-300 border border-yellow-400/20 hover:bg-[#252525]"
              }`}
              onClick={() => setSelectedCategory(category)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Stats and results */}
        <div className="text-sm text-gray-400">
          Showing {filteredPosts.length} of {posts.length} articles
          {bookmarkedPosts.length > 0 && ` • ${bookmarkedPosts.length} bookmarked`}
        </div>
      </motion.div>

      {/* Blog posts or loading state */}
      {isLoading ? (
        // Skeleton loaders
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {Array.from({ length: 4 }).map((_, idx) => (
            <motion.div
              key={idx}
              variants={skeletonVariants}
              initial="initial"
              animate="animate"
              className="bg-[#1f1f1f] p-6 rounded-2xl border-2 border-yellow-400/10"
            >
              <div className="h-48 rounded-xl mb-6 bg-gray-700/30 animate-pulse" />
              <div className="w-24 h-6 rounded-full bg-gray-700/30 mb-4 animate-pulse" />
              <div className="w-full h-8 rounded bg-gray-700/30 mb-4 animate-pulse" />
              <div className="w-36 h-4 rounded bg-gray-700/30 mb-4 animate-pulse" />
              <div className="space-y-2">
                <div className="w-full h-4 rounded bg-gray-700/30 animate-pulse" />
                <div className="w-full h-4 rounded bg-gray-700/30 animate-pulse" />
                <div className="w-3/4 h-4 rounded bg-gray-700/30 animate-pulse" />
              </div>
            </motion.div>
          ))}
        </div>
      ) : filteredPosts.length > 0 ? (
        // Blog posts grid
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 relative z-10">
          {filteredPosts.map((post, idx) => (
            <motion.div
              key={post.id}
              variants={cardVariants}
              initial="hidden"
              animate="visible"
              custom={idx}
              className="group relative bg-[#1f1f1f] p-6 rounded-2xl border-2 border-yellow-400/10 hover:border-yellow-400/30 shadow-2xl hover:shadow-yellow-400/20 transition-all duration-300"
              whileHover={{ y: -10, scale: 1.02 }}
            >
              {/* Enhanced gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/10 via-transparent to-transparent rounded-2xl" />

              {/* Dynamic image placeholder with hover effect */}
              <div className="relative h-48 rounded-xl mb-6 overflow-hidden transform transition-transform duration-300 group-hover:scale-95">
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-400 via-yellow-500 to-yellow-600 animate-gradient-x" />
                <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                  <motion.span 
                    className="text-4xl"
                    whileHover={{ scale: 1.2 }}
                  >
                    {post.imageEmoji}
                  </motion.span>
                </div>
              </div>

              {/* Content */}
              <div className="relative space-y-4">
                {/* Category chip and bookmark/like buttons */}
                <div className="flex items-center justify-between">
                  <motion.div 
                    className="inline-block"
                    whileHover={{ scale: 1.05 }}
                  >
                    <span className="px-3 py-1 rounded-full bg-yellow-400/10 text-yellow-400 text-sm font-medium border border-yellow-400/20 hover:bg-yellow-400/20 transition-colors">
                      {post.category}
                    </span>
                  </motion.div>
                  
                  <div className="flex gap-2">
                    <motion.button
                      onClick={() => toggleBookmark(post.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-full ${
                        bookmarkedPosts.includes(post.id) 
                          ? "bg-yellow-400/20 text-yellow-400" 
                          : "bg-gray-800/40 text-gray-400 hover:text-yellow-400"
                      } transition-colors`}
                      aria-label="Bookmark post"
                    >
                      <FiBookmark />
                    </motion.button>
                    
                    <motion.button
                      onClick={() => toggleLike(post.id)}
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      className={`p-2 rounded-full ${
                        likedPosts.includes(post.id) 
                          ? "bg-red-400/20 text-red-400" 
                          : "bg-gray-800/40 text-gray-400 hover:text-red-400"
                      } transition-colors`}
                      aria-label="Like post"
                    >
                      <FiHeart />
                    </motion.button>
                  </div>
                </div>

                <h3 className="text-2xl font-semibold bg-gradient-to-r from-yellow-400 to-yellow-600 bg-clip-text text-transparent">
                  {post.title}
                </h3>

                <div className="flex items-center text-sm text-yellow-400/80 space-x-3">
                  <span className="flex items-center gap-1">
                    <FiCalendar className="text-yellow-400/60" />
                    {post.date}
                  </span>
                  <span>•</span>
                  <span className="flex items-center gap-1">
                    <FiClock className="text-yellow-400/60" />
                    {post.readTime}
                  </span>
                </div>

                <p className="text-gray-400 leading-relaxed line-clamp-3">
                  {post.excerpt}
                </p>

                {/* Enhanced Read More button */}
                <motion.div 
                  className="mt-4"
                  whileHover={{ x: 5 }}
                >
                  <a
                    href={`#post-${post.id}`}
                    className="inline-flex items-center gap-2 text-yellow-400 hover:text-yellow-300 transition-colors font-medium"
                  >
                    <span>Continue Reading</span>
                    <FiArrowUpRight className="text-xl" />
                  </a>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        // No results found
        <motion.div 
          className="text-center py-16"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="inline-block p-6 rounded-full bg-yellow-400/10 mb-4">
            <span className="text-4xl">🔍</span>
          </div>
          <h3 className="text-2xl font-bold text-yellow-400 mb-2">No articles found</h3>
          <p className="text-gray-400 max-w-md mx-auto">
            We couldn't find any articles matching your search criteria. Try adjusting your filters or search term.
          </p>
          <motion.button
            onClick={() => {
              setSearchQuery("");
              setSelectedCategory("All");
            }}
            className="mt-6 px-6 py-3 bg-yellow-400 text-black font-medium rounded-lg hover:bg-yellow-300 transition-colors"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Reset Filters
          </motion.button>
        </motion.div>
      )}

      {/* Newsletter signup */}
      <motion.div
        className="mt-20 p-8 bg-gradient-to-br from-[#1f1f1f] to-[#121212] rounded-2xl border border-yellow-400/20"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="flex-1">
            <h3 className="text-2xl font-bold text-yellow-400 mb-2">
              Subscribe to our newsletter
            </h3>
            <p className="text-gray-400">
              Get the latest articles, tutorials, and updates directly to your inbox.
            </p>
          </div>
          <div className="flex-1 w-full">
            <div className="relative">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-3 bg-black/30 border border-yellow-400/20 rounded-xl focus:border-yellow-400/50 focus:outline-none focus:ring-1 focus:ring-yellow-400/30 pr-36 text-gray-200 placeholder-gray-500"
              />
              <motion.button
                className="absolute right-2 top-1/2 transform -translate-y-1/2 px-6 py-2 bg-yellow-400 text-black font-medium rounded-lg"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Subscribe
              </motion.button>
            </div>
            <p className="text-xs text-gray-500 mt-2">
              We respect your privacy. Unsubscribe at any time.
            </p>
          </div>
        </div>
      </motion.div>

      {/* Enhanced floating CTA */}
      <motion.div
        className="mt-16 text-center"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
      >
        <p className="text-xl text-yellow-400/80 mb-4 font-medium">
          More stories coming soon...
        </p>
        <div className="inline-block h-1 w-32 bg-yellow-400/30 rounded-full animate-pulse" />
      </motion.div>
    </section>
  );
}