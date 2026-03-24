import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import IconCloudDemo from "@/components/globe";
import {
  FaPython,
  FaDocker,
  FaLinux,
  FaAws,
  FaNodeJs,
  FaGithub,
  FaGitAlt,
  FaBrain,
  FaCloud,
  FaServer,
  FaDatabase,
  FaWrench,
  FaMicrochip,
  FaTerminal,
  FaCubes,
  FaKey,
  FaNetworkWired,
  FaSitemap,
  FaCogs,
  FaCodeBranch,
  FaProjectDiagram,
  FaRocket,
  FaLock
} from "react-icons/fa";
import {
  SiTensorflow,
  SiPytorch,
  SiKubernetes,
  SiGithubactions,
  SiExpress,
  SiMongodb,
  SiMysql,
  SiPostman,
  SiJupyter
} from "react-icons/si";
import { TbBrandVscode } from "react-icons/tb";

const SkillBadge = ({ icon, name, level = 80 }) => (
  <Badge
    variant="outline"
    className="group/badge relative bg-gray-900/50 border border-purple-500/20 text-gray-300 flex flex-col gap-1 py-2 px-3 transition-all duration-300 hover:border-cyan-400/50 hover:shadow-[0_0_15px_rgba(34,211,238,0.2)] overflow-hidden"
  >
    <div className="flex items-center gap-2 w-full z-10">
      <span className="text-[16px] text-purple-400 group-hover/badge:text-cyan-400 transition-colors duration-300">
        {icon}
      </span>
      <span className="font-medium text-sm text-gray-200 group-hover/badge:text-white transition-colors duration-300">
        {name}
      </span>
    </div>
    {/* Minimal progress indicator */}
    <div className="w-full h-1 bg-gray-800 rounded-full mt-1 z-10 opacity-70 group-hover/badge:opacity-100 transition-opacity">
      <div 
        className="h-full rounded-full bg-gradient-to-r from-purple-500 to-cyan-400" 
        style={{ width: `${level}%` }}
      />
    </div>
    {/* Subtle inner glow on hover */}
    <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 to-cyan-400/0 group-hover/badge:from-purple-500/10 group-hover/badge:to-cyan-400/10 transition-all duration-500" />
  </Badge>
);

