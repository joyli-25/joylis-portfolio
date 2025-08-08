"use client";

import { motion } from "framer-motion";
import { Award, Trophy, Medal, Star } from 'lucide-react';

const achievements = [
  {
    title: "Best UI/UX Design Award",
    organization: "Web Design Annual Conference",
    year: "2023",
    description: "Recognized for exceptional user interface design and innovative user experience in the J.O.Y.L.I. portfolio project.",
    icon: <Trophy className="text-yellow-500" size={24} />
  },
  {
    title: "Top AI Implementation",
    organization: "AI Developer Summit",
    year: "2022",
    description: "Awarded for creative integration of artificial intelligence in web applications.",
    icon: <Award className="text-blue-500" size={24} />
  },
  {
    title: "Innovation in 3D Web Experiences",
    organization: "Interactive Media Awards",
    year: "2022",
    description: "Honored for pushing boundaries in creating immersive 3D web experiences using Three.js and WebGL.",
    icon: <Medal className="text-purple-500" size={24} />
  },
  {
    title: "Outstanding Open Source Contribution",
    organization: "GitHub Recognition Program",
    year: "2021",
    description: "Recognized for significant contributions to open source projects in the React and Three.js ecosystems.",
    icon: <Star className="text-green-500" size={24} />
  }
];

export default function AchievementsSection() {
  return (
    <div className="space-y-6">
      {achievements.map((achievement, index) => (
        <motion.div
          key={index}
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: index * 0.1 }}
          className="flex gap-4 p-4 border border-gray-700 rounded-lg bg-black/30 hover:bg-black/50 transition-colors"
        >
          <div className="flex-shrink-0 w-12 h-12 rounded-full bg-gray-800 flex items-center justify-center">
            {achievement.icon}
          </div>
          <div>
            <div className="flex items-center justify-between">
              <h3 className="text-lg font-bold text-white">{achievement.title}</h3>
              <span className="text-sm text-gray-400">{achievement.year}</span>
            </div>
            <p className="text-sm text-cyan-400 mb-2">{achievement.organization}</p>
            <p className="text-gray-300 text-sm">{achievement.description}</p>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
