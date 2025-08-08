"use client";

import { useState, useEffect } from "react";

export default function HUDOverlay() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemStats, setSystemStats] = useState({
    cpu: 45,
    memory: 67,
    network: 89,
    temperature: 42
  });

  useEffect(() => {
    const timer = setInterval(() => {
      try {
        setCurrentTime(new Date());
        setSystemStats({
          cpu: 40 + Math.random() * 20,
          memory: 60 + Math.random() * 15,
          network: 85 + Math.random() * 10,
          temperature: 40 + Math.random() * 8
        });
      } catch (error) {
        console.warn('Error updating HUD stats:', error);
      }
    }, 1000);
    
    return () => {
      if (timer) {
        clearInterval(timer);
      }
    };
  }, []);

  const formatTime = (date: Date) => {
    try {
      return date.toLocaleTimeString('en-US', { 
        hour12: false, 
        hour: '2-digit', 
        minute: '2-digit',
        second: '2-digit'
      });
    } catch (error) {
      return '00:00:00';
    }
  };

  return (
    <div className="absolute inset-0 z-5 pointer-events-none">
      {/* Corner Brackets */}
      <div className="absolute top-4 left-4 w-12 h-12 border-l-2 border-t-2 border-cyan-400/60"></div>
      <div className="absolute top-4 right-4 w-12 h-12 border-r-2 border-t-2 border-cyan-400/60"></div>
      <div className="absolute bottom-4 left-4 w-12 h-12 border-l-2 border-b-2 border-cyan-400/60"></div>
      <div className="absolute bottom-4 right-4 w-12 h-12 border-r-2 border-b-2 border-cyan-400/60"></div>

      {/* Top Status Bar */}
      <div className="absolute top-0 left-0 right-0 h-8 bg-gradient-to-b from-cyan-900/20 to-transparent border-b border-cyan-500/20">
        <div className="flex justify-center items-center h-full text-xs text-cyan-300 font-mono">
          <div className="flex space-x-4">
            <span>SYS: ONLINE</span>
            <span>CPU: {systemStats?.cpu ? systemStats.cpu.toFixed(0) : '0'}%</span>
            <span>MEM: {systemStats?.memory ? systemStats.memory.toFixed(0) : '0'}%</span>
            <span>NET: {systemStats?.network ? systemStats.network.toFixed(0) : '0'}%</span>
            <span>TEMP: {systemStats?.temperature ? systemStats.temperature.toFixed(0) : '0'}°C</span>
          </div>
        </div>
      </div>

      {/* Time Display */}
      <div className="absolute top-16 right-4 bg-black/40 border border-cyan-500/30 rounded p-2">
        <div className="text-center">
          <div className="text-lg font-bold text-cyan-400">
            {formatTime(currentTime)}
          </div>
          <div className="text-xs text-cyan-300">LOCAL TIME</div>
        </div>
      </div>

      {/* System Status */}
      <div className="absolute top-16 left-4 bg-black/40 border border-cyan-500/30 rounded p-2 w-48">
        <h3 className="text-cyan-400 text-sm font-bold mb-2">SYSTEM STATUS</h3>
        <div className="space-y-1 text-xs text-cyan-300">
          <div className="flex justify-between">
            <span>Portfolio:</span>
            <span className="text-green-400">ACTIVE</span>
          </div>
          <div className="flex justify-between">
            <span>Interface:</span>
            <span className="text-green-400">ONLINE</span>
          </div>
          <div className="flex justify-between">
            <span>J.O.Y.L.I.:</span>
            <span className="text-green-400">READY</span>
          </div>
        </div>
      </div>

      {/* Navigation Help */}
      <div className="absolute bottom-16 left-4 bg-black/40 border border-cyan-500/30 rounded p-2 w-48">
        <h3 className="text-cyan-400 text-sm font-bold mb-2">NAVIGATION</h3>
        <div className="space-y-1 text-xs text-cyan-300">
          <div>• Drag to rotate sphere</div>
          <div>• Scroll to zoom in/out</div>
          <div>• Click nodes to explore</div>
          <div>• Auto-rotation enabled</div>
        </div>
      </div>

      {/* Portfolio Stats */}
      <div className="absolute bottom-16 right-4 bg-black/40 border border-cyan-500/30 rounded p-2 w-48">
        <h3 className="text-cyan-400 text-sm font-bold mb-2">PORTFOLIO STATS</h3>
        <div className="space-y-1 text-xs text-cyan-300">
          <div className="flex justify-between">
            <span>Projects:</span>
            <span className="text-blue-400">15</span>
          </div>
          <div className="flex justify-between">
            <span>Technologies:</span>
            <span className="text-green-400">25+</span>
          </div>
          <div className="flex justify-between">
            <span>Experience:</span>
            <span className="text-purple-400">5+ Years</span>
          </div>
          <div className="flex justify-between">
            <span>Awards:</span>
            <span className="text-yellow-400">10</span>
          </div>
        </div>
      </div>

      {/* Bottom Status */}
      <div className="absolute bottom-0 left-0 right-0 h-8 bg-gradient-to-t from-cyan-900/20 to-transparent border-t border-cyan-500/20">
        <div className="flex justify-center items-center h-full text-xs text-cyan-400 font-mono">
          J.O.Y.L.I. PORTFOLIO SYSTEM v3.0 - JUST ONE YOUNG LUMINARY INTELLIGENCE
        </div>
      </div>

      {/* Scanning Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/40 to-transparent animate-pulse"></div>
      </div>
    </div>
  );
}
