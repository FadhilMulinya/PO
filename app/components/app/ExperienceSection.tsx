import { Card, CardContent } from "../ui/card";
import { Globe, Zap, Database, Cpu, Briefcase } from 'lucide-react';
import { motion } from "framer-motion";

export function ExperienceSection() {
  const experiences = [
    {
      title: "African Meta Club",
      role: "Business Development and Partnerships Lead",
      period: "March 2024 – Present",
      description: "Expanding visibility in metaverse, blockchain, AI, and XR spaces. Forging strategic partnerships and contributing to ecosystem growth.",
      icon: <Globe className="w-6 h-6 text-indigo-400" />,
    },
    {
      title: "Umojaverse",
      role: "Developer Relations Specialist",
      period: "March 2024 – Present",
      description: "Organizing multi-campus events to onboard developers to the Arbitrum network. Providing technical mentorship and creating educational materials.",
      icon: <Zap className="w-6 h-6 text-purple-400" />,
    },
    {
      title: "Hyperledger Kenya Chapter",
      role: "Team Lead",
      period: "December 2023 – July 2024",
      description: "Mentoring developers in Hyperledger technologies through workshops and hands-on events. Building a strong developer community across Kenya.",
      icon: <Database className="w-6 h-6 text-pink-400" />,
    },
    {
      title: "Base East Africa Community",
      role: "Community Leader & Smart Contract Instructor",
      period: "September 2024 – Present",
      description: "Conducting workshops and live coding sessions to promote Base ecosystem adoption. Supporting developers with personalized mentorship.",
      icon: <Cpu className="w-6 h-6 text-indigo-400" />,
    },
    {
      title: "Zenstreet",
      role: "Growth Lead",
      period: "November 2024 – Present",
      description: "Leading community engagement and strategy efforts to expand fintech education and accessibility in West Africa.",
      icon: <Briefcase className="w-6 h-6 text-green-400" />,
    },
    {
      title: "Nexuspay",
      role: "Growth Lead & Product Support",
      period: "August 2023 – Present",
      description: "Part of the founding team, helping design and launch a mobile wallet enabling stablecoin transactions for Kenyan users.",
      icon: <Zap className="w-6 h-6 text-yellow-400" />,
    },
  ];

  return (
    <section id="experience" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Professional Journey
        </motion.h2>
        <div className="grid gap-8">
          {experiences.map((experience, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/40 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6 flex items-start gap-4">
                  <div className="mt-1">{experience.icon}</div>
                  <div>
                    <h3 className="text-xl font-bold text-indigo-400 mb-1">
                      {experience.title}
                    </h3>
                    <p className="text-purple-300 mb-2">{experience.role}</p>
                    <p className="text-sm text-gray-500 mb-2">
                      {experience.period}
                    </p>
                    <p className="text-gray-300">{experience.description}</p>
                  </div>
                </CardContent>
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-500/10 via-purple-500/10 to-pink-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}