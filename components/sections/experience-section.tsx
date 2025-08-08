"use client";

import { motion } from "framer-motion";
import { Calendar, MapPin } from 'lucide-react';

export default function ExperienceSection() {
  const experiences = [
    {
      title: "Software Development Intern",
      company: "P&F Solutions",
      location: "NJ, USA (Remote)",
      period: "July 2025 – Present",
      description: [
        "Developing scalable web applications in a professional Agile environment using React, Next.js, Node.js, Python, and Azure",
        "Contributing to CI/CD pipelines, security analysis, and DevOps workflows",
        "Collaborating across teams to deliver full-stack features and lead upcoming projects"
      ],
      technologies: ["React", "Next.js", "Node.js", "Python", "Azure", "DevOps"]
    },
    {
      title: "Teaching Assistant and Instructor",
      company: "California State University Long Beach",
      location: "Long Beach, CA, USA",
      period: "August 2024 – May 2025",
      description: [
        "Assist in course instruction and grading for graduate-level Advanced Analysis of Algorithms",
        "Lead tutorial sessions on dynamic programming, graph algorithms, and optimization techniques",
        "Delivered video lecture series on data structures and algorithms with focus on AI-relevant problem-solving patterns",
        "Support Master's students in optimizing algorithmic implementations for AI applications"
      ],
      technologies: ["Algorithms", "Data Structures", "Dynamic Programming", "AI", "Teaching"]
    },
    {
      title: "Software Development Intern",
      company: "Vistaar Digital Communications Pvt. Ltd",
      location: "Mumbai, India",
      period: "December 2021 – May 2022",
      description: [
        "Developed iPad applications from scratch, including the Restora project for medical product promotion",
        "Built applications for doctors and hospitals using HTML, CSS, JavaScript, and JSON",
        "Utilized Jenkins for CI and contributed to debugging and enhancing multiple projects",
        "Worked in collaborative environment with cross-functional teams"
      ],
      technologies: ["HTML", "CSS", "JavaScript", "JSON", "Jenkins", "iPad Development"]
    },
    {
      title: "Software Development Intern",
      company: "Daily Tech Suggest",
      location: "Delhi, India (Remote)",
      period: "July 2021 – December 2021",
      description: [
        "Took ownership of full-stack web tasks including bug fixes, feature implementation, and performance enhancements",
        "Independently built the 'Contact Us' page and contributed to the 'Ditto Cabs' project",
        "Applied proactive approach to solve real-world challenges in fast-paced environment"
      ],
      technologies: ["Full-Stack", "Web Development", "Bug Fixes", "Performance Optimization"]
    },
    {
      title: "Robotics and AI Intern",
      company: "Robocon",
      location: "Mumbai, India",
      period: "September 2020 – August 2021",
      description: [
        "Developed autonomous navigation modules using ROS2 and C++ for differential-drive robots",
        "Implemented SLAM, sensor fusion (camera + IR), and path planning algorithms",
        "Simulated robot behavior in Gazebo and built custom ROS2 nodes",
        "Contributed to hardware-software debugging and control optimization"
      ],
      technologies: ["ROS2", "C++", "SLAM", "Gazebo", "Path Planning", "Sensor Fusion"]
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-4xl mx-auto">
        {/* Header with typewriter effect */}
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
            initial={{ opacity: 0, y: -30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Experience
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            My professional journey in software development and technology
          </motion.p>
        </motion.div>

        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, x: index % 2 === 0 ? -100 : 100, rotateY: index % 2 === 0 ? -15 : 15 }}
              whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ 
                duration: 0.8, 
                delay: index * 0.2,
                ease: "easeOut"
              }}
              className="relative"
            >
              {/* Timeline Line */}
              {index < experiences.length - 1 && (
                <motion.div 
                  className="absolute left-6 top-20 w-0.5 h-full bg-gradient-to-b from-white to-transparent"
                  initial={{ scaleY: 0 }}
                  whileInView={{ scaleY: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.5, duration: 0.8 }}
                  style={{ transformOrigin: "top" }}
                />
              )}
              
              {/* Timeline Dot */}
              <motion.div 
                className="absolute left-4 top-8 w-4 h-4 bg-white rounded-full border-4 border-black"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.2 + 0.3,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ scale: 1.5, boxShadow: "0 0 20px rgba(255,255,255,0.5)" }}
              />
              
              {/* Content */}
              <motion.div 
                className="ml-16 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
                whileHover={{ 
                  scale: 1.02, 
                  y: -10,
                  boxShadow: "0 25px 50px rgba(255,255,255,0.1)",
                  borderColor: "rgba(255,255,255,0.3)"
                }}
                transition={{ duration: 0.3 }}
              >
                <motion.div 
                  className="flex flex-col md:flex-row md:items-center md:justify-between mb-4"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.6, duration: 0.5 }}
                >
                  <div>
                    <h3 className="text-xl font-bold text-white mb-1 group-hover:text-gray-200 transition-colors">{exp.title}</h3>
                    <h4 className="text-lg text-gray-300 mb-2">{exp.company}</h4>
                  </div>
                  <div className="text-sm text-gray-400 space-y-1">
                    <div className="flex items-center space-x-2">
                      <Calendar size={16} />
                      <span>{exp.period}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <MapPin size={16} />
                      <span>{exp.location}</span>
                    </div>
                  </div>
                </motion.div>
                
                <motion.ul 
                  className="space-y-2 mb-4"
                  initial={{ opacity: 0 }}
                  whileInView={{ opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 0.8, duration: 0.6 }}
                >
                  {exp.description.map((item, i) => (
                    <motion.li 
                      key={i} 
                      className="text-gray-300 flex items-start"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.9 + i * 0.1, duration: 0.4 }}
                    >
                      <span className="text-white mr-2">•</span>
                      {item}
                    </motion.li>
                  ))}
                </motion.ul>
                
                <motion.div 
                  className="flex flex-wrap gap-2"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.2 + 1.2, duration: 0.5 }}
                >
                  {exp.technologies.map((tech, i) => (
                    <motion.span
                      key={i}
                      className="px-3 py-1 bg-white/10 text-white rounded-full text-sm border border-white/20 hover:bg-white/20 transition-colors"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.2 + 1.3 + i * 0.05,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ scale: 1.1, y: -2 }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              </motion.div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
