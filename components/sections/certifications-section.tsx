"use client";

import { motion } from "framer-motion";
import { Award, Calendar, ExternalLink, Shield, Star, Trophy, Medal, Crown } from 'lucide-react';

export default function CertificationsSection() {
  const certifications = [
    {
      title: "Salesforce Certified AI Associate",
      issuer: "Salesforce",
      date: "January 2025",
      credentialId: "SF-AI-2025-001",
      description: "Comprehensive certification covering AI fundamentals, machine learning concepts, and Salesforce AI implementation strategies.",
      icon: Shield,
      color: "from-blue-500 to-blue-700",
      skills: ["Artificial Intelligence", "Machine Learning", "Salesforce Platform", "AI Ethics"]
    },
    {
      title: "Agentforce Specialist",
      issuer: "Salesforce",
      date: "January 2025",
      credentialId: "SF-AGF-2025-002",
      description: "Advanced certification in Salesforce Agentforce platform, focusing on intelligent automation and AI-driven customer service solutions.",
      icon: Trophy,
      color: "from-purple-500 to-purple-700",
      skills: ["Automation", "Customer Service AI", "Workflow Design", "Integration"]
    },
    {
      title: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "November 2024",
      credentialId: "AWS-SA-2024-003",
      description: "Professional-level certification demonstrating expertise in designing distributed systems and applications on AWS platform.",
      icon: Crown,
      color: "from-orange-500 to-orange-700",
      skills: ["Cloud Architecture", "AWS Services", "System Design", "Security"]
    },
    {
      title: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "October 2024",
      credentialId: "GCP-PD-2024-004",
      description: "Professional certification validating skills in developing scalable applications using Google Cloud technologies.",
      icon: Medal,
      color: "from-green-500 to-green-700",
      skills: ["GCP Services", "Application Development", "DevOps", "Kubernetes"]
    },
    {
      title: "Microsoft Azure AI Engineer",
      issuer: "Microsoft",
      date: "September 2024",
      credentialId: "AZ-AI-2024-005",
      description: "Specialized certification in designing and implementing AI solutions using Microsoft Azure cognitive services.",
      icon: Star,
      color: "from-cyan-500 to-cyan-700",
      skills: ["Azure AI", "Cognitive Services", "ML Models", "Computer Vision"]
    },
    {
      title: "Deep Learning Specialization",
      issuer: "Coursera (DeepLearning.AI)",
      date: "August 2024",
      credentialId: "DL-SPEC-2024-006",
      description: "Comprehensive specialization covering neural networks, deep learning, and practical implementation of AI systems.",
      icon: Award,
      color: "from-red-500 to-red-700",
      skills: ["Neural Networks", "TensorFlow", "CNN", "RNN"]
    },
    {
      title: "Kubernetes Administrator (CKA)",
      issuer: "Cloud Native Computing Foundation",
      date: "July 2024",
      credentialId: "CKA-2024-007",
      description: "Professional certification demonstrating skills in Kubernetes cluster administration and container orchestration.",
      icon: Shield,
      color: "from-indigo-500 to-indigo-700",
      skills: ["Kubernetes", "Container Orchestration", "DevOps", "Cluster Management"]
    },
    {
      title: "React Developer Certification",
      issuer: "Meta (Facebook)",
      date: "June 2024",
      credentialId: "META-REACT-2024-008",
      description: "Advanced certification in React development, covering modern React patterns, hooks, and performance optimization.",
      icon: Trophy,
      color: "from-teal-500 to-teal-700",
      skills: ["React", "JavaScript", "Frontend Development", "Performance Optimization"]
    },
    {
      title: "Python for Data Science",
      issuer: "IBM",
      date: "May 2024",
      credentialId: "IBM-PY-2024-009",
      description: "Comprehensive certification covering Python programming for data analysis, visualization, and machine learning applications.",
      icon: Medal,
      color: "from-yellow-500 to-yellow-700",
      skills: ["Python", "Data Analysis", "Pandas", "NumPy", "Matplotlib"]
    },
    {
      title: "Cybersecurity Fundamentals",
      issuer: "CompTIA",
      date: "April 2024",
      credentialId: "COMP-SEC-2024-010",
      description: "Foundation certification in cybersecurity principles, threat analysis, and security implementation strategies.",
      icon: Crown,
      color: "from-gray-500 to-gray-700",
      skills: ["Security Fundamentals", "Threat Analysis", "Risk Management", "Compliance"]
    }
  ];

  const stats = [
    { label: "Total Certifications", value: "10+", icon: Award },
    { label: "Cloud Platforms", value: "3", icon: Shield },
    { label: "AI/ML Certifications", value: "4", icon: Star },
    { label: "Professional Level", value: "6", icon: Trophy }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-7xl mx-auto">
        {/* Header with certificate unfold animation */}
        <motion.div
          initial={{ opacity: 0, rotateX: -90, scale: 0.8 }}
          whileInView={{ opacity: 1, rotateX: 0, scale: 1 }}
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
            initial={{ opacity: 0, y: -50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3, duration: 0.8 }}
          >
            Certifications & Credentials
          </motion.h1>
          <motion.p 
            className="text-xl text-gray-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5, duration: 0.6 }}
          >
            Professional certifications and credentials that validate my expertise across various technologies and platforms
          </motion.p>
        </motion.div>

        {/* Stats Grid with counter animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-16"
        >
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                className="text-center p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
                initial={{ opacity: 0, scale: 0.5, rotateY: -90 }}
                whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.1 + 0.4,
                  type: "spring",
                  stiffness: 100
                }}
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  boxShadow: "0 20px 40px rgba(255,255,255,0.1)"
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-white/20 transition-colors"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={24} className="text-white" />
                </motion.div>
                <motion.div 
                  className="text-3xl font-bold text-white mb-2"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ 
                    delay: index * 0.1 + 0.6,
                    type: "spring",
                    stiffness: 200
                  }}
                >
                  {stat.value}
                </motion.div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Certifications Grid with 3D card flip */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {certifications.map((cert, index) => {
            const Icon = cert.icon;
            return (
              <motion.div
                key={index}
                initial={{ 
                  opacity: 0, 
                  y: 100, 
                  rotateX: -45,
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
                  delay: index * 0.1,
                  ease: "easeOut"
                }}
                className="group relative bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-6 hover:bg-white/10 transition-all duration-300 overflow-hidden"
                whileHover={{ 
                  scale: 1.05, 
                  y: -15,
                  rotateY: 5,
                  boxShadow: "0 25px 50px rgba(255,255,255,0.15)"
                }}
              >
                {/* Background Gradient */}
                <div className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-5 group-hover:opacity-10 transition-opacity`} />
                
                {/* Header */}
                <motion.div 
                  className="relative z-10 flex items-start justify-between mb-4"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 + 0.3, duration: 0.5 }}
                >
                  <motion.div 
                    className={`w-12 h-12 bg-gradient-to-br ${cert.color} rounded-lg flex items-center justify-center`}
                    whileHover={{ rotate: 360, scale: 1.2 }}
                    transition={{ duration: 0.5 }}
                  >
                    <Icon size={24} className="text-white" />
                  </motion.div>
                  <motion.button
                    className="p-2 bg-white/10 rounded-full hover:bg-white/20 transition-colors"
                    whileHover={{ scale: 1.1, rotate: 15 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <ExternalLink size={16} className="text-white" />
                  </motion.button>
                </motion.div>

                {/* Content */}
                <div className="relative z-10">
                  <motion.h3 
                    className="text-lg font-bold text-white mb-2 group-hover:text-white transition-colors"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.4, duration: 0.5 }}
                  >
                    {cert.title}
                  </motion.h3>
                  
                  <motion.div 
                    className="flex items-center justify-between mb-3"
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.5, duration: 0.5 }}
                  >
                    <p className="text-gray-300 text-sm font-medium">{cert.issuer}</p>
                    <div className="flex items-center space-x-1 text-gray-400 text-xs">
                      <Calendar size={12} />
                      <span>{cert.date}</span>
                    </div>
                  </motion.div>

                  <motion.p 
                    className="text-gray-400 text-sm mb-4 leading-relaxed"
                    initial={{ opacity: 0 }}
                    whileInView={{ opacity: 1 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.6, duration: 0.6 }}
                  >
                    {cert.description}
                  </motion.p>

                  <motion.div 
                    className="mb-4"
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.7, duration: 0.5 }}
                  >
                    <p className="text-xs text-gray-500 mb-2">Credential ID: {cert.credentialId}</p>
                  </motion.div>

                  {/* Skills Tags */}
                  <motion.div 
                    className="flex flex-wrap gap-2"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 + 0.8, duration: 0.5 }}
                  >
                    {cert.skills.map((skill, skillIndex) => (
                      <motion.span
                        key={skillIndex}
                        className="px-2 py-1 bg-white/10 text-white rounded-full text-xs border border-white/20"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ 
                          delay: index * 0.1 + 0.9 + skillIndex * 0.05,
                          type: "spring",
                          stiffness: 200
                        }}
                        whileHover={{ scale: 1.1, y: -2 }}
                      >
                        {skill}
                      </motion.span>
                    ))}
                  </motion.div>
                </div>

                {/* Hover Effect */}
                <motion.div
                  className="absolute inset-0 border-2 border-transparent rounded-xl"
                  whileHover={{
                    borderColor: "rgba(255,255,255,0.2)",
                    boxShadow: "0 0 30px rgba(255,255,255,0.1)"
                  }}
                  transition={{ duration: 0.3 }}
                />
              </motion.div>
            );
          })}
        </div>

        {/* Call to Action */}
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.9 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="text-center mt-16"
        >
          <motion.div 
            className="bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl p-8"
            whileHover={{ 
              scale: 1.02,
              boxShadow: "0 20px 40px rgba(255,255,255,0.1)"
            }}
          >
            <motion.h2 
              className="text-2xl font-bold text-white mb-4"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.7, duration: 0.6 }}
            >
              Continuous Learning Journey
            </motion.h2>
            <motion.p 
              className="text-gray-300 mb-6 max-w-2xl mx-auto"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.8, duration: 0.6 }}
            >
              I believe in continuous learning and staying updated with the latest technologies. 
              These certifications represent my commitment to professional growth and technical excellence.
            </motion.p>
            <motion.button
              className="px-8 py-3 bg-white text-black rounded-full font-semibold hover:bg-gray-200 transition-colors"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.9, duration: 0.5 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              View All Credentials
            </motion.button>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
}
