"use client";

import { motion } from "framer-motion";
import { Code, Brain, Rocket, Users } from 'lucide-react';

export default function AboutSection() {
  const highlights = [
    {
      icon: Code,
      title: "Full-Stack Development",
      description: "Experienced in React, Next.js, Node.js, Python, and cloud technologies"
    },
    {
      icon: Brain,
      title: "AI & Machine Learning",
      description: "Deep learning, CNNs, NLP, and generative AI applications"
    },
    {
      icon: Rocket,
      title: "Robotics & Automation",
      description: "ROS2, SLAM, path planning, and autonomous navigation systems"
    },
    {
      icon: Users,
      title: "Leadership & Teaching",
      description: "Teaching Assistant, team collaboration, and project leadership"
    }
  ];

  return (
    <div className="min-h-screen pt-20 px-4 sm:px-6 lg:px-8 bg-black">
      <div className="max-w-6xl mx-auto">
        {/* Header with bounce effect */}
        <motion.div
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ 
            duration: 0.8, 
            type: "spring", 
            stiffness: 100, 
            damping: 10 
          }}
          className="text-center mb-16"
        >
          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-white">
            About Me
          </h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Passionate software developer and AI enthusiast, recent graduate with MS in Computer Science from Cal State Long Beach
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-16">
          {/* Personal Story with slide from left */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="space-y-6"
          >
            <h2 className="text-3xl font-bold text-white mb-6">My Journey</h2>
            <motion.div 
              className="space-y-4 text-gray-300"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.8 }}
            >
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
              >
                I'm a dedicated software developer with a strong foundation in computer science and a passion for 
                artificial intelligence. As a recent graduate with my Master's degree from California State University Long Beach, 
                I combine academic excellence with practical industry experience.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
              >
                My journey began with a Bachelor's in Computer Engineering from Mumbai, where I developed a solid 
                foundation in programming and system design. Since then, I've worked across various domains including 
                web development, mobile applications, robotics, and AI/ML.
              </motion.p>
              <motion.p
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.8, duration: 0.6 }}
              >
                As a Teaching Assistant for Advanced Analysis of Algorithms, I enjoyed sharing knowledge and helping 
                students understand complex concepts. I believe in continuous learning and staying updated with the 
                latest technologies and industry trends.
              </motion.p>
            </motion.div>
          </motion.div>

          {/* Profile Image with scale animation - Now Circular */}
          <motion.div
            initial={{ opacity: 0, scale: 0.5, rotateY: 180 }}
            whileInView={{ opacity: 1, scale: 1, rotateY: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="flex justify-center"
          >
            <motion.div 
              className="w-80 h-80 rounded-full bg-white/5 backdrop-blur-sm border border-white/10 flex items-center justify-center overflow-hidden"
              whileHover={{ 
                scale: 1.05, 
                rotateY: 5,
                boxShadow: "0 25px 50px rgba(255,255,255,0.1)"
              }}
              transition={{ duration: 0.3 }}
            >
              <img 
                src="/images/joyli-profile.jpg" 
                alt="Joyli Rumao - Software Developer"
                className="w-full h-full object-cover rounded-full"
                style={{ 
                  objectPosition: 'center top',
                  transform: 'scale(1.1)' 
                }}
              />
            </motion.div>
          </motion.div>
        </div>

        {/* Highlights Grid with flip animation */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16"
        >
          {highlights.map((highlight, index) => {
            const Icon = highlight.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, rotateX: -90, y: 50 }}
                whileInView={{ opacity: 1, rotateX: 0, y: 0 }}
                viewport={{ once: true }}
                transition={{ 
                  duration: 0.8, 
                  delay: index * 0.2,
                  type: "spring",
                  stiffness: 100
                }}
                className="p-6 bg-white/5 backdrop-blur-sm border border-white/10 rounded-xl hover:bg-white/10 transition-colors group"
                whileHover={{ 
                  scale: 1.05, 
                  y: -10,
                  rotateY: 5,
                  boxShadow: "0 20px 40px rgba(255,255,255,0.1)"
                }}
              >
                <motion.div 
                  className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-white/20 transition-colors"
                  whileHover={{ rotate: 360, scale: 1.2 }}
                  transition={{ duration: 0.5 }}
                >
                  <Icon size={24} className="text-white" />
                </motion.div>
                <h3 className="text-lg font-semibold text-white mb-2">{highlight.title}</h3>
                <p className="text-gray-400 text-sm">{highlight.description}</p>
              </motion.div>
            );
          })}
        </motion.div>

        {/* Stats with counter animation */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center"
        >
          {[
            { value: "3+", label: "Years Experience" },
            { value: "15+", label: "Projects Completed" },
            { value: "25+", label: "Technologies" },
            { value: "10+", label: "Certifications" }
          ].map((stat, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 30, scale: 0.5 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1 + 0.6,
                type: "spring",
                stiffness: 200
              }}
              whileHover={{ scale: 1.1, y: -5 }}
            >
              <motion.div 
                className="text-3xl font-bold text-white mb-2"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                viewport={{ once: true }}
                transition={{ 
                  delay: index * 0.1 + 0.8,
                  type: "spring",
                  stiffness: 300
                }}
              >
                {stat.value}
              </motion.div>
              <div className="text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
