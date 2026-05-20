/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';

interface BreakfastIllustrationProps {
  className?: string;
}

export default function BreakfastIllustration({ className = '' }: BreakfastIllustrationProps) {
  return (
    <div className={`relative select-none w-full h-full flex items-center justify-center ${className}`} id="breakfast-illustration-root">
      <svg
        viewBox="0 0 500 500"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="w-full h-auto max-w-[420px] filter drop-shadow-[0_12px_24px_rgba(92,22,30,0.15)] transition-transform duration-500 hover:scale-[1.03]"
        id="breakfast-svg"
      >
        {/* Sizable Rustic Wood/Cafe Table Background Plate Base */}
        <circle cx="250" cy="250" r="240" fill="#F0E5CA" fillOpacity="0.1" stroke="#C6943C" strokeWidth="1" strokeDasharray="3 6" />

        {/* Outer Shadow for the Plate */}
        <circle cx="254" cy="254" r="215" fill="#410F15" fillOpacity="0.15" />

        {/* 1. Main Cast Iron / Gourmet Cafe Ceramic Plate */}
        {/* Plate Outer Cream Base */}
        <circle cx="250" cy="250" r="215" fill="#FAF6EE" stroke="#E2DACB" strokeWidth="4" />
        {/* Burgundy Elegant Inner Band */}
        <circle cx="250" cy="250" r="198" stroke="#5C161E" strokeWidth="5.5" />
        <circle cx="250" cy="250" r="192" stroke="#C6943C" strokeWidth="1.5" />
        
        {/* Plate Shallow Inner Base Shadow */}
        <circle cx="250" cy="250" r="180" fill="#F4EDE0" />
        <circle cx="250" cy="250" r="176" fill="#FAF6EE" />

        {/* 2. Slices of Toasted Sourdough Bread (positioned at top left) */}
        <g id="sourdough-toast">
          {/* Sourdough shadow */}
          <path d="M 100,165 Q 120,110 185,120 T 195,190 T 130,210 Z" fill="#2d060a" fillOpacity="0.1" />
          
          {/* Sourdough Crust */}
          <path d="M 96,160 Q 118,105 180,115 T 190,185 T 125,205 Z" fill="#9C663C" stroke="#714524" strokeWidth="2.5" />
          {/* Bread Crumb Cream Center */}
          <path d="M 104,158 Q 122,115 174,123 T 182,179 T 129,195 Z" fill="#EBD6B0" />
          {/* Bread aeration holes */}
          <ellipse cx="120" cy="150" rx="3" ry="5.5" fill="#CBB18B" />
          <ellipse cx="150" cy="140" rx="4.5" ry="3" fill="#CBB18B" />
          <ellipse cx="140" cy="165" rx="2.5" ry="2.5" fill="#CBB18B" />
          <ellipse cx="170" cy="155" rx="5" ry="3.5" fill="#CBB18B" />
          
          {/* Melting Butter slice */}
          <path d="M 135,148 Q 148,142 155,152 T 140,162 Z" fill="#FCD860" className="animate-pulse" />
          <path d="M 138,150 Q 146,146 150,152 T 142,158 Z" fill="#FFF294" />
        </g>

        {/* 3. Cumberland Sausages (sitting at top-right / middle) */}
        <g id="sausages">
          {/* Sausage 1 Shadow */}
          <rect x="235" y="117" width="145" height="38" rx="19" transform="rotate(22, 235, 117)" fill="#410F15" fillOpacity="0.12" />
          {/* Sausage 1 */}
          <rect x="230" y="114" width="145" height="38" rx="19" transform="rotate(22, 230, 114)" fill="#8D4321" stroke="#68290E" strokeWidth="3" id="sausage-bottom" />
          {/* Sausage 1 Shading Extra Layer */}
          <rect x="236" y="120" width="133" height="26" rx="13" transform="rotate(22, 230, 114)" fill="#B5673E" fillOpacity="0.4" />
          {/* Sausage 1 Grill Char Marks */}
          <line x1="262" y1="130" x2="268" y2="160" stroke="#411300" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="292" y1="142" x2="298" y2="172" stroke="#411300" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="322" y1="154" x2="328" y2="184" stroke="#411300" strokeWidth="4.5" strokeLinecap="round" />

          {/* Sausage 2 Shadow */}
          <rect x="215" y="152" width="145" height="38" rx="19" transform="rotate(12, 215, 152)" fill="#410F15" fillOpacity="0.12" />
          {/* Sausage 2 */}
          <rect x="210" y="149" width="145" height="38" rx="19" transform="rotate(12, 210, 149)" fill="#783416" stroke="#5D200A" strokeWidth="3" id="sausage-top" />
          {/* Sausage 2 Shading Layer */}
          <rect x="216" y="155" width="133" height="26" rx="13" transform="rotate(12, 210, 149)" fill="#9A4D29" fillOpacity="0.3" />
          {/* Sausage 2 Grill Char Marks */}
          <line x1="237" y1="162" x2="242" y2="192" stroke="#350E00" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="267" y1="168" x2="272" y2="198" stroke="#350E00" strokeWidth="4.5" strokeLinecap="round" />
          <line x1="297" y1="174" x2="302" y2="204" stroke="#350E00" strokeWidth="4.5" strokeLinecap="round" />
        </g>

        {/* 4. Twice-wood smoked Crispy Back Bacon Strips */}
        <g id="bacon-strips">
          {/* Bacon 1 Shadow */}
          <path d="M 120,220 Q 150,230 180,210 T 250,240 T 320,230" stroke="#410F15" strokeLinecap="round" strokeWidth="18" strokeOpacity="0.1" fill="none" />
          {/* Bacon 1 Main Frame */}
          <path d="M 115,215 Q 145,225 175,205 T 245,235 T 315,225" stroke="#A33232" strokeLinecap="round" strokeWidth="18" fill="none" />
          <path d="M 115,215 Q 145,225 175,205 T 245,235 T 315,225" stroke="#D37C7C" strokeLinecap="round" strokeWidth="7" fill="none" />
          <path d="M 115,215 Q 145,225 175,205 T 245,235 T 315,225" stroke="#FAE2E2" strokeLinecap="round" strokeWidth="3.5" fill="none" />
          
          {/* Bacon 2 Main Frame (skewed slightly) */}
          <path d="M 110,245 Q 140,255 170,235 T 240,265 T 305,250" stroke="#942626" strokeLinecap="round" strokeWidth="16" fill="none" />
          <path d="M 110,245 Q 140,255 170,235 T 240,265 T 305,250" stroke="#C36161" strokeLinecap="round" strokeWidth="6" fill="none" />
          <path d="M 110,245 Q 140,255 170,235 T 240,265 T 305,250" stroke="#FAE1E1" strokeLinecap="round" strokeWidth="2" fill="none" />
        </g>

        {/* 5. Golden Hash Brown (triangular crispy lattice) */}
        <g id="hash-brown">
          {/* Shadow */}
          <polygon points="120,285 200,285 160,355" fill="#410F15" fillOpacity="0.15" />
          {/* Body */}
          <polygon points="115,280 195,280 155,350" fill="#DFA125" stroke="#AA7410" strokeWidth="3" />
          <polygon points="122,286 188,286 155,343" fill="#F4C744" />
          
          {/* Crispy Grate Marks (golden lattice lines) */}
          <line x1="125" y1="288" x2="148" y2="335" stroke="#B87D14" strokeWidth="2.5" />
          <line x1="140" y1="288" x2="160" y2="330" stroke="#B87D14" strokeWidth="2.5" />
          <line x1="155" y1="288" x2="175" y2="320" stroke="#B87D14" strokeWidth="2.5" />
          
          <line x1="185" y1="288" x2="162" y2="335" stroke="#B87D14" strokeWidth="2.5" />
          <line x1="170" y1="288" x2="150" y2="330" stroke="#B87D14" strokeWidth="2.5" />
          <line x1="155" y1="288" x2="135" y2="320" stroke="#B87D14" strokeWidth="2.5" />
        </g>

        {/* 6. Gourmet Fried Mushrooms (dark seasoned, succulent slices) */}
        <g id="mushrooms">
          {/* Mushroom 1 Left */}
          <ellipse cx="218" cy="336" rx="14" ry="11" fill="#4B3322" stroke="#2D1C11" strokeWidth="2" />
          <path d="M 213,336 C 213,346 223,346 223,336 Z" fill="#6A4932" />
          {/* Stem */}
          <rect x="215" y="344" width="6" height="12" rx="2" fill="#8B6951" />
          
          {/* Mushroom 2 Middle */}
          <ellipse cx="245" cy="345" rx="15" ry="12" fill="#583B29" stroke="#2D1C11" strokeWidth="2" />
          <path d="M 239,345 C 239,356 251,356 251,345 Z" fill="#755239" />
          {/* Stem */}
          <rect x="242" y="353" width="6" height="12" rx="2" fill="#93725A" />

          {/* Mushroom 3 Upper-right */}
          <ellipse cx="232" cy="318" rx="12" ry="10" fill="#412918" stroke="#23140A" strokeWidth="2" />
          <path d="M 227,318 C 227,326 237,326 237,318 Z" fill="#5D3D27" />
          {/* Stem */}
          <rect x="229" y="325" width="5" height="10" rx="1.5" fill="#785942" />
        </g>

        {/* 7. Juicy Roast Plum Tomato Half (perfectly grilled with marks) */}
        <g id="grilled-tomato">
          {/* Shadow */}
          <circle cx="288" cy="328" r="28" fill="#410F15" fillOpacity="0.12" />
          {/* Tomato outer skin */}
          <circle cx="284" cy="324" r="28" fill="#D32F2F" stroke="#9A0007" strokeWidth="3" />
          {/* Inner pulp divisions */}
          <circle cx="284" cy="324" r="21" fill="#FF5252" />
          
          {/* Pulsy seed chambers */}
          <path d="M 284,324 L 270,314 A 12,12 0 0,1 280,305 Z" fill="#B71C1C" />
          <path d="M 284,324 L 298,314 A 12,12 0 0,1 298,328 Z" fill="#B71C1C" />
          <path d="M 284,324 L 274,338 A 12,12 0 0,1 268,326 Z" fill="#B71C1C" />
          
          {/* Seeds */}
          <circle cx="276" cy="312" r="1.5" fill="#FFD740" />
          <circle cx="294" cy="318" r="1.5" fill="#FFD740" />
          <circle cx="274" cy="330" r="1.5" fill="#FFD740" />

          {/* Grill score marks */}
          <line x1="262" y1="316" x2="306" y2="316" stroke="#410F15" strokeWidth="4" strokeLinecap="round" />
          <line x1="266" y1="328" x2="302" y2="328" stroke="#410F15" strokeWidth="4" strokeLinecap="round" />
          
          {/* Char shine highlight */}
          <ellipse cx="284" cy="301" rx="8" ry="2.5" fill="#FFFFFF" fillOpacity="0.4" />
        </g>

        {/* 8. Double Sunny-Side-Up Fried Eggs (in the center) */}
        <g id="fried-eggs">
          
          {/* --- EGG 1 (LOWER-LEFT CENTER) --- */}
          {/* Egg 1 shadow */}
          <path d="M 180,240 C 130,230 140,305 200,310 C 260,315 280,245 230,230 C 180,215 230,250 180,240 Z" fill="#410F15" fillOpacity="0.15" />
          
          {/* Egg 1 White Body (Pristine cream surface) */}
          <path d="M 176,236 C 126,226 136,301 196,306 C 256,311 276,241 226,226 C 176,211 226,246 176,236 Z" fill="#FAF6EE" stroke="#E2DACB" strokeWidth="2" />
          <path d="M 180,240 C 135,232 144,295 196,300 C 248,305 268,245 222,232 C 176,219 222,250 180,240 Z" fill="#FFFFFF" />
          
          {/* Little crispy brown fried edges around egg white */}
          <path d="M 136,260 Q 130,275 142,285" stroke="#C49B71" strokeWidth="2" strokeLinecap="round" fill="none" />
          <path d="M 248,272 Q 256,282 245,290" stroke="#C49B71" strokeWidth="1.5" strokeLinecap="round" fill="none" />

          {/* Egg 1 Yolk (Shiny Glossy Yellow-Orange ball) */}
          <circle cx="190" cy="260" r="23" fill="#FF9E02" stroke="#E67E00" strokeWidth="1" />
          {/* Inner rich warm flare */}
          <circle cx="192" cy="262" r="19" fill="#FFB300" />
          <circle cx="194" cy="264" r="14" fill="#FFC107" />
          {/* Glossy light reflection node */}
          <ellipse cx="178" cy="249" rx="5" ry="3" transform="rotate(-35, 178, 249)" fill="#FFFFFF" fillOpacity="0.9" />
          <circle cx="174" cy="254" r="1.5" fill="#FFFFFF" fillOpacity="0.7" />

          {/* --- EGG 2 (UPPER-RIGHT CENTER) --- */}
          {/* Egg 2 shadow */}
          <path d="M 280,190 C 240,180 230,245 280,260 C 330,275 350,210 320,195 C 290,180 320,200 280,190 Z" fill="#410F15" fillOpacity="0.1" />
          
          {/* Egg 2 White Body */}
          <path d="M 276,186 C 236,176 226,241 276,256 C 326,271 346,206 316,191 C 286,176 316,196 276,186 Z" fill="#FAF6EE" stroke="#E2DACB" strokeWidth="2" />
          <path d="M 279,189 C 243,180 234,236 276,249 C 318,262 336,203 310,192 C 284,181 310,199 279,189 Z" fill="#FFFFFF" />
          
          {/* Crispy edge */}
          <path d="M 241,215 Q 236,228 248,236" stroke="#C49B71" strokeWidth="1.5" strokeLinecap="round" fill="none" />

          {/* Egg 2 Yolk */}
          <circle cx="282" cy="216" r="21" fill="#FF9E02" stroke="#E67E00" strokeWidth="1" />
          {/* Inner rich center */}
          <circle cx="284" cy="218" r="17" fill="#FFB300" />
          <ellipse cx="272" cy="206" rx="4.5" ry="2.5" transform="rotate(-35, 272, 206)" fill="#FFFFFF" fillOpacity="0.9" />

        </g>

        {/* 9. Ramekin of Baked Beans (sitting top-most-left) */}
        <g id="beans-pot">
          {/* Shadow */}
          <circle cx="344" cy="254" r="40" fill="#410F15" fillOpacity="0.15" />
          
          {/* Ramekin Pot Rim (clean white ceramic) */}
          <circle cx="340" cy="250" r="40" fill="#FFFFFF" stroke="#D3C9B6" strokeWidth="3" />
          {/* Inside Ramekin shadow */}
          <circle cx="340" cy="250" r="34" fill="#D32F2F" />
          {/* Orange-Tomato rich beans sauce */}
          <circle cx="340" cy="250" r="32" fill="#E64A19" />

          {/* Beans Group (highly stylized individual beans) */}
          {/* Row of beans */}
          <rect x="318" y="232" width="13" height="8" rx="4" transform="rotate(15, 318, 232)" fill="#FF7043" stroke="#D84315" strokeWidth="1" />
          <rect x="334" y="228" width="13" height="8" rx="4" transform="rotate(35, 334, 228)" fill="#FF7043" stroke="#D84315" strokeWidth="1" />
          <rect x="348" y="234" width="13" height="8" rx="4" transform="rotate(-15, 348, 234)" fill="#FF7043" stroke="#D84315" strokeWidth="1" />
          <rect x="316" y="246" width="13" height="8" rx="4" transform="rotate(-45, 316, 246)" fill="#FF7043" stroke="#D84315" strokeWidth="1" />
          
          <rect x="330" y="244" width="13" height="8" rx="4" transform="rotate(10, 330, 244)" fill="#F4511E" stroke="#BF360C" strokeWidth="1" />
          <rect x="345" y="248" width="13" height="8" rx="4" transform="rotate(55, 345, 248)" fill="#FF7043" stroke="#D84315" strokeWidth="1" />
          <rect x="325" y="260" width="13" height="8" rx="4" transform="rotate(-25, 325, 260)" fill="#FF7043" stroke="#D84315" strokeWidth="1" />
          <rect x="340" y="262" width="13" height="8" rx="4" transform="rotate(5, 340, 262)" fill="#FF8A65" stroke="#D84315" strokeWidth="1" />
          
          {/* Gloss reflections over the beans sauce */}
          <path d="M 314,242 A 26,26 0 0,1 350,222" stroke="#FFFFFF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" fill="none" />
          <ellipse cx="355" cy="238" rx="4" ry="1.5" transform="rotate(30, 355, 238)" fill="#FFFFFF" fillOpacity="0.5" />
        </g>
        
        {/* Subtle Herbs Garnish dusting across the entire plate (parsley flecks) */}
        <g id="parsley-garnish">
          <rect x="190" y="295" width="2" height="4" rx="1" fill="#2E7D32" transform="rotate(45, 190, 295)" />
          <rect x="205" y="315" width="3" height="2" rx="1" fill="#1B5E20" transform="rotate(12, 205, 315)" />
          <rect x="260" y="340" width="2.5" height="3" rx="1" fill="#2E7D32" transform="rotate(78, 260, 340)" />
          <rect x="290" y="300" width="3" height="1.5" rx="0.5" fill="#1B5E20" transform="rotate(-20, 290, 300)" />
          <rect x="250" y="280" width="2" height="2" rx="0.5" fill="#2E7D32" />
        </g>
      </svg>

      {/* Side Companion: Hot Barista Mug of Tea (Offline custom vector accent) */}
      <div className="absolute -bottom-2 -right-2 md:bottom-2 md:right-2 w-20 h-20 md:w-28 md:h-28 flex items-center justify-center filter drop-shadow-lg" id="tea-cup-root">
        <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
          {/* Mug shadow */}
          <ellipse cx="50" cy="74" rx="28" ry="8" fill="#410F15" fillOpacity="0.2" />
          
          {/* Mug Handle */}
          <rect x="64" y="34" width="22" height="32" rx="11" stroke="#FAF6EE" strokeWidth="8" fill="none" />
          <rect x="64" y="34" width="22" height="32" rx="11" stroke="#E2DACB" strokeWidth="3.5" fill="none" />
          
          {/* Mug Main Cylinder body */}
          <path d="M 22,25 L 78,25 L 74,70 C 74,76 68,82 60,82 L 40,82 C 32,82 26,76 26,70 Z" fill="#FAF6EE" stroke="#E2DACB" strokeWidth="2.5" />
          
          {/* Inner Tea surface representation */}
          <ellipse cx="50" cy="25" rx="26" ry="7.5" fill="#5C161E" stroke="#FAF6EE" strokeWidth="2" />
          <ellipse cx="50" cy="25" rx="22" ry="5" fill="#8D252E" />
          <ellipse cx="48" cy="24" rx="16" ry="3.5" fill="#B23B45" />

          {/* Steamy vapors rising up */}
          <path d="M 38,14 Q 42,9 38,4" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" className="animate-pulse" />
          <path d="M 50,15 Q 54,8 50,2" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.5" className="animate-pulse" />
          <path d="M 62,14 Q 58,9 62,4" stroke="#FFF" strokeWidth="2" strokeLinecap="round" strokeOpacity="0.4" className="animate-pulse" />
        </svg>
      </div>
    </div>
  );
}
