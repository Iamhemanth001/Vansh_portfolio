import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrophy, FaCode, FaLayerGroup, FaTimes, FaBrain } from "react-icons/fa";
import internshipImg from "../../assets/images/internship.png";

const achievements = [
  {
    title: "AI/ML Research Internship – DRDO",
    year: "2025",
    icon: FaBrain,
    image: internshipImg,
    badge: "Internship 🧠",
    buttonText: "View Internship Details",
    description:
      "Completed a prestigious research internship at Defence Research & Development Organisation (DRDO), focusing on classification of encrypted images using neural networks. Worked on real-world datasets and implemented deep learning models to analyze complex patterns efficiently.",
    highlights: [
      "Worked on encrypted image datasets for classification",
      "Implemented neural network models (CNN-based)",
      "Gained hands-on experience in AI/ML research",
      "Improved model performance using preprocessing techniques"
    ]
  },
  {
    title: "500+ DSA Problems Solved",
    year: "2024–Present",
    icon: FaCode,
    image: "/problem-achievement.png",
    description:
      "Engineered optimized solutions for over 500 Data Structures and Algorithms challenges on platforms like LeetCode and GeeksforGeeks. Built a robust foundation in algorithmic problem-solving, advanced data structures, and systemic complexity reduction.",
  },
  {
    title: "Full Stack Projects Built",
    year: "2024–Present",
    icon: FaLayerGroup,
    image: "/fullstack-achievement.png",
    description:
      "Architected and deployed diverse full-stack applications, including a real-time secure communication platform (VMeet), dynamic travel listing system (Wanderlust), and a computer vision-driven Hand Gesture Recognition capability.",
  },
];

