import React from "react";
import { Send, Mail, Linkedin, Github, Clock, CalendarDays, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

export default function Contact() {
  const opportunityTags = [
    "Internships",
    "Collaborations",
    "Open Source Projects",
    "Freelance Development"
  ];

  const contactCards = [
    {
      icon: <Mail className="w-6 h-6 text-blue-400" />,
      title: "Email",
      value: "vanshmukhi41@gmail.com",
      link: "mailto:vanshmukhi41@gmail.com"
    },
    {
      icon: <Linkedin className="w-6 h-6 text-blue-500" />,
      title: "LinkedIn",
      value: "linkedin.com/in/vansh-mukhi",
      link: "https://www.linkedin.com/in/vansh-mukhi/"
    },
    {
      icon: <Github className="w-6 h-6 text-gray-300" />,
      title: "GitHub",
      value: "github.com/Vansh-Mukhi",
      link: "https://github.com/Vansh-Mukhi"
    }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <main className="pt-40 pb-20 mt-10 bg-transparent text-white min-h-screen flex items-center relative overflow-hidden" id="contact">
      {/* Background gradients for added depth without altering the global space theme */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[128px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-purple-500/10 rounded-full blur-[128px] pointer-events-none" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-start max-w-7xl mx-auto"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          {/* Left Side: Let's Build Something Together */}
          <div className="space-y-10">
            <motion.div variants={itemVariants} className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-extrabold bg-gradient-to-r from-blue-400 via-purple-400 to-emerald-400 bg-clip-text text-transparent drop-shadow-lg">
                Let's Build Something Together
              </h2>
              <p className="text-gray-400 text-lg leading-relaxed max-w-xl">
                I'm actively seeking internships, collaborations, and exciting opportunities in software development. If you have an interesting project or opportunity, I'd love to hear from you.
              </p>
            </motion.div>

            {/* Opportunity Tags */}
            <motion.div variants={itemVariants} className="pt-2">
              <h3 className="text-sm font-semibold text-gray-500 uppercase tracking-wider mb-4">I'm interested in</h3>
              <div className="flex flex-wrap gap-3">
                {opportunityTags.map((tag, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ y: -2, scale: 1.05 }}
                    className="px-4 py-2 rounded-full bg-white/5 border border-white/10 text-gray-300 text-sm font-medium shadow-[0_0_15px_rgba(255,255,255,0.05)] hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:border-blue-500/30 transition-all duration-300 cursor-default"
                  >
                    {tag}
                  </motion.div>
                ))}
              </div>
            </motion.div>

            {/* Contact Cards */}
            <motion.div variants={itemVariants} className="space-y-4 pt-6">
              {contactCards.map((card, index) => (
                <motion.a
                  key={index}
                  href={card.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ x: 5, backgroundColor: "rgba(255,255,255,0.1)" }}
                  className="group flex items-center justify-between p-4 rounded-xl bg-white/5 border border-white/5 backdrop-blur-md transition-all duration-300 hover:border-white/20 hover:shadow-[0_0_30px_rgba(255,255,255,0.1)]"
                >
                  <div className="flex items-center space-x-4">
                    <div className="p-3 bg-gray-900/50 rounded-lg group-hover:bg-gray-800 transition-colors">
                      {card.icon}
                    </div>
                    <div>
                      <p className="text-sm text-gray-400 font-medium">{card.title}</p>
                      <p className="text-gray-200 font-medium truncate max-w-[200px] sm:max-w-xs">{card.value}</p>
                    </div>
                  </div>
                  <ExternalLink className="w-5 h-5 text-gray-500 group-hover:text-white transition-colors opacity-0 group-hover:opacity-100 -translate-x-4 group-hover:translate-x-0 duration-300" />
                </motion.a>
              ))}
            </motion.div>
          </div>

          {/* Right Side: Schedule a Meeting Card */}
          <motion.div variants={itemVariants} className="lg:mt-8">
            <div className="relative group">
              {/* Outer Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-500 to-purple-600 rounded-2xl md:rounded-[2rem] opacity-20 group-hover:opacity-40 blur-xl transition duration-700" />

              <div className="relative p-8 md:p-10 rounded-2xl md:rounded-[2rem] bg-gray-900/80 backdrop-blur-xl border border-white/10 shadow-2xl flex flex-col h-full">

                <div className="mb-8">
                  <h3 className="text-2xl md:text-3xl font-bold text-white mb-2">Schedule a Meeting</h3>
                  <p className="text-blue-400 flex items-center gap-2 font-medium">
                    <Clock className="w-4 h-4" />
                    30-minute intro call • Google Meet
                  </p>
                </div>

                <div className="space-y-6 mb-10 flex-grow">
                  <div className="p-4 rounded-xl bg-white/5 border border-white/5 flex items-start gap-4">
                    <CalendarDays className="w-6 h-6 text-emerald-400 shrink-0 mt-1" />
                    <div>
                      <h4 className="text-white font-medium mb-1">Availability</h4>
                      <ul className="text-gray-400 text-sm space-y-2">
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
                          Weekdays 10:00 AM – 6:00 PM IST
                        </li>
                        <li className="flex items-center gap-2">
                          <div className="w-1.5 h-1.5 rounded-full bg-blue-400" />
                          Weekends Flexible
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>

                <div>
                  <motion.a
                    href="mailto:hemanthkumar23054@gmail.com?subject=Meeting Request&body=Hi Hemanth,%0A%0AI would like to schedule a 30-minute introductory call with you."
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                    className="w-full relative group inline-flex items-center justify-center gap-3 px-8 py-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl font-bold text-white shadow-[0_0_20px_rgba(59,130,246,0.3)] hover:shadow-[0_0_30px_rgba(147,51,234,0.5)] transition-all duration-300 overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-white/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 mix-blend-overlay" />
                    <span className="relative z-10">Request a Meeting</span>
                    <Send className="w-5 h-5 relative z-10 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform duration-300" />
                  </motion.a>

                  <p className="text-center text-sm text-gray-500 mt-6 flex items-center justify-center gap-2">
                    <span className="text-yellow-400">⚡</span> Usually responds within 24 hours
                  </p>
                </div>

              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </main>
  );
}
