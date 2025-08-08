"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Github, ExternalLink } from 'lucide-react';

export default function ProjectsSection() {
  const [filter, setFilter] = useState<string>("all");

  const projects = [
    {
      title: "Billing System with Apache Kafka",
      description: "Real-time distributed billing system using Apache Kafka to monitor CPU and memory usage across machines with live dashboard for usage and billing insights.",
      image: "/projects/kafka-billing.png",
      technologies: ["Apache Kafka", "Real-time Processing", "Distributed Systems", "Dashboard"],
      category: "distributed",
      date: "December 2024",
      github: "#",
      demo: "#"
    },
    {
      title: "Breast Cancer Classification",
      description: "Deep learning model using transfer learning with pre-trained CNN architectures (AlexNet, DenseNet) for high-accuracy histopathological image classification.",
      image: "/projects/breast-cancer-ai.png",
      technologies: ["Deep Learning", "CNN", "Transfer Learning", "Medical AI"],
      category: "ai",
      date: "February 2023",
      github: "#",
      demo: "#"
    },
    {
      title: "Depression Tracker",
      description: "Java-based AI-driven application to detect potential depression using fuzzy logic on questionnaire responses with depression score calculation.",
      image: "/projects/depression-tracker.png",
      technologies: ["Java", "Fuzzy Logic", "AI", "Mental Health"],
      category: "ai",
      date: "May 2021",
      github: "#",
      demo: "#"
    },
    {
      title: "Restora iPad Application",
      description: "iPad application developed for medical product promotion targeting doctors and hospitals, built from scratch with modern web technologies.",
      image: "/projects/restora-ipad.png",
      technologies: ["HTML", "CSS", "JavaScript", "iPad Development"],
      category: "web",
      date: "2022",
      github: "#",
      demo: "#"
    },
    {
      title: "Autonomous Robot Navigation",
      description: "ROS2-based autonomous navigation system with SLAM, sensor fusion, and path planning for differential-drive robots in dynamic environments.",
      image: "/projects/robot-navigation.png",
      technologies: ["ROS2", "C++", "SLAM", "Path Planning", "Gazebo"],
      category: "robotics",
      date: "2021",
      github: "#",
      demo: "#"
    },
    {
      title: "Ditto Cabs Platform",
      description: "Full-stack web application for cab booking service with user management, booking system, and real-time tracking capabilities.",
      image: "/projects/ditto-cabs.png",
      technologies: ["Full-Stack", "Web Development", "Real-time", "Booking System"],
      category: "web",
      date: "2021",
      github: "#",
      demo: "#"
    }
  ];

  const categories = [
    { id: "all", label: "All Projects" },
    { id: "ai", label: "AI/ML" },
    { id: "web", label: "Web Development" },
    { id: "robotics", label: "Robotics" },
    { id: "distributed", label: "Distributed Systems" }
  ];

  const filteredProjects = filter === "all" 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header with zoom effect */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.8, 
            type: "spring", 
            stiffness: 100 
          }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, rotateX: -90 }}
            whileInView={{ opacity: 1, rotateX: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Projects
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 mb-8"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            A showcase of my technical projects and innovations
          </motion.p>

          {/* Filter Buttons with wave animation */}
          <motion.div 
            className="flex flex-wrap justify-center gap-2 mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.7, duration: 0.6 }}
          >
            {categories.map((category, index) => (
              <motion.button
                key={category.id}
                onClick={() => setFilter(category.id)}
                className={`px-4 py-2 rounded-full text-sm transition-colors ${
                  filter === category.id
                    ? "bg-white text-black"
                    : "bg-white/10 text-gray-300 hover:bg-white/20"
                }`}
                initial={{ opacity: 0, y: 20, scale: 0.8 }}
                whileInView={{ opacity: 1, y: 0, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8 + index * 0.1, duration: 0.4 }}
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                {category.label}
              </motion.button>
            ))}
          </motion.div>
        </motion.div>

        {/* Projects Grid with 3D flip cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ 
                opacity: 0, 
                y: 100, 
                rotateX: -30,
                scale: 0.8
              }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                rotateX: 0,
                scale: 1
              }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.15,
                ease: "easeOut"
              }}
              className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors overflow-hidden group perspective-1000"
              whileHover={{ 
                scale: 1.05, 
                y: -15,
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(255,255,255,0.15)"
              }}
            >
              <div className="relative overflow-hidden">
                <motion.img
                  src={project.image || "/placeholder.svg"}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                  initial={{ scale: 1.2, opacity: 0 }}
                  whileInView={{ scale: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.3, duration: 0.8 }}
                  whileHover={{ scale: 1.1 }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <motion.div 
                  className="absolute top-4 right-4 text-xs text-gray-300 bg-black/50 px-2 py-1 rounded"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.5, duration: 0.5 }}
                >
                  {project.date}
                </motion.div>
              </div>

              <motion.div 
                className="p-6"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 + 0.4, duration: 0.6 }}
              >
                <motion.h3 
                  className="text-xl font-bold text-white mb-2"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.6, duration: 0.5 }}
                >
                  {project.title}
                </motion.h3>
                <motion.p 
                  className="text-gray-400 mb-4 text-sm leading-relaxed"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.7, duration: 0.6 }}
                >
                  {project.description}
                </motion.p>

                <motion.div 
                  className="flex flex-wrap gap-2 mb-4"
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 0.8, duration: 0.5 }}
                >
                  {project.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-2 py-1 bg-white/10 text-white rounded text-xs border border-white/20"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.15 + 0.9 + i * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>

                <motion.div 
                  className="flex space-x-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.15 + 1, duration: 0.5 }}
                >
                  <motion.a
                    href={project.github}
                    className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <Github size={18} />
                    <span className="text-sm">Code</span>
                  </motion.a>
                  <motion.a
                    href={project.demo}
                    className="flex items-center space-x-2 text-white hover:text-gray-300 transition-colors"
                    whileHover={{ scale: 1.1, x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <ExternalLink size={18} />
                    <span className="text-sm">Demo</span>
                  </motion.a>
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
