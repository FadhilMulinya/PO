import { Button } from "../ui/button";
import { Mail } from 'lucide-react';
import { IconBrandLinkedin } from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";

export function ContactSection() {
  return (
    <section id="contact" className="py-20 bg-gray-900/50">
      <div className="container mx-auto px-4">
        <motion.h2
          className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
        >
          Connect with Me
        </motion.h2>
        <motion.div
          className="flex flex-col items-center gap-4"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
        >
          <p className="text-gray-300 text-center max-w-2xl mb-6">
            Ready to collaborate on blockchain innovations or discuss the future of Web3? Whether you're interested in partnerships, speaking engagements, or just want to connect, I'm always open to new opportunities and discussions.
          </p>
          <div className="flex gap-4">
            <Link href="mailto:mulinyafadhil@gmail.com">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full bg-indigo-500/10 border-indigo-500/50 hover:bg-indigo-500/20"
              >
                <Mail className="w-4 h-4 mr-2" />
                Email Me
              </Button>
            </Link>
            <Link href="https://linkedin.com/in/fadhil-mulinya">
              <Button
                variant="outline"
                size="lg"
                className="rounded-full bg-indigo-500/10 border-indigo-500/50 hover:bg-indigo-500/20"
              >
                <IconBrandLinkedin className="w-4 h-4 mr-2" />
                Connect on LinkedIn
              </Button>
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}