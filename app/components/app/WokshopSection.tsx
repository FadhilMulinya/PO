import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";

export function WorkshopsSection() {
  const workshops = [
    {
      title: "TON Blockchain Workshop",
      description: "Introduced developers to building on The Open Network (TON) blockchain.",
      color: "from-blue-500 to-cyan-500",
    },
    {
      title: "Arbitrum Layer 2 Hackathon",
      description: "Organized a 48-hour hackathon focused on Arbitrum's scaling solutions.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      title: "Solana DApp Development",
      description: "Led a workshop on creating high-performance dApps using Solana.",
      color: "from-green-400 to-emerald-600",
    },
    {
      title: "Cartesi Machine Learning on Blockchain",
      description: "Facilitated a hands-on session on integrating ML models with Cartesi's blockchain solution.",
      color: "from-red-500 to-orange-500",
    },
    {
      title: "ICP Smart Contract Workshop",
      description: "Taught developers how to write and deploy smart contracts on the Internet Computer Protocol.",
      color: "from-yellow-400 to-amber-600",
    },
    {
      title: "Celo Mobile-First Blockchain Development",
      description: "Conducted a workshop on building mobile-friendly dApps using Celo's platform.",
      color: "from-teal-500 to-green-600",
    },
  ];

  return (
    <section className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Workshops & Hackathons
        </motion.h2>
        <div className="grid md:grid-cols-3 gap-6">
          {workshops.map((workshop, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/40 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6 relative">
                  <h3 className="text-lg font-semibold text-indigo-400 mb-2">
                    {workshop.title}
                  </h3>
                  <p className="text-gray-300">{workshop.description}</p>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${workshop.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
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