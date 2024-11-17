'use client'

import { Button } from "./button"
import { Card, CardContent } from "./card"
import { Github, Linkedin, Mail, Twitter, Zap, Cpu, Globe, Database, Code, Users } from "lucide-react"
import Link from "next/link"
import { useEffect, useState, useRef } from "react"
import { motion, useScroll, useSpring, useMotionValue, useTransform } from "framer-motion"
import { Canvas, useFrame } from '@react-three/fiber'
import { Text, Box, Sphere, OrbitControls } from '@react-three/drei'

const FloatingParticle = ({ position }) => {
  const mesh = useRef()
  useFrame((state) => {
    mesh.current.position.y = position[1] + Math.sin(state.clock.elapsedTime + position[0]) * 0.2
  })
  return (
    <Sphere ref={mesh} args={[0.1, 16, 16]} position={position}>
      <meshStandardMaterial color="#4B0082" emissive="#4B0082" emissiveIntensity={0.5} />
    </Sphere>
  )
}

const Background3D = () => {
  return (
    <Canvas style={{ position: 'fixed', top: 0, left: 0, pointerEvents: 'none' }}>
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} />
      <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
      {Array.from({ length: 50 }).map((_, i) => (
        <FloatingParticle key={i} position={[
          Math.random() * 20 - 10,
          Math.random() * 20 - 10,
          Math.random() * 20 - 15
        ]} />
      ))}
    </Canvas>
  )
}

export function RefinedCryptoPortfolio() {
  const [activeSection, setActiveSection] = useState('about')
  const { scrollYProgress } = useScroll()
  const scaleX = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  })

  const [cryptoPrice, setCryptoPrice] = useState({ eth: 0, btc: 0 })
  const [blockNumber, setBlockNumber] = useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      setCryptoPrice({
        eth: Math.random() * 1000 + 2000,
        btc: Math.random() * 10000 + 30000
      })
      setBlockNumber(prev => prev + 1)
    }, 5000)

    return () => clearInterval(interval)
  }, [])

  const sections = ['about', 'experience', 'skills', 'projects', 'community', 'contact']

  const glowX = useMotionValue(0)
  const glowY = useMotionValue(0)
  const glowOpacity = useTransform(glowX, [-100, 100], [0, 1])

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      glowX.set(e.clientX)
      glowY.set(e.clientY)
    }

    window.addEventListener('mousemove', handleMouseMove)
    return () => window.removeEventListener('mousemove', handleMouseMove)
  }, [glowX, glowY])

  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-900 to-black text-white overflow-hidden">
      <Background3D />

      {/* Subtle gradient background */}
      <div className="fixed inset-0 bg-gradient-to-br from-indigo-900/20 via-purple-900/20 to-gray-900/20 z-0" />

      {/* Glow effect */}
      <motion.div
        className="fixed inset-0 pointer-events-none z-10"
        style={{
          background: `radial-gradient(circle 200px at ${glowX}px ${glowY}px, rgba(138, 43, 226, 0.15), transparent)`,
          opacity: glowOpacity
        }}
      />

      {/* Progress bar */}
      <motion.div 
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 z-50"
        style={{ scaleX, transformOrigin: "0%" }}
      />

      {/* Crypto ticker */}
      <div className="fixed bottom-0 left-0 right-0 bg-gray-900/80 text-xs py-1 px-4 flex justify-between items-center z-40">
        <span className="text-indigo-300">ETH: ${cryptoPrice.eth.toFixed(2)}</span>
        <span className="text-purple-300">BTC: ${cryptoPrice.btc.toFixed(2)}</span>
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
                  className={`text-white ${activeSection === section ? 'bg-indigo-500/20' : 'hover:text-indigo-400'}`}
                  onClick={() => document.getElementById(section)?.scrollIntoView({ behavior: 'smooth' })}
                >
                  {section.charAt(0).toUpperCase() + section.slice(1)}
                </Button>
              </motion.div>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="about" className="min-h-screen flex items-center justify-center relative overflow-hidden">
        <div className="container mx-auto px-4 z-10 flex flex-col md:flex-row items-center gap-12">
          <motion.div 
            className="w-64 h-64 rounded-full overflow-hidden border-4 border-indigo-500 flex-shrink-0 relative"
            initial={{ opacity: 0, scale: 0.5, rotate: -180 }}
            animate={{ opacity: 1, scale: 1, rotate: 0 }}
            transition={{ duration: 1, type: "spring" }}
          >
            <img
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image%20(1).png-c4YqLea7pPnlh3dODGGY1oAcSQz2Dq.jpeg"
              alt="Profile"
              className="w-full h-full object-cover"
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
              Web3 Innovator | Blockchain Alchemist | Community Catalyst
            </p>
            <p className="text-gray-400 mb-6 max-w-2xl">
              Transforming the digital landscape through blockchain innovation and community empowerment. Join me on a journey to decentralize the future!
            </p>
            <div className="flex gap-4 justify-center md:justify-start">
              <Link href="mailto:mulinyafadhil@gmail.com">
                <Button variant="outline" size="icon" className="rounded-full bg-indigo-500/10 border-indigo-500/50 hover:bg-indigo-500/20">
                  <Mail className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/fadhil-mulinya">
                <Button variant="outline" size="icon" className="rounded-full bg-indigo-500/10 border-indigo-500/50 hover:bg-indigo-500/20">
                  <Linkedin className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="https://github.com/FadhilMulinya">
                <Button variant="outline" size="icon" className="rounded-full bg-indigo-500/10 border-indigo-500/50 hover:bg-indigo-500/20">
                  <Github className="w-4 h-4" />
                </Button>
              </Link>
              <Link href="https://x.com/mulinyafadhil">
                <Button variant="outline" size="icon" className="rounded-full bg-indigo-500/10 border-indigo-500/50 hover:bg-indigo-500/20">
                  <Twitter className="w-4 h-4" />
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Blockchain Odyssey
          </motion.h2>
          <div className="grid gap-8">
            {[
              {
                title: "African Meta Club",
                role: "Metaverse Architect",
                period: "March 2024 – Present",
                description: "Bridging African culture with the metaverse, blockchain, AI, XR, and AR technologies.",
                icon: <Globe className="w-6 h-6 text-indigo-400" />
              },
              {
                title: "Umojaverse",
                role: "Blockchain Evangelist",
                period: "March 2024 – Present",
                description: "Empowering developers to build the decentralized future on Arbitrum.",
                icon: <Zap className="w-6 h-6 text-purple-400" />
              },
              {
                title: "Hyperledger Kenya Chapter",
                role: "Distributed Ledger Maestro",
                period: "December 2023 – July 2024",
                description: "Orchestrating the symphony of blockchain adoption across Kenya.",
                icon: <Database className="w-6 h-6 text-pink-400" />
              },
              {
                title: "ICP (Internet Computer)",
                role: "Decentralized Computing Pioneer",
                period: "September 2023 – March 2024",
                description: "Exploring the frontiers of blockchain-based world computing.",
                icon: <Cpu className="w-6 h-6 text-indigo-400" />
              },
            ].map((experience, index) => (
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
                      <h3 className="text-xl font-bold text-indigo-400 mb-1">{experience.title}</h3>
                      <p className="text-purple-300 mb-2">{experience.role}</p>
                      <p className="text-sm text-gray-500 mb-2">{experience.period}</p>
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

      {/* Skills Section */}
      <section id="skills" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Crypto Arsenal
          </motion.h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              { name: "Solidity", icon: <Code className="w-6 h-6" />, color: "from-indigo-500 to-blue-500" },
              { name: "JavaScript", icon: <Globe className="w-6 h-6" />, color: "from-yellow-400 to-yellow-600" },
              { name: "Rust", icon: <Cpu className="w-6 h-6" />, color: "from-orange-500 to-red-500" },
              { name: "Arbitrum", icon: <Zap className="w-6 h-6" />, color: "from-blue-400 to-indigo-600" },
              { name: "ICP", icon: <Database className="w-6 h-6" />, color: "from-purple-500 to-indigo-500" },
              { name: "Base", icon: <Cpu className="w-6 h-6" />, color: "from-blue-500 to-cyan-500" },
              { name: "Ethereum", icon: <Code className="w-6 h-6" />, color: "from-indigo-400 to-purple-600" },
              { name: "Hyperledger", icon: <Database className="w-6 h-6" />, color: "from-green-500 to-teal-500" },
              { name: "Community Building", icon: <Users className="w-6 h-6" />, color: "from-pink-500 to-rose-500" },
              { name: "Technical Mentorship", icon: <Users className="w-6 h-6" />, color: "from-cyan-500 to-blue-500" },
              { name: "Event Organization", icon: <Users className="w-6 h-6" />, color: "from-purple-500 to-indigo-500" },
              { name: "Consulting & Strategy", icon: <Users className="w-6 h-6" />, color: "from-emerald-500 to-green-600" },
            ].map((skill, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05 }}
              >
                <div className={`bg-gray-800/40 p-4 rounded-lg border border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 group overflow-hidden relative`}>
                  <div className="flex items-center gap-2 z-10 relative">
                    {skill.icon}
                    <span className="text-gray-300">{skill.name}</span>
                  </div>
                  <div className={`absolute inset-0 bg-gradient-to-r ${skill.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Web3 Innovations
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                title: "Edupay",
                role: "DeFi Education Pioneer",
                period: "August 2024 – Present",
                description: "Revolutionizing school fee payments with blockchain, bringing financial inclusion to education.",
                color: "from-cyan-500 to-blue-500"
              },
              {
                title: "Credentify",
                role: "NFT Certification Visionary",
                period: "October 2024 – Present",
                description: "Empowering students with verifiable blockchain credentials and NFT portfolios.",
                color: "from-purple-500 to-indigo-500"
              },
            ].map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/40 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6 relative">
                    <h3 className="text-xl font-bold text-indigo-400 mb-2">{project.title}</h3>
                    <p className="text-purple-300 mb-2">{project.role}</p>
                    <p className="text-sm text-gray-500 mb-4">{project.period}</p>
                    <p className="text-gray-300">{project.description}</p>
                    <div className={`absolute inset-0 bg-gradient-to-r ${project.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Community Leadership Section */}
      <section id="community" className="py-20 bg-gradient-to-b from-gray-900 to-black">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Blockchain Gatherings
          </motion.h2>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { event: "CodeAfrica Conference 2024", role: "Crypto Coding Maestro", color: "from-green-500 to-emerald-500" },
              { event: "Arbitrum Campus Tours 2024", role: "Layer 2 Ambassador", color: "from-blue-500 to-indigo-500" },
              { event: "Arbitrum Summit (Kenya) 2024", role: "Scaling Solutions Sage", color: "from-indigo-500 to-purple-500" },
              { event: "ETH Safari Conference 2024", role: "Ethereum Ecosystem Explorer", color: "from-purple-500 to-pink-500" },
              { event: "Developer Bootcamps 2024", role: "Web3 Wisdom Weaver", color: "from-orange-500 to-red-500" },
              { event: "Africa Metaverse Summit 2023", role: "Virtual Realm Architect", color: "from-cyan-500 to-blue-500" },
              { event: "Kenya NFT Summit 2023", role: "Token Trailblazer", color: "from-pink-500 to-rose-500" },
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="bg-gray-800/40 border-indigo-500/20 hover:border-indigo-500/40 transition-all duration-300 overflow-hidden group">
                  <CardContent className="p-6 relative">
                    <h3 className="text-lg font-semibold text-indigo-400 mb-2">{item.event}</h3>
                    <p className="text-gray-300">{item.role}</p>
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300`} />
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <motion.h2 
            className="text-3xl font-bold mb-12 text-center bg-gradient-to-r from-indigo-400 via-purple-400 to-pink-400 text-transparent bg-clip-text"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            Connect to My Network
          </motion.h2>
          <motion.div
            className="flex flex-col items-center gap-4"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <p className="text-gray-300 text-center max-w-2xl mb-6">
              Ready to dive into the decentralized future? Whether you're a fellow blockchain enthusiast, a curious developer, or someone looking to revolutionize with Web3, let's connect and create the next big thing in the crypto space!
            </p>
            <div className="flex gap-4">
              <Link href="mailto:mulinyafadhil@gmail.com">
                <Button variant="outline" size="lg" className="rounded-full bg-indigo-500/10 border-indigo-500/50 hover:bg-indigo-500/20">
                  <Mail className="w-4 h-4 mr-2" />
                  Ping My Inbox
                </Button>
              </Link>
              <Link href="https://linkedin.com/in/fadhil-mulinya">
                <Button variant="outline" size="lg" className="rounded-full bg-indigo-500/10 border-indigo-500/50 hover:bg-indigo-500/20">
                  <Linkedin className="w-4 h-4 mr-2" />
                  Link Up
                </Button>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-black">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-500">© 2024 Fadhil Mulinya | Powered by Blockchain | Fueled by Innovation</p>
        </div>
      </footer>
    </div>
  )
}