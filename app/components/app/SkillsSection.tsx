import { Code, Globe, Cpu, Zap, Database, Award } from 'lucide-react';
import { motion } from "framer-motion";

export function SkillsSection() {
  const skills = [
    {
      name: "Solidity",
      icon: <Code className="w-6 h-6" />,
      color: "from-indigo-500 to-blue-500",
    },
    {
      name: "JavaScript",
      icon: <Globe className="w-6 h-6" />,
      color: "from-yellow-400 to-yellow-600",
    },
    {
      name: "Rust",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-orange-500 to-red-500",
    },
    {
      name: "Arbitrum",
      icon: <Zap className="w-6 h-6" />,
      color: "from-blue-400 to-indigo-600",
    },
    {
      name: "ICP",
      icon: <Database className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Base",
      icon: <Cpu className="w-6 h-6" />,
      color: "from-blue-500 to-cyan-500",
    },
    {
      name: "Ethereum",
      icon: <Code className="w-6 h-6" />,
      color: "from-indigo-400 to-purple-600",
    },
    {
      name: "Hyperledger",
      icon: <Database className="w-6 h-6" />,
      color: "from-green-500 to-teal-500",
    },
    {
      name: "EIP-4337",
      icon: <Award className="w-6 h-6" />,
      color: "from-pink-500 to-rose-500",
    },
    {
      name: "EIP-6551",
      icon: <Award className="w-6 h-6" />,
      color: "from-cyan-500 to-blue-500",
    },
    {
      name: "IPFS",
      icon: <Globe className="w-6 h-6" />,
      color: "from-purple-500 to-indigo-500",
    },
    {
      name: "Pinata",
      icon: <Database className="w-6 h-6" />,
      color: "from-emerald-500 to-green-600",
    },
  ];

  return (
    <section
      id="skills"
      className="py-20 bg-gradient-to-b from-gray-900 to-black"
    >
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Technical Expertise
        </motion.h2>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {skills.map((skill, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.3, delay: index * 0.05 }}
              viewport={{ once: true }}
              whileHover={{ scale: 1.05 }}
            >
              <div
                className={`bg-gray-800/40 p-4 rounded-lg border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 group overflow-hidden relative`}
              >
                <div className="flex items-center gap-2 z-10 relative">
                  {skill.icon}
                  <span className="text-gray-300">{skill.name}</span>
                </div>
                <div
                  className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}