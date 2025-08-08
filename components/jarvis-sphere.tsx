"use client";

import { useRef, useState, useMemo } from "react";
import { useFrame } from "@react-three/fiber";
import { Text } from "@react-three/drei";
import { Group, Vector3, Mesh, MeshStandardMaterial } from "three";

type Section = "experience" | "projects" | "achievements" | "about" | "skills" | "education" | "ai";

interface JarvisSphereProps {
  onSectionChange: (section: Section | null) => void;
}

interface MenuNode {
  id: Section;
  label: string;
  position: Vector3;
  color: string;
  description: string;
  icon: string;
}

export default function JarvisSphere({ onSectionChange }: JarvisSphereProps) {
  const groupRef = useRef<Group>(null);
  const sphereRef = useRef<Mesh>(null);
  const [hovered, setHovered] = useState<Section | null>(null);
  const [autoRotate, setAutoRotate] = useState(true);

  // Create menu nodes positioned around the sphere
  const menuNodes: MenuNode[] = useMemo(() => {
    const radius = 3;
    return [
      {
        id: "experience",
        label: "EXPERIENCE",
        position: new Vector3(radius, 1, 0),
        color: "#06b6d4",
        description: "5+ Years",
        icon: "EXP"
      },
      {
        id: "projects", 
        label: "PROJECTS",
        position: new Vector3(0, radius, 1),
        color: "#3b82f6",
        description: "15+ Built",
        icon: "PROJ"
      },
      {
        id: "skills",
        label: "SKILLS",
        position: new Vector3(-radius, 0, 1),
        color: "#f59e0b",
        description: "Advanced",
        icon: "TECH"
      },
      {
        id: "about",
        label: "ABOUT",
        position: new Vector3(0, -radius, 0),
        color: "#10b981",
        description: "Profile",
        icon: "INFO"
      },
      {
        id: "education",
        label: "EDUCATION", 
        position: new Vector3(radius * 0.7, -radius * 0.7, -1),
        color: "#ef4444",
        description: "MS CS",
        icon: "EDU"
      },
      {
        id: "achievements",
        label: "ACHIEVEMENTS",
        position: new Vector3(-radius * 0.7, radius * 0.7, -1),
        color: "#8b5cf6",
        description: "10+ Awards",
        icon: "ACH"
      },
      {
        id: "ai",
        label: "AI ASSISTANT",
        position: new Vector3(0, 0, radius),
        color: "#6366f1",
        description: "J.O.Y.L.I.",
        icon: "AI"
      }
    ];
  }, []);

  // Animation loop
  useFrame((state) => {
    if (!state || !state.clock) return;

    try {
      // Auto-rotate the main group
      if (groupRef.current && autoRotate) {
        groupRef.current.rotation.y += 0.005;
      }
      
      // Animate central sphere
      if (sphereRef.current) {
        const time = state.clock.getElapsedTime();
        sphereRef.current.rotation.x = Math.sin(time * 0.3) * 0.1;
        sphereRef.current.rotation.z = Math.cos(time * 0.2) * 0.1;
        
        // Pulsing effect
        const scale = 1 + Math.sin(time * 0.5) * 0.05;
        sphereRef.current.scale.setScalar(scale);
      }

      // Animate menu nodes
      if (groupRef.current && menuNodes) {
        menuNodes.forEach((node, index) => {
          if (!node || !node.id) return;
          
          try {
            const nodeMesh = groupRef.current?.getObjectByName(`node-${node.id}`) as Mesh;
            if (nodeMesh && nodeMesh.position && nodeMesh.scale) {
              // Orbital motion
              const time = state.clock.getElapsedTime();
              const orbitSpeed = 0.2 + index * 0.05;
              const orbitRadius = 0.1;
              
              if (node.position) {
                nodeMesh.position.x = node.position.x + Math.sin(time * orbitSpeed) * orbitRadius;
                nodeMesh.position.y = node.position.y + Math.cos(time * orbitSpeed) * orbitRadius;
                nodeMesh.position.z = node.position.z;
              }
              
              // Hover effects
              if (hovered === node.id) {
                const hoverScale = 1.3 + Math.sin(time * 3) * 0.1;
                nodeMesh.scale.setScalar(hoverScale);
                
                const material = nodeMesh.material as MeshStandardMaterial;
                if (material && typeof material.emissiveIntensity !== 'undefined') {
                  material.emissiveIntensity = 0.8 + Math.sin(time * 2) * 0.2;
                }
              } else {
                nodeMesh.scale.setScalar(1);
                const material = nodeMesh.material as MeshStandardMaterial;
                if (material && typeof material.emissiveIntensity !== 'undefined') {
                  material.emissiveIntensity = 0.3;
                }
              }
            }
          } catch (error) {
            console.warn(`Error animating node ${node.id}:`, error);
          }
        });
      }
    } catch (error) {
      console.warn('Error in animation frame:', error);
    }
  });

  const handleNodeClick = (section: Section) => {
    try {
      setAutoRotate(false);
      onSectionChange(section);
      setTimeout(() => setAutoRotate(true), 3000);
    } catch (error) {
      console.warn('Error handling node click:', error);
    }
  };

  const handleNodeHover = (section: Section | null) => {
    try {
      setHovered(section);
    } catch (error) {
      console.warn('Error handling node hover:', error);
    }
  };

  return (
    <group ref={groupRef}>
      {/* Central Sphere - Main JARVIS Core */}
      <mesh ref={sphereRef}>
        <sphereGeometry args={[1, 64, 64]} />
        <meshStandardMaterial
          color="#0891b2"
          emissive="#0e7490"
          emissiveIntensity={0.4}
          metalness={0.8}
          roughness={0.2}
          transparent
          opacity={0.8}
        />
      </mesh>

      {/* Inner Energy Core */}
      <mesh>
        <sphereGeometry args={[0.7, 32, 32]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#06b6d4"
          emissiveIntensity={0.6}
          transparent
          opacity={0.4}
        />
      </mesh>

      {/* Rotating Rings */}
      <group>
        {/* Outer Ring */}
        <mesh rotation={[Math.PI / 2, 0, 0]}>
          <torusGeometry args={[2, 0.02, 16, 100]} />
          <meshStandardMaterial
            color="#06b6d4"
            emissive="#0891b2"
            emissiveIntensity={0.5}
            transparent
            opacity={0.7}
          />
        </mesh>

        {/* Middle Ring */}
        <mesh rotation={[Math.PI / 4, Math.PI / 3, 0]}>
          <torusGeometry args={[1.5, 0.015, 16, 100]} />
          <meshStandardMaterial
            color="#22d3ee"
            emissive="#06b6d4"
            emissiveIntensity={0.4}
            transparent
            opacity={0.6}
          />
        </mesh>

        {/* Inner Ring */}
        <mesh rotation={[0, Math.PI / 6, Math.PI / 4]}>
          <torusGeometry args={[1.2, 0.01, 16, 100]} />
          <meshStandardMaterial
            color="#67e8f9"
            emissive="#22d3ee"
            emissiveIntensity={0.3}
            transparent
            opacity={0.5}
          />
        </mesh>
      </group>

      {/* Menu Nodes */}
      {menuNodes && menuNodes.map((node) => {
        if (!node || !node.position) return null;
        
        return (
          <group key={node.id} position={[node.position.x, node.position.y, node.position.z]}>
            {/* Node Sphere */}
            <mesh
              name={`node-${node.id}`}
              onPointerOver={() => handleNodeHover(node.id)}
              onPointerOut={() => handleNodeHover(null)}
              onClick={() => handleNodeClick(node.id)}
            >
              <sphereGeometry args={[0.15, 32, 32]} />
              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={0.3}
                metalness={0.7}
                roughness={0.3}
              />
            </mesh>

            {/* Node Ring */}
            <mesh rotation={[Math.PI / 2, 0, 0]}>
              <torusGeometry args={[0.25, 0.005, 16, 100]} />
              <meshStandardMaterial
                color={node.color}
                emissive={node.color}
                emissiveIntensity={0.2}
                transparent
                opacity={0.6}
              />
            </mesh>

            {/* Node Label */}
            <Text
              position={[0, 0.4, 0]}
              fontSize={0.08}
              color="white"
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.005}
              outlineColor="#000000"
            >
              {node.label || ''}
            </Text>

            {/* Node Description */}
            <Text
              position={[0, -0.4, 0]}
              fontSize={0.06}
              color={node.color}
              anchorX="center"
              anchorY="middle"
              outlineWidth={0.003}
              outlineColor="#000000"
            >
              {node.description || ''}
            </Text>

            {/* Node Icon */}
            <Text
              position={[0, 0, 0.16]}
              fontSize={0.05}
              color="#ffffff"
              anchorX="center"
              anchorY="middle"
              fontWeight="bold"
            >
              {node.icon || ''}
            </Text>

            {/* Connection Line to Center */}
            <mesh lookAt={[0, 0, 0]}>
              <cylinderGeometry args={[0.002, 0.002, node.position.length(), 8]} />
              <meshBasicMaterial
                color={node.color}
                transparent
                opacity={0.3}
              />
            </mesh>

            {/* Hover Effect Ring */}
            {hovered === node.id && (
              <mesh rotation={[Math.PI / 2, 0, 0]}>
                <torusGeometry args={[0.35, 0.01, 16, 100]} />
                <meshStandardMaterial
                  color={node.color}
                  emissive={node.color}
                  emissiveIntensity={0.8}
                  transparent
                  opacity={0.8}
                />
              </mesh>
            )}
          </group>
        );
      })}

      {/* Central Text */}
      <Text
        position={[0, 0, 0]}
        fontSize={0.12}
        color="#22d3ee"
        anchorX="center"
        anchorY="middle"
        fontWeight="bold"
        outlineWidth={0.01}
        outlineColor="#000000"
      >
        J.O.Y.L.I.
      </Text>

      {/* Floating Particles */}
      {Array.from({ length: 100 }).map((_, i) => {
        const radius = 4 + Math.random() * 2;
        const theta = Math.random() * Math.PI * 2;
        const phi = Math.random() * Math.PI;
        
        const x = radius * Math.sin(phi) * Math.cos(theta);
        const y = radius * Math.sin(phi) * Math.sin(theta);
        const z = radius * Math.cos(phi);

        return (
          <mesh key={i} position={[x, y, z]}>
            <sphereGeometry args={[0.01, 8, 8]} />
            <meshBasicMaterial
              color="#06b6d4"
              transparent
              opacity={0.4}
            />
          </mesh>
        );
      })}

      {/* Data Streams */}
      {Array.from({ length: 8 }).map((_, i) => {
        const angle = (i / 8) * Math.PI * 2;
        const radius = 2.5;
        const x = Math.cos(angle) * radius;
        const z = Math.sin(angle) * radius;

        return (
          <group key={i} position={[x, 0, z]}>
            <mesh>
              <cylinderGeometry args={[0.001, 0.001, 0.5, 8]} />
              <meshBasicMaterial
                color="#22d3ee"
                transparent
                opacity={0.6}
              />
            </mesh>
          </group>
        );
      })}
    </group>
  );
}
