"use client";

import { motion } from "framer-motion";
import { Github, Linkedin, Mail, MapPin, Download } from 'lucide-react';

type Section = "home" | "about" | "experience" | "projects" | "skills" | "education" | "certifications" | "contact";

interface HeroSectionProps {
  onNavigate: (section: Section) => void;
}

export default function HeroSection({ onNavigate }: HeroSectionProps) {
  const handleNavigate = (section: Section) => {
    try {
      if (onNavigate && typeof onNavigate === 'function') {
        onNavigate(section);
      }
    } catch (error) {
      console.warn('Error in navigation:', error);
    }
  };

  const handleResumeDownload = () => {
    try {
      // Create a link element and trigger download
      const link = document.createElement('a');
      link.href = '/resume/Joyli_Rumao_Resume.pdf'; // Path to your resume file
      link.download = 'Joyli_Rumao_Resume.pdf';
      link.target = '_blank';
      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);
    } catch (error) {
      console.warn('Error downloading resume:', error);
      // Fallback: open in new tab
      window.open('/resume/Joyli_Rumao_Resume.pdf', '_blank');
    }
  };

  const handleLocationClick = () => {
    try {
      // Open Google Maps with Long Beach, CA
      const mapsUrl = 'https://www.google.com/maps/place/Long+Beach,+CA';
      window.open(mapsUrl, '_blank');
    } catch (error) {
      console.warn('Error opening maps:', error);
    }
  };

  return (
    <div className="relative h-screen flex flex-col bg-black">
      {/* Header Spacer */}
      <div className="h-20 flex-shrink-0"></div>
      
      {/* Main Hero Content */}
      <div className="flex-1 flex items-center justify-center overflow-hidden">
        {/* Animated Background - Simple CSS Animation */}
        <div className="absolute inset-0">
          {/* Simple animated particles */}
          <div className="absolute inset-0 pointer-events-none">
            {Array.from({ length: 100 }).map((_, i) => {
              const colors = [
                '#00ff88', '#ff0080', '#0080ff', '#ffff00', '#ff8000', 
                '#8000ff', '#00ffff', '#ff4000', '#4000ff', '#00ff40'
              ];
              const randomColor = colors[Math.floor(Math.random() * colors.length)];
              
              return (
                <motion.div
                  key={i}
                  className="absolute w-1 h-1 rounded-full"
                  style={{
                    left: `${Math.random() * 100}%`,
                    top: `${Math.random() * 100}%`,
                    backgroundColor: randomColor,
                    boxShadow: `0 0 ${4 + Math.random() * 6}px currentColor`
                  }}
                  animate={{
                    y: [0, -15, 0],
                    x: [0, Math.random() * 8 - 4, 0],
                    opacity: [0.2, 1, 0.2],
                    scale: [0.3, 1, 0.3],
                  }}
                  transition={{
                    duration: 2 + Math.random() * 3,
                    repeat: Infinity,
                    delay: Math.random() * 2,
                    ease: "easeInOut"
                  }}
                />
              );
            })}
          </div>

          {/* Animated Grid Overlay */}
          <div className="absolute inset-0 opacity-5">
            <div className="w-full h-full" style={{
              backgroundImage: `
                linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
              `,
              backgroundSize: '60px 60px'
            }} />
          </div>
        </div>

        {/* Content Overlay */}
        <div className="relative z-10 text-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 100 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2, delay: 0.5 }}
          >
            {/* Main Title */}
            <motion.h1 
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold mb-8 text-white leading-tight"
              initial={{ scale: 0.5, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ duration: 1, delay: 0.8 }}
            >
              <motion.span
                animate={{
                  textShadow: [
                    "0 0 20px rgba(255,255,255,0.5)",
                    "0 0 40px rgba(255,255,255,0.8)",
                    "0 0 20px rgba(255,255,255,0.5)"
                  ]
                }}
                transition={{ duration: 2, repeat: Infinity }}
              >
                JOYLI RUMAO
              </motion.span>
            </motion.h1>
            
            {/* Subtitle */}
            <motion.div
              className="text-xl sm:text-2xl md:text-3xl lg:text-4xl text-gray-300 mb-12 font-light"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1, delay: 1.2 }}
            >
              Software Developer & AI Innovator
            </motion.div>

            {/* Info Cards */}
            <motion.div
              className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 lg:gap-8 mb-16 text-gray-300"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 1.8 }}
            >
              {[
                { icon: MapPin, text: "Long Beach, CA", action: handleLocationClick },
                { icon: Mail, text: "joyli.rumao1425@gmail.com", action: () => window.open('mailto:joyli.rumao1425@gmail.com') },
                { icon: Download, text: "Download Resume", action: handleResumeDownload }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className={`flex items-center space-x-2 sm:space-x-3 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full px-4 sm:px-6 py-2 sm:py-3 hover:bg-white/10 transition-colors ${item.action ? 'cursor-pointer' : ''}`}
                    whileHover={{ scale: 1.05, y: -5 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={item.action || undefined}
                  >
                    <Icon size={18} />
                    <span className="text-xs sm:text-sm">{item.text}</span>
                  </motion.div>
                );
              })}
            </motion.div>

            {/* Social Links */}
            <motion.div
              className="flex justify-center space-x-6 sm:space-x-8 mb-16"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1, delay: 2.2 }}
            >
              {[
                { icon: Linkedin, href: "https://www.linkedin.com/in/joyli-rumao", color: "hover:text-blue-400" },
                { icon: Github, href: "https://github.com/joyli-25/joyli", color: "hover:text-gray-400" },
                { icon: Mail, href: "mailto:joyli.rumao1425@gmail.com", color: "hover:text-green-400" }
              ].map((social, index) => {
                const Icon = social.icon;
                return (
                  <motion.a
                    key={index}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-3 sm:p-4 bg-white/5 backdrop-blur-sm border border-white/10 rounded-full text-white ${social.color} transition-colors`}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ duration: 0.3 }}
                  >
                    <Icon size={24} className="sm:w-7 sm:h-7" />
                  </motion.a>
                );
              })}
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row justify-center gap-4 sm:gap-6"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 2.5 }}
            >
              <motion.button
                onClick={() => handleNavigate("projects")}
                className="px-6 sm:px-8 py-3 sm:py-4 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.3)" }}
                whileTap={{ scale: 0.95 }}
              >
                Explore My Work
              </motion.button>
              <motion.button
                onClick={() => handleNavigate("contact")}
                className="px-6 sm:px-8 py-3 sm:py-4 border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-black transition-colors text-sm sm:text-base"
                whileHover={{ scale: 1.05, boxShadow: "0 0 30px rgba(255,255,255,0.2)" }}
                whileTap={{ scale: 0.95 }}
              >
                Get In Touch
              </motion.button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
