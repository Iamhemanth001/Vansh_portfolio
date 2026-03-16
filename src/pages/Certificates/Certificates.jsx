import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Calendar, Building, ExternalLink, X } from "lucide-react";

const certificates = [
  {
    title: "Google’s Adversarial Nibbler Project – Certificate of Participation",
    organization: "School of Computer Science & Engineering, Lovely Professional University",
    date: "June 2025",
    description: "Participated in Google's Adversarial Nibbler Project and solved challenging adversarial programming problems.",
    image: "/certificates/google-nibbler.png",
  },
  {
    title: "Data Structures and Algorithms – Training Program",
    organization: "Skillstone Institute",
    date: "June 2024",
    description: "Completed an intensive training program covering Trees, Graphs, Dynamic Programming, Recursion, and Greedy Algorithms.",
    image: "/certificates/dsa-training.png",
  },
  {
    title: "Computer Communications Specialization",
    organization: "University of Colorado System (Coursera)",
    date: "November 18, 2024",
    description: "Completed networking specialization including TCP/IP, Packet Switching Networks, Peer-to-Peer Protocols, and Network Communication fundamentals.",
    image: "/certificates/networking-specialization.png",
  },
];

export default function Certificates() {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    document.body.style.overflow = "hidden";
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = "unset";
  };

  return (
    <section id="certificates" className="py-32 relative bg-transparent overflow-hidden">
      {/* Background glowing orbs */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10 max-w-7xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent mb-6">
            Certifications
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Professional certifications and training programs validating my technical knowledge and continuous learning.
          </p>
        </motion.div>

        {/* Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certificates.map((cert, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="group relative h-full flex flex-col"
            >
              {/* Outer Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-purple-600/50 rounded-2xl opacity-0 group-hover:opacity-30 blur-xl transition duration-700 pointer-events-none" />

              <div className="relative bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl overflow-hidden flex flex-col h-full shadow-2xl transition-all duration-300 hover:border-blue-500/30 hover:-translate-y-2">

                {/* Image Section */}
                <div className="relative h-48 overflow-hidden cursor-pointer" onClick={() => openModal(cert.image)}>
                  <div className="absolute inset-0 bg-gray-800 animate-pulse" /> {/* Placeholder if image missing */}
                  <img
                    src={cert.image}
                    alt={cert.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 relative z-10"
                    onError={(e) => {
                      // Fallback visual if image hasn't been added to public folder yet
                      e.target.style.display = 'none';
                      e.target.parentElement.innerHTML += '<div class="absolute inset-0 flex items-center justify-center bg-gray-800 text-gray-500"><svg class="w-12 h-12" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg></div>';
                    }}
                  />
                  {/* Overlay on hover */}
                  <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-center justify-center">
                    <span className="bg-white/10 backdrop-blur-md text-white px-4 py-2 rounded-full font-medium text-sm flex items-center gap-2">
                      🔍 View Certificate
                    </span>
                  </div>
                </div>

                {/* Content Section */}
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-bold text-gray-100 mb-3 group-hover:text-blue-400 transition-colors">
                    {cert.title}
                  </h3>

                  <div className="space-y-2 mb-4">
                    <div className="flex items-start gap-2 text-gray-400 text-sm">
                      <Building className="w-4 h-4 mt-0.5 shrink-0 text-purple-400" />
                      <span>{cert.organization}</span>
                    </div>
                    <div className="flex items-center gap-2 text-gray-400 text-sm">
                      <Calendar className="w-4 h-4 text-blue-400" />
                      <span>{cert.date}</span>
                    </div>
                  </div>

                  <p className="text-gray-300 text-sm leading-relaxed mb-6 flex-grow border-l-2 border-white/10 pl-3">
                    {cert.description}
                  </p>

                  <button
                    onClick={() => openModal(cert.image)}
                    className="w-full mt-auto py-2.5 rounded-xl bg-white/5 border border-white/10 text-gray-300 text-sm font-medium transition-all duration-300 hover:bg-white/10 hover:text-white hover:border-blue-500/30 flex items-center justify-center gap-2"
                  >
                    View Details
                    <ExternalLink className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
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
            <div className="absolute inset-0 bg-black/80 backdrop-blur-xl" />

            {/* Close Button */}
            <button
              className="absolute top-6 right-6 z-10 p-2 bg-white/10 hover:bg-white/20 hover:scale-110 rounded-full text-white backdrop-blur-md transition-all duration-300"
              onClick={closeModal}
            >
              <X className="w-6 h-6" />
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
              <img
                src={selectedImage}
                alt="Certificate full preview"
                className="max-w-full max-h-[90vh] object-contain rounded-xl shadow-2xl border border-white/10"
                onError={(e) => {
                  e.target.style.display = 'none';
                  e.target.parentElement.innerHTML += '<div class="flex flex-col items-center justify-center p-12 bg-gray-900 rounded-xl border border-white/10"><svg class="w-16 h-16 text-gray-600 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" /></svg><p class="text-gray-400">Image not found. Please verify the path.</p></div>';
                }}
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
