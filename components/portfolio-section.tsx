"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { X } from 'lucide-react';
import ExperienceSection from "./sections/experience-section";
import ProjectsSection from "./sections/projects-section";
import AchievementsSection from "./sections/achievements-section";
import AboutSection from "./sections/about-section";
import SkillsSection from "./sections/skills-section";
import EducationSection from "./sections/education-section";
import AiSection from "./sections/ai-section";

type Section = "experience" | "projects" | "achievements" | "about" | "skills" | "education" | "ai";

interface PortfolioSectionProps {
  section: Section;
  onClose: () => void;
}

export default function PortfolioSection({ section, onClose }: PortfolioSectionProps) {
  const renderSection = () => {
    switch (section) {
      case "experience":
        return <ExperienceSection />;
      case "projects":
        return <ProjectsSection />;
      case "achievements":
        return <AchievementsSection />;
      case "about":
        return <AboutSection />;
      case "skills":
        return <SkillsSection />;
      case "education":
        return <EducationSection />;
      case "ai":
        return <AiSection />;
      default:
        return null;
    }
  };

  const sectionColors: Record<Section, string> = {
    experience: "from-cyan-500/20 to-cyan-900/20 border-cyan-500/30",
    projects: "from-blue-500/20 to-blue-900/20 border-blue-500/30",
    achievements: "from-purple-500/20 to-purple-900/20 border-purple-500/30",
    about: "from-emerald-500/20 to-emerald-900/20 border-emerald-500/30",
    skills: "from-amber-500/20 to-amber-900/20 border-amber-500/30",
    education: "from-red-500/20 to-red-900/20 border-red-500/30",
    ai: "from-indigo-500/20 to-indigo-900/20 border-indigo-500/30"
  };

  return (
    <motion.div
      className="fixed inset-0 z-30 flex items-center justify-center p-4 md:p-8"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <div className="absolute inset-0 bg-black/70" onClick={onClose} />
      
      <motion.div
        className={`relative w-full max-w-5xl max-h-[90vh] overflow-y-auto rounded-lg border bg-gradient-to-br ${sectionColors[section]} backdrop-blur-xl p-6 text-white shadow-xl`}
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        transition={{ type: "spring", damping: 20 }}
      >
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-2 rounded-full bg-black/20 hover:bg-black/40 transition-colors"
        >
          <X size={20} className="text-white" />
        </button>
        
        <h2 className="text-2xl font-bold mb-6 capitalize">
          {section}
        </h2>
        
        {renderSection()}
      </motion.div>
    </motion.div>
  );
}