const SkillCard = ({ icon: Icon, title, skills }) => (
  <div className="relative group h-full">
    {/* Glow Effect */}
    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/30 to-cyan-500/30 rounded-3xl opacity-0 group-hover:opacity-40 blur-xl transition duration-500" />
    
    <Card className="relative h-full flex flex-col bg-[#0b0f19]/90 backdrop-blur-xl border border-purple-500/20 rounded-3xl overflow-hidden transition-all duration-300 group-hover:border-cyan-400/30 group-hover:-translate-y-2 group-hover:shadow-[0_10px_40px_rgba(168,85,247,0.15)] min-h-[250px]">
      <CardContent className="p-6 md:p-8 flex flex-col h-full flex-grow">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3.5 rounded-2xl bg-gradient-to-br from-purple-500/10 to-cyan-500/10 border border-purple-500/20 shadow-[inset_0_0_15px_rgba(168,85,247,0.1)] group-hover:scale-110 group-hover:-translate-y-1 transition-all duration-300">
            <Icon className="w-7 h-7 text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.5)]" />
          </div>
          <h3 className="text-xl md:text-2xl font-bold font-poppins text-white tracking-wide">
            {title}
          </h3>
        </div>
        <div className="flex flex-wrap gap-3 mt-auto">
          {skills.map((skill, index) => (
            <SkillBadge key={index} icon={skill.icon} name={skill.name} level={skill.level} />
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

const LearningCard = ({ items }) => (
  <div className="relative group mt-12 mb-8">
    <div className="absolute -inset-1 bg-gradient-to-r from-purple-600/20 via-cyan-500/20 to-purple-600/20 rounded-3xl opacity-30 blur-xl animate-pulse" />
    <Card className="relative bg-[#04081c]/80 backdrop-blur-xl border border-cyan-500/30 rounded-3xl overflow-hidden">
      <CardContent className="p-6 md:p-8 flex flex-col md:flex-row items-center gap-6 md:gap-12">
        <div className="flex items-center gap-4 shrink-0">
          <div className="p-4 rounded-full bg-cyan-500/10 border border-cyan-400/30 animate-spin-slow">
            <FaCogs className="w-8 h-8 text-cyan-400" />
          </div>
          <div>
            <h3 className="text-xl md:text-2xl font-bold font-poppins text-white">
              Currently Learning
            </h3>
            <p className="text-cyan-300/80 text-sm mt-1">Expanding my expertise</p>
          </div>
        </div>
        
        <div className="w-full h-px md:w-px md:h-16 bg-gradient-to-r md:bg-gradient-to-b from-transparent via-purple-500/50 to-transparent opacity-50" />
        
        <div className="flex flex-wrap gap-3 justify-center md:justify-start">
          {items.map((item, idx) => (
            <div key={idx} className="flex items-center gap-2 px-4 py-2 rounded-full bg-purple-500/10 border border-purple-500/20 text-gray-200">
              <span className="text-purple-400">{item.icon}</span>
              <span className="font-medium text-sm whitespace-nowrap">{item.name}</span>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  </div>
);

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: FaBrain,
      title: "Machine Learning & AI",
      skills: [
        { name: "Python", icon: <FaPython />, level: 90 },
        { name: "TensorFlow / PyTorch", icon: <SiTensorflow />, level: 75 },
        { name: "Scikit-learn", icon: <FaBrain />, level: 85 },
        { name: "Pandas & NumPy", icon: <FaNetworkWired />, level: 88 },
        { name: "Data Preprocessing", icon: <FaCogs />, level: 85 },
        { name: "Model Evaluation", icon: <FaSitemap />, level: 80 },
      ],
    },
    {
      icon: FaCloud,
      title: "DevOps & Cloud",
      skills: [
        { name: "Docker", icon: <FaDocker />, level: 85 },
        { name: "Kubernetes", icon: <SiKubernetes />, level: 70 },
        { name: "CI/CD Pipelines", icon: <FaCodeBranch />, level: 80 },
        { name: "GitHub Actions", icon: <SiGithubactions />, level: 85 },
        { name: "AWS (EC2, S3)", icon: <FaAws />, level: 75 },
        { name: "Linux", icon: <FaLinux />, level: 80 },
        { name: "Shell Scripting", icon: <FaTerminal />, level: 75 },
      ],
    },
    {
      icon: FaServer,
      title: "Backend & APIs",
      skills: [
        { name: "Node.js", icon: <FaNodeJs />, level: 85 },
        { name: "Express.js", icon: <SiExpress />, level: 85 },
        { name: "REST APIs", icon: <FaNetworkWired />, level: 90 },
        { name: "Authentication (JWT)", icon: <FaKey />, level: 85 },
        { name: "Microservices Basics", icon: <FaCubes />, level: 70 },
      ],
    },
    {
      icon: FaDatabase,
      title: "Data & Databases",
      skills: [
        { name: "MongoDB", icon: <SiMongodb />, level: 85 },
        { name: "MySQL / PostgreSQL", icon: <SiMysql />, level: 80 },
        { name: "Data Modeling", icon: <FaSitemap />, level: 75 },
        { name: "Query Optimization", icon: <FaBrain />, level: 70 },
      ],
    },
    {
      icon: FaWrench,
      title: "Tools & Workflow",
      skills: [
        { name: "Git & GitHub", icon: <FaGithub />, level: 90 },
        { name: "VS Code", icon: <TbBrandVscode />, level: 95 },
        { name: "Postman", icon: <SiPostman />, level: 85 },
        { name: "Jupyter Notebook", icon: <SiJupyter />, level: 85 },
      ],
    },
    {
      icon: FaMicrochip,
      title: "Core Concepts",
      skills: [
        { name: "Data Structures & Algos", icon: <FaSitemap />, level: 85 },
        { name: "Operating Systems", icon: <FaLinux />, level: 80 },
        { name: "Computer Networks", icon: <FaNetworkWired />, level: 75 },
        { name: "DBMS", icon: <FaDatabase />, level: 85 },
        { name: "OOP", icon: <FaCubes />, level: 90 },
      ],
    },
  ];

  const currentlyLearning = [
    { name: "MLOps", icon: <FaProjectDiagram /> },
    { name: "System Design", icon: <FaSitemap /> },
    { name: "Distributed Systems", icon: <FaNetworkWired /> },
    { name: "Cloud Security", icon: <FaLock /> },
  ];

  return (
    <main className="pt-24 pb-16 lg:pt-32 text-white min-h-screen bg-[#020617] relative overflow-hidden font-poppins">
      
      {/* Ambient background glows */}
      <div className="absolute top-40 left-10 w-[500px] h-[500px] bg-purple-700/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-40 right-10 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none" />
      
      {/* Grid Pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#a855f71a_1px,transparent_1px),linear-gradient(to_bottom,#a855f71a_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-20 pointer-events-none" />

      <section className="container mx-auto px-6 relative z-10 max-w-7xl">
        
        {/* Section Heading */}
        <div className="text-center mb-16 relative">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight mb-4 text-white">
            Technical <span className="gradient-text">Expertise</span>
          </h2>
          <p className="text-gray-400 text-lg md:text-xl max-w-2xl mx-auto">
            Comprehensive skill set spanning intelligent systems, cloud infrastructure, and modern development workflows.
          </p>
        </div>

        {/* Globe Visualization */}
        <div className="flex justify-center items-center mb-16 lg:hidden">
          <div className="w-full max-w-md aspect-square relative flex items-center justify-center opacity-80 mix-blend-screen">
             <IconCloudDemo /> 
          </div>
        </div>

        <div className="flex flex-col lg:flex-row gap-12 lg:gap-8 items-start">
          
          {/* Main Grid (Left side on desktop) */}
          <div className="w-full lg:w-2/3 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
            {skillCategories.map((category, index) => (
              <SkillCard
                key={index}
                icon={category.icon}
                title={category.title}
                skills={category.skills}
              />
            ))}
          </div>

          {/* Desktop Globe Visualization (Sticks to right side) */}
          <div className="hidden lg:flex w-full lg:w-1/3 flex-col items-center justify-center sticky top-32">
             <div className="w-full max-w-md aspect-square relative flex items-center justify-center opacity-80 mix-blend-screen transition-transform hover:scale-105 duration-700 ease-out">
                <IconCloudDemo /> 
                <div className="absolute inset-0 bg-gradient-to-t from-[#020617] via-transparent to-transparent pointer-events-none" />
             </div>
             
             {/* Tech Stack Highlights */}
             <div className="mt-8 flex flex-col items-center gap-4 border border-purple-500/20 bg-gray-900/50 backdrop-blur-md rounded-3xl p-6 w-full shadow-[0_0_30px_rgba(34,211,238,0.05)]">
                <h4 className="text-gray-300 font-medium tracking-wider uppercase text-sm">Core Stack</h4>
                <div className="flex gap-4">
                   <div className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors pointer-cursor"><FaPython className="w-6 h-6 text-blue-400" /></div>
                   <div className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors pointer-cursor"><SiTensorflow className="w-6 h-6 text-orange-400" /></div>
                   <div className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors pointer-cursor"><FaDocker className="w-6 h-6 text-blue-500" /></div>
                   <div className="p-3 bg-white/5 rounded-2xl hover:bg-white/10 transition-colors pointer-cursor"><FaAws className="w-6 h-6 text-amber-500" /></div>
                </div>
             </div>
          </div>
          
        </div>

        {/* Currently Learning Section */}
        <div className="w-full lg:w-2/3 mt-6 lg:mt-0">
          <LearningCard items={currentlyLearning} />
        </div>

      </section>
      
      <style>{`
        .animate-spin-slow {
          animation: spin 8s linear infinite;
        }
      `}</style>
    </main>
  );
};

export default SkillsSection;
