import { Button } from "../ui/button";
import { Mail } from 'lucide-react';
import {
  IconBrandGithub,
  IconBrandLinkedin,
  IconBrandTwitter,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center relative overflow-hidden"
    >
      <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center gap-12">
        <motion.div
          className="w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-500 flex-shrink-0 relative"
          initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
          animate={{ opacity: 1, scale: 1, rotate: 0 }}
          transition={{ duration: 1, type: "spring" }}
        >
          <img
            src="/animeprofile.png"
            alt="Profile"
            className="w-full h-full object-cover"
            width={256}
            height={256}
          />
          <div className="absolute inset-0 bg-gradient-to-tr from-indigo-500/50 to-transparent" />
        </motion.div>
        <motion.div
          className="text-center md:text-left"
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text">
            Fadhil Mulinya
          </h1>
          <p className="text-xl md:text-2xl text-gray-300 mb-6">
            Developer Relations Expert | Blockchain Educator | Community Builder
          </p>
          <p className="text-gray-400 mb-6 max-w-2xl">
            Empowering developers across Africa through blockchain innovation and community engagement. Specializing in Ethereum-based standards like EIP-4337 and EIP-6551 to advance Web3 accessibility and adoption.
          </p>
          <div className="flex gap-4 justify-center md:justify-start">
            <Link href="mailto:mulinyafadhil@gmail.com">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-indigo-500/10 border-indigo-500/50 hover:bg-indigo-500/20"
              >
                <Mail className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/fadhil-mulinya">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-indigo-500/10 border-indigo-500/50 hover:bg-indigo-500/20"
              >
                <IconBrandLinkedin className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="https://github.com/FadhilMulinya">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-indigo-500/10 border-indigo-500/50 hover:bg-indigo-500/20"
              >
                <IconBrandGithub className="w-4 h-4" />
              </Button>
            </Link>
            <Link href="https://x.com/mulinyafadhil">
              <Button
                variant="outline"
                size="icon"
                className="rounded-full bg-indigo-500/10 border-indigo-500/50 hover:bg-indigo-500/20"
              >
                <IconBrandTwitter className="w-4 h-4" />
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}