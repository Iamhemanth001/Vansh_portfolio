import { useState, useEffect } from "react";
import Prism from "prismjs";
import "prismjs/components/prism-javascript";
import "@/assets/css/tomorrow.css";
import Meteors from "@/components/ui/meteors";
import SparklesText from "@/components/ui/sparkles-text";
import StarParticles from "@/components/ui/StarParticles";
import { Link } from "react-router-dom";
import { Typewriter } from "react-simple-typewriter";
import { FaGithub, FaDownload, FaRocket } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import PortfolioPage from "@/pages/About/About";

// Grid Background with purple tint
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
              stroke="#a855f7"
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
  const [code] = useState(`
const profile = {
  name: "Vansh Mukhi",
  role: "AI/ML & DevOps Engineer",
  skills: [
    "Python", "Docker",
    "Kubernetes", "AWS",
    "TensorFlow"
  ],
  expertise: [
    "Machine Learning Models",
    "CI/CD Pipelines",
    "Cloud Infrastructure",
    "Automation & Monitoring"
  ],
  passion: "Building intelligent and scalable systems"
};
  `);

  useEffect(() => {
    Prism.highlightAll();

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
      @keyframes badgePulse {
        0%, 100% { box-shadow: 0 0 8px rgba(168,85,247,0.4); }
        50% { box-shadow: 0 0 18px rgba(168,85,247,0.8); }
      }
      .badge-glow { animation: badgePulse 2.5s ease-in-out infinite; }
      .badge-glow-cyan {
        animation: cyanPulse 2.5s ease-in-out infinite;
      }
      @keyframes cyanPulse {
        0%, 100% { box-shadow: 0 0 8px rgba(34,211,238,0.4); }
        50% { box-shadow: 0 0 18px rgba(34,211,238,0.8); }
      }
    `;
    document.head.appendChild(style);

    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;
      if (isTargetResolution) {
        document.documentElement.style.setProperty("--hero-padding-top", "12rem");
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
          className="hero min-h-screen flex flex-col items-center justify-center relative px-4 sm:px-6 lg:px-8 py-10 md:py-16 lg:py-0"
          style={{ paddingTop: "var(--hero-padding-top, 0)" }}
        >
          <div className="absolute inset-0" />
          <GridBackground />
          <StarParticles />

          {/* Meteors Effect */}
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <Meteors number={10} />
          </div>

          {/* Ambient glows */}
          <div className="absolute top-1/3 left-1/4 w-96 h-96 bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

          {/* Main content container */}
          <div className="container mx-auto flex flex-col lg:flex-row items-center justify-between relative z-10 py-8 md:py-10 lg:py-12 md:pt-28 xl:pt-28">

            {/* Left column — Text content */}
            <div className="w-full lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeInLeft relative lg:pr-8">

              {/* Decorative blurs */}
              <div className="absolute hidden lg:-top-20 lg:-left-20 lg:block w-48 h-48 lg:w-64 lg:h-64 bg-purple-500/10 rounded-full blur-3xl" />
              <div className="absolute hidden lg:block lg:top-40 lg:-right-20 w-48 h-48 lg:w-64 lg:h-64 bg-cyan-500/10 rounded-full blur-3xl" />

              {/* Name section */}
              <div className="relative mb-6 sm:mb-8">
                <h3 className="text-3xl sm:text-4xl lg:text-6xl font-bold leading-tight font-poppins">
                  <span>
                    <SparklesText text="Hi," />
                  </span>
                  <span className="relative inline-block ml-3">
                    I&apos;m a{" "}
                    <span className="gradient-text whitespace-nowrap min-w-[260px] inline-block">
                      <Typewriter
                        words={[
                          "Systems Thinker",
                          "AI/ML Engineer",
                          "DevOps Engineer",
                          "Cloud Architect",
                        ]}
                        loop={0}
                        cursor
                        cursorStyle="_"
                        typeSpeed={70}
                        deleteSpeed={50}
                        delaySpeed={1200}
                      />
                    </span>
                  </span>
                </h3>
                <p className="mt-3 text-lg sm:text-xl text-gray-400 font-medium tracking-wide">
                  I design intelligent systems and automate scalable infrastructure
                </p>
                <div className="absolute -z-10 top-1/2 -translate-y-1/2 left-1/4 w-24 sm:w-32 h-24 sm:h-32 bg-purple-500/20 rounded-full blur-2xl animate-pulse" />
              </div>

              {/* Dynamic Badges */}
              <div className="flex flex-wrap items-center gap-3 mb-6 sm:mb-8 animate__animated animate__fadeInUp animate__delay-1s">
                <div className="badge-glow inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl bg-gradient-to-r from-purple-500/10 to-violet-500/10 border border-purple-500/30 backdrop-blur-sm">
                  <span className="text-xl">🤖</span>
                  <span className="text-sm sm:text-base text-purple-300 font-semibold">
                    AI/ML Enthusiast
                  </span>
                </div>
                <div className="badge-glow-cyan inline-flex items-center gap-2 sm:gap-3 px-4 sm:px-5 py-2 sm:py-2.5 rounded-2xl bg-gradient-to-r from-cyan-500/10 to-sky-500/10 border border-cyan-500/30 backdrop-blur-sm">
                  <span className="text-xl">☁️</span>
                  <span className="text-sm sm:text-base text-cyan-300 font-semibold">
                    DevOps & Cloud Engineer
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="relative mb-8 sm:mb-10 max-w-2xl pr-0 lg:pr-8">
                <p className="text-base sm:text-lg text-gray-300/90 leading-relaxed mb-4">
                  Engineer focused on building intelligent applications and deploying them reliably using modern DevOps practices.
                </p>
                <p className="text-base sm:text-lg text-gray-400/90 leading-relaxed italic border-l-2 border-purple-500/50 pl-4 bg-purple-500/5 py-2 rounded-r-lg">
                  "Passionate about automation, scalability, and data-driven systems."
                </p>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-wrap gap-4 animate__animated animate__fadeInUp animate__delay-2s mt-2">

                {/* Explore Work */}
                <Link
                  to="/projects"
                  className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-purple-500 to-cyan-400 p-0.5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#a855f7]"
                >
                  <span className="block px-6 py-2.5 rounded-[15px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-500 group-hover:to-cyan-400">
                    <span className="relative flex items-center justify-center gap-2 text-white font-semibold text-sm sm:text-base">
                      <FaRocket className="group-hover:animate-bounce" /> Explore Work
                    </span>
                  </span>
                </Link>

                {/* GitHub */}
                <a
                  href="https://github.com/Vansh-Mukhi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-gray-700 to-gray-600 p-0.5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#9CA3AF]"
                >
                  <span className="block px-6 py-2.5 rounded-[15px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-gray-700 group-hover:to-gray-600">
                    <span className="relative flex items-center justify-center gap-2 text-gray-300 font-semibold group-hover:text-white text-sm sm:text-base">
                      <FaGithub /> GitHub
                    </span>
                  </span>
                </a>

                {/* LeetCode */}
                <a
                  href="https://leetcode.com/u/Vansh9918/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group relative inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-500 to-amber-500 p-0.5 rounded-2xl transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#f59e0b]"
                >
                  <span className="block px-6 py-2.5 rounded-[15px] bg-gray-900 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-orange-500 group-hover:to-amber-500">
                    <span className="relative flex items-center justify-center gap-2 text-gray-300 font-semibold group-hover:text-white text-sm sm:text-base">
                      <SiLeetcode /> LeetCode
                    </span>
                  </span>
                </a>

                {/* Download Resume */}
                <a
                  href="/resume.pdf"
                  download="resume.pdf"
                  className="group relative inline-flex items-center justify-center gap-2 p-0.5 rounded-2xl bg-gradient-to-r from-purple-800 to-cyan-700 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_2rem_-0.5rem_#a855f7]"
                >
                  <span className="block px-6 py-2.5 rounded-[15px] bg-gray-900 border border-gray-700/50 transition-all duration-300 group-hover:bg-gradient-to-r group-hover:from-purple-800 group-hover:to-cyan-700">
                    <span className="relative flex items-center justify-center gap-2 text-gray-300 font-semibold group-hover:text-white text-sm sm:text-base">
                      <FaDownload /> Download Resume
                    </span>
                  </span>
                </a>
              </div>

              {/* Floating badges */}
              <div className="hidden lg:block absolute left-[2rem] top-[-2rem] animate-float-slow">
                <div className="px-4 py-2 rounded-lg bg-purple-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-400">
                  🧠&nbsp;&nbsp;ML Models
                </div>
              </div>
              <div className="hidden lg:block absolute right-[2rem] top-[-1rem] animate-float">
                <div className="px-4 py-2 rounded-lg bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 text-cyan-400">
                  🔄&nbsp;&nbsp;CI/CD Pipelines
                </div>
              </div>
              <div className="hidden lg:block absolute bottom-[-5rem] left-[40%] transform -translate-x-1/2 animate-float">
                <div className="px-4 py-2 rounded-lg bg-sky-500/10 backdrop-blur-sm border border-sky-500/20 text-sky-400">
                  ☁️&nbsp;&nbsp;Cloud Infra
                </div>
              </div>
              <div className="hidden lg:block absolute bottom-[-4rem] right-[0rem] animate-float-slow">
                <div className="px-4 py-2 rounded-lg bg-violet-500/10 backdrop-blur-sm border border-violet-500/20 text-violet-400">
                  ⚙️&nbsp;&nbsp;Automation
                </div>
              </div>
            </div>

            {/* Right column — Code window */}
            <div className="w-full lg:w-1/2 animate__animated animate__fadeInDown animate__delay-0.1s">
              <div className="gradient-border">
                <div className="code-window bg-[#091121]">
                  <div className="window-header">
                    <div className="window-dot bg-red-500" />
                    <div className="window-dot bg-yellow-500" />
                    <div className="window-dot bg-green-500" />
                    <span className="ml-2 text-sm text-gray-400 flex items-center gap-2">
                      <i className="fas fa-code" />
                      profile.js
                    </span>
                  </div>
                  <pre className="language-javascript">
                    <code className="language-javascript">{code}</code>
                  </pre>
                </div>
              </div>
            </div>
          </div>

          {/* Scroll indicator */}
          <div className="w-full flex justify-center mt-6 mb-4 xl:absolute xl:bottom-8 xl:mb-0 xl:mt-0 lg:flex animate-bounce z-20">
            <div className="flex flex-col items-center gap-2 xl:opacity-70 xl:hover:opacity-100 transition-opacity">
              <span className="text-gray-400 text-sm flex items-center gap-2 xl:bg-slate-900/50 xl:px-3 xl:py-1 xl:rounded-full xl:backdrop-blur-sm">
                <i className="fas fa-mouse text-purple-400" />
                Scroll to explore
              </span>
              <i className="fas fa-arrow-down text-purple-400 text-sm mt-1" />
            </div>
          </div>
        </section>

        {/* About section rendered below */}
        <PortfolioPage />
      </main>
    </>
  );
}
