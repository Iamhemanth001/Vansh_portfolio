import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const projects = [
  {
    title: "VMeet – Real-Time Video Meeting Platform",
    description:
      "A real-time video conferencing platform built using modern web technologies that allows users to create and join meetings instantly. Features include secure room creation, seamless video/audio communication, and responsive UI for smooth collaboration.",
    src: "vmeet.jpg",
    link: "/Vmeet.png",
    color: "#5196fd",
    techStack: ["React", "WebRTC", "Socket.io", "Node.js"],
    githubLink: "https://github.com/Iamhemanth001/Vmeet",
    liveLink: "https://vmeetfrontend1.onrender.com",
  },
  {
    title: "Wanderlust – Travel Listing Platform",
    description:
      "A full-stack travel listing platform inspired by Airbnb where users can explore destinations, create listings, and manage travel posts. Built using the MERN stack with authentication, database integration, and responsive UI.",
    src: "wanderlust.jpg",
    link: "/Wanderlust.png",
    color: "#8f89ff",
    techStack: ["MongoDB", "Express", "React", "Node.js", "Tailwind"],
    githubLink: "https://github.com/Iamhemanth001/WanderLust",
    liveLink: "https://wanderlust-dp36.onrender.com/",
  },
  {
    title: "Weather App – Real-Time Weather Forecast",
    description:
      "A modern weather application that provides real-time weather information such as temperature, humidity, and wind speed for cities across India using weather APIs with a clean and responsive UI.",
    src: "weather.jpg",
    link: "/Weather.png",
    color: "#ffffff",
    techStack: ["React", "API Integration", "CSS3"],
    githubLink: "https://github.com/Iamhemanth001/Weather_App",
    liveLink: "https://weather-app-eta-six-78.vercel.app/",
  },
  {
    title: "Hand Gesture Recognition – Machine Learning Project",
    description:
      "A machine learning project that recognizes hand gestures using computer vision techniques. The system processes real-time video input and classifies gestures to demonstrate practical applications of AI and ML.",
    src: "gesture.jpg",
    link: "/HGR.png",
    color: "#0ea5e9", // Sky Blue
    techStack: ["Python", "OpenCV", "Machine Learning"],
    githubLink: "https://github.com/Iamhemanth001/Hand-Gesture-Recognition",
    liveLink: "https://www.linkedin.com/posts/hemanthkumar001_machinelearning-deeplearning-computervision-activity-7315811633421828099-A98h?utm_source=social_share_send&utm_medium=member_desktop_web&rcm=ACoAAEfihOYBw93wd5FT3fcUl4bCocQPmmhyeYg",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <main className="bg-transparent pt-40 pb-20 mt-10" ref={container}>
      {/* Explicit Header to push the cards down properly and add polish */}
      <div className="text-center mb-6 px-4">
        <h1 className="text-4xl md:text-5xl font-extrabold mb-4 bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-emerald-400 drop-shadow-lg">
          Featured Projects
        </h1>
        <p className="text-gray-400 max-w-2xl mx-auto text-sm md:text-base">
          A showcase of my technical skills, problem-solving, and real-world creations.
        </p>
      </div>

      <section className="text-white w-full bg-transparent">
        {projects.map((project, i) => {
          const targetScale = 1 - (projects.length - i) * 0.05;
          return (
            <Card
              key={`p_${i}`}
              i={i}
              url={project.link}
              title={project.title}
              color={project.color}
              description={project.description}
              progress={scrollYProgress}
              range={[i * 0.25, 1]}
              targetScale={targetScale}
              githubLink={project.githubLink}
              liveLink={project.liveLink}
              techStack={project.techStack}
            />
          );
        })}
      </section>
    </main>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
  techStack,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  // Calculate relative depth for effects
  const index = i;

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-20 project-container"
    >
      <div
        className="relative h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        style={{
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
      >
        <motion.div
          style={{
            scale,
            top: `calc(-5vh + ${i * 25}px)`,
            width: "100%",
          }}
          className="relative"
          whileHover={{
            y: -8,
            transition: { duration: 0.3 },
          }}
        >
          {/* Modern split card design with Glassmorphism */}
          <div className="group relative w-full flex flex-col md:flex-row rounded-2xl md:rounded-3xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] transition-all duration-500 hover:shadow-[0_0_50px_rgba(0,0,0,0.6)] bg-gray-900/60 backdrop-blur-2xl border border-white/10">

            {/* Animated Glow Border */}
            <div
              className="absolute -inset-[1px] rounded-2xl md:rounded-3xl opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none"
              style={{
                background: `linear-gradient(135deg, transparent, ${color}60, transparent)`,
                zIndex: 0
              }}
            />

            {/* Image section - full width on mobile, 55% on desktop */}
            <div className="w-full md:w-[55%] h-[240px] md:h-[400px] lg:h-[450px] relative overflow-hidden z-10 border-b md:border-b-0 md:border-r border-white/5">
              <motion.img
                src={url}
                alt={title}
                className="w-full h-full object-cover origin-center"
                initial={{ scale: 1.05 }}
                whileHover={{ scale: 1.1, rotate: 1 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
              />

              {/* Colored overlay on hover */}
              <motion.div
                className="absolute inset-0 z-20 pointer-events-none"
                style={{ backgroundColor: color }}
                initial={{ opacity: 0 }}
                whileHover={{ opacity: 0.25 }}
                transition={{ duration: 0.3 }}
              />
              {/* Subtle inner gradient shadow */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-transparent to-transparent pointer-events-none" />

              {/* Project number */}
              <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
                Project {i + 1}
              </div>
            </div>

            {/* Content section - full width on mobile, 45% on desktop */}
            <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-3 mb-4 md:mb-6">
                  <div
                    className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                    style={{ backgroundColor: color }}
                  />
                  <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
                </div>

                <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                  {title}
                </h2>
                <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                  {description}
                </p>
              </div>

              {/* Tech Stack Pills */}
              <div className="flex flex-wrap gap-2 mt-4 md:mt-6 z-10">
                {techStack && techStack.map((tech, idx) => (
                  <span
                    key={idx}
                    className="px-3 py-1 text-xs md:text-sm font-medium rounded-full bg-white/5 border border-white/10 text-gray-300 hover:text-white transition-colors duration-300"
                    style={{
                      boxShadow: `inset 0 0 20px ${color}10`,
                      borderColor: `${color}30`
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="mt-4 md:mt-auto pt-4">
                <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

                <div className="flex items-center gap-4 z-10">
                  {/* GitHub Link Button */}
                  <motion.a
                    href={githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 overflow-hidden transition-all duration-300 hover:border-transparent hover:shadow-[0_0_20px_rgba(255,255,255,0.1)]"
                    whileHover={{ y: -2 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-800 to-gray-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="relative flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                      >
                        <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                      </svg>
                      <span className="text-sm font-medium text-gray-300 group-hover:text-white transition-colors duration-300">
                        Code
                      </span>
                    </div>
                  </motion.a>

                  {/* Live Link Button */}
                  <motion.a
                    href={liveLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group relative inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/10 overflow-hidden transition-all duration-300"
                    style={{
                      '--hover-color': color,
                      borderColor: `${color}30`
                    }}
                    whileHover={{
                      y: -2,
                      boxShadow: `0 0 20px ${color}40`,
                      borderColor: `${color}80`
                    }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <div
                      className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity duration-300"
                      style={{ backgroundColor: color }}
                    />
                    <div className="relative flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke={color}
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="group-hover:animate-pulse"
                      >
                        <circle cx="12" cy="12" r="10"></circle>
                        <line x1="2" y1="12" x2="22" y2="12"></line>
                        <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                      </svg>
                      <span
                        className="text-sm font-bold transition-colors duration-300"
                        style={{ color }}
                      >
                        Live Demo
                      </span>
                    </div>
                  </motion.a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
  techStack: PropTypes.arrayOf(PropTypes.string).isRequired,
};
