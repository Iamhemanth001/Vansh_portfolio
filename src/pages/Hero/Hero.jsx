import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import { FaReact, FaNodeJs, FaPython, FaDocker, FaGithub } from "react-icons/fa";
import { SiCplusplus, SiMongodb } from "react-icons/si";
import PortfolioPage from "@/pages/About/About";
import SparklesText from "@/components/ui/sparkles-text";
import { FlipWords } from "@/components/ui/flip-words";
import StarParticles from "@/components/ui/StarParticles";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";

// Grid Background - Replacing the HexagonBackground
const GridBackground = () => {
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none opacity-20">
      <div className="absolute inset-0 [mask-image:radial-gradient(ellipse_at_center,transparent_0%,black)]">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          className="absolute inset-0"
        >
          <pattern
            id="grid"
            width="40"
            height="40"
            patternUnits="userSpaceOnUse"
          >
            <rect
              width="40"
              height="40"
              fill="none"
              stroke="white"
              strokeWidth="0.5"
              className="opacity-40 animate-gridPulse"
            />
          </pattern>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>
    </div>
  );
};

export default function Hero() {
  const words = [
    "Full-Stack Developer & UI/UX Enthusiast",
    "JavaScript Developer & Creator of Olova.js",
    "Learning MARN Stack",
    "Linux & GitHub for DevOps Enthusiast",
  ];

  const [code] = useState(`
const profile = {
    name: "Hemant Kumar",
    role: "Aspiring Software Development Engineer",
    techStack: ["MERN", "C++", "Python", "JavaScript"],
    achievements: [
        "500+ DSA problems solved",
        "Built real-world full-stack applications",
        "AI/ML project experience"
    ],
    passion: "Building scalable systems and solving complex problems"
};
  `);

  useEffect(() => {
    Prism.highlightAll();

    // Add CSS animation for grid and dots
    const style = document.createElement("style");
    style.textContent = `
      @keyframes gridPulse {
        0%, 100% { opacity: 0.1; }
        50% { opacity: 0.3; }
      }
      
      @keyframes dotPulse {
        0%, 100% { opacity: 0.2; transform: scale(0.8); }
        50% { opacity: 0.5; transform: scale(1.2); }
      }
      
      /* Media query for 1366x768 resolution */
      @media screen and (width: 1366px) and (height: 768px), 
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .hero {
          padding-top: 12rem !important;
        }
        .hero .container {
          padding-top: 10rem !important;
          margin-top: 5rem !important;
        }
        .hero-section-padding {
          padding-top: 12rem !important;
        }
      }
    `;
    document.head.appendChild(style);

    // Apply extra padding for 1366x768 resolution
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty(
          "--hero-padding-top",
          "12rem"
        );
      } else {
        document.documentElement.style.setProperty("--hero-padding-top", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, [code]);

  return (
    <>
      <main className="bg-[#020617] text-white min-h-screen">
        <section
          className="hero min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0 hero-section-padding"
          style={{ paddingTop: "var(--hero-padding-top, 0)" }}
        >
          <div className="absolute inset-0"></div>

          {/* Choose one of these background options */}
          <GridBackground />
          <StarParticles />

          {/* Or keep the original backgrounds if you prefer */}
          {/* <HexagonBackground /> */}
          {/* <AnimatedGrid /> */}
          {/* <DotBackground /> */}

          {/* Meteors Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          {/* Main content container */}
          <div
            className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28"
            style={{
              paddingTop:
                window.innerWidth >= 1360 &&
                  window.innerWidth <= 1370 &&
                  window.innerHeight >= 760 &&
                  window.innerHeight <= 775
                  ? "12rem"
                  : "",
            }}
          >
            {/* Left column - Text content */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInLeft relative lg:pr-8">
              {/* Decorative blurs */}
              <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-blue-500/10 rounded-full blur-3xl"></div>
              <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-teal-500/10 rounded-full blur-3xl"></div>


              {/* Name section */}
              <div className="relative mb-6 sm:mb-8">
                <h1 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight">
                  <span>
                    <SparklesText text="Hello" />
                  </span>
                  <span className="relative inline-block ml-3">
                    I&apos;m{" "}
                    <span className="gradient-text whitespace-nowrap min-w-[280px] inline-block">
                      <Typewriter
                        words={['Hemant Kumar', 'a Developer', 'a Problem Solver', 'a AI/ML Explorer']}
                        loop={0}
                        cursor
                        cursorStyle='_'
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1000}
                      />
                    </span>
                  </span>
                </h1>
                <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-blue-500/20 rounded-full blur-2xl animate-pulse"></div>
              </div>

              {/* Role badge */}
              <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8 animate__animated animate__fadeInUp animate__delay-1s">
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-blue-500/10 to-teal-500/10 border border-blue-500/20 backdrop-blur-sm">
                  <i className="fas fa-rocket text-blue-400 animate-bounce text-sm"></i>
                  <span className="text-sm sm:text-base text-blue-400 font-medium">
                    Aspiring Software Development Engineer
                  </span>
                </div>
                <div className="inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-xl sm:rounded-2xl bg-gradient-to-r from-amber-500/10 to-orange-500/10 border border-amber-500/20 backdrop-blur-sm">
                  <i className="fas fa-trophy text-amber-400 text-sm"></i>
                  <span className="text-sm sm:text-base text-amber-400 font-medium">
                    500+ DSA Problems Solved
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="relative mb-8 sm:mb-10 max-w-2xl pr-0 lg:pr-8">
                <p className="text-base sm:text-lg text-gray-300/90 leading-relaxed mb-4">
                  Software Developer 💻 | Building Scalable Web Applications 🚀 <br className="hidden sm:block" />
                  DSA &amp; System Design Enthusiast ⚙️ | AI/ML Explorer 🤖
                </p>
                <p className="text-base sm:text-lg text-gray-400/90 leading-relaxed italic border-l-2 border-blue-500/50 pl-4 bg-blue-500/5 py-2 rounded-r-lg">
                  "I enjoy turning complex problems into simple, efficient software solutions."
                </p>
              </div>

              {/* Tech Stack Icons Row
              <div className="flex flex-wrap gap-4 mb-8 sm:mb-12 animate__animated animate__fadeInUp animate__delay-1s">
                {[
                  { Icon: FaReact, color: "text-blue-400" },
                  { Icon: FaNodeJs, color: "text-green-500" },
                  { Icon: SiMongodb, color: "text-green-600" },
                  { Icon: SiCplusplus, color: "text-blue-600" },
                  { Icon: FaPython, color: "text-yellow-400" },
                  { Icon: FaGithub, color: "text-gray-300" },
                  { Icon: FaDocker, color: "text-blue-400" },
                ].map((item, index) => (
                  <div key={index} className="w-10 h-10 sm:w-12 sm:h-12 flex justify-center items-center rounded-xl bg-gray-800/50 border border-gray-700/50 transition-all duration-300 cursor-pointer hover:bg-gray-700/50 hover:border-blue-500/50 hover:scale-110 hover:shadow-[0_0_15px_rgba(255,255,255,0.1)] group">
                     <item.Icon className={`${item.color} text-xl sm:text-2xl group-hover:animate-pulse`} />
                  </div>
                ))}
              </div> */}

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 animate__animated animate__fadeInUp animate__delay-2s mt-2">
                <Link to="/projects" className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-500 to-teal-400 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]">
                  <span className="block px-6 py-2.5 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-blue-500 group-hover:to-teal-400">
                    <span className="relative flex items-center justify-center gap-2 text-white font-medium text-sm sm:text-base">
                      <i className="fas fa-layer-group"></i> View Projects
                    </span>
                  </span>
                </Link>

                <a href="https://github.com/Iamhemanth001" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-600 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#9CA3AF]">
                  <span className="block px-6 py-2.5 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-700 group-hover:to-gray-600">
                    <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white text-sm sm:text-base">
                      <i className="fab fa-github"></i> GitHub
                    </span>
                  </span>
                </a>

                <a href="https://leetcode.com/u/mr_hk339/" target="_blank" rel="noopener noreferrer" className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 p-0.5 rounded-xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#F59E0B]">
                  <span className="block px-6 py-2.5 rounded-[11px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500">
                    <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white text-sm sm:text-base">
                      <i className="fas fa-code"></i> LeetCode
                    </span>
                  </span>
                </a>

                <a href="/resume.pdf" download="resume.pdf" className="group relative inline-flex items-center justify-center gap-2 p-0.5 rounded-xl bg-gradient-to-r from-gray-800 to-gray-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#60A5FA]">
                  <span className="block px-6 py-2.5 rounded-[11px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-800 group-hover:to-gray-700">
                    <span className="relative flex items-center justify-center gap-2 text-gray-300 font-medium group-hover:text-white text-sm sm:text-base">
                      <i className="fas fa-file-download"></i> Download Resume
                    </span>
                  </span>
                </a>
              </div>

              {/* Floating badges */}
              <div className="hidden lg:block absolute left-[2rem] top-[-2rem] animate-float-slow">
                <div className="px-4 py-2 rounded-lg bg-orange-500/10 backdrop-blur-sm border border-orange-500/20 text-orange-400">
                  <i className="fas fa-brain"></i>&nbsp;&nbsp;Problem Solving
                </div>
              </div>
              <div className="hidden lg:block absolute right-[2rem] top-[-1rem] animate-float">
                <div className="px-4 py-2 rounded-lg bg-blue-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-400">
                  <i className="fas fa-sitemap"></i>&nbsp;&nbsp;System Design
                </div>
              </div>
              <div className="hidden lg:block absolute bottom-[-5rem] left-[40%] transform -translate-x-1/2 animate-float">
                <div className="px-4 py-2 rounded-lg bg-teal-500/10 backdrop-blur-sm border border-teal-500/20 text-teal-400">
                  <i className="fas fa-code"></i>&nbsp;&nbsp;Clean Architecture
                </div>
              </div>
              <div className="hidden lg:block absolute bottom-[-4rem] right-[0rem] animate-float-slow">
                <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
                  <i className="fas fa-server"></i>&nbsp;&nbsp;Scalable Systems
                </div>
              </div>
            </div>

            {/* Right column - Code window */}
            <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown animate__delay-0.1s">
              <div className="gradient-border">
                <div className="code-window bg-[#091121]">
                  <div className="window-header">
                    <div className="window-dot bg-red-500"></div>
                    <div className="window-dot bg-yellow-500"></div>
                    <div className="window-dot bg-green-500"></div>
                    <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                      <i className="fas fa-code"></i>
                      developer.js
                    </span>
                  </div>
                  <pre className="language-javascript">
                    <code className="language-javascript">{code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Developer Stats Section */}
          {/* <div className="container mx-auto px-4 z-20 relative animate__animated animate__fadeInUp animate__delay-2s mt-8 sm:mt-12 mb-4">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
              {[
                { number: "500+", label: "DSA Problems Solved", icon: "fas fa-code" },
                { number: "4+", label: "Full Stack Projects", icon: "fas fa-laptop-code" },
                { number: "3+", label: "Technologies Mastered", icon: "fas fa-layer-group" },
                { number: "2+", label: "Years Coding Experience", icon: "fas fa-calendar-alt" },
              ].map((stat, idx) => (
                <div key={idx} className="bg-gray-900/60 backdrop-blur-md border border-gray-700/50 rounded-2xl p-6 flex flex-col items-center justify-center group hover:bg-gray-800/80 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_0_20px_rgba(59,130,246,0.15)]">
                  <i className={`${stat.icon} text-2xl md:text-3xl text-blue-400 mb-3 group-hover:scale-110 transition-transform duration-300`}></i>
                  <h3 className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent group-hover:from-blue-400 group-hover:to-cyan-300 transition-all duration-300">{stat.number}</h3>
                  <p className="text-gray-400 text-sm md:text-base mt-2 text-center font-medium group-hover:text-gray-300 transition-colors">{stat.label}</p>
                </div>
              ))}
            </div>
          </div> */}

          {/* Scroll indicator - Moved inside the container below the grids */}
          <div className="w-full flex justify-center mt-6 mb-4 xl:absolute xl:bottom-8 xl:mb-0 xl:mt-0 lg:flex animate-bounce z-20">
            <div className="flex flex-col items-center gap-2 xl:opacity-70 xl:hover:opacity-100 transition-opacity">
              <span className="text-gray-400 text-sm flex items-center gap-2 xl:bg-slate-900/50 xl:px-3 xl:py-1 xl:rounded-full xl:backdrop-blur-sm">
                <i className="fas fa-mouse text-blue-400"></i>
                Scroll to explore
              </span>
              <i className="fas fa-arrow-down text-blue-400 text-sm mt-1"></i>
            </div>
          </div>
        </section>
        <PortfolioPage />
      </main>
    </>
  );
}
