import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";

export function ProjectsSection() {
  const projects = [
    {
      title: "Edupay",
      role: "Co-Founder",
      period: "August 2024 – Present",
      description: "A blockchain platform simplifying school fee payments via stablecoins, making financial transactions accessible to schools and families.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      title: "Credentify",
      role: "Co-Founder",
      period: "October 2024 – Present",
      description: "ERC-6551 Credential Platform: Developed a system for issuing NFT-based certifications, enabling verifiable achievements and decentralized student portfolios.",
      color: "from-purple-500 to-indigo-500",
    },
  ];

  return (
    <section id="projects" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Entrepreneurial Ventures
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/40 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6 relative">
                  <h3 className="text-xl font-bold text-indigo-400 mb-2">
                    {project.title}
                  </h3>
                  <p className="text-purple-300 mb-2">{project.role}</p>
                  <p className="text-sm text-gray-500 mb-4">
                    {project.period}
                  </p>
                  <p className="text-gray-300">{project.description}</p>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
                  />
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}