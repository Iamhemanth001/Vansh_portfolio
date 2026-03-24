import HeroImg from "@/assets/images/hero.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32 text-white bg-[#04081A] relative overflow-hidden">

        {/* Ambient blurs */}
        <div className="absolute top-1/4 left-0 w-80 h-80 bg-purple-700/10 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 right-0 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16 relative z-10">

          {/* Section Title */}
          <h4 className="relative z-10 max-w-xl text-4xl font-bold lg:text-5xl text-white font-poppins">
            AI/ML Engineer&nbsp;|&nbsp;<br />
            <span className="gradient-text">DevOps Engineer</span>
          </h4>

          {/* Grid: text LEFT, image RIGHT */}
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">

            {/* Text column (left) */}
            <div className="relative space-y-4 order-2 sm:order-1">
              <ul className="text-gray-300 space-y-4 list-none pl-0">
                <li className="flex gap-3">
                  <span className="text-purple-400 mt-1 shrink-0">▹</span>
                  <div>
                    Hello! I&apos;m <strong className="text-white">Vansh Mukhi</strong>, a passionate AI/ML and DevOps Engineer who enjoys building intelligent systems and deploying them at scale.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1 shrink-0">▹</span>
                  <div>
                    I specialize in developing{" "}
                    <strong className="text-white">machine learning models</strong>{" "}
                    and integrating them into production environments using CI/CD pipelines and cloud platforms.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-purple-400 mt-1 shrink-0">▹</span>
                  <div>
                    My expertise includes working with{" "}
                    <strong className="text-white">Docker, Kubernetes, and cloud services</strong>{" "}
                    to ensure scalable and reliable systems.
                  </div>
                </li>
                <li className="flex gap-3">
                  <span className="text-cyan-400 mt-1 shrink-0">▹</span>
                  <div>
                    I am continuously learning and exploring areas like{" "}
                    <strong className="text-white">MLOps, distributed systems</strong>, and cloud-native architectures.
                  </div>
                </li>
              </ul>

              {/* Tech chips */}
              <div className="flex flex-wrap gap-2 pt-2">
                {["Python", "TensorFlow", "Docker", "Kubernetes", "AWS", "CI/CD", "MLOps"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-xs font-semibold bg-purple-500/10 border border-purple-500/25 text-purple-300 hover:bg-purple-500/20 transition-colors duration-200"
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="pt-6">
                <blockquote className="border-l-4 border-purple-500/60 pl-4 bg-purple-500/5 py-3 rounded-r-lg">
                  <p className="text-gray-300 italic">
                    "Automate everything. Scale anything. Learn continuously."
                  </p>
                  <div className="mt-4 space-y-1">
                    <cite className="block font-bold text-white not-italic">
                      Vansh Mukhi
                    </cite>
                    <span className="text-gray-400 text-sm">
                      AI/ML & DevOps Engineer
                    </span>
                    <span className="block text-purple-400 font-medium italic text-sm">
                      ⚡ Systems Thinker. Cloud Native. Always Shipping.
                    </span>
                  </div>
                </blockquote>
              </div>
            </div>

            {/* Image column (right) */}
            <div className="relative mb-6 sm:mb-0 order-1 sm:order-2">
              <div className="bg-gradient-to-b aspect-76/59 relative rounded-3xl p-px from-purple-500/60 via-cyan-500/40 to-transparent shadow-[0_0_40px_rgba(168,85,247,0.2)]">
                <img
                  src={HeroImg}
                  className="rounded-[22px] shadow-2xl block w-full h-[40rem] object-cover object-top"
                  alt="Vansh Mukhi Profile"
                />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
