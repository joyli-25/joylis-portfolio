"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text, Html } from "@react-three/drei";
import { Group, Vector3 } from "three";

type Section = "experience" | "projects" | "achievements" | "about" | "skills" | "education" | "ai";

interface JarvisInterfaceProps {
  onSectionChange: (section: Section | null) => void;
}

export default function JarvisInterface({ onSectionChange }: JarvisInterfaceProps) {
  const groupRef = useRef<Group>(null);
  const [currentTime, setCurrentTime] = useState(new Date());
  const [hovered, setHovered] = useState<Section | null>(null);

  // Update time every second
  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  // Animation for the interface
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.02;
    }
  });

  const handleSectionClick = (section: Section) => {
    onSectionChange(section);
  };

  return (
    <group ref={groupRef}>
      {/* Central Core System */}
      <Html position={[0, 0, 0]} transform occlude>
        <div className="relative w-[800px] h-[600px] pointer-events-auto">
          {/* Main Central Circle */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
            <div className="relative w-48 h-48">
              {/* Outer rotating ring */}
              <div className="absolute inset-0 border-2 border-cyan-400/60 rounded-full animate-spin-slow">
                <div className="absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div className="absolute left-0 top-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
                <div className="absolute right-0 top-1/2 transform translate-x-1/2 -translate-y-1/2 w-2 h-2 bg-cyan-400 rounded-full"></div>
              </div>
              
              {/* Middle ring */}
              <div className="absolute inset-4 border border-cyan-300/40 rounded-full animate-reverse-spin">
                {Array.from({ length: 12 }).map((_, i) => (
                  <div
                    key={i}
                    className="absolute w-1 h-1 bg-cyan-300 rounded-full"
                    style={{
                      top: '50%',
                      left: '50%',
                      transform: `translate(-50%, -50%) rotate(${i * 30}deg) translateY(-${20 + Math.sin(i) * 5}px)`,
                    }}
                  />
                ))}
              </div>
              
              {/* Inner core */}
              <div className="absolute inset-8 bg-gradient-radial from-cyan-400/20 to-transparent rounded-full border border-cyan-500 flex items-center justify-center">
                <div className="w-16 h-16 bg-gradient-radial from-cyan-400 to-cyan-600 rounded-full animate-pulse flex items-center justify-center">
                  <span className="text-black font-bold text-sm">J.O.Y.L.I</span>
                </div>
              </div>
            </div>
          </div>

          {/* Top Time Display */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2">
            <div className="relative">
              <div className="w-32 h-32 border-2 border-cyan-400/60 rounded-full flex items-center justify-center bg-black/40">
                <div className="text-center">
                  <div className="text-2xl font-bold text-cyan-400">
                    {currentTime.toLocaleTimeString('en-US', { 
                      hour12: false, 
                      hour: '2-digit', 
                      minute: '2-digit' 
                    })}
                  </div>
                  <div className="text-xs text-cyan-300">LOCAL TIME</div>
                </div>
              </div>
              <div className="absolute -top-2 -left-2 w-36 h-36 border border-cyan-300/30 rounded-full animate-spin-slow"></div>
            </div>
          </div>

          {/* Experience Section - Top Left */}
          <div 
            className="absolute top-16 left-8 cursor-pointer group"
            onClick={() => handleSectionClick('experience')}
          >
            <div className="relative">
              <div className="w-24 h-24 border border-cyan-400/60 rounded-full flex items-center justify-center bg-black/40 group-hover:bg-cyan-900/40 transition-colors">
                <div className="text-center">
                  <div className="text-lg font-bold text-cyan-400">EXP</div>
                  <div className="text-xs text-cyan-300">5+ YRS</div>
                </div>
              </div>
              <div className="absolute -inset-1 border border-cyan-300/20 rounded-full group-hover:border-cyan-400/60 transition-colors"></div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs text-cyan-300">Experience</div>
            </div>
          </div>

          {/* Projects Section - Top Right */}
          <div 
            className="absolute top-16 right-8 cursor-pointer group"
            onClick={() => handleSectionClick('projects')}
          >
            <div className="relative">
              <div className="w-24 h-24 border border-blue-400/60 rounded-full flex items-center justify-center bg-black/40 group-hover:bg-blue-900/40 transition-colors">
                <div className="text-center">
                  <div className="text-lg font-bold text-blue-400">PROJ</div>
                  <div className="text-xs text-blue-300">15+</div>
                </div>
              </div>
              <div className="absolute -inset-1 border border-blue-300/20 rounded-full group-hover:border-blue-400/60 transition-colors"></div>
              <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 text-xs text-blue-300">Projects</div>
            </div>
          </div>

          {/* Skills Section - Left */}
          <div 
            className="absolute left-4 top-1/2 transform -translate-y-1/2 cursor-pointer group"
            onClick={() => handleSectionClick('skills')}
          >
            <div className="relative">
              <div className="w-28 h-28 border border-amber-400/60 rounded-full flex items-center justify-center bg-black/40 group-hover:bg-amber-900/40 transition-colors">
                <div className="text-center">
                  <div className="text-sm font-bold text-amber-400">SKILLS</div>
                  <div className="text-xs text-amber-300">ADVANCED</div>
                </div>
              </div>
              <div className="absolute -inset-2 border border-amber-300/20 rounded-full animate-pulse group-hover:border-amber-400/60 transition-colors"></div>
            </div>
          </div>

          {/* About Section - Right */}
          <div 
            className="absolute right-4 top-1/2 transform -translate-y-1/2 cursor-pointer group"
            onClick={() => handleSectionClick('about')}
          >
            <div className="relative">
              <div className="w-28 h-28 border border-emerald-400/60 rounded-full flex items-center justify-center bg-black/40 group-hover:bg-emerald-900/40 transition-colors">
                <div className="text-center">
                  <div className="text-sm font-bold text-emerald-400">ABOUT</div>
                  <div className="text-xs text-emerald-300">PROFILE</div>
                </div>
              </div>
              <div className="absolute -inset-2 border border-emerald-300/20 rounded-full animate-pulse group-hover:border-emerald-400/60 transition-colors"></div>
            </div>
          </div>

          {/* Education Section - Bottom Left */}
          <div 
            className="absolute bottom-16 left-8 cursor-pointer group"
            onClick={() => handleSectionClick('education')}
          >
            <div className="relative">
              <div className="w-24 h-24 border border-red-400/60 rounded-full flex items-center justify-center bg-black/40 group-hover:bg-red-900/40 transition-colors">
                <div className="text-center">
                  <div className="text-lg font-bold text-red-400">EDU</div>
                  <div className="text-xs text-red-300">MS CS</div>
                </div>
              </div>
              <div className="absolute -inset-1 border border-red-300/20 rounded-full group-hover:border-red-400/60 transition-colors"></div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs text-red-300">Education</div>
            </div>
          </div>

          {/* Achievements Section - Bottom Right */}
          <div 
            className="absolute bottom-16 right-8 cursor-pointer group"
            onClick={() => handleSectionClick('achievements')}
          >
            <div className="relative">
              <div className="w-24 h-24 border border-purple-400/60 rounded-full flex items-center justify-center bg-black/40 group-hover:bg-purple-900/40 transition-colors">
                <div className="text-center">
                  <div className="text-lg font-bold text-purple-400">ACH</div>
                  <div className="text-xs text-purple-300">10+</div>
                </div>
              </div>
              <div className="absolute -inset-1 border border-purple-300/20 rounded-full group-hover:border-purple-400/60 transition-colors"></div>
              <div className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 text-xs text-purple-300">Awards</div>
            </div>
          </div>

          {/* AI Section - Bottom Center */}
          <div 
            className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer group"
            onClick={() => handleSectionClick('ai')}
          >
            <div className="relative">
              <div className="w-32 h-32 border-2 border-indigo-400/60 rounded-full flex items-center justify-center bg-black/40 group-hover:bg-indigo-900/40 transition-colors">
                <div className="text-center">
                  <div className="text-xl font-bold text-indigo-400">AI</div>
                  <div className="text-xs text-indigo-300">ASSISTANT</div>
                </div>
              </div>
              <div className="absolute -top-2 -left-2 w-36 h-36 border border-indigo-300/30 rounded-full animate-reverse-spin"></div>
            </div>
          </div>

          {/* Connecting Lines */}
          <svg className="absolute inset-0 w-full h-full pointer-events-none">
            {/* Lines connecting to center */}
            <line x1="400" y1="300" x2="200" y2="150" stroke="rgba(34, 211, 238, 0.3)" strokeWidth="1" />
            <line x1="400" y1="300" x2="600" y2="150" stroke="rgba(96, 165, 250, 0.3)" strokeWidth="1" />
            <line x1="400" y1="300" x2="100" y2="300" stroke="rgba(251, 191, 36, 0.3)" strokeWidth="1" />
            <line x1="400" y1="300" x2="700" y2="300" stroke="rgba(16, 185, 129, 0.3)" strokeWidth="1" />
            <line x1="400" y1="300" x2="200" y2="450" stroke="rgba(248, 113, 113, 0.3)" strokeWidth="1" />
            <line x1="400" y1="300" x2="600" y2="450" stroke="rgba(139, 92, 246, 0.3)" strokeWidth="1" />
            <line x1="400" y1="300" x2="400" y2="500" stroke="rgba(99, 102, 241, 0.3)" strokeWidth="1" />
          </svg>

          {/* Data Streams */}
          <div className="absolute top-4 left-4 text-xs text-cyan-300 font-mono">
            <div>SYS_STATUS: ONLINE</div>
            <div>CPU: 45%</div>
            <div>MEM: 2.1GB</div>
            <div>NET: 150ms</div>
          </div>

          <div className="absolute top-4 right-4 text-xs text-cyan-300 font-mono">
            <div>PORTFOLIO_VER: 3.0</div>
            <div>LAST_UPDATE: {new Date().toLocaleDateString()}</div>
            <div>VISITORS: 1,247</div>
            <div>UPTIME: 99.9%</div>
          </div>

          {/* Bottom Status Bar */}
          <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 text-xs text-cyan-400 font-mono">
            J.O.Y.L.I. PORTFOLIO SYSTEM v3.0 - JUST ONE YOUNG LUMINARY INTELLIGENCE
          </div>
        </div>
      </Html>

      {/* Floating Particles */}
      {Array.from({ length: 50 }).map((_, i) => (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 8,
            (Math.random() - 0.5) * 6,
            (Math.random() - 0.5) * 4,
          ]}
        >
          <sphereGeometry args={[0.01, 8, 8]} />
          <meshBasicMaterial 
            color="#06b6d4" 
            transparent 
            opacity={0.4} 
          />
        </mesh>
      ))}
    </group>
  );
}
