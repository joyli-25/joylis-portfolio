"use client";

import { useState, useRef, Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Environment, OrbitControls, Stars } from "@react-three/drei";
import JarvisSphere from "./jarvis-sphere";
import PortfolioSection from "./portfolio-section";
import AiAssistant from "./ai-assistant";
import HUDOverlay from "./hud-overlay";

type Section = "experience" | "projects" | "achievements" | "about" | "skills" | "education" | "ai";

export default function MainInterface() {
  const [activeSection, setActiveSection] = useState<Section | null>(null);
  const [showAiAssistant, setShowAiAssistant] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleSectionChange = (section: Section | null) => {
    setActiveSection(section);
  };

  return (
    <div ref={containerRef} className="relative w-full h-screen bg-black overflow-hidden">
      {/* HUD Overlay */}
      <HUDOverlay />
      
      {/* Main 3D Interface */}
      <div className="absolute inset-0 z-10">
        <Canvas camera={{ position: [0, 0, 8], fov: 50 }}>
          <Suspense fallback={null}>
            {/* Lighting */}
            <ambientLight intensity={0.3} />
            <pointLight position={[10, 10, 10]} intensity={0.8} color="#06b6d4" />
            <pointLight position={[-10, -10, -10]} intensity={0.4} color="#3b82f6" />
            
            {/* Stars Background */}
            <Stars radius={100} depth={50} count={5000} factor={4} saturation={0} fade speed={1} />
            
            {/* Main JARVIS Sphere */}
            <JarvisSphere onSectionChange={handleSectionChange} />
            
            {/* Environment */}
            <Environment preset="city" />
            
            {/* Camera Controls */}
            <OrbitControls 
              enableZoom={true}
              enablePan={true}
              rotateSpeed={0.5}
              zoomSpeed={0.8}
              panSpeed={0.8}
              minDistance={5}
              maxDistance={15}
              maxPolarAngle={Math.PI}
              minPolarAngle={0}
            />
          </Suspense>
        </Canvas>
      </div>

      {/* Intro Text */}
      <div className="absolute top-4 left-4 z-20 text-cyan-400 max-w-md pointer-events-none">
        <h1 className="text-3xl font-bold mb-1">J.O.Y.L.I.</h1>
        <p className="text-lg text-cyan-300">Just One Young Luminary Intelligence</p>
        <p className="mt-2 text-sm text-gray-400">
          "I illuminate knowledge. I am J.O.Y.L.I."
        </p>
        <p className="mt-4 text-xs text-cyan-500">
          Click and drag to rotate • Scroll to zoom • Click nodes to explore
        </p>
      </div>

      {/* AI Assistant Button */}
      <button
        className="absolute bottom-4 right-4 z-20 bg-cyan-900/30 border border-cyan-500/50 text-cyan-400 px-4 py-2 rounded-full flex items-center space-x-2 hover:bg-cyan-800/40 transition-colors pointer-events-auto"
        onClick={() => setShowAiAssistant(!showAiAssistant)}
      >
        <span className="w-3 h-3 bg-cyan-400 rounded-full animate-pulse"></span>
        <span>AI Assistant</span>
      </button>

      {/* Portfolio Section Content */}
      {activeSection && (
        <PortfolioSection 
          section={activeSection} 
          onClose={() => setActiveSection(null)} 
        />
      )}

      {/* AI Assistant Panel */}
      {showAiAssistant && (
        <AiAssistant onClose={() => setShowAiAssistant(false)} />
      )}
    </div>
  );
}
