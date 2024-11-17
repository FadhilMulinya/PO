import { Card, CardContent } from "../ui/card";
import { motion } from "framer-motion";

export function CommunityLeadershipSection() {
  const engagements = [
    {
      event: "CodeAfrica Conference 2024",
      role: "Organizer & Speaker",
      description: "Organized and spoke on blockchain adoption and Web3 best practices.",
      color: "from-green-500 to-emerald-500",
    },
    {
      event: "Arbitrum Campus Tours 2024",
      role: "Workshop Host",
      description: "Hosted workshops for students, introducing them to blockchain development.",
      color: "from-blue-500 to-indigo-500",
    },
    {
      event: "Kenya NFT Summit 2023",
      role: "Volunteer",
      description: "Volunteered to onboard participants to NFTs and Web3 technologies.",
      color: "from-indigo-500 to-purple-500",
    },
    {
      event: "Africa Metaverse Summit 2023",
      role: "Key Contributor",
      description: "Played a critical role in exposing African startups to metaverse technologies.",
      color: "from-purple-500 to-pink-500",
    },
    {
      event: "Blockchain Developer Bootcamps 2024",
      role: "Lead Instructor",
      description: "Conducted intensive blockchain development bootcamps across multiple African countries, covering Ethereum, TON, Arbitrum, Solana, Cartesi, Internet Computer Protocol (ICP), and Celo.",
      color: "from-orange-500 to-red-500",
    },
    {
      event: "Ethereum Community Calls",
      role: "Regular Participant",
      description: "Actively contributed to discussions on Ethereum ecosystem development and standards.",
      color: "from-cyan-500 to-blue-500",
    },
    {
      event: "EthSafari Conference",
      role: "Speaker",
      description: "Presented on Ethereum ecosystem developments and their impact on African blockchain adoption.",
      color: "from-yellow-500 to-orange-500",
    },
    {
      event: "Cardano Impact Event",
      role: "Panelist",
      description: "Discussed the potential of Cardano blockchain for social impact projects in Africa.",
      color: "from-blue-400 to-indigo-600",
    },
    {
      event: "Base Meetup Kenya",
      role: "Guest Speaker",
      description: "Introduced the Base ecosystem and its opportunities for Kenyan developers.",
      color: "from-teal-500 to-green-500",
    },
    {
      event: "Arbitrum Meetup Kenya",
      role: "Technical Presenter",
      description: "Demonstrated Arbitrum's Layer 2 solutions and their benefits for scaling Ethereum applications.",
      color: "from-purple-500 to-pink-500",
    },
    {
      event: "Avalanche Summit Africa",
      role: "Workshop Facilitator",
      description: "Led a hands-on session on building decentralized applications on the Avalanche platform.",
      color: "from-red-500 to-pink-600",
    },
  ];

  return (
    <section
      id="community"
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
          Community Engagements
        </motion.h2>
        <div className="grid md:grid-cols-2 gap-8">
          {engagements.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="bg-gray-800/40 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden group">
                <CardContent className="p-6 relative">
                  <h3 className="text-lg font-semibold text-indigo-400 mb-2">
                    {item.event}
                  </h3>
                  <p className="text-purple-300 mb-2">{item.role}</p>
                  <p className="text-gray-300">{item.description}</p>
                  <div
                    className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`}
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