import React, { useState } from "react";
import { Briefcase, X } from "lucide-react";
import certificateImg from "../../assets/images/internship.png";

const highlights = [
  <>Developed and trained <span className="font-semibold text-white">neural network models</span> for encrypted image classification</>,
  <>Worked on <span className="font-semibold text-white">real-world defense-related datasets</span></>,
  <>Applied deep learning concepts such as <span className="font-semibold text-white">CNNs for feature extraction</span></>,
  <>Improved model accuracy through <span className="font-semibold text-white">preprocessing and hyperparameter tuning</span></>,
  <>Gained exposure to <span className="font-semibold text-white">research methodologies and scientific problem solving</span></>
];

const technologies = [
  "Python", "TensorFlow / PyTorch", "NumPy", "OpenCV",
  "Machine Learning", "Deep Learning", "CNNs", "Computer Vision"
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
      <div className="min-h-screen bg-transparent relative overflow-hidden pt-32 pb-20 font-poppins">
        {/* Background base */}
        <div className="absolute inset-0 bg-transparent" />

        {/* Grid overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(50,50,70,0.15)_1px,transparent_1px),linear-gradient(90deg,rgba(50,50,70,0.15)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_80%_80%_at_50%_50%,#000_70%,transparent_100%)]" />

        {/* Floating particles */}
        <div className="absolute inset-0">
          {[...Array(20)].map((_, i) => (
            <div
              key={i}
              className="absolute w-2 h-2 bg-purple-500/20 rounded-full animate-float"
              style={{
                top: `${(i * 37 + 11) % 100}%`,
                left: `${(i * 53 + 7) % 100}%`,
                animationDelay: `${(i * 0.4) % 5}s`,
              }}
            />
          ))}
        </div>

        {/* Content */}
        <div className="relative container mx-auto px-4 sm:px-6 mt-10">
          
          {/* Section header */}
          <div className="flex flex-col items-center space-y-6 mb-16">
            <div className="relative">
              <h2 className="text-5xl md:text-7xl font-black text-transparent bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-center">
                Internship Experience
              </h2>
              <div className="absolute inset-0 -z-10 bg-gradient-to-r from-purple-500/20 to-cyan-500/20 blur-3xl rounded-full" />
            </div>
            <p className="text-lg md:text-xl text-gray-400 font-medium tracking-wide text-center max-w-2xl">
              Applying deep learning research to defense and intelligence challenges.
            </p>
          </div>

          {/* Timeline Container */}
          <div className="max-w-6xl mx-auto relative pl-4 md:pl-8">
            
            {/* Timeline Vertical Line */}
            <div className="absolute top-0 bottom-0 left-0 md:left-2 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-transparent opacity-30" />
            
            {/* Timeline Dot */}
            <div className="absolute top-10 left-[-5px] md:left-[-3px] w-3 h-3 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee]" />

            {/* Internship Card */}
            <div className="group relative overflow-hidden transform hover:-translate-y-2 transition-all duration-300 ml-4 md:ml-8">
              
              {/* Outer Glow Effect matching Contact & Skills */}
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/40 via-cyan-500/40 to-purple-500/40 rounded-3xl opacity-0 group-hover:opacity-30 blur-2xl transition duration-700 pointer-events-none" />

              <div className="relative bg-[#0b0f19]/90 backdrop-blur-xl rounded-2xl md:rounded-3xl p-6 md:p-10 border border-purple-500/20 shadow-[0_0_40px_rgba(168,85,247,0.1)] transition-all duration-300 group-hover:border-cyan-400/40">

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
                <div className="flex flex-col lg:flex-row lg:items-start gap-5 mb-8">
                  <div className="relative flex-shrink-0 self-start">
                    <div className="absolute -inset-4 bg-gradient-to-r from-purple-500 to-cyan-500 opacity-20 rounded-full blur-xl group-hover:opacity-60 animate-pulse transition-all duration-500" />
                    <div className="bg-gradient-to-br from-purple-500/20 to-cyan-500/20 p-4 rounded-2xl border border-purple-500/30 relative z-10 group-hover:scale-110 transition-transform duration-300">
                      <Briefcase className="w-10 h-10 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
                    </div>
                  </div>
                  
                  <div className="space-y-2 flex-grow">
                    <div className="flex flex-col md:flex-row md:items-center justify-between gap-3">
                      <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-purple-400 to-cyan-400 bg-clip-text text-transparent">
                        AI/ML Intern
                      </h3>
                      <span className="text-sm font-medium bg-purple-500/10 px-4 py-1.5 rounded-full border border-purple-500/30 text-purple-300 self-start max-w-max shrink-0">
                        Research Internship 🧠
                      </span>
                    </div>
                    
                    <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-gray-300 mt-2">
                      <span className="font-semibold text-cyan-400 text-lg">
                        Scientific Analysis Group (SAG), DRDO
                      </span>
                      <span className="hidden sm:inline text-gray-500">•</span>
                      <span className="text-sm font-mono bg-cyan-500/10 px-3 py-1 rounded-full border border-cyan-500/20 text-cyan-200">
                        June 2025 – July 2025
                      </span>
                    </div>
                  </div>
                </div>

                {/* MIDDLE: Description + Highlights alongside certificate */}
                <div className="flex flex-col lg:flex-row gap-10">
                  {/* Left: Text content */}
                  <div className="flex-1 space-y-8">
                    <p className="text-gray-300 border-l-4 border-purple-500/50 pl-5 py-1 text-base md:text-lg leading-relaxed bg-purple-500/5 rounded-r-lg">
                      Completed a research-based internship at DRDO focusing on <span className="font-semibold text-white">image classification</span> using deep learning techniques. Worked on encrypted image datasets and implemented neural network models to analyze and classify patterns efficiently.
                    </p>

                    {/* Key Highlights */}
                    <div>
                      <h4 className="text-lg font-bold text-cyan-400 mb-4 flex items-center gap-2">
                        <span className="text-xl">🎯</span> Key Highlights
                      </h4>
                      <ul className="space-y-4">
                        {highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-3 text-gray-300 text-sm md:text-base leading-relaxed">
                            <span className="text-purple-400 mt-0.5 flex-shrink-0 text-lg">▹</span>
                            <span>{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies & Concepts Covered */}
                    <div className="pt-2">
                      <h4 className="text-lg font-bold text-purple-400 mb-4 flex items-center gap-2">
                        <span className="text-xl">⚡</span> Technologies &amp; Concepts
                      </h4>
                      <div className="flex flex-wrap gap-2.5">
                        {technologies.map((tech, idx) => (
                          <span
                            key={idx}
                            className="text-xs md:text-sm font-semibold px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-200 hover:bg-purple-500/20 hover:border-cyan-400/50 hover:text-white transition-all duration-300 cursor-default shadow-[0_4px_10px_rgba(0,0,0,0.2)]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Right: Certificate Image */}
                  <div className="lg:w-5/12 xl:w-[450px] flex flex-col pt-2 lg:pt-0">
                    <div
                      className="group/img relative overflow-hidden rounded-2xl border border-purple-500/30 cursor-pointer transition-all duration-500 hover:border-cyan-400/60 shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_0_30px_rgba(34,211,238,0.25)] bg-[#04081c]"
                      onClick={() => openModal(certificateImg)}
                    >
                      <div className="aspect-[4/3] w-full relative">
                        <img
                          src={certificateImg}
                          alt="DRDO Internship Certificate"
                          className="w-full h-full object-cover transform group-hover/img:scale-105 transition-transform duration-700 ease-out p-1"
                        />
                      </div>
                      <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                        <p className="text-white text-base font-semibold tracking-wide flex items-center justify-center gap-2 transform translate-y-4 group-hover/img:translate-y-0 transition-transform duration-300">
                          <span className="text-cyan-400">🔍</span> Click to expand
                        </p>
                      </div>
                      
                      {/* Floating glowing label */}
                      <div className="absolute top-4 left-4">
                        <span className="bg-[#0b0f19]/80 backdrop-blur-md border border-cyan-500/30 text-cyan-300 text-xs px-3 py-1.5 rounded-full font-semibold shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                          Official Internship Certificate
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
        <div className="absolute top-1/4 left-10 w-[500px] h-[500px] bg-purple-700/10 rounded-full filter blur-[100px] animate-pulse pointer-events-none" />
        <div className="absolute bottom-1/4 right-10 w-[500px] h-[500px] bg-cyan-600/10 rounded-full filter blur-[100px] animate-pulse delay-1000 pointer-events-none" />
      </div>

      {/* Image Preview Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-[100] flex items-center justify-center p-4 sm:p-6 md:p-12 animate-in fade-in duration-300"
          onClick={closeModal}
        >
          {/* Modal backdrop (blurred and dark) */}
          <div className="absolute inset-0 bg-[#020617]/90 backdrop-blur-md" />

          {/* Close button */}
          <button
            className="absolute top-4 right-4 md:top-8 md:right-8 z-10 p-3 bg-white/5 hover:bg-purple-500/20 border border-white/10 hover:border-purple-500/50 rounded-full text-white backdrop-blur-md transition-all duration-300 group"
            onClick={closeModal}
            aria-label="Close image preview"
          >
            <X className="w-6 h-6 group-hover:text-cyan-400 transition-colors" />
          </button>

          {/* Modal content (enlarged image) */}
          <div
            className="relative max-w-6xl w-full h-full flex items-center justify-center animate-in zoom-in-95 duration-300"
            onClick={(e) => e.stopPropagation()} // Prevent clicking image from closing modal
          >
            <div className="relative group">
              <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-cyan-500 rounded-lg opacity-30 blur-xl group-hover:opacity-50 transition duration-500" />
              <img
                src={selectedImage}
                alt="Expanded preview"
                className="relative max-w-full max-h-[85vh] object-contain rounded-lg shadow-2xl border border-white/10 p-1 bg-[#04081c]"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default TrainingSection;
