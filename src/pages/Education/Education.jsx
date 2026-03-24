import React, { useState } from "react";
import {
  GraduationCap,
  BookOpen,
  School,
  Calendar,
  Award,
  Trophy,
  MapPin
} from "lucide-react";
import { motion } from "framer-motion";

const EducationSection = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const educationData = [
    {
      id: "btech",
      degree: "Bachelor of Technology – Computer Science and Engineering",
      school: "Lovely Professional University, Phagwara, Punjab",
      icon: GraduationCap,
      year: "Aug 2023 – Present",
      isCurrent: true,
      description: "Pursuing B.Tech in Computer Science with focus on Data Structures, Machine Learning, and scalable system development. Actively building real-world projects and exploring AI/ML and DevOps practices.",
      achievements: [
        "CGPA: 7.9",
        "Focus Areas: AI/ML, DevOps, System Design"
      ]
    },
    {
      id: "12th",
      degree: "Senior Secondary Education (PCM)",
      school: "Hans Raj Smarak Sr. Sec. School, Dilshad Garden, Delhi",
      icon: BookOpen,
      year: "2021 – 2023",
      isCurrent: false,
      description: "Completed higher secondary education with Physics, Chemistry, and Mathematics. Developed strong analytical and logical thinking skills.",
      achievements: [
        "Percentage: 80%",
        "Subjects: Physics, Chemistry, Mathematics"
      ]
    },
    {
      id: "10th",
      degree: "Secondary Education",
      school: "Takshshila International School, Karnal, Haryana",
      icon: School,
      year: "2020 – 2021",
      isCurrent: false,
      description: "Built a strong academic foundation with focus on core subjects and problem-solving abilities.",
      achievements: [
        "Percentage: 82%",
        "Highlight: Discipline & Consistency"
      ]
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const cardVariants = {
    hidden: { x: -50, opacity: 0 },
    visible: {
      x: 0,
      opacity: 1,
      transition: {
        duration: 0.7,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="min-h-screen relative overflow-hidden py-32 bg-[#020617] font-poppins">
      {/* Background decorations */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        {/* Grid Pattern */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f71a_1px,transparent_1px),linear-gradient(to_bottom,#a855f71a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)] opacity-20" />

        {/* Ambient glows */}
        <div className="absolute top-1/4 left-0 w-[400px] h-[400px] bg-purple-700/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 right-0 w-[500px] h-[500px] bg-cyan-600/10 rounded-full blur-[120px]" />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">

        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <div className="inline-block relative">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white tracking-tight mb-4 relative z-10 pb-2">
              Educational <span className="bg-gradient-to-r from-purple-400 to-cyan-500 bg-clip-text text-transparent">Journey</span>
            </h2>
            {/* Glowing underline */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-3/4 h-[3px] bg-gradient-to-r from-transparent via-cyan-400 to-transparent shadow-[0_0_15px_rgba(34,211,238,0.7)]" />
          </div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto text-lg pt-2">
            A continuous pursuit of knowledge, building the foundation for intelligent systems and logical problem solving.
          </p>
        </motion.div>

        {/* Timeline Container */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="relative pl-6 md:pl-12 space-y-12"
        >
          {/* Vertical Glowing Line */}
          <div className="absolute top-4 bottom-4 left-0 md:left-6 w-[2px] bg-gradient-to-b from-purple-500 via-cyan-500 to-purple-500/20 shadow-[0_0_15px_rgba(168,85,247,0.5)]" />

          {educationData.map((edu, index) => {
            const Icon = edu.icon;
            const isHovered = hoveredIndex === index;

            return (
              <motion.div
                key={edu.id}
                variants={cardVariants}
                className="relative"
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
              >
                {/* Timeline Node (Dot + Icon) */}
                <div className={`absolute -left-6 md:-left-12 w-12 h-12 rounded-full border-[3px] flex items-center justify-center transition-all duration-500 shadow-lg z-20 ${isHovered
                  ? "bg-[#0b0f19] border-cyan-400 scale-110 shadow-[0_0_20px_rgba(34,211,238,0.4)]"
                  : "bg-[#0b0f19] border-purple-500 shadow-[0_0_10px_rgba(168,85,247,0.3)]"
                  } -translate-x-1/2`}>
                  <Icon className={`w-5 h-5 transition-colors duration-500 ${isHovered ? "text-cyan-400" : "text-purple-400"}`} />
                </div>

                {/* Content Card Wrapper for Hover Effect */}
                <div className="group w-full transform transition-all duration-500 hover:-translate-y-2 relative ml-4 md:ml-6">

                  {/* Outer Glow on Hover */}
                  <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-cyan-500/30 rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition duration-500 pointer-events-none" />

                  {/* Card Main Container */}
                  <div className="relative bg-[#0b0f19]/80 backdrop-blur-xl border border-purple-500/20 shadow-[0_10px_30px_rgba(0,0,0,0.5)] rounded-2xl md:rounded-3xl p-6 md:p-8 transition-all duration-300 group-hover:border-purple-400/50">

                    {/* Header Row */}
                    <div className="flex flex-col xl:flex-row xl:items-start justify-between gap-4 mb-6">
                      <div className="space-y-3">
                        <div className="flex flex-wrap items-center gap-4">
                          <h3 className="text-2xl md:text-3xl font-bold bg-gradient-to-r from-white to-gray-300 group-hover:from-purple-300 group-hover:to-cyan-200 bg-clip-text text-transparent transition-all duration-500">
                            {edu.degree}
                          </h3>
                          {edu.isCurrent && (
                            <span className="inline-flex items-center gap-1.5 px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 text-cyan-300 text-xs font-semibold rounded-full shadow-[0_0_10px_rgba(34,211,238,0.2)]">
                              Current <GraduationCap className="w-3.5 h-3.5" />
                            </span>
                          )}
                        </div>

                        <div className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 text-gray-400 font-medium">
                          <div className="flex items-center gap-2">
                            <MapPin className="w-4 h-4 text-purple-400" />
                            <span>{edu.school}</span>
                          </div>
                          <div className="hidden sm:block w-1.5 h-1.5 rounded-full bg-gray-600" />
                          <div className="flex items-center gap-2 text-cyan-400/80">
                            <Calendar className="w-4 h-4" />
                            <span>{edu.year}</span>
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Description Section */}
                    <p className="text-gray-300 text-base md:text-lg leading-relaxed mb-8 border-l-2 border-purple-500/50 pl-4 py-1">
                      {edu.description}
                    </p>

                    {/* Achievements/Details Section */}
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-wider text-purple-300 mb-4 flex items-center gap-2">
                        <Trophy className="w-4 h-4" /> Key Details
                      </h4>
                      <div className="flex flex-wrap gap-3">
                        {edu.achievements.map((item, idx) => (
                          <div
                            key={idx}
                            className="px-4 py-2 rounded-xl bg-gradient-to-r from-purple-500/10 to-blue-500/10 border border-purple-500/20 text-gray-200 flex items-center gap-2 text-sm md:text-base font-medium transition-all duration-300 group-hover:border-cyan-500/30 group-hover:shadow-[0_4px_12px_rgba(34,211,238,0.1)] hover:scale-105"
                          >
                            <Award className="w-4 h-4 text-cyan-400" />
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};

export default EducationSection;
