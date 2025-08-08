"use client";

import { useState, useRef, useEffect } from "react";
import { motion } from "framer-motion";
import { X, Send, Loader2, Bot } from 'lucide-react';

interface AIAssistantProps {
  onClose: () => void;
}

export default function AIAssistant({ onClose }: AIAssistantProps) {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState<{ role: "user" | "assistant"; content: string }[]>([
    { 
      role: "assistant", 
      content: "Hello! I'm J.O.Y.L.I., Joyli's AI assistant. I can help you learn more about her experience, skills, projects, or answer any questions about her background. How can I assist you today?" 
    }
  ]);
  const [isLoading, setIsLoading] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    try {
      messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    } catch (error) {
      console.warn('Error scrolling to messages end:', error);
    }
  }, [messages]);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    try {
      if (!input || !input.trim()) return;

      const userMessage = { role: "user" as const, content: input.trim() };
      setMessages((prev) => [...prev, userMessage]);
      setInput("");
      setIsLoading(true);

      // Simulate AI response based on Joyli's resume
      setTimeout(() => {
        try {
          let response = "";
          const query = input.toLowerCase();
          
          if (query.includes("experience") || query.includes("work")) {
            response = "Joyli has diverse experience including her current role as Software Development Intern at P&F Solutions working with React, Next.js, Node.js, Python, and Azure. She's also a Teaching Assistant at Cal State Long Beach for Advanced Analysis of Algorithms. Previously, she worked at Vistaar Digital Communications developing iPad applications and at Daily Tech Suggest on full-stack web development.";
          } else if (query.includes("skill") || query.includes("technology")) {
            response = "Joyli's technical skills include programming languages like Java, C++, Python, and JavaScript. She's experienced with web frameworks like React, Next.js, Django, and databases including MySQL, MongoDB, PostgreSQL. She also has expertise in AI/ML, deep learning, robotics with ROS2, and cloud platforms like AWS and GCP.";
          } else if (query.includes("project")) {
            response = "Some of Joyli's notable projects include a real-time distributed billing system using Apache Kafka, breast cancer classification using deep learning and CNNs, a depression tracker using fuzzy logic, and autonomous robot navigation systems with ROS2 and SLAM algorithms.";
          } else if (query.includes("education")) {
            response = "Joyli is currently pursuing her MS in Computer Science at California State University Long Beach (2023-2025) and holds a BE in Computer Engineering from Fr. Conceicao Rodrigues College of Engineering, Mumbai (2019-2023).";
          } else if (query.includes("certification")) {
            response = "Joyli has 10+ professional certifications including Salesforce Certified AI Associate, Agentforce Specialist, AWS Certified Solutions Architect, Google Cloud Professional Developer, and Microsoft Azure AI Engineer, among others.";
          } else if (query.includes("contact") || query.includes("reach")) {
            response = "You can reach Joyli at joyli.rumao1425@gmail.com or call her at +1 (562) 235-1074. She's based in Long Beach, CA and is available for new opportunities and collaborations.";
          } else if (query.includes("ai") || query.includes("artificial intelligence")) {
            response = "Joyli has strong expertise in AI and machine learning, including deep learning, CNNs, NLP, and generative AI. She's worked on projects like breast cancer classification using transfer learning and depression detection using fuzzy logic. She's also Salesforce Certified AI Associate.";
          } else if (query.includes("robotics") || query.includes("robot")) {
            response = "Joyli has hands-on robotics experience from her internship at Robocon where she developed autonomous navigation modules using ROS2 and C++, implemented SLAM and sensor fusion, and worked on path planning algorithms for differential-drive robots.";
          } else {
            response = "I can provide information about Joyli's experience, skills, projects, education, certifications, or contact details. What specific aspect would you like to know more about?";
          }
          
          setMessages((prev) => [...prev, { role: "assistant", content: response }]);
          setIsLoading(false);
        } catch (error) {
          console.warn('Error generating AI response:', error);
          setMessages((prev) => [...prev, { role: "assistant", content: "I apologize, but I encountered an error. Please try asking your question again." }]);
          setIsLoading(false);
        }
      }, 1000 + Math.random() * 1000);
    } catch (error) {
      console.warn('Error in handleSubmit:', error);
      setIsLoading(false);
    }
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    try {
      const value = e?.target?.value || "";
      setInput(value);
    } catch (error) {
      console.warn('Error handling input change:', error);
    }
  };

  const handleClose = () => {
    try {
      if (onClose && typeof onClose === 'function') {
        onClose();
      }
    } catch (error) {
      console.warn('Error closing AI assistant:', error);
    }
  };

  return (
    <motion.div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50 backdrop-blur-sm"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
    >
      <motion.div
        className="w-full max-w-2xl h-[600px] bg-black/90 backdrop-blur-lg rounded-2xl border border-white/20 shadow-2xl overflow-hidden flex flex-col"
        initial={{ scale: 0.9, y: 20 }}
        animate={{ scale: 1, y: 0 }}
        exit={{ scale: 0.9, y: 20 }}
        transition={{ type: "spring", damping: 20 }}
      >
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-white/10 bg-white/5">
          <div className="flex items-center space-x-3">
            <div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center">
              <Bot size={20} className="text-white" />
            </div>
            <div>
              <h3 className="text-lg font-bold text-white">J.O.Y.L.I. Assistant</h3>
              <p className="text-sm text-gray-400">Just One Young Luminary Intelligence</p>
            </div>
          </div>
          <button
            onClick={handleClose}
            className="p-2 rounded-full hover:bg-white/10 transition-colors"
          >
            <X size={20} className="text-gray-400" />
          </button>
        </div>
        
        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-6 space-y-4">
          {messages.map((message, index) => (
            <div
              key={index}
              className={`flex ${message.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`max-w-[80%] rounded-2xl px-4 py-3 ${
                  message.role === "user"
                    ? "bg-white text-black"
                    : "bg-white/10 text-gray-300 border border-white/20"
                }`}
              >
                <p className="text-sm leading-relaxed">{message.content}</p>
              </div>
            </div>
          ))}
          {isLoading && (
            <div className="flex justify-start">
              <div className="bg-white/10 border border-white/20 rounded-2xl px-4 py-3">
                <Loader2 size={16} className="animate-spin text-white" />
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>
        
        {/* Input */}
        <form onSubmit={handleSubmit} className="p-6 border-t border-white/10 bg-white/5">
          <div className="flex items-center space-x-3">
            <input
              type="text"
              value={input}
              onChange={handleInputChange}
              placeholder="Ask about Joyli's experience, skills, projects..."
              className="flex-1 bg-white/5 border border-white/20 rounded-full px-4 py-3 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white focus:border-transparent"
            />
            <button
              type="submit"
              disabled={isLoading || !input.trim()}
              className="p-3 bg-white text-black hover:bg-gray-200 disabled:opacity-50 disabled:cursor-not-allowed rounded-full transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </form>
      </motion.div>
    </motion.div>
  );
}
