"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sparkles, Send, Download, FileText, Loader2 } from 'lucide-react';

export default function AiSection() {
  const [query, setQuery] = useState("");
  const [isGenerating, setIsGenerating] = useState(false);
  const [generatedContent, setGeneratedContent] = useState("");
  const [generationType, setGenerationType] = useState<"resume" | "summary" | null>(null);

  const handleGenerate = (type: "resume" | "summary") => {
    if (!query.trim()) return;
    
    setIsGenerating(true);
    setGenerationType(type);
    
    // Simulate AI generation (in a real app, this would call an AI API)
    setTimeout(() => {
      let result = "";
      
      if (type === "resume") {
        result = `# Professional Resume\n\n## Summary\nExperienced developer specializing in ${query} with a strong background in creating immersive digital experiences and AI-powered applications.\n\n## Skills\n- Advanced ${query} development\n- React and Next.js\n- Three.js and WebGL\n- AI integration\n- UI/UX design\n\n## Experience\n**Senior Developer | Tech Innovations Inc.**\n- Led development of ${query} applications\n- Implemented AI-powered features\n- Optimized performance and user experience`;
      } else {
        result = `Based on your portfolio, here's a summary of your ${query} experience:\n\nYou have demonstrated expertise in ${query} through multiple projects and professional roles. Your work showcases both technical proficiency and creative implementation, particularly in how you've integrated ${query} with modern web technologies and AI capabilities. Your projects in this area have received recognition for their innovation and user experience design.`;
      }
      
      setGeneratedContent(result);
      setIsGenerating(false);
    }, 2000);
  };

  return (
    <div className="space-y-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-lg p-6"
      >
        <div className="flex items-center space-x-2 mb-4">
          <Sparkles className="text-indigo-400" size={20} />
          <h3 className="text-xl font-bold text-white">AI-Powered Portfolio Assistant</h3>
        </div>
        
        <p className="text-gray-300 mb-6">
          Use AI to generate content based on your portfolio information. Ask about specific skills, generate a resume, or get summaries of your experience.
        </p>
        
        <div className="space-y-4">
          <div>
            <label htmlFor="query" className="block text-sm font-medium text-gray-400 mb-1">
              What would you like to know about?
            </label>
            <div className="flex space-x-2">
              <input
                id="query"
                type="text"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="e.g., React, 3D development, AI experience..."
                className="flex-1 bg-black/50 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:ring-1 focus:ring-indigo-500"
              />
              <button
                onClick={() => handleGenerate("summary")}
                disabled={isGenerating || !query.trim()}
                className="px-4 py-2 bg-indigo-600 hover:bg-indigo-500 disabled:bg-gray-700 disabled:opacity-50 rounded-lg text-white flex items-center space-x-1 transition-colors"
              >
                {isGenerating && generationType === "summary" ? (
                  <Loader2 size={16} className="animate-spin" />
                ) : (
                  <Send size={16} />
                )}
                <span>Generate</span>
              </button>
            </div>
          </div>
          
          <div className="flex space-x-2">
            <button
              onClick={() => handleGenerate("resume")}
              disabled={isGenerating || !query.trim()}
              className="px-4 py-2 bg-purple-600 hover:bg-purple-500 disabled:bg-gray-700 disabled:opacity-50 rounded-lg text-white flex items-center space-x-1 transition-colors"
            >
              {isGenerating && generationType === "resume" ? (
                <Loader2 size={16} className="animate-spin" />
              ) : (
                <FileText size={16} />
              )}
              <span>Generate Resume</span>
            </button>
          </div>
        </div>
      </motion.div>
      
      {generatedContent && (
        <motion.div
          initial={{ opacity: 0, height: 0 }}
          animate={{ opacity: 1, height: "auto" }}
          className="bg-black/40 border border-gray-700 rounded-lg p-6"
        >
          <div className="flex justify-between items-center mb-4">
            <h3 className="text-lg font-medium text-white">
              {generationType === "resume" ? "Generated Resume" : "Generated Summary"}
            </h3>
            <button className="p-2 bg-gray-800 hover:bg-gray-700 rounded-full transition-colors">
              <Download size={16} className="text-gray-400" />
            </button>
          </div>
          
          <div className="whitespace-pre-wrap text-gray-300 font-mono text-sm bg-black/30 p-4 rounded-lg max-h-80 overflow-y-auto">
            {generatedContent}
          </div>
        </motion.div>
      )}
    </div>
  );
}
