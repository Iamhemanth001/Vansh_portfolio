import React, { useState } from "react";
import { GraduationCap, X } from "lucide-react";
import certificateImg from "../../assets/images/training_certificate.png";
import groupPhotoImg from "../../assets/images/training_group_photo.jpeg";

const highlights = [
  <>Solved <span className="font-semibold text-white">500+ coding problems</span> on platforms like <span className="font-semibold text-white">LeetCode and GeeksforGeeks</span></>,
  <>Mastered advanced concepts including <span className="font-semibold text-white">Trees, Graphs, Dynamic Programming, Recursion, and Greedy Algorithms</span></>,
  <>Applied <span className="font-semibold text-white">time and space complexity optimization</span> techniques for efficient algorithm design</>,
  <>Strengthened <span className="font-semibold text-white">analytical thinking and competitive programming skills</span> through real coding challenges</>,
  <>Practiced solving <span className="font-semibold text-white">interview-level DSA problems</span></>
];

const technologies = [
  "Data Structures", "Algorithms", "Dynamic Programming", "Graph Algorithms",
  "Tree Traversal", "Greedy Algorithms", "Recursion", "Backtracking",
  "Time Complexity Analysis", "Space Optimization"
];

const TrainingSection = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  const openModal = (imgSrc) => {
    setSelectedImage(imgSrc);
    document.body.style.overflow = 'hidden'; // Prevent scrolling when modal is open
  };

  const closeModal = () => {
    setSelectedImage(null);
    document.body.style.overflow = 'unset';
  };

  return (
    <>
      <div className="min-h-screen bg-transparent relative overflow-hidden pt-32 pb-20">
        {/* Background base */}
        <div className="absolute inset-0 bg-transparent" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-blue-500/20 rounded-full animate-float"
              style={{
                top: `${(i * 37 + 11) % 100}%`,
                left: `${(i * 53 + 7) % 100}%`,
                animationDelay: `${(i * 0.4) % 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-6 mt-10">
          {/* Section header */}
          <div className="flex flex-col items-center space-y-6 mb-16">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-teal-400 to-blue-500 bg-clip-text text-center">
                Training Journey
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-cyan-500/20 to-purple-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              Strengthening problem-solving skills through intensive Data Structures &amp; Algorithms training.
            </p>
          </div>

          {/* Training Card */}
          <div className="max-w-5xl mx-auto">
            <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300">
              
              {/* Outer Glow Effect matching Contact & Skills */}
              <div className="absolute -inset-1 bg-gradient-to-r from-cyan-500/50 via-blue-500/50 to-purple-500/50 rounded-lg opacity-0 group-hover:opacity-30 blur-xl transition duration-700 pointer-events-none" />

              <div className="relative bg-gray-900/80 backdrop-blur-xl rounded-lg p-8 border border-white/10 shadow-[0_0_30px_rgba(0,0,0,0.5)] transition-all duration-300 group-hover:border-cyan-500/30">

                {/* Decorative corner — top right */}
                <div className="absolute top-4 right-4">
                  <div className="absolute top-0 right-0 w-6 h-[2px] bg-cyan-500/50" />
                  <div className="absolute top-0 right-0 w-[2px] h-6 bg-cyan-500/50" />
                </div>
                {/* Decorative corner — bottom left */}
                <div className="absolute bottom-4 left-4">
                  <div className="absolute bottom-0 left-0 w-6 h-[2px] bg-purple-500/50" />
                  <div className="absolute bottom-0 left-0 w-[2px] h-6 bg-purple-500/50" />
                </div>

                {/* TOP: Icon + Title + Institute + Duration */}
                <div className="flex flex-col md:flex-row md:items-start gap-4 mb-6">
                  <div className="relative flex-shrink-0">
                    <div className="absolute -inset-4 bg-gradient-to-r from-cyan-500 to-blue-500 opacity-25 rounded-full blur-xl group-hover:opacity-75 animate-pulse transition-all duration-500" />
                    <GraduationCap className="w-12 h-12 text-cyan-400 relative z-10 transform group-hover:rotate-12 transition-transform duration-300" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                      Data Structures &amp; Algorithms Training
                    </h3>
                    <div className="flex flex-wrap items-center gap-3 text-gray-300">
                      <span className="font-semibold text-blue-400 text-lg">Skillstone</span>
                      <span className="text-sm font-mono bg-blue-500/10 px-3 py-1 rounded-full border border-blue-500/20">
                        June 2025 – July 2025
                      </span>
                    </div>
                  </div>
                </div>

                {/* MIDDLE: Description + Highlights alongside images */}
                <div className="flex flex-col lg:flex-row gap-8">
                  {/* Left: Text content */}
                  <div className="flex-1 space-y-6">
                    <p className="text-gray-300 border-l-4 border-blue-500/50 pl-4 leading-relaxed">
                      Completed an intensive <span className="font-semibold text-white">Data Structures &amp; Algorithms</span> training program designed to strengthen algorithmic thinking and advanced problem-solving skills required for software engineering roles. The program focused on mastering fundamental data structures, designing optimized algorithms, and solving real interview-level coding problems.
                    </p>

                    {/* Key Highlights */}
                    <div>
                      <h4 className="text-lg font-bold text-cyan-400 mb-3 flex items-center gap-2">
                        <span>🏆</span> Key Highlights
                      </h4>
                      <ul className="space-y-3">
                        {highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm leading-relaxed">
                            <span className="text-yellow-400 mt-0.5 flex-shrink-0 text-base">🏅</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies & Concepts Covered */}
                    <div className="pt-2">
                      <h4 className="text-lg font-bold text-purple-400 mb-3 flex items-center gap-2">
                        <span>⚡</span> Technologies &amp; Concepts Covered
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs font-medium px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-gray-300 hover:bg-white/10 hover:border-blue-500/50 hover:text-white transition-all duration-300 cursor-default"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                  </div>

                  {/* Right: Images stacked */}
                  <div className="lg:w-80 flex flex-col gap-5">
                    {/* Group Photo — top */}
                    <div
                      className="group/img relative overflow-hidden rounded-lg border border-gray-700/50 cursor-pointer transition-all duration-300 hover:border-blue-500/50 hover:shadow-[0_0_20px_rgba(59,130,246,0.3)]"
                      onClick={() => openModal(groupPhotoImg)}
                    >
                      <img
                        src={groupPhotoImg}
                        alt="Training Group Photo"
                        className="w-full h-48 object-cover transform group-hover/img:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <p className="text-white text-sm font-semibold tracking-wide flex items-center gap-2">
                          <span>🔍</span> Click to expand
                        </p>
                      </div>
                      {/* Static label */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-blue-500/90 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full font-medium shadow-lg">
                          Group Photo
                        </span>
                      </div>
                    </div>

                    {/* Certificate — bottom */}
                    <div
                      className="group/img relative overflow-hidden rounded-lg border border-gray-700/50 cursor-pointer transition-all duration-300 hover:border-cyan-500/50 hover:shadow-[0_0_20px_rgba(6,182,212,0.3)]"
                      onClick={() => openModal(certificateImg)}
                    >
                      <img
                        src={certificateImg}
                        alt="Training Certificate"
                        className="w-full h-40 object-cover transform group-hover/img:scale-110 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-4">
                        <p className="text-white text-sm font-semibold tracking-wide flex items-center gap-2">
                          <span>🔍</span> Click to expand
                        </p>
                      </div>
                      {/* Static label */}
                      <div className="absolute top-3 left-3">
                        <span className="bg-cyan-500/90 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full font-medium shadow-lg">
                          Certificate
                        </span>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>
          </div>
        </div>

        {/* Ambient glow blobs */}
        <div className="absolute top-20 left-20 w-96 h-96 bg-cyan-500/10 rounded-full filter blur-3xl animate-pulse" />
        <div className="absolute bottom-20 right-20 w-96 h-96 bg-purple-500/10 rounded-full filter blur-3xl animate-pulse delay-1000" />
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          {/* Modal backdrop (blurred and dark) */}
          <div className="absolute inset-0 bg-black/80 backdrop-blur-md" />

          {/* Close button */}
          <button
            className="absolute top-4 right-4 md:top-6 md:right-6 z-10 p-2 bg-white/10 hover:bg-white/20 rounded-full text-white backdrop-blur-md transition-colors"
            onClick={closeModal}
            aria-label="Close image preview"
          >
            <X className="w-6 h-6" />
          </button>

          {/* Modal content (enlarged image) */}
          <div
            className="relative max-w-5xl w-full h-full flex items-center justify-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
          >
            <img
              src={selectedImage}
              alt="Expanded preview"
              className="max-w-full max-h-full object-contain rounded-lg shadow-2xl border border-white/10"
            />
          </div>
        </div>
      )}
    </>
  );
};

export default TrainingSection;
