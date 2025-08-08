"use client";

import { useRef, useState, useEffect } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { Group, Vector3, Mesh, MeshStandardMaterial } from "three";

type Section = "experience" | "projects" | "achievements" | "about" | "skills" | "education" | "ai";

interface JoyliInterfaceProps {
  onSectionChange: (section: Section | null) => void;
}

export default function JoyliInterface({ onSectionChange }: JoyliInterfaceProps) {
  const groupRef = useRef<Group>(null);
  const coreRef = useRef<Mesh>(null);
  const outerRingRef = useRef<Mesh>(null);
  const middleRingRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState<Section | null>(null);
  const [hoveredPosition, setHoveredPosition] = useState<Vector3 | null>(null);
  
  // Sections with their positions in 3D space
  const sections: { id: Section; position: [number, number, number]; color: string }[] = [
    { id: "experience", position: [2, 1.5, 0], color: "#06b6d4" },
    { id: "projects", position: [2, 0, 0], color: "#0ea5e9" },
    { id: "achievements", position: [1.5, -1.5, 0], color: "#8b5cf6" },
    { id: "about", position: [-1.5, 1.5, 0], color: "#10b981" },
    { id: "skills", position: [-2, 0, 0], color: "#f59e0b" },
    { id: "education", position: [-1.5, -1.5, 0], color: "#ef4444" },
    { id: "ai", position: [0, -2, 0], color: "#6366f1" }
  ];

  // Animation for the interface
  useFrame((state) => {
    if (groupRef.current) {
      groupRef.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.1;
      groupRef.current.rotation.x = Math.cos(state.clock.getElapsedTime() * 0.2) * 0.05;
    }
    
    // Core pulsing animation
    if (coreRef.current) {
      const scale = 1 + Math.sin(state.clock.getElapsedTime() * 0.5) * 0.05;
      coreRef.current.scale.set(scale, scale, scale);
    }
    
    // Ring rotations
    if (outerRingRef.current) {
      outerRingRef.current.rotation.z += 0.001;
    }
    
    if (middleRingRef.current) {
      middleRingRef.current.rotation.z -= 0.002;
    }
    
    // Node animations
    sections.forEach((section, i) => {
      const nodeMesh = groupRef.current?.children.find(
        child => child.name === `node-${section.id}`
      ) as Mesh | undefined;
      
      if (nodeMesh) {
        const material = nodeMesh.material as MeshStandardMaterial;
        
        if (hovered === section.id) {
          // Increase emissive intensity when hovered
          material.emissiveIntensity = 0.8 + Math.sin(state.clock.getElapsedTime() * 2) * 0.2;
          
          // Scale up when hovered
          const scale = 1.2 + Math.sin(state.clock.getElapsedTime() * 2) * 0.05;
          nodeMesh.scale.set(scale, scale, scale);
        } else {
          // Normal state
          material.emissiveIntensity = 0.5;
          
          // Subtle pulsing for non-hovered nodes
          const scale = 1 + Math.sin(state.clock.getElapsedTime() * 0.5 + i) * 0.03;
          nodeMesh.scale.set(scale, scale, scale);
        }
      }
    });
  });

  // Handle hover effects
  const handleHover = (section: Section | null, position?: Vector3) => {
    setHovered(section);
    if (position) {
      setHoveredPosition(position);
    }
  };

  // Handle click on section
  const handleClick = (section: Section) => {
    onSectionChange(section);
  };

  return (
    <group ref={groupRef}>
      {/* Central core */}
      <mesh ref={coreRef}>
        <sphereGeometry args={[0.8, 32, 32]} />
        <meshStandardMaterial 
          color="#0891b2" 
          emissive="#0e7490"
          emissiveIntensity={0.5}
          metalness={0.8}
          roughness={0.2}
        />
      </mesh>

      {/* Outer ring */}
      <mesh 
        ref={outerRingRef}
        rotation={[Math.PI / 2, 0, 0]}
      >
        <torusGeometry args={[2.5, 0.05, 16, 100]} />
        <meshStandardMaterial 
          color="#0e7490" 
          emissive="#0891b2"
          transparent
          opacity={0.7}
        />
      </mesh>

      {/* Middle ring */}
      <mesh 
        ref={middleRingRef}
        rotation={[Math.PI / 4, Math.PI / 6, 0]}
      >
        <torusGeometry args={[1.8, 0.03, 16, 100]} />
        <meshStandardMaterial 
          color="#0e7490" 
          emissive="#0891b2"
          transparent
          opacity={0.5}
        />
      </mesh>

      {/* Section nodes */}
      {sections.map((section) => (
        <group key={section.id} position={section.position}>
          <mesh
            name={`node-${section.id}`}
            onPointerOver={() => handleHover(section.id, new Vector3(...section.position))}
            onPointerOut={() => handleHover(null)}
            onClick={() => handleClick(section.id)}
          >
            <sphereGeometry args={[0.2, 32, 32]} />
            <meshStandardMaterial 
              color={section.color} 
              emissive={section.color}
              emissiveIntensity={0.5}
              metalness={0.7}
              roughness={0.3}
            />
          </mesh>
          
          <Text
            position={[0, 0.4, 0]}
            fontSize={0.15}
            color="white"
            anchorX="center"
            anchorY="middle"
            outlineWidth={0.01}
            outlineColor="#000000"
          >
            {section.id.charAt(0).toUpperCase() + section.id.slice(1)}
          </Text>
          
          {/* Connection line to center */}
          <mesh>
            <cylinderGeometry args={[0.01, 0.01, new Vector3(...section.position).length(), 8]} />
            <meshBasicMaterial 
              color={section.color} 
              transparent 
              opacity={0.3} 
            />
          </mesh>
        </group>
      ))}

      {/* Particles */}
      {Array.from({ length: 100 }).map((_, i) => {
        const position: [number, number, number] = [
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 5,
          (Math.random() - 0.5) * 5,
        ];
        
        return (
          <mesh
            key={i}
            position={position}
          >
            <sphereGeometry args={[0.02, 8, 8]} />
            <meshBasicMaterial 
              color="#06b6d4" 
              transparent 
              opacity={0.6} 
            />
          </mesh>
        );
      })}
    </group>
  );
}
