/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface LogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
}

export default function Logo({ className = '', size = 'md' }: LogoProps) {
  const dimensions = {
    sm: { width: 40, height: 40, textSize: 'text-[9px]' },
    md: { width: 64, height: 64, textSize: 'text-[11px]' },
    lg: { width: 96, height: 96, textSize: 'text-[15px]' },
    xl: { width: 140, height: 140, textSize: 'text-[20px]' },
  }[size];

  return (
    <div className={`flex items-center gap-3 select-none ${className}`} id="cafe-logo-container">
      <svg
        width={dimensions.width}
        height={dimensions.height}
        viewBox="0 0 160 160"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="transition-transform duration-300 hover:rotate-6 filter drop-shadow-md"
        id="cafe-logo-svg"
      >
        {/* Outer Burgundy Circle */}
        <circle cx="80" cy="80" r="76" fill="#5C161E" stroke="#C6943C" strokeWidth="4" />
        
        {/* Inner Gold Dotted Ring */}
        <circle cx="80" cy="80" r="66" stroke="#f0e5ca" strokeWidth="1.5" strokeDasharray="4 3" />
        <circle cx="80" cy="80" r="61" stroke="#C6943C" strokeWidth="0.75" />

        {/* Outer concentric lines */}
        <circle cx="80" cy="80" r="48" fill="#4B0F15" />

        {/* Sunny-Side-Up Fried Egg Illustration */}
        <g id="fried-egg">
          {/* Egg White - soft organic shape */}
          <path
            d="M 60,78 C 50,75 48,88 54,98 C 60,108 72,115 88,115 C 104,115 116,104 116,92 C 116,80 106,66 92,68 C 78,70 70,81 60,78 Z"
            fill="#FAF6EE"
            className="filter drop-shadow-[0_2px_4px_rgba(0,0,0,0.2)]"
          />
          {/* Egg Yolk - glossy warm yellow-orange */}
          <circle cx="82" cy="90" r="19" fill="#FDB813" />
          <circle cx="80" cy="87" r="16" fill="#F9A01B" />
          {/* Yolk Highlight */}
          <ellipse cx="74" cy="81" rx="4" ry="2.5" transform="rotate(-30, 74, 81)" fill="#FFFFFF" fillOpacity="0.8" />
          
          {/* Little Crispy Bacon strip under or beside yolk */}
          <path 
            d="M 100,75 Q 108,74 114,80 T 118,88" 
            stroke="#A32626" 
            strokeWidth="3.5" 
            strokeLinecap="round" 
            fill="none" 
          />
          <path 
            d="M 100,75 Q 108,74 114,80 T 118,88" 
            stroke="#DA7070" 
            strokeWidth="1.2" 
            strokeLinecap="round" 
            fill="none" 
          />
        </g>

        {/* Circular curved label paths for texts */}
        {/* Top Text Path (arch upwards) */}
        <path id="text-path-top" d="M 24,80 A 56,56 0 0,1 136,80" fill="none" />
        {/* Bottom Text Path (arch downwards) */}
        <path id="text-path-bottom" d="M 136,80 A 56,56 0 0,1 24,80" fill="none" />

        {/* Vintage typography inside circle */}
        <text fill="#FAF6EE" className="font-sans font-semibold tracking-[0.18em] text-[10.5px]">
          <textPath href="#text-path-top" startOffset="50%" textAnchor="middle">
            PENNY CORNER
          </textPath>
        </text>

        <text fill="#FAF6EE" className="font-serif font-black tracking-[0.25em] text-[14px]">
          <textPath href="#text-path-bottom" startOffset="50%" textAnchor="middle">
            CAFÉ
          </textPath>
        </text>
      </svg>
      {size !== 'sm' && (
        <div className="flex flex-col select-none" id="cafe-brand-text">
          <span className="font-serif font-bold tracking-wider leading-none text-white text-[17px] md:text-[20px]">
            PENNY CORNER
          </span>
          <span className="font-serif font-black tracking-[0.4em] text-[20px] md:text-[25px] text-cafe-cream-dark leading-none mt-[2px]">
            CAFÉ
          </span>
        </div>
      )}
    </div>
  );
}
