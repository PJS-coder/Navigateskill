'use client';

import React, { useState } from 'react';
import { Smartphone, Laptop, Sliders, CheckCircle } from 'lucide-react';

export const AppDevLaptopPhone3D: React.FC = () => {
  const [dividerPosition, setDividerPosition] = useState<number>(50);
  const [activePlatform, setActivePlatform] = useState<'iOS' | 'Android' | 'Cross-platform'>('iOS');
  const [isDragging, setIsDragging] = useState<boolean>(false);

  const updatePosition = (clientX: number, rect: DOMRect) => {
    const x = Math.max(10, Math.min(90, ((clientX - rect.left) / rect.width) * 100));
    setDividerPosition(x);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    updatePosition(e.clientX, e.currentTarget.getBoundingClientRect());
  };

  const handleTouchMove = (e: React.TouchEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const touch = e.touches[0];
    updatePosition(touch.clientX, e.currentTarget.getBoundingClientRect());
  };

  return (
    <div className="relative w-full rounded-3xl bg-[#EFE8DE] border border-[#111111]/10 p-4 sm:p-6 shadow-sm overflow-hidden space-y-4">
      {/* Required Floating Tags */}
      <div className="flex flex-wrap items-center gap-2 z-20 relative">
        {(['iOS', 'Android', 'Cross-platform'] as const).map((tag) => (
          <button
            key={tag}
            onClick={() => setActivePlatform(tag)}
            className={`px-3 sm:px-3.5 py-1 sm:py-1.5 rounded-full text-[11px] sm:text-xs font-bold uppercase tracking-wider transition-all ${
              activePlatform === tag
                ? 'bg-[#111111] text-[#F7F3EC] shadow-md scale-105'
                : 'bg-[#F7F3EC] text-[#111111]/70 border border-[#111111]/10 hover:bg-white'
            }`}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Code vs App Output Drag Slider Container */}
      <div
        onMouseDown={() => setIsDragging(true)}
        onMouseUp={() => setIsDragging(false)}
        onMouseLeave={() => setIsDragging(false)}
        onMouseMove={handleMouseMove}
        onTouchStart={() => setIsDragging(true)}
        onTouchEnd={() => setIsDragging(false)}
        onTouchMove={handleTouchMove}
        className="relative w-full h-[320px] sm:h-[360px] rounded-2xl overflow-hidden border border-[#111111]/10 shadow-lg bg-[#111111] cursor-ew-resize select-none touch-none"
      >
        {/* Left Side: Code Layer */}
        <div
          className="absolute inset-0 bg-[#161616] p-3 sm:p-4 font-mono text-[10px] sm:text-xs overflow-hidden flex flex-col justify-between"
          style={{ width: `${dividerPosition}%` }}
        >
          <div>
            <div className="flex items-center gap-2 text-white/50 border-b border-white/10 pb-2 mb-2 sm:mb-3">
              <Laptop className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-amber-300 flex-shrink-0" />
              <span className="text-[10px] sm:text-[11px] font-bold text-amber-300 truncate">AppEngine.tsx — {activePlatform}</span>
            </div>

            <div className="space-y-1 text-[10px] sm:text-[11px] text-white/90 leading-relaxed overflow-x-auto">
              <p className="text-purple-400">import <span className="text-blue-300">&#123; NativeHaptics &#125;</span> from <span className="text-emerald-300">'@navigate/mobile'</span>;</p>
              <p className="text-blue-400">export function <span className="text-yellow-300">MobileCore</span>() &#123;</p>
              <p className="text-purple-400 pl-2 sm:pl-4">const <span className="text-white">stream</span> = usePushEngine();</p>
              <p className="text-emerald-300 pl-2 sm:pl-4">return &lt;SmartphoneApp platform="{activePlatform}" /&gt;;</p>
              <p className="text-blue-400">&#125;</p>
            </div>
          </div>

          <div className="bg-[#222] p-1.5 sm:p-2 rounded text-[9px] sm:text-[10px] text-gray-400 flex items-center justify-between">
            <span className="text-emerald-400 font-bold">● CODE LAYER</span>
            <span className="hidden sm:inline">Drag slider</span>
          </div>
        </div>

        {/* Right Side: Running App Output Layer */}
        <div
          className="absolute top-0 right-0 bottom-0 bg-[#F7F3EC] p-3 sm:p-4 flex flex-col justify-between border-l border-white/20 shadow-2xl"
          style={{ width: `${100 - dividerPosition}%` }}
        >
          <div className="flex items-center justify-between border-b border-[#111111]/10 pb-2">
            <div className="flex items-center gap-1.5 text-[11px] sm:text-xs font-bold text-[#111111]">
              <Smartphone className="w-3.5 h-3.5 text-[#8C735B] flex-shrink-0" />
              <span className="truncate">{activePlatform} App</span>
            </div>
            <span className="text-[9px] sm:text-[10px] font-extrabold bg-emerald-100 text-emerald-700 px-1.5 py-0.5 rounded-full">
              60 FPS
            </span>
          </div>

          <div className="my-auto space-y-2 p-2.5 sm:p-3 bg-white rounded-2xl border border-[#111111]/10 shadow-md">
            <div className="flex justify-between items-center text-[11px] sm:text-xs font-black text-[#111111]">
              <span>Navigate Mobile</span>
              <span className="text-[9px] sm:text-[10px] text-[#8C735B]">v3.2</span>
            </div>
            <div className="h-9 sm:h-10 bg-[#111111] text-white rounded-xl p-2 flex items-center justify-between text-[10px] sm:text-xs font-bold">
              <span>Real-Time Sync</span>
              <span className="bg-[#D6BFA8] text-[#111111] text-[8px] sm:text-[9px] px-1.5 py-0.5 rounded font-extrabold">Live</span>
            </div>
          </div>

          <div className="bg-[#111111] text-white p-1.5 sm:p-2 rounded-xl text-center text-[9px] sm:text-[10px] font-bold flex items-center justify-center gap-1">
            <CheckCircle className="w-3 h-3 text-emerald-400" />
            <span>APP OUTPUT LAYER</span>
          </div>
        </div>

        {/* Divider Slider Bar */}
        <div
          className="absolute top-0 bottom-0 w-1 bg-[#111111] cursor-ew-resize z-30 shadow-lg"
          style={{ left: `${dividerPosition}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-6 h-6 sm:w-7 sm:h-7 rounded-full bg-[#111111] text-white flex items-center justify-center border-2 border-white shadow-lg">
            <Sliders className="w-3 h-3 sm:w-3.5 sm:h-3.5" />
          </div>
        </div>
      </div>

      <div className="text-center text-[11px] sm:text-xs text-[#8C735B] font-bold uppercase tracking-wider">
        ↔ Drag slider to compare code and running mobile application
      </div>
    </div>
  );
};
