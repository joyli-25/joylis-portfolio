"use client";

import { motion } from "framer-motion";
import { Home, User, Briefcase, Code, Award, GraduationCap, Shield, Mail } from 'lucide-react';

type Section = "home" | "about" | "experience" | "projects" | "skills" | "education" | "certifications" | "contact";

interface NavigationProps {
  activeSection: Section;
  onNavigate: (section: Section) => void;
}

export default function Navigation({ activeSection, onNavigate }: NavigationProps) {
  const navItems = [
    { id: "home" as Section, label: "Home", icon: Home },
    { id: "about" as Section, label: "About", icon: User },
    { id: "experience" as Section, label: "Experience", icon: Briefcase },
    { id: "projects" as Section, label: "Projects", icon: Code },
    { id: "skills" as Section, label: "Skills", icon: Award },
    { id: "education" as Section, label: "Education", icon: GraduationCap },
    { id: "certifications" as Section, label: "Certifications", icon: Shield },
    { id: "contact" as Section, label: "Contact", icon: Mail },
  ];

  const handleNavigate = (section: Section) => {
    try {
      if (onNavigate && typeof onNavigate === 'function') {
        onNavigate(section);
      }
    } catch (error) {
      console.warn('Error in navigation:', error);
    }
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 bg-black/80 backdrop-blur-lg border-b border-white/10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo with increased right margin */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="text-2xl font-bold text-white mr-12"
          >
            PORTFOLIO
          </motion.div>

          {/* Navigation Items */}
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              return (
                <motion.button
                  key={item.id}
                  onClick={() => handleNavigate(item.id)}
                  className={`px-4 py-2 rounded-lg flex items-center space-x-2 transition-colors ${
                    activeSection === item.id
                      ? "bg-white/20 text-white"
                      : "text-gray-300 hover:text-white hover:bg-white/10"
                  }`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Icon size={18} />
                  <span className="text-sm">{item.label}</span>
                </motion.button>
              );
            })}
          </div>
        </div>
      </div>
    </motion.nav>
  );
}
