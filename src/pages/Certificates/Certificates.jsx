import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Building, ExternalLink, X, Award } from "lucide-react";

const certificates = [
  {
    title: "Oracle Cloud Infrastructure 2025 Certified DevOps Professional",
    category: "DevOps",
    badge: "Professional Certification ☁️",
    organization: "Oracle",
    date: "September 2025",
    description: "Earned professional certification in Oracle Cloud Infrastructure DevOps, covering CI/CD pipelines, infrastructure automation, container orchestration, and cloud deployment strategies.",
    skills: ["CI/CD Pipelines", "Cloud Infrastructure", "DevOps Automation", "Containerization"],
    image: "/certificates/oracle.png", // Ensure this path exists or matches your file
  },
  {
    title: "AI/ML Research Internship – DRDO (SAG)",
    category: "AI/ML",
    badge: "Research Internship 🧠",
    organization: "Defence Research & Development Organisation",
    date: "June 2025 – July 2025",
    description: "Completed a research-based internship focused on classification of encrypted images using neural networks. Gained hands-on experience with deep learning models and real-world datasets.",
    skills: ["Deep Learning", "Neural Networks", "Image Processing", "Python"],
    image: "/certificates/internship.png", // Placeholder/fallback from experience section
  },
  {
    title: "Data Structures & Algorithms Training",
    category: "Core CS",
    badge: "Core Foundations ⚡",
    organization: "Skillstone Institute",
    date: "June 2024",
    description: "Completed an intensive program covering advanced data structures, algorithms, and problem-solving techniques.",
    skills: ["DSA", "Problem Solving", "Dynamic Programming", "Graph Algorithms"],
    image: "/certificates/dsa-training.png",
  },
];

const categories = ["All", "AI/ML", "DevOps", "Core CS"];

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  const filteredCertificates = certificates.filter(
    (cert) => activeFilter === "All" || cert.category === activeFilter
  );

  return (
    <section id="certificates" className="py-32 relative bg-[#020617] overflow-hidden font-poppins">

      {/* Background decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f71a_1px,transparent_1px),linear-gradient(to_bottom,#a855f71a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />
      </div>

      {/* Ambient glowing orbs */}
      <div className="absolute top-1/4 left-10 w-96 h-96 bg-purple-600/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-10 w-96 h-96 bg-cyan-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent mb-4 relative z-10 pb-2">
              Certifications & Achievements
            </h2>
          </div>
          <p className="text-gray-400 text-lg md:text-xl max-w-3xl mx-auto tracking-wide">
            Continuous learning in AI/ML, Cloud, and DevOps technologies
          </p>
        </motion.div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap justify-center gap-3 mb-16">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${activeFilter === category
                ? "bg-gradient-to-r from-purple-500 to-cyan-500 text-white shadow-[0_0_20px_rgba(168,85,247,0.4)] border-transparent"
                : "bg-gray-900/50 text-gray-400 border border-purple-500/20 hover:border-cyan-400/50 hover:text-white hover:bg-white/5"
                }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* Grid Layout */}
        <motion.div
          layout
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
        >
          <AnimatePresence>
            {filteredCertificates.map((cert, index) => (
              <motion.div
                layout
                key={cert.title} /* use title as key for good enter/exit animations */
                initial={{ opacity: 0, scale: 0.9, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.9, transition: { duration: 0.2 } }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="group relative h-full flex flex-col perspective-1000"
              >
                {/* Outer Glow Effect on Hover */}
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/50 to-cyan-500/50 rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition duration-700 pointer-events-none" />

                <div className="relative bg-[#0b0f19]/80 backdrop-blur-xl border border-purple-500/20 rounded-3xl overflow-hidden flex flex-col h-full shadow-2xl transition-all duration-500 group-hover:border-cyan-400/40 transform group-hover:-translate-y-2 group-hover:rotate-x-2 group-hover:scale-[1.02]">

                  {/* Top Badge */}
                  <div className="absolute top-4 left-4 z-30">
                    <span className="bg-[#0b0f19]/90 backdrop-blur-md border border-purple-500/30 text-purple-300 text-xs px-3 py-1.5 rounded-full font-semibold shadow-[0_4px_10px_rgba(0,0,0,0.5)]">
                      {cert.badge}
                    </span>
                  </div>

                  {/* Image Section */}
                  <div className="relative h-56 overflow-hidden cursor-pointer bg-[#04081c]" onClick={() => openModal(cert.image)}>
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0b0f19] via-transparent to-transparent z-10" />
                    <img
                      src={cert.image}
                      alt={cert.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 relative opacity-80 group-hover:opacity-100"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.parentElement.innerHTML += '<div class="absolute inset-0 flex items-center justify-center bg-gray-900 border-b border-white/5"><div class="flex flex-col items-center"><svg class="w-12 h-12 text-purple-500/50 mb-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg><span class="text-xs text-gray-500">Image unverified</span></div></div>';
                      }}
                    />

                    {/* Overlay on hover */}
                    <div className="absolute inset-0 bg-black/60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center backdrop-blur-[2px]">
                      <span className="bg-cyan-500/20 border border-cyan-400/50 text-cyan-50 px-5 py-2.5 rounded-full font-medium text-sm flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-all duration-300 shadow-[0_0_20px_rgba(34,211,238,0.3)]">
                        🔍 Preview Certificate
                      </span>
                    </div>
                  </div>

                  {/* Content Section */}
                  <div className="p-6 md:p-8 flex flex-col flex-grow relative z-20">
                    <h3 className="text-xl md:text-2xl font-bold text-gray-100 mb-4 group-hover:text-cyan-400 transition-colors leading-snug">
                      {cert.title}
                    </h3>

                    <div className="space-y-3 mb-6">
                      <div className="flex items-start gap-3 text-gray-400 text-sm">
                        <Building className="w-4 h-4 mt-0.5 shrink-0 text-purple-400" />
                        <span className="font-medium text-gray-300">{cert.organization}</span>
                      </div>
                      <div className="flex items-center gap-3 text-gray-400 text-sm">
                        <Calendar className="w-4 h-4 text-cyan-400" />
                        <span>{cert.date}</span>
                      </div>
                    </div>

                    <p className="text-gray-300 text-sm md:text-base leading-relaxed mb-6 flex-grow border-l-2 border-purple-500/30 pl-4 py-1">
                      {cert.description}
                    </p>

                    {/* Skill Tags */}
                    <div className="flex flex-wrap gap-2 mb-8 mt-auto">
                      {cert.skills.map(skill => (
                        <span key={skill} className="px-3 py-1 text-xs font-semibold rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <button
                      onClick={() => openModal(cert.image)}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-purple-500/10 to-cyan-500/10 border border-purple-500/30 text-gray-200 text-sm font-semibold transition-all duration-300 hover:from-purple-500/20 hover:to-cyan-500/20 hover:text-white hover:border-cyan-400/50 hover:shadow-[0_0_20px_rgba(34,211,238,0.2)] flex items-center justify-center gap-2"
                    >
                      View Certificate
                      <ExternalLink className="w-4 h-4" />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Fullscreen Image Modal */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6"
            onClick={closeModal}
          >
            {/* Modal Backdrop */}
            <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-xl" />

            {/* Close Button */}
            <button
              className="absolute top-6 right-6 z-10 p-3 bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 rounded-full text-white backdrop-blur-md transition-all duration-300 group"
              onClick={closeModal}
            >
              <X className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
            </button>

            {/* Expanded Image */}
            <motion.div
              initial={{ scale: 0.9, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.9, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="relative max-w-5xl w-full max-h-[90vh] flex items-center justify-center"
              onClick={(e) => e.stopPropagation()}
            >
              <div className="relative group/modal">
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg opacity-30 blur-xl transition duration-500" />
                <img
                  src={selectedImage}
                  alt="Certificate full preview"
                  className="relative max-w-full max-h-[85vh] object-contain rounded-xl shadow-2xl border border-white/10 p-1 bg-[#04081c]"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.parentElement.innerHTML += '<div class="flex flex-col items-center justify-center p-16 bg-[#0b0f19] rounded-xl border border-white/10 relative z-20"><svg class="w-20 h-20 text-purple-600/50 mb-6" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg><p class="text-gray-300 text-lg font-medium">Image not found.</p><p class="text-gray-500 mt-2 text-sm">Please provide the actual certificate image file.</p></div>';
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