export default function Achievements() {
  const [selectedAchievement, setSelectedAchievement] = useState(achievements[0]);
  const [modalImage, setModalImage] = useState(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <section className="min-h-screen py-24 bg-transparent relative w-full flex flex-col justify-center overflow-hidden z-10 font-poppins">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-[400px] h-[400px] bg-purple-600/10 md:bg-purple-600/20 rounded-full blur-[100px] md:blur-[120px] -translate-y-1/2 -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-[400px] h-[400px] bg-cyan-600/10 md:bg-cyan-600/20 rounded-full blur-[100px] md:blur-[120px] -translate-y-1/2 -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-20">
        
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20 space-y-4"
        >
          <div className="relative inline-block">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-cyan-400 to-indigo-400">
              Achievements & Highlights
            </h2>
          </div>
          <p className="text-gray-400 max-w-2xl mx-auto text-base md:text-lg tracking-wide leading-relaxed pt-2">
            Milestones and accomplishments reflecting my technical growth, research curiosity, and problem-solving methodology.
          </p>
        </motion.div>

        {/* Content Section: 2 Columns */}
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Image Area */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="w-full lg:w-5/12"
          >
            <div
              className="relative group rounded-3xl overflow-hidden cursor-pointer shadow-[0_0_30px_rgba(34,211,238,0.15)] md:shadow-[0_0_40px_rgba(168,85,247,0.2)] transition-all duration-500 hover:shadow-[0_0_60px_rgba(168,85,247,0.4)] hover:-translate-y-2"
              onClick={() => setModalImage(selectedAchievement.image || "/heroImage.webp")}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-500 to-cyan-500 rounded-3xl opacity-30 md:opacity-50 blur-xl group-hover:opacity-100 transition duration-500"></div>

              <div className="relative bg-[#04081c] rounded-3xl p-1 md:p-2 h-[400px] md:h-[500px] w-full border border-purple-500/20 overflow-hidden flex flex-col justify-center">
                
                {selectedAchievement.badge && (
                  <div className="absolute top-6 left-6 z-30">
                    <span className="bg-[#0b0f19]/90 backdrop-blur-md border border-purple-500/30 text-purple-300 text-sm px-4 py-2 rounded-full font-semibold shadow-[0_0_20px_rgba(168,85,247,0.6)] animate-pulse">
                      {selectedAchievement.badge}
                    </span>
                  </div>
                )}

                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedAchievement.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={selectedAchievement.image || "/heroImage.webp"}
                    alt={selectedAchievement.title}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105 opacity-90 group-hover:opacity-100"
                    onError={(e) => {
                      e.target.style.display = "none";
                      e.target.parentElement.classList.add(
                        "flex", "items-center", "justify-center", "bg-gray-800/50"
                      );
                      if (!e.target.parentElement.querySelector('.fallback-placeholder')) {
                        e.target.parentElement.innerHTML +=
                          '<div class="fallback-placeholder text-gray-400 flex flex-col items-center"><svg stroke="currentColor" fill="currentColor" stroke-width="0" viewBox="0 0 576 512" height="48" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M528 32H48C21.5 32 0 53.5 0 80v352c0 26.5 21.5 48 48 48h480c26.5 0 48-21.5 48-48V80c0-26.5-21.5-48-48-48zm-352 96c35.3 0 64 28.7 64 64s-28.7 64-64 64-64-28.7-64-64 28.7-64 64-64zm112 236.8c0 10.6-10 19.2-22.4 19.2H86.4C74 384 64 375.4 64 364.8v-22.7c0-71.8 82.8-103.7 131.5-63.5 39.5 32.5 98.6 15.3 121.7-29.3 16.5-31.9 66.8-29.8 80.3 3.6 12 29.5 54.4 29.4 66.4-.1.3-.8.6-1.5.8-2.3-25.7 30.5-64.4 34.6-96.8 12.3-33-22.7-80.4-15.3-108 19.3-18.7 23.5-41.9 33.7-67.4 33.7-32.9 0-59.5-22.8-63.4-53.9 32.4 20.2 75.3 15.5 101.4-13.8 19.6-21.9 49.3-31 77.2-22.3 22.5-44.5 75.3-43 96.6 2.8v106.1z"></path></svg><span class="mt-4">Placeholder Image</span></div>';
                      }
                    }}
                  />
                </AnimatePresence>

                {/* Glassmorphism Overlay Text */}
                <div className="absolute inset-x-4 bottom-4 p-4 rounded-xl bg-[#0b0f19]/80 backdrop-blur-md border border-cyan-500/30 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 shadow-[0_10px_30px_rgba(0,0,0,0.5)]">
                  <p className="text-cyan-100 font-medium flex items-center justify-center gap-2 text-sm md:text-base tracking-wide">
                    <selectedAchievement.icon className="text-purple-400" />
                    {selectedAchievement.buttonText || "Click to view achievement"}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column: Timeline Nodes */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-50px" }}
            className="w-full lg:w-7/12 relative"
          >
            {/* Vertical glowing line */}
            <div className="absolute left-6 md:left-[30px] top-[40px] bottom-10 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500/50 to-transparent z-0" />

            <div className="space-y-8 md:space-y-12">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative pl-16 md:pl-20 group cursor-pointer ${
                    selectedAchievement.title === item.title ? "opacity-100" : "opacity-60 hover:opacity-100"
                  } transition-opacity duration-300`}
                  onClick={() => setSelectedAchievement(item)}
                  onMouseEnter={() => setSelectedAchievement(item)}
                >
                  {/* Timeline Node Rings */}
                  {/* Animated outer ring */}
                  <div className={`absolute left-[24px] md:left-[30px] top-6 md:top-8 w-6 h-6 md:w-8 md:h-8 rounded-full border ${
                    selectedAchievement.title === item.title ? "border-cyan-400/80 scale-150" : "border-purple-400/30 group-hover:border-cyan-400/60"
                  } transition-all duration-500 -translate-x-1/2 -translate-y-1/2 z-10 bg-[#020617]`} />
                  
                  {/* Glowing inner node */}
                  <div className={`absolute left-[24px] md:left-[30px] top-6 md:top-8 w-3 h-3 md:w-4 md:h-4 rounded-full ${
                    selectedAchievement.title === item.title ? "bg-cyan-400 shadow-[0_0_20px_rgba(34,211,238,1)] scale-110" : "bg-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.5)]"
                  } transition-all duration-300 -translate-x-1/2 -translate-y-1/2 z-10`} />

                  {/* Achievement Card */}
                  <div className={`relative p-5 md:p-8 rounded-3xl backdrop-blur-md border ${
                    selectedAchievement.title === item.title 
                      ? "bg-[#0b0f19] border-cyan-400/30 shadow-[0_10px_30px_rgba(34,211,238,0.1)] -translate-y-1" 
                      : "bg-[#0b0f19]/50 border-purple-500/10 hover:border-purple-500/30"
                  } transition-all duration-500`}>
                    
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 md:gap-4 mb-4">
                      
                      <div className="flex items-start md:items-center gap-3 md:gap-5">
                        <div className={`w-12 h-12 flex-shrink-0 rounded-2xl flex items-center justify-center border transition-colors ${
                          selectedAchievement.title === item.title 
                            ? "bg-gradient-to-br from-cyan-500/20 to-purple-500/20 border-cyan-400/40 text-cyan-400 shadow-[inset_0_0_15px_rgba(34,211,238,0.2)]"
                            : "bg-purple-500/10 border-purple-500/20 text-purple-400 group-hover:bg-purple-500/20"
                        }`}>
                          <item.icon className="text-xl md:text-2xl transition-colors" />
                        </div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-gray-100 tracking-wide">
                          {item.title}
                        </h3>
                      </div>

                      <span className="inline-flex px-4 py-1.5 rounded-full bg-cyan-500/10 border border-cyan-500/20 text-xs md:text-sm text-cyan-300 font-semibold whitespace-nowrap self-start sm:self-auto mt-2 sm:mt-0 ml-16 sm:ml-0">
                        {item.year}
                      </span>
                    </div>

                    <p className="text-gray-300 text-sm md:text-base leading-relaxed pl-16 md:pl-0 border-l-2 md:border-l-0 border-purple-500/30 md:pl-0 ml-6 md:ml-0">
                      {item.description}
                    </p>

                    {item.highlights && selectedAchievement.title === item.title && (
                      <ul className="mt-4 space-y-2 pl-16 md:pl-0 ml-6 md:ml-0 overflow-hidden animate-in slide-in-from-top-4 duration-500">
                        {item.highlights.map((hlt, idx) => (
                          <li key={idx} className="flex items-start gap-2 text-sm text-gray-300">
                            <span className="text-purple-400 font-bold mt-0.5">▹</span>
                            {hlt}
                          </li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {modalImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-[#020617]/90 backdrop-blur-xl"
            onClick={() => setModalImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden shadow-[0_0_50px_rgba(168,85,247,0.3)] flex items-center justify-center bg-[#0b0f19] p-2 border border-purple-500/30"
              onClick={(e) => e.stopPropagation()} // Prevent close on image click
            >
              <button
                className="absolute top-6 right-6 z-10 w-10 h-10 bg-white/10 hover:bg-purple-500/40 border border-white/10 hover:border-purple-500/50 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-all duration-300 shadow-lg"
                onClick={() => setModalImage(null)}
              >
                <FaTimes className="w-5 h-5" />
              </button>
              
              <div className="relative w-full h-full rounded-xl overflow-hidden flex justify-center bg-[#04081c]">
                <img
                  src={modalImage}
                  alt="Achievement Preview"
                  className="w-full h-auto max-h-[85vh] object-contain"
                  onError={(e) => {
                    e.target.style.display = "none";
                    e.target.parentElement.innerHTML +=
                      '<div class="text-gray-400 text-center p-20 flex flex-col items-center"><svg class="w-16 h-16 mb-4 text-purple-500/50" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg>Image not available</div>';
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
