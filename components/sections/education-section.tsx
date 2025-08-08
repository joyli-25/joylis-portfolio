"use client";

import { motion } from "framer-motion";
import { GraduationCap, Calendar, MapPin } from 'lucide-react';

export default function EducationSection() {
  const education = [
    {
      degree: "MS Computer Science",
      institution: "California State University Long Beach",
      location: "Long Beach, USA",
      period: "August 2023 – May 2025",
      status: "Completed",
      description: "Advanced coursework in algorithms, artificial intelligence, and software engineering. Served as Teaching Assistant for Advanced Analysis of Algorithms.",
      achievements: [
        "Teaching Assistant for graduate-level courses",
        "Focus on AI and machine learning applications",
        "Advanced algorithm analysis and optimization"
      ],
      gpa: "3.8/4.0"
    },
    {
      degree: "BE Computer Engineering",
      institution: "Fr. Conceicao Rodrigues College of Engineering",
      location: "Mumbai, IN",
      period: "August 2019 – June 2023",
      status: "Completed",
      description: "Comprehensive undergraduate program covering computer science fundamentals, software engineering, and emerging technologies.",
      achievements: [
        "Strong foundation in programming and system design",
        "Active participation in robotics competitions",
        "Completed multiple internships during studies"
      ],
      gpa: "3.7/4.0"
    }
  ];

  const activities = [
    {
      title: "National Service Scheme",
      description: "Volunteered for 2 years, participated in various social activities and served on the committee",
      icon: "🤝"
    },
    {
      title: "Robocon Competition",
      description: "Participated in national robotics competition, developed autonomous navigation systems",
      icon: "🤖"
    },
    {
      title: "Online Certifications",
      description: "Completed various certification courses from Coursera offered by Google, Amazon, and other reputed companies",
      icon: "📚"
    },
    {
      title: "Technical Workshops",
      description: "Attended and organized workshops on AI/ML, web development, and robotics",
      icon: "🔧"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header with book opening effect */}
        <motion.div
          initial={{ opacity: 0, rotateX: -90 }}
          whileInView={{ opacity: 1, rotateX: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 1, 
            type: "spring", 
            stiffness: 100 
          }}
          className="text-center mb-16"
        >
          <motion.h1 
            className="text-4xl md:text-6xl font-bold mb-6 text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Education
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            My academic journey and continuous learning path
          </motion.p>
        </motion.div>

        {/* Education Timeline with alternating slide animations */}
        <div className="space-y-12 mb-16">
          {education.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.3 }}
              transition={{ duration: 0.8, delay: index * 0.3 }}
              className="relative"
            >
              {/* Timeline Line */}
              {index < education.length - 1 && (
                <motion.div 
                  className="absolute left-1/2 top-32 w-0.5 h-32 bg-white transform -translate-x-1/2"
                  initial={{ scaleY: 0, opacity: 0 }}
                  whileInView={{ scaleY: 1, opacity: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.3 + 0.5, duration: 0.8 }}
                  style={{ transformOrigin: "top" }}
                />
              )}
              
              {/* Timeline Dot */}
              <motion.div 
                className="absolute left-1/2 top-8 w-6 h-6 bg-white rounded-full transform -translate-x-1/2 border-4 border-black z-10"
                initial={{ scale: 0, rotate: -180 }}
                whileInView={{ scale: 1, rotate: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.3 + 0.3,
                  type: "spring",
                  stiffness: 200
                }}
                whileHover={{ 
                  scale: 1.5, 
                  boxShadow: "0 0 20px rgba(255,255,255,0.5)" 
                }}
              />
              
              {/* Content */}
              <div className={`flex ${index % 2 === 0 ? 'justify-start' : 'justify-end'}`}>
                <motion.div 
                  className="w-full md:w-5/12 p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
                  initial={{ 
                    opacity: 0, 
                    x: index % 2 === 0 ? -100 : 100,
                    rotateY: index % 2 === 0 ? -15 : 15
                  }}
                  whileInView={{ opacity: 1, x: 0, rotateY: 0 }}
                  viewport={{ once: true }}
                  transition={{ 
                    duration: 0.8, 
                    delay: index * 0.3 + 0.4,
                    ease: "easeOut"
                  }}
                  whileHover={{ 
                    scale: 1.05, 
                    y: -10,
                    boxShadow: "0 25px 50px rgba(255,255,255,0.1)"
                  }}
                >
                  <motion.div 
                    className="flex items-center mb-4"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 + 0.6, duration: 0.5 }}
                  >
                    <motion.div 
                      className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mr-4 group-hover:bg-white/20 transition-colors"
                      whileHover={{ rotate: 360, scale: 1.2 }}
                      transition={{ duration: 0.5 }}
                    >
                      <GraduationCap size={24} className="text-white" />
                    </motion.div>
                    <div>
                      <h3 className="text-xl font-bold text-white">{edu.degree}</h3>
                      <motion.div 
                        className={`inline-block px-2 py-1 rounded-full text-xs ${
                          edu.status === 'Completed' 
                            ? 'bg-green-500/20 text-green-400' 
                            : 'bg-yellow-500/20 text-yellow-400'
                        }`}
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: index * 0.3 + 0.8,
                          type: "spring",
                          stiffness: 200
                        }}
                      >
                        {edu.status}
                      </motion.div>
                    </div>
                  </motion.div>
                  
                  <motion.h4 
                    className="text-lg text-gray-300 mb-3"
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 + 0.7, duration: 0.5 }}
                  >
                    {edu.institution}
                  </motion.h4>
                  
                  <motion.div 
                    className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4 text-sm text-gray-400"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 + 0.8, duration: 0.5 }}
                  >
                    <div className="flex items-center space-x-4 mb-2 sm:mb-0">
                      <div className="flex items-center space-x-1">
                        <Calendar size={16} />
                        <span>{edu.period}</span>
                      </div>
                      <div className="flex items-center space-x-1">
                        <MapPin size={16} />
                        <span>{edu.location}</span>
                      </div>
                    </div>
                    <motion.div 
                      className="text-white font-medium"
                      initial={{ scale: 0 }}
                      whileInView={{ scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: index * 0.3 + 1,
                        type: "spring",
                        stiffness: 200
                      }}
                    >
                      GPA: {edu.gpa}
                    </motion.div>
                  </motion.div>
                  
                  <motion.p 
                    className="text-gray-300 mb-4"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.3 + 0.9, duration: 0.6 }}
                  >
                    {edu.description}
                  </motion.p>
                  
                  <div>
                    <motion.h5 
                      className="text-sm font-medium text-white mb-2"
                      initial={{ opacity: 0, x: -10 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.3 + 1, duration: 0.4 }}
                    >
                      Key Achievements:
                    </motion.h5>
                    <ul className="space-y-1">
                      {edu.achievements.map((achievement, i) => (
                        <motion.li 
                          key={i} 
                          className="text-gray-400 text-sm flex items-start"
                          initial={{ opacity: 0, x: -20 }}
                          whileInView={{ opacity: 1, x: 0 }}
                          viewport={{ once: true }}
                          transition={{ 
                            delay: index * 0.3 + 1.1 + i * 0.1, 
                            duration: 0.4 
                          }}
                        >
                          <span className="text-white mr-2">•</span>
                          {achievement}
                        </motion.li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Extracurricular Activities with card flip effect */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.h2 
            className="text-3xl font-bold text-center mb-8 text-white"
            initial={{ opacity: 0, scale: 0.5 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4, duration: 0.6 }}
          >
            Extracurricular Activities
          </motion.h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {activities.map((activity, index) => (
              <motion.div
                key={index}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
                initial={{ 
                  opacity: 0, 
                  rotateX: -60,
                  y: 50
                }}
                whileInView={{ 
                  opacity: 1, 
                  rotateX: 0,
                  y: 0
                }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2 + 0.6,
                  ease: "easeOut"
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(255,255,255,0.1)"
                }}
              >
                <div className="flex items-start space-x-4">
                  <motion.div 
                    className="text-3xl"
                    initial={{ scale: 0, rotate: -180 }}
                    whileInView={{ scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ 
                      delay: index * 0.2 + 0.8,
                      type: "spring",
                      stiffness: 200
                    }}
                    whileHover={{ scale: 1.2, rotate: 360 }}
                  >
                    {activity.icon}
                  </motion.div>
                  <div>
                    <motion.h3 
                      className="text-lg font-bold text-white mb-2"
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 0.9, duration: 0.5 }}
                    >
                      {activity.title}
                    </motion.h3>
                    <motion.p 
                      className="text-gray-400 text-sm"
                      initial={{ opacity: 0 }}
                      whileInView={{ opacity: 1 }}
                      viewport={{ once: true }}
                      transition={{ delay: index * 0.2 + 1, duration: 0.6 }}
                    >
                      {activity.description}
                    </motion.p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}
