"use client";

import { motion } from "framer-motion";
import { Code, Database, Cloud, Brain, Wrench, Users } from 'lucide-react';

export default function SkillsSection() {
  const skillCategories = [
    {
      title: "Programming Languages",
      icon: Code,
      skills: [
        { name: "Java", level: 90 },
        { name: "Python", level: 85 },
        { name: "JavaScript", level: 88 },
        { name: "C++", level: 82 }
      ]
    },
    {
      title: "Web & Frameworks",
      icon: Wrench,
      skills: [
        { name: "React/Next.js", level: 90 },
        { name: "HTML/CSS", level: 95 },
        { name: "Django", level: 80 },
        { name: "Node.js", level: 85 }
      ]
    },
    {
      title: "Databases",
      icon: Database,
      skills: [
        { name: "MySQL", level: 85 },
        { name: "MongoDB", level: 80 },
        { name: "PostgreSQL", level: 78 }
      ]
    },
    {
      title: "AI/ML & Robotics",
      icon: Brain,
      skills: [
        { name: "Machine Learning", level: 85 },
        { name: "Deep Learning", level: 82 },
        { name: "ROS/ROS2", level: 80 },
        { name: "Computer Vision", level: 78 }
      ]
    },
    {
      title: "Cloud & DevOps",
      icon: Cloud,
      skills: [
        { name: "AWS", level: 75 },
        { name: "GCP", level: 70 },
        { name: "Azure", level: 72 },
        { name: "CI/CD", level: 78 }
      ]
    },
    {
      title: "Soft Skills",
      icon: Users,
      skills: [
        { name: "Leadership", level: 88 },
        { name: "Communication", level: 90 },
        { name: "Teamwork", level: 92 },
        { name: "Problem Solving", level: 95 }
      ]
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header with slide up animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            Skills & Expertise
          </h1>
          <p className="text-xl text-gray-300">
            Technical skills I've acquired throughout my journey
          </p>
        </motion.div>

        {/* Skills Grid with staggered animations */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => {
            const Icon = category.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8, rotateY: -15 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true, amount: 0.3 }}
                transition={{ 
                  duration: 0.7, 
                  delay: index * 0.15,
                  ease: "easeOut"
                }}
                className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors p-6 group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(255,255,255,0.1)"
                }}
              >
                <motion.div 
                  className="flex items-center mb-6"
                  initial={{ x: -20, opacity: 0 }}
                  whileInView={{ x: 0, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.5 }}
                >
                  <motion.div 
                    className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center mr-3 group-hover:bg-white/20 transition-colors"
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={20} className="text-white" />
                  </motion.div>
                  <h3 className="text-lg font-bold text-white">{category.title}</h3>
                </motion.div>

                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <motion.div 
                      key={skillIndex}
                      initial={{ opacity: 0, x: -30 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.15 + skillIndex * 0.1 + 0.5, 
                        duration: 0.5 
                      }}
                    >
                      <div className="flex justify-between items-center mb-2">
                        <span className="text-gray-300 text-sm">{skill.name}</span>
                        <motion.span 
                          className="text-white text-sm font-medium"
                          initial={{ opacity: 0, scale: 0 }}
                          whileInView={{ opacity: 1, scale: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: index * 0.15 + skillIndex * 0.1 + 0.8,
                            type: "spring",
                            stiffness: 200
                          }}
                        >
                          {skill.level}%
                        </motion.span>
                      </div>
                      <div className="w-full h-2 bg-gray-700 rounded-full overflow-hidden">
                        <motion.div
                          className="h-full bg-gradient-to-r from-white to-gray-300 rounded-full"
                          initial={{ width: 0, opacity: 0.5 }}
                          whileInView={{ width: `${skill.level}%`, opacity: 1 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: index * 0.15 + skillIndex * 0.1 + 0.6,
                            duration: 1.2,
                            ease: "easeOut"
                          }}
                        />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
