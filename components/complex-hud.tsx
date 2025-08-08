"use client";

import { useState, useEffect } from "react";

export default function ComplexHUD() {
  const [currentTime, setCurrentTime] = useState(new Date());
  const [systemStats, setSystemStats] = useState({
    cpu: 45,
    memory: 67,
    network: 89,
    temperature: 42
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentTime(new Date());
      setSystemStats({
        cpu: 40 + Math.random() * 20,
        memory: 60 + Math.random() * 15,
        network: 85 + Math.random() * 10,
        temperature: 40 + Math.random() * 8
      });
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="absolute inset-0 z-5 pointer-events-none">
      {/* Top HUD Bar */}
      <div className="absolute top-0 left-0 right-0 h-12 bg-gradient-to-b from-cyan-900/20 to-transparent border-b border-cyan-500/30">
        <div className="flex justify-between items-center h-full px-4 text-xs text-cyan-300 font-mono">
          <div className="flex space-x-8">
            {Array.from({ length: 30 }, (_, i) => (
              <div key={i} className="flex flex-col items-center">
                <div className="text-[10px]">{String(i + 1).padStart(2, '0')}</div>
                <div className="w-px h-2 bg-cyan-400/60"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Left Side Panel */}
      <div className="absolute left-0 top-16 bottom-16 w-64 bg-gradient-to-r from-black/80 to-transparent border-r border-cyan-500/20">
        <div className="p-4 space-y-4">
          {/* System Status */}
          <div className="border border-cyan-500/30 rounded p-3 bg-black/40">
            <h3 className="text-cyan-400 text-sm font-bold mb-2">SYSTEM STATUS</h3>
            <div className="space-y-2 text-xs text-cyan-300">
              <div className="flex justify-between">
                <span>CPU Usage:</span>
                <span>{systemStats.cpu.toFixed(1)}%</span>
              </div>
              <div className="w-full h-1 bg-gray-700 rounded">
                <div 
                  className="h-full bg-cyan-400 rounded transition-all duration-1000"
                  style={{ width: `${systemStats.cpu}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between">
                <span>Memory:</span>
                <span>{systemStats.memory.toFixed(1)}%</span>
              </div>
              <div className="w-full h-1 bg-gray-700 rounded">
                <div 
                  className="h-full bg-blue-400 rounded transition-all duration-1000"
                  style={{ width: `${systemStats.memory}%` }}
                ></div>
              </div>
              
              <div className="flex justify-between">
                <span>Network:</span>
                <span>{systemStats.network.toFixed(1)}%</span>
              </div>
              <div className="w-full h-1 bg-gray-700 rounded">
                <div 
                  className="h-full bg-green-400 rounded transition-all duration-1000"
                  style={{ width: `${systemStats.network}%` }}
                ></div>
              </div>
            </div>
          </div>

          {/* Navigation Menu */}
          <div className="border border-cyan-500/30 rounded p-3 bg-black/40">
            <h3 className="text-cyan-400 text-sm font-bold mb-2">NAVIGATION</h3>
            <div className="space-y-1 text-xs text-cyan-300">
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
                <span>Portfolio Overview</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-blue-400 rounded-full"></div>
                <span>Project Gallery</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-green-400 rounded-full"></div>
                <span>Skills Matrix</span>
              </div>
              <div className="flex items-center space-x-2">
                <div className="w-2 h-2 bg-purple-400 rounded-full"></div>
                <span>Achievement Log</span>
              </div>
            </div>
          </div>

          {/* Data Stream */}
          <div className="border border-cyan-500/30 rounded p-3 bg-black/40">
            <h3 className="text-cyan-400 text-sm font-bold mb-2">DATA STREAM</h3>
            <div className="space-y-1 text-[10px] text-cyan-300 font-mono">
              <div>{'>'} Initializing portfolio systems...</div>
              <div>{'>'} Loading user interface...</div>
              <div>{'>'} Establishing connections...</div>
              <div>{'>'} J.O.Y.L.I. online and ready</div>
              <div className="text-green-400">{'>'} All systems operational</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right Side Panel */}
      <div className="absolute right-0 top-16 bottom-16 w-64 bg-gradient-to-l from-black/80 to-transparent border-l border-cyan-500/20">
        <div className="p-4 space-y-4">
          {/* Weather/Environment */}
          <div className="border border-cyan-500/30 rounded p-3 bg-black/40">
            <h3 className="text-cyan-400 text-sm font-bold mb-2">ENVIRONMENT</h3>
            <div className="text-center">
              <div className="text-2xl text-cyan-400 font-bold">13°C</div>
              <div className="text-xs text-cyan-300">San Francisco, CA</div>
              <div className="text-xs text-gray-400">Partly Cloudy</div>
            </div>
          </div>

          {/* Portfolio Stats */}
          <div className="border border-cyan-500/30 rounded p-3 bg-black/40">
            <h3 className="text-cyan-400 text-sm font-bold mb-2">PORTFOLIO STATS</h3>
            <div className="space-y-2 text-xs text-cyan-300">
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

          {/* Activity Log */}
          <div className="border border-cyan-500/30 rounded p-3 bg-black/40">
            <h3 className="text-cyan-400 text-sm font-bold mb-2">ACTIVITY LOG</h3>
            <div className="space-y-1 text-[10px] text-cyan-300">
              <div>• Portfolio accessed</div>
              <div>• Interface initialized</div>
              <div>• Systems online</div>
              <div>• Ready for interaction</div>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom HUD Bar */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-cyan-900/20 to-transparent border-t border-cyan-500/30">
        <div className="flex justify-center items-center h-full">
          <div className="text-cyan-400 text-sm font-mono">
            J.O.Y.L.I. PORTFOLIO SYSTEM v3.0 - JUST ONE YOUNG LUMINARY INTELLIGENCE
          </div>
        </div>
      </div>

      {/* Corner Elements */}
      <div className="absolute top-4 left-4 w-8 h-8 border-l-2 border-t-2 border-cyan-400/60"></div>
      <div className="absolute top-4 right-4 w-8 h-8 border-r-2 border-t-2 border-cyan-400/60"></div>
      <div className="absolute bottom-4 left-4 w-8 h-8 border-l-2 border-b-2 border-cyan-400/60"></div>
      <div className="absolute bottom-4 right-4 w-8 h-8 border-r-2 border-b-2 border-cyan-400/60"></div>

      {/* Scanning Lines */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse"></div>
        <div className="absolute bottom-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-cyan-400/60 to-transparent animate-pulse"></div>
        <div className="absolute top-0 left-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent animate-pulse"></div>
        <div className="absolute top-0 right-0 w-px h-full bg-gradient-to-b from-transparent via-cyan-400/60 to-transparent animate-pulse"></div>
      </div>
    </div>
  );
}
