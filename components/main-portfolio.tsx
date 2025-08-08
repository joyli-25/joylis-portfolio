"use client";

import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Bot } from 'lucide-react';
import HeroSection from "./sections/hero-section";
import AboutSection from "./sections/about-section";
import ExperienceSection from "./sections/experience-section";
import ProjectsSection from "./sections/projects-section";
import SkillsSection from "./sections/skills-section";
import EducationSection from "./sections/education-section";
import CertificationsSection from "./sections/certifications-section";
import ContactSection from "./sections/contact-section";
import Navigation from "./navigation";
import AIAssistant from "./ai-assistant";

type Section = "home" | "about" | "experience" | "projects" | "skills" | "education" | "certifications" | "contact";

export default function MainPortfolio() {
  const [activeSection, setActiveSection] = useState<Section>("home");
  const [showAI, setShowAI] = useState(false);
  const [isScrollMode, setIsScrollMode] = useState(true);
  const [showTooltip, setShowTooltip] = useState(false);
  
  const sectionRefs = {
    home: useRef<HTMLDivElement>(null),
    about: useRef<HTMLDivElement>(null),
    experience: useRef<HTMLDivElement>(null),
    projects: useRef<HTMLDivElement>(null),
    skills: useRef<HTMLDivElement>(null),
    education: useRef<HTMLDivElement>(null),
    certifications: useRef<HTMLDivElement>(null),
    contact: useRef<HTMLDivElement>(null),
  };

  // Enhanced scroll detection for active section highlighting
  useEffect(() => {
    if (!isScrollMode) return;

    const handleScroll = () => {
      try {
        const scrollY = window.scrollY;
        const windowHeight = window.innerHeight;
        const sections = Object.entries(sectionRefs);
        
        // Find which section is most visible
        let maxVisibleArea = 0;
        let mostVisibleSection = activeSection;

        sections.forEach(([sectionName, ref]) => {
          if (ref?.current) {
            const rect = ref.current.getBoundingClientRect();
            const sectionTop = rect.top;
            const sectionBottom = rect.bottom;
            const sectionHeight = rect.height;

            // Calculate visible area of this section
            const visibleTop = Math.max(0, -sectionTop);
            const visibleBottom = Math.min(windowHeight, windowHeight - Math.max(0, sectionBottom - windowHeight));
            const visibleHeight = Math.max(0, visibleBottom - visibleTop);
            const visibleArea = visibleHeight / sectionHeight;

            // Section is considered active if it's more than 30% visible
            if (visibleArea > 0.3 && visibleArea > maxVisibleArea) {
              maxVisibleArea = visibleArea;
              mostVisibleSection = sectionName as Section;
            }

            // Special case for sections at the very top or bottom
            if (sectionTop <= 100 && sectionBottom >= 100) {
              mostVisibleSection = sectionName as Section;
            }
          }
        });

        if (mostVisibleSection !== activeSection) {
          setActiveSection(mostVisibleSection);
        }
      } catch (error) {
        console.warn('Error in scroll handler:', error);
      }
    };

    // Throttled scroll listener for better performance
    let ticking = false;
    const scrollListener = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          handleScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    // Initial check
    handleScroll();

    window.addEventListener('scroll', scrollListener, { passive: true });
    return () => window.removeEventListener('scroll', scrollListener);
  }, [isScrollMode, activeSection]);

  const handleNavigate = (section: Section) => {
    try {
      setActiveSection(section);
      if (isScrollMode && sectionRefs[section]?.current) {
        sectionRefs[section].current?.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      } else {
        setIsScrollMode(false);
      }
    } catch (error) {
      console.warn('Error in navigation:', error);
    }
  };

  const renderScrollableContent = () => (
    <div className="relative">
      <div ref={sectionRefs.home} id="home">
        <HeroSection onNavigate={handleNavigate} />
      </div>
      <div ref={sectionRefs.about} id="about">
        <AboutSection />
      </div>
      <div ref={sectionRefs.experience} id="experience">
        <ExperienceSection />
      </div>
      <div ref={sectionRefs.projects} id="projects">
        <ProjectsSection />
      </div>
      <div ref={sectionRefs.skills} id="skills">
        <SkillsSection />
      </div>
      <div ref={sectionRefs.education} id="education">
        <EducationSection />
      </div>
      <div ref={sectionRefs.certifications} id="certifications">
        <CertificationsSection />
      </div>
      <div ref={sectionRefs.contact} id="contact">
        <ContactSection />
      </div>
    </div>
  );

  const renderSingleSection = () => {
    try {
      switch (activeSection) {
        case "home":
          return <HeroSection onNavigate={handleNavigate} />;
        case "about":
          return <AboutSection />;
        case "experience":
          return <ExperienceSection />;
        case "projects":
          return <ProjectsSection />;
        case "skills":
          return <SkillsSection />;
        case "education":
          return <EducationSection />;
        case "certifications":
          return <CertificationsSection />;
        case "contact":
          return <ContactSection />;
        default:
          return <HeroSection onNavigate={handleNavigate} />;
      }
    } catch (error) {
      console.warn('Error rendering section:', error);
      return <HeroSection onNavigate={handleNavigate} />;
    }
  };

  return (
    <div className="relative min-h-screen bg-black">
      {/* Navigation with active section highlighting */}
      <Navigation 
        activeSection={activeSection} 
        onNavigate={handleNavigate}
      />

      {/* Main Content */}
      {isScrollMode ? (
        renderScrollableContent()
      ) : (
        <AnimatePresence mode="wait">
          <motion.div
            key={activeSection}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="min-h-screen"
          >
            {renderSingleSection()}
          </motion.div>
        </AnimatePresence>
      )}

      {/* Chatbot Button with Tooltip */}
      <div className="fixed bottom-6 right-6 z-40">
        <motion.div
          className="relative"
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
        >
          {/* Tooltip */}
          <AnimatePresence>
            {showTooltip && (
              <motion.div
                initial={{ opacity: 0, scale: 0.8, y: 10 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.8, y: 10 }}
                transition={{ duration: 0.2 }}
                className="absolute bottom-full right-0 mb-3 w-64 p-3 bg-black/90 backdrop-blur-lg border border-white/20 rounded-lg shadow-xl"
              >
                <div className="text-white text-sm text-center">
                  This chatbot is only designed to answer Joyli's portfolio or resume related questions.
                </div>
                {/* Arrow pointing down */}
                <div className="absolute top-full right-6 w-0 h-0 border-l-4 border-r-4 border-t-4 border-l-transparent border-r-transparent border-t-white/20"></div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Chatbot Button */}
          <motion.button
            onClick={() => setShowAI(!showAI)}
            className="w-14 h-14 bg-white/10 backdrop-blur-lg border border-white/20 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors shadow-lg"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            initial={{ opacity: 0, scale: 0 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 2 }}
          >
            <Bot size={24} className="text-white" />
          </motion.button>
        </motion.div>
      </div>

      {/* AI Assistant */}
      {showAI && (
        <AIAssistant onClose={() => setShowAI(false)} />
      )}
    </div>
  );
}
