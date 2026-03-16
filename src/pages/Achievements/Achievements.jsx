import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { FaTrophy, FaCode, FaLayerGroup, FaTimes } from "react-icons/fa";

const achievements = [
  {
    title: "Google Adversarial Nibbler Project",
    year: "2025",
    icon: FaTrophy,
    image: "/google-achievement.png",
    description:
      "Earned ₹18,000 for successfully completing Google's Adversarial Nibbler Project organized by the School of Computer Science and Engineering at Lovely Professional University. The project involved solving complex adversarial challenges and demonstrating strong algorithmic and problem-solving abilities.",
  },
  {
    title: "500+ DSA Problems Solved",
    year: "2024–Present",
    icon: FaCode,
    image: "/problem-achievement.png",
    description:
      "Solved over 500 Data Structures and Algorithms problems on platforms like LeetCode and GeeksforGeeks, strengthening problem-solving skills and deep understanding of Trees, Graphs, Dynamic Programming, and Greedy algorithms.",
  },
  {
    title: "Full Stack Projects Built",
    year: "2024–Present",
    icon: FaLayerGroup,
    image: "/fullstack-achievement.png",
    description:
      "Developed multiple real-world full-stack applications including VMeet (real-time video meeting platform), Wanderlust (travel listing platform), Weather App, and a Hand Gesture Recognition ML project.",
  },
];

export default function Achievements() {
  // We will default to showing the first achievement's image initially.
  const [selectedAchievement, setSelectedAchievement] = useState(achievements[0]);
  // State for the fullscreen modal
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
    <section className="min-h-screen py-24 bg-transparent relative w-full flex flex-col justify-center overflow-hidden z-10">
      {/* Background Glows */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/10 md:bg-blue-600/20 rounded-full blur-[100px] md:blur-[120px] -translate-y-1/2 -z-10 pointer-events-none" />
      <div className="absolute top-1/2 right-0 w-96 h-96 bg-indigo-600/10 md:bg-indigo-600/20 rounded-full blur-[100px] md:blur-[120px] -translate-y-1/2 -z-10 pointer-events-none" />

      <div className="container mx-auto px-4 md:px-6 lg:px-8 max-w-7xl relative z-20">
        {/* Header section */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 space-y-4"
        >
          <h2 className="text-3xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-cyan-400 to-indigo-400 inline-block">
            Achievements & Highlights
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
            Milestones and accomplishments that reflect my technical growth,
            problem-solving ability, and real-world impact.
          </p>
          <div className="w-24 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto rounded-full mt-4" />
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
              className="relative group rounded-3xl overflow-hidden cursor-pointer shadow-[0_0_30px_rgba(59,130,246,0.15)] md:shadow-[0_0_40px_rgba(59,130,246,0.2)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(59,130,246,0.4)]"
              onClick={() => setModalImage(selectedAchievement.image || "/heroImage.webp")}
            >
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-3xl opacity-30 md:opacity-50 blur group-hover:opacity-100 transition duration-500"></div>

              <div className="relative bg-gray-900 rounded-3xl p-1 md:p-2 h-[350px] md:h-[450px] w-full border border-white/10 overflow-hidden">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={selectedAchievement.title}
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 1.05 }}
                    transition={{ duration: 0.5 }}
                    src={selectedAchievement.image || "/heroImage.webp"}
                    alt={selectedAchievement.title}
                    className="w-full h-full object-cover rounded-2xl transition-transform duration-700 group-hover:scale-105"
                    onError={(e) => {
                      e.target.style.display = "none";
                      // Fallback content... etc
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
                <div className="absolute bottom-4 left-4 right-4 p-4 rounded-xl bg-gray-900/60 backdrop-blur-md border border-white/10 transform translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                  <p className="text-white font-medium flex items-center justify-center gap-2 text-sm md:text-base">
                    <FaTrophy className="text-yellow-400" />
                    Click to view achievement
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
            <div className="absolute left-6 md:left-[30px] top-[30px] bottom-0 w-[2px] bg-gradient-to-b from-blue-500/50 via-indigo-500/30 to-transparent z-0" />

            <div className="space-y-8 md:space-y-12">
              {achievements.map((item, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className={`relative pl-16 md:pl-20 group cursor-pointer ${selectedAchievement.title === item.title ? "opacity-100" : "opacity-70 hover:opacity-100"
                    } transition-opacity duration-300`}
                  onClick={() => setSelectedAchievement(item)}
                  onMouseEnter={() => setSelectedAchievement(item)}
                >
                  {/* Timeline Node Rings */}
                  {/* Animated outer ring */}
                  <div className={`absolute left-[24px] md:left-[30px] top-6 md:top-8 w-6 h-6 md:w-8 md:h-8 rounded-full border ${selectedAchievement.title === item.title ? "border-blue-400/80 scale-125" : "border-blue-400/30 group-hover:border-blue-400/60"} transition-all duration-500 -translate-x-1/2 -translate-y-1/2 z-10`} />
                  {/* Glowing inner node */}
                  <div className={`absolute left-[24px] md:left-[30px] top-6 md:top-8 w-3 h-3 md:w-4 md:h-4 rounded-full bg-blue-500 ${selectedAchievement.title === item.title ? "shadow-[0_0_20px_rgba(59,130,246,1)] scale-110" : "shadow-[0_0_10px_rgba(59,130,246,0.5)]"} transition-all duration-300 -translate-x-1/2 -translate-y-1/2 z-10`} />

                  {/* Achievement Card */}
                  <div className={`relative p-5 md:p-6 rounded-2xl backdrop-blur-md border ${selectedAchievement.title === item.title ? "bg-gray-800/80 border-blue-500/50 shadow-[0_0_30px_rgba(59,130,246,0.15)] -translate-y-1" : "bg-gray-900/40 border-white/5"} transition-all duration-500`}>
                    <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-2 md:gap-4 mb-4">
                      <div className="flex items-start md:items-center gap-3 md:gap-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 flex-shrink-0 rounded-full bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 group-hover:border-blue-500/40 transition-colors">
                          <item.icon className="text-blue-400 text-lg md:text-xl group-hover:text-blue-300 transition-colors" />
                        </div>
                        <h3 className="text-lg md:text-xl lg:text-2xl font-bold text-white tracking-wide">
                          {item.title}
                        </h3>
                      </div>

                      <span className="inline-flex px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs text-blue-300 font-medium whitespace-nowrap self-start sm:self-auto ml-13 sm:ml-0 mt-2 sm:mt-0">
                        {item.year}
                      </span>
                    </div>

                    <p className="text-gray-400 text-sm md:text-base leading-relaxed pl-13 sm:pl-0 mt-2 md:mt-0">
                      {item.description}
                    </p>
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
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-xl"
            onClick={() => setModalImage(null)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full rounded-2xl overflow-hidden border border-white/10 shadow-[0_0_50px_rgba(0,0,0,0.8)] flex items-center justify-center bg-gray-900"
              onClick={(e) => e.stopPropagation()} // Prevent close on image click
            >
              <button
                className="absolute top-4 right-4 z-10 w-10 h-10 bg-black/50 hover:bg-gray-800 backdrop-blur-md rounded-full flex items-center justify-center text-white transition-colors"
                onClick={() => setModalImage(null)}
              >
                <FaTimes />
              </button>
              <img
                src={modalImage}
                alt="Achievement Preview"
                className="w-full h-auto max-h-[85vh] object-contain"
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.parentElement.innerHTML +=
                    '<div class="text-white text-center p-20">Image not available</div>';
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
