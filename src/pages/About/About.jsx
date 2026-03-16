import HeroImg from "@/assets/images/hero.png";
import OlovaLogo from "@/assets/images/olova.png";

export default function About() {
  return (
    <>
      <section id="about" className="py-16 md:py-32  text-white bg-[#04081A]">
        <div className="mx-auto max-w-5xl space-y-8 px-6 md:space-y-16">
          <h3 className="relative z-10 max-w-xl text-4xl font-medium lg:text-5xl text-white">
            Software Engineer | <br />  MERN Stack Developer
          </h3>
          <div className="grid gap-6 sm:grid-cols-2 md:gap-12 lg:gap-24">
            <div className="relative mb-6 sm:mb-0">
              <div className="bg-linear-to-b aspect-76/59 relative rounded-2xl p-px from-zinc-300 to-transparent">
                <img
                  src={HeroImg}
                  className="rounded-[15px] shadow block w-full h-[40rem] object-cover object-top"
                  alt="Hemant Profile Picture"
                />
              </div>
            </div>

            <div className="relative space-y-4">
              <ul className="text-white space-y-3 list-disc pl-5">
                <li>
                  Hello! I'm Hemant Kumar, an aspiring Software Development Engineer
                  and passionate developer who enjoys building scalable web
                  applications and solving complex problems through code.
                </li>
                <li>
                  <span className="font-bold text-white">
                    I specialize in the MERN Stack (MongoDB, Express.js, React.js, Node.js)
                  </span>{" "}
                  and have strong foundations in Data Structures & Algorithms,
                  having solved 500+ coding problems on platforms like LeetCode
                  and GeeksforGeeks.
                </li>
                <li>
                  My focus is on developing efficient, scalable, and user-friendly
                  applications. I enjoy working across the full stack, designing
                  intuitive interfaces while also building powerful backend systems.
                </li>
                <li>
                  Currently, I am expanding my expertise in system design,
                  backend architecture, and AI/ML, aiming to build impactful
                  software solutions.
                </li>
              </ul>

              <div className="pt-6">
                <blockquote className="border-l-4 border-gray-300 pl-4">
                  <p className="text-white">
                    I'm a passionate learner and problem solver who enjoys
                    turning ideas into real-world applications. I constantly
                    explore new technologies and improve my skills to build
                    better, scalable software.
                  </p>

                  <div className="mt-6 space-y-3">
                    <cite className="block font-medium text-white">
                      Hemant Kumar
                    </cite>
                    <div className="flex flex-col gap-1">
                      <span className="text-white/80 text-sm">
                        Aspiring Software Development Engineer
                      </span>
                      <span className="text-blue-400 font-medium italic">
                        "Code. Build. Optimize. Repeat." ⚡
                      </span>
                    </div>
                  </div>
                </blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
