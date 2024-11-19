"use client";

import { useEffect, useState } from "react";
import {
  motion,
  useScroll,
  useSpring,
  useMotionValue,
  useTransform,
} from "framer-motion";
import dynamic from "next/dynamic";
import { Button } from "./components/ui/button";
import { InfiniteMovingCardsDemo } from "./components/app/InfiniteMovingCardsDemo";
import { HeroSection } from "./components/app/HeroSection";
import { ExperienceSection } from "./components/app/ExperienceSection";
import { SkillsSection } from "./components/app/SkillsSection";
import { ProjectsSection } from "./components/app/ProjectsSection";
import { CommunityLeadershipSection } from "./components/app/CommunityLeadershipSection";
import { WorkshopsSection } from "./components/app/WokshopSection";
import { ContactSection } from "./components/app/ContactSection";

const Background3D = dynamic(() => import("./components/ui/Background3D"), {
  ssr: false,
});

export default function Home() {
  const [activeSection, setActiveSection] = useState("about");
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001,
  });

  const [cryptoPrice, setCryptoPrice] = useState({ eth: 2000, btc: 30000 });
  const [blockNumber, setBlockNumber] = useState(0);

  const sections = [
    "about",
    "experience",
    "skills",
    "projects",
    "community",
    "contact",
  ];

  const glowX = useMotionValue(0);
  const glowY = useMotionValue(0);
  const glowOpacity = useTransform(glowX, [-100, 100], [0, 1]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoPrice({
        eth: Math.random() * 1000 + 2000,
        btc: Math.random() * 10000 + 30000,
      });
      setBlockNumber((prev) => prev + 1);
    }, 5000);

    const handleMouseMove = (e: MouseEvent) => {
      glowX.set(e.clientX);
      glowY.set(e.clientY);
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      clearInterval(interval);
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, [glowX, glowY]);

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
    { <Background3D /> }

      {/* Subtle gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-gray-900/20 z-0" />

      {/* Glow effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle 200px at ${glowX}px ${glowY}px, rgba(138, 43, 226, 0.15), transparent)`,
          opacity: glowOpacity,
        }}
      />

      {/* Progress bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      {/* Crypto ticker */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/80 text-xs py-1 px-4 flex justify-between items-center z-40">
        <span className="text-indigo-300">
          ETH: ${cryptoPrice.eth.toFixed(2)}
        </span>
        <span className="text-purple-300">
          BTC: ${cryptoPrice.btc.toFixed(2)}
        </span>
        <span className="text-pink-300">Latest Block: {blockNumber}</span>
      </div>

      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 bg-gray-900/80 backdrop-blur-sm z-40 border-b border-indigo-500/20">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <motion.span
            className="text-xl font-bold bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            FM
          </motion.span>
          <div className="flex gap-6">
            {sections.map((section, index) => (
              <motion.div
                key={section}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Button
                  variant="ghost"
                  className={`text-white ${
                    activeSection === section
                      ? "bg-indigo-500/20"
                      : "hover:text-indigo-400"
                  }`}
                  onClick={() =>
                    document
                      .getElementById(section)
                      ?.scrollIntoView({ behavior: "smooth" })
                  }
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </nav>

      <HeroSection />
      <ExperienceSection />
      <SkillsSection />
      <ProjectsSection />
      <CommunityLeadershipSection />
      <WorkshopsSection />
      <InfiniteMovingCardsDemo />
      <ContactSection />

      {/* Footer */}
      <footer className="py-12 bg-black">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">
            © 2024 Fadhil Mulinya | Empowering Africa's Web3 Future
          </p>
        </div>
      </footer>
    </div>
  );
}