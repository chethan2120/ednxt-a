'use client';

import React from 'react';

/**
 * FloatingBackgroundElements
 * Renders subtle, elegant floating educational icons and math symbols
 * across the background to give life and character to the clean white layout.
 * Optimized for 60fps with pure CSS transforms and zero DOM interference.
 */
export default function FloatingBackgroundElements() {
  return (
    <div
      className="fixed inset-0 pointer-events-none overflow-hidden z-0 select-none"
      aria-hidden="true"
    >
      {/* 1. Orbiting Atom (Top Left - Science) */}
      <div className="absolute top-[8%] left-[4%] animate-float-slow opacity-25 hidden sm:block">
        <svg
          width="84"
          height="84"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="text-blue-500"
        >
          {/* Central nucleus */}
          <circle cx="50" cy="50" r="6" fill="currentColor" fillOpacity="0.8" />
          <circle cx="50" cy="50" r="10" stroke="currentColor" strokeWidth="1" strokeDasharray="3 3" strokeOpacity="0.4" />
          {/* Orbital rings */}
          <ellipse cx="50" cy="50" rx="42" ry="16" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" transform="rotate(30 50 50)" />
          <ellipse cx="50" cy="50" rx="42" ry="16" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" transform="rotate(90 50 50)" />
          <ellipse cx="50" cy="50" rx="42" ry="16" stroke="currentColor" strokeWidth="1.5" strokeOpacity="0.6" transform="rotate(150 50 50)" />
          {/* Orbiting electrons */}
          <circle cx="20" cy="35" r="3" fill="#2563EB" />
          <circle cx="80" cy="65" r="3" fill="#B4E94E" />
          <circle cx="50" cy="92" r="3" fill="#2563EB" />
        </svg>
      </div>

      {/* 2. Math Formula Badge: E = mc² & π (Top Right - Math & Physics) */}
      <div className="absolute top-[12%] right-[5%] animate-float-reverse opacity-20 hidden md:block">
        <div className="flex flex-col items-end gap-1 font-mono text-navy font-bold">
          <div className="px-3 py-1 rounded-full border border-blue-300/40 bg-white/40 backdrop-blur-[2px] shadow-sm text-xs tracking-wider text-blue-700">
            π ≈ 3.14159
          </div>
          <div className="text-sm font-semibold tracking-wide text-navy/70">
            E = mc²
          </div>
        </div>
      </div>

      {/* 3. AI Neural Network Node Cluster (Mid Upper Left - AI & Tech) */}
      <div className="absolute top-[28%] left-[2%] animate-float-drift opacity-25 hidden lg:block">
        <svg
          width="110"
          height="110"
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Connecting synaptic lines */}
          <line x1="25" y1="30" x2="65" y2="20" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.3" strokeDasharray="2 2" />
          <line x1="25" y1="30" x2="50" y2="75" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.3" />
          <line x1="65" y1="20" x2="95" y2="55" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.3" />
          <line x1="50" y1="75" x2="95" y2="55" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.3" />
          <line x1="50" y1="75" x2="75" y2="105" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.3" />
          <line x1="95" y1="55" x2="75" y2="105" stroke="#2563EB" strokeWidth="1.5" strokeOpacity="0.3" />

          {/* Neural nodes */}
          <circle cx="25" cy="30" r="5" fill="#2563EB" fillOpacity="0.7" />
          <circle cx="65" cy="20" r="4" fill="#B4E94E" fillOpacity="0.9" />
          <circle cx="50" cy="75" r="6" fill="#102B50" fillOpacity="0.7" />
          <circle cx="95" cy="55" r="5" fill="#2563EB" fillOpacity="0.8" />
          <circle cx="75" cy="105" r="4.5" fill="#B4E94E" fillOpacity="0.9" />

          {/* AI pulse pill */}
          <rect x="58" y="52" width="28" height="14" rx="7" fill="#2563EB" fillOpacity="0.12" stroke="#2563EB" strokeWidth="1" strokeOpacity="0.3" />
          <text x="72" y="62" textAnchor="middle" fill="#102B50" fontSize="8" fontWeight="700" fontFamily="sans-serif">AI</text>
        </svg>
      </div>

      {/* 4. Mathematics Pythagorean / Calculus Formula (Mid Upper Right - Math) */}
      <div className="absolute top-[34%] right-[3%] animate-float-slow opacity-20 hidden md:block">
        <div className="flex flex-col items-start gap-1 font-mono text-xs text-navy/80">
          <div className="px-2.5 py-1 rounded-md bg-blue-50/60 border border-blue-200/50 backdrop-blur-[2px]">
            a² + b² = c²
          </div>
          <div className="text-[11px] text-blue-600 font-medium pl-1">
            ∑(xᵢ - μ)²
          </div>
        </div>
      </div>

      {/* 5. Chemistry / Laboratory Conical Flask (Mid Lower Left - Science) */}
      <div className="absolute top-[52%] left-[4%] animate-float-reverse opacity-20 hidden md:block">
        <svg
          width="68"
          height="68"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Flask outline */}
          <path
            d="M36 12H44M40 12V32L58 64C60 67 58 70 54 70H26C22 70 20 67 22 64L40 32V12"
            stroke="#102B50"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          {/* Liquid level */}
          <path
            d="M26 62L34 48H46L54 62C55 64 54 66 51 66H29C26 66 25 64 26 62Z"
            fill="#2563EB"
            fillOpacity="0.15"
          />
          {/* Rising bubbles */}
          <circle cx="38" cy="56" r="2" fill="#2563EB" fillOpacity="0.6" />
          <circle cx="44" cy="50" r="1.5" fill="#B4E94E" fillOpacity="0.9" />
          <circle cx="40" cy="42" r="1.5" fill="#2563EB" fillOpacity="0.6" />
        </svg>
      </div>

      {/* 6. Public Speaking / Sound Resonance Waves (Mid Lower Right - Public Speaking) */}
      <div className="absolute top-[62%] right-[4%] animate-float-drift opacity-25 hidden lg:block">
        <svg
          width="74"
          height="74"
          viewBox="0 0 80 80"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Microphone silhouette */}
          <rect x="34" y="20" width="12" height="24" rx="6" stroke="#102B50" strokeWidth="2" fill="white" />
          <path d="M28 36C28 42.6 33.4 48 40 48C46.6 48 52 42.6 52 36" stroke="#102B50" strokeWidth="2" strokeLinecap="round" />
          <path d="M40 48V58M32 58H48" stroke="#102B50" strokeWidth="2" strokeLinecap="round" />
          {/* Speech / resonance sound waves */}
          <path d="M58 26C62 30 64 36 64 42C64 48 62 54 58 58" stroke="#2563EB" strokeWidth="1.5" strokeLinecap="round" strokeDasharray="3 3" />
          <path d="M64 20C70 26 73 34 73 42C73 50 70 58 64 64" stroke="#B4E94E" strokeWidth="1.5" strokeLinecap="round" />
        </svg>
      </div>

      {/* 7. Geometry / Angle Compass & Square Root (Lower Left - Math) */}
      <div className="absolute top-[78%] left-[5%] animate-float-slow opacity-20 hidden md:block">
        <div className="flex flex-col items-start gap-1 font-mono text-xs">
          <div className="px-2.5 py-1 rounded bg-white/70 border border-slate-200 shadow-sm text-navy font-semibold">
            √x² + y²
          </div>
          <div className="text-[11px] text-emerald-600 font-bold pl-1">
            θ = 45° · sin(θ)
          </div>
        </div>
      </div>

      {/* 8. Modern AI Code / Logic Pill (Lower Right - AI) */}
      <div className="absolute top-[86%] right-[5%] animate-float-reverse opacity-25 hidden sm:block">
        <div className="px-3 py-1.5 rounded-lg border border-blue-200/60 bg-blue-50/50 backdrop-blur-sm shadow-sm font-mono text-xs text-blue-800 font-medium flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>model.predict(skills)</span>
        </div>
      </div>
    </div>
  );
}
