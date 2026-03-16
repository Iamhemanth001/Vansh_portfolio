import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import { Code2, Paintbrush, Database, Layout, Cpu, Cloud } from "lucide-react";
import {
  FaReact,
  FaNodeJs,
  FaPython,
  FaDocker,
  FaGitAlt,
  FaLinux,
  FaFigma,
  FaAws,
} from "react-icons/fa";
import {
  SiNextdotjs,
  SiTypescript,
  SiTailwindcss,
  SiPostgresql,
  SiMongodb,
  SiGraphql,
  SiJest,
  SiWebpack,
  SiRedux,
  SiFirebase,
  SiVercel,
  SiVite,
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";
import { BsFileEarmarkCode, BsGrid1X2 } from "react-icons/bs";
import { MdAnimation } from "react-icons/md";
import { FcWorkflow } from "react-icons/fc";

const SkillCard = ({ icon: Icon, title, skills, color }) => (
  <div className="relative group h-full">
    {/* Outer Glow Effect matching Contact Card */}
    <div className={`absolute -inset-1 bg-gradient-to-r from-blue-500/50 to-purple-600/50 rounded-2xl md:rounded-[2rem] opacity-0 group-hover:opacity-30 blur-xl transition duration-700`} />
    
    <Card className="relative h-full overflow-hidden bg-gray-900/80 backdrop-blur-xl border border-white/10 rounded-2xl md:rounded-[2rem] shadow-2xl transition-all duration-300">
      <CardContent className="p-6 relative z-10 flex flex-col h-full">
        <div className="flex items-center gap-4 mb-6">
          <div
            className={`p-3 rounded-xl bg-gray-800/50 ${color} group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300 shadow-[0_0_15px_rgba(255,255,255,0.05)]`}
          >
            <Icon className="w-8 h-8" />
          </div>
          <h3 className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-400 group-hover:text-white transition-colors duration-300">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-2 mt-auto">
          {skills.map((skill, index) => (
            <Badge
              key={index}
              variant="outline"
              className="group/badge relative bg-white/5 border border-white/10 hover:border-blue-500/30 text-gray-300 flex items-center gap-2 py-2 px-3 transition-all duration-300 hover:scale-105 hover:shadow-[0_0_20px_rgba(59,130,246,0.2)] hover:text-white"
            >
              <span className="transform group-hover/badge:scale-110 transition-transform duration-300 text-[16px]">
                {skill.icon}
              </span>
              <span className="font-medium text-sm">{skill.name}</span>
            </Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

const SkillsSection = () => {

  const skillCategories = [
    {
      icon: Code2,
      title: "Frontend Development",
      color: "text-blue-400",
      skills: [
        { name: "React", icon: <FaReact className="w-4 h-4 text-[#61DAFB]" /> },
        {
          name: "JavaScript",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#F7DF1E]" />,
        },
        {
          name: "HTML5",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#E34F26]" />,
        },
        {
          name: "CSS3",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#1572B6]" />,
        },
        {
          name: "Responsive Design",
          icon: <Layout className="w-4 h-4 text-[#38B2AC]" />,
        },
      ],
    },
    {
      icon: Database,
      title: "Backend Development",
      color: "text-green-400",
      skills: [
        {
          name: "Node.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#339933]" />,
        },
        {
          name: "Express.js",
          icon: <FaNodeJs className="w-4 h-4 text-[#68A063]" />,
        },
        {
          name: "MongoDB",
          icon: <SiMongodb className="w-4 h-4 text-[#47A248]" />,
        },
        {
          name: "MySQL",
          icon: <SiPostgresql className="w-4 h-4 text-[#336791]" />,
        },
        {
          name: "REST APIs",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
      ],
    },
    {
      icon: Layout,
      title: "Core CS Concepts",
      color: "text-purple-400",
      skills: [
        {
          name: "Data Structures",
          icon: <Cpu className="w-4 h-4 text-[#38B2AC]" />,
        },
        {
          name: "Algorithms",
          icon: <Cpu className="w-4 h-4 text-[#9CA3AF]" />,
        },
        {
          name: "OOP",
          icon: <Cpu className="w-4 h-4 text-[#F59E0B]" />,
        },
        {
          name: "DBMS",
          icon: <Database className="w-4 h-4 text-[#F24E1E]" />,
        },
        {
          name: "Operating Systems",
          icon: <Cpu className="w-4 h-4 text-[#7C4DFF]" />,
        },
        {
          name: "Computer Networks",
          icon: <Cpu className="w-4 h-4 text-[#00C853]" />,
        },
      ],
    },
    {
      icon: Cloud,
      title: "Tools & Platforms",
      color: "text-orange-400",
      skills: [
        { name: "Git", icon: <FaGitAlt className="w-4 h-4 text-[#F05032]" /> },
        {
          name: "GitHub",
          icon: <FaGitAlt className="w-4 h-4 text-white" />,
        },
        {
          name: "VS Code",
          icon: <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />,
        },
        {
          name: "Postman",
          icon: <BsGrid1X2 className="w-4 h-4 text-[#FF6C37]" />,
        },
      ],
    },
    {
      icon: Cpu,
      title: "Programming Languages",
      color: "text-pink-400",
      skills: [
        {
          name: "C",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#A8B9CC]" />,
        },
        {
          name: "C++",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#00599C]" />,
        },
        {
          name: "Python",
          icon: <FaPython className="w-4 h-4 text-[#3776AB]" />,
        },
        {
          name: "JavaScript",
          icon: <BsFileEarmarkCode className="w-4 h-4 text-[#F7DF1E]" />,
        },
      ],
    },
    {
      icon: Paintbrush,
      title: "Other Skills",
      color: "text-yellow-400",
      skills: [
        {
          name: "Machine Learning",
          icon: <Cpu className="w-4 h-4 text-[#FF4081]" />,
        },
        {
          name: "Problem Solving",
          icon: <Cpu className="w-4 h-4 text-[#00C853]" />,
        },
        {
          name: "Competitive Programming",
          icon: <Cpu className="w-4 h-4 text-[#7C4DFF]" />,
        },
        {
          name: "Algorithm Design",
          icon: <Cpu className="w-4 h-4 text-[#FF6D00]" />,
        },
      ],
    },
  ];



  return (
    <main className="pt-15 lg:pt-0 text-white min-h-screen bg-transparent relative">
      {/* Grid Background */}
      <div className="absolute inset-0 bg-grid-pattern opacity-5 pointer-events-none"></div>

      <section className="container mx-auto px-4 py-11 relative z-10">
        <div className="flex justify-center items-center ">
          <IconCloudDemo />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <SkillCard
              key={index}
              icon={category.icon}
              title={category.title}
              skills={category.skills}
              color={category.color}
            />
          ))}
        </div>
      </section>
      <style jsx>{`
        @keyframes shimmer {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(100%);
          }
        }
        .animate-shimmer {
          animation: shimmer 2s infinite;
        }
        .bg-grid-pattern {
          background-image: linear-gradient(
              to right,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            ),
            linear-gradient(
              to bottom,
              rgba(100, 100, 255, 0.1) 1px,
              transparent 1px
            );
          background-size: 30px 30px;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
