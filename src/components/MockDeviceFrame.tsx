/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
import { ViewMode } from '../types';
import { Monitor, Smartphone, Globe, Info } from 'lucide-react';

interface MockDeviceFrameProps {
  mode: ViewMode;
  onModeChange: (mode: ViewMode) => void;
  children: React.ReactNode;
}

export default function MockDeviceFrame({ mode, onModeChange, children }: MockDeviceFrameProps) {
  return (
    <div className="flex flex-col min-h-screen bg-[#ece5d4]" id="device-wrapper-container">
      
      {/* 1. HUD Viewer Control Header */}
      <div className="bg-[#410F15] text-[#faf6ee] px-4 py-3.5 border-b border-cafe-gold/30 flex flex-col md:flex-row gap-4 items-center justify-between sticky top-0 z-50 select-none shadow-md" id="hud-controls">
        
        {/* Info label */}
        <div className="flex items-center gap-3">
          <div className="w-2.5 h-2.5 rounded-full bg-cafe-gold animate-ping shrink-0" />
          <div>
            <span className="font-serif font-black text-sm md:text-md uppercase tracking-widest text-cafe-cream-dark">PENNY CORNER PREMIUM HUD VIEWPORT</span>
            <p className="text-[10px] text-white/50 leading-none">Interactive UX/UI layout visualization engine &bull; No AI Graphics</p>
          </div>
        </div>

        {/* HUD Switchers */}
        <div className="flex items-center bg-black/40 p-1.5 rounded-full border border-cafe-gold/30">
          <button
            onClick={() => onModeChange('responsive')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full font-sans font-semibold text-xs transition-all uppercase tracking-wider cursor-pointer ${
              mode === 'responsive'
                ? 'bg-cafe-gold text-cafe-burgundy shadow-inner font-bold'
                : 'text-white/70 hover:text-white'
            }`}
          >
            <Globe size={13} />
            Responsive
          </button>
          
          <button
            onClick={() => onModeChange('desktop-mockup')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full font-sans font-semibold text-xs transition-all uppercase tracking-wider cursor-pointer ${
              mode === 'desktop-mockup'
                ? 'bg-cafe-gold text-cafe-burgundy shadow-inner font-bold'
                : 'text-white/70 hover:text-white'
            }`}
          >
            <Monitor size={13} />
            Desktop Look
          </button>

          <button
            onClick={() => onModeChange('mobile-mockup')}
            className={`flex items-center gap-1.5 px-4 py-1.5 rounded-full font-sans font-semibold text-xs transition-all uppercase tracking-wider cursor-pointer ${
              mode === 'mobile-mockup'
                ? 'bg-cafe-gold text-cafe-burgundy shadow-inner font-bold'
                : 'text-white/70 hover:text-white'
            }`}
          >
            <Smartphone size={13} />
            Mobile Look
          </button>
        </div>

        {/* Contact/Notice */}
        <div className="hidden lg:flex items-center gap-2 bg-cafe-burgundy-dark/60 border border-cafe-gold/10 px-3.5 py-1.5 rounded-lg text-xs font-mono text-cafe-cream-dark">
          <Info size={13} className="text-cafe-gold" />
          <span>Interactive Click-to-Order Simulator Online</span>
        </div>

      </div>

      {/* 2. Responsive Render Portals */}
      <div className="flex-1 flex items-center justify-center p-4 md:p-8" id="viewport-portal-area">
        
        {/* Full Responsive Mode */}
        {mode === 'responsive' && (
          <div className="w-full bg-[#FAF6EE] shadow-2xl rounded-xl overflow-hidden min-h-[85vh] border-2 border-cafe-gold/20" id="responsive-wrapper">
            {children}
          </div>
        )}

        {/* Simulated iMac/Desktop Bezel Laptop Frame */}
        {mode === 'desktop-mockup' && (
          <div className="w-full max-w-5xl flex flex-col items-center animate-fade-in" id="macbook-emulator">
            {/* Laptop Screen Portion */}
            <div className="w-full aspect-[16/10] bg-[#FAF6EE] rounded-3xl p-4 md:p-5 shadow-2xl border-[14px] border-slate-900 border-b-[20px] relative overflow-hidden flex flex-col">
              {/* Webcam dot */}
              <div className="absolute top-1.5 left-1/2 -translate-x-1/2 w-2 h-2 rounded-full bg-stone-800" />
              
              {/* Content body inside screen */}
              <div className="flex-1 overflow-y-auto bg-[#FAF6EE] rounded-lg">
                {children}
              </div>
            </div>
            
            {/* Stand base block */}
            <div className="w-48 h-5 bg-slate-800 rounded-b-xl border-t border-slate-700 shadow-md" />
            <div className="w-72 h-2.5 bg-slate-700 rounded-b-xl shadow-lg" />
            <span className="text-[11px] text-cafe-burgundy/60 font-mono mt-3 uppercase tracking-widest text-center">Simulated Wide-View Display</span>
          </div>
        )}

        {/* Simulated iPhone Frame */}
        {mode === 'mobile-mockup' && (
          <div className="w-full max-w-[390px] flex flex-col items-center animate-fade-in" id="iphone-emulator">
            {/* iPhone outer shell */}
            <div className="w-full aspect-[9/19] bg-[#FAF6EE] border-[10px] border-slate-900 rounded-[48px] shadow-3xl relative overflow-hidden flex flex-col max-h-[820px]">
              
              {/* iPhone Dynamic Island Speaker Notch */}
              <div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-5.5 bg-black rounded-full z-50 flex items-center justify-between px-3">
                <div className="w-1.5 h-1.5 bg-blue-900 rounded-full" />
                <div className="w-7 h-1.5 bg-stone-800 rounded-full" />
              </div>

              {/* iOS Mobile Status indicators */}
              <div className="bg-cafe-burgundy text-[#faf6ee] pt-1 pb-1.5 px-6 flex justify-between items-center text-[10px] font-mono z-40 select-none border-b border-white/5 font-bold">
                <span>09:41</span>
                <div className="flex items-center gap-1.5">
                  <span>5G</span>
                  <div className="w-4.5 h-2.5 border border-white/70 rounded-sm p-0.5 flex items-center">
                    <div className="bg-white h-full w-full rounded-2xs" />
                  </div>
                </div>
              </div>

              {/* Scrolling Content Panel */}
              <div className="flex-1 overflow-y-auto bg-[#FAF6EE]">
                {children}
              </div>

              {/* Bottom White Bar Notch Indicator */}
              <div className="absolute bottom-1 right-0 left-0 h-1 flex justify-center z-50">
                <div className="w-32 h-1 bg-black/60 rounded-full" />
              </div>
            </div>
            <span className="text-[11px] text-cafe-burgundy/60 font-mono mt-3 uppercase tracking-widest text-center">Simulated iPhone Viewport</span>
          </div>
        )}

      </div>

    </div>
  );
}
