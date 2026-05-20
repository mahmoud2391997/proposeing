/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Home, Info, BookOpen, ShoppingBag, Plus, Minus, X } from 'lucide-react';
import Logo from './Logo';
import BreakfastIllustration from './BreakfastIllustration';
import { MenuItem, CartItem, ActiveSection } from '../types';
import { MENU_ITEMS, CAFE_METADATA } from '../data';

interface MobileViewProps {
  onSelectItem: (item: MenuItem) => void;
  cart: CartItem[];
  onUpdateCart: (item: MenuItem, change: number) => void;
  onClearCart: () => void;
  onNavigate: (sectionId: ActiveSection) => void;
  activeSection: ActiveSection;
}

export default function MobileView({
  onSelectItem,
  cart,
  onUpdateCart,
  onClearCart,
  onNavigate,
  activeSection
}: MobileViewProps) {
  const [showDrawer, setShowDrawer] = useState(false);
  const [showHamburgerMenu, setShowHamburgerMenu] = useState(false);

  // Cart summation details
  const cartTotal = cart.reduce((total, item) => total + item.menuItem.price * item.quantity, 0);
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Mobile list matching exactly the photo mockup
  const highlights = [
    { name: 'Full Breakfast', desc: '2 saus, 2 bacon, egg, beans, mushrooms', price: 11.50, id: 'full-breakfast' },
    { name: 'Small Breakfast', desc: 'Egg, sausage, bacon, beans, toast', price: 8.50, id: 'small-breakfast' },
    { name: 'Large Panini', desc: 'Cheese + ham, chicken or bacon', price: 4.70, id: 'large-panini' },
    { name: 'Cottage Pie', desc: 'Chips & peas', price: 7.50, id: 'cottage-pie' }
  ];

  const handleWhatsAppSend = () => {
    let text = `Hello Penny Corner Café! I'd like to place an order from my Mobile:\n\n`;
    cart.forEach(item => {
      text += `• ${item.quantity}x ${item.menuItem.name} (£${(item.menuItem.price * item.quantity).toFixed(2)})\n`;
    });
    text += `\nTotal: £${cartTotal.toFixed(2)}`;
    text += `\n\nMy Details:\nName: [Enter Name]\nAddress: [Enter Delivery Address or 'Collection']`;
    window.open(`${CAFE_METADATA.whatsappBaseUrl}?text=${encodeURIComponent(text)}`, '_blank');
  };

  const handleScrollToSegment = (section: ActiveSection) => {
    onNavigate(section);
    setShowHamburgerMenu(false);
    
    // Smooth scroll mapping for mobile
    const id = section === 'home' 
      ? 'mobile-view-root' 
      : section === 'menu' 
      ? 'mobile-favourites-panel' 
      : section === 'about' 
      ? 'mobile-about-card' 
      : 'mobile-visit-section';
    
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="bg-[#FAF6EE] text-[#2d060a] min-h-screen font-sans pb-16 antialiased selection:bg-cafe-burgundy selection:text-white" id="mobile-view-root">
      
      {/* 1. Mobile Header (Brand title + Hamburger bar on burgundy) */}
      <header className="bg-cafe-burgundy text-white px-4 py-3.5 flex items-center justify-between sticky top-0 z-40 border-b border-cafe-gold/30 shadow-md">
        <div className="flex items-center cursor-pointer" onClick={() => handleScrollToSegment('home')}>
          {/* Logo brand */}
          <Logo size="sm" />
        </div>

        <div className="flex items-center gap-3">
          {/* Basket toggle */}
          <button
            onClick={() => setShowDrawer(!showDrawer)}
            className="p-2 bg-cafe-burgundy-dark rounded-full border border-cafe-gold/30 relative text-white"
          >
            <ShoppingBag size={18} />
            {cartItemCount > 0 && (
              <span className="absolute -top-1.5 -right-1.5 bg-cafe-green text-white font-mono text-[9px] w-4.5 h-4.5 rounded-full flex items-center justify-center font-bold">
                {cartItemCount}
              </span>
            )}
          </button>

          {/* Hamburger toggle */}
          <button
            onClick={() => setShowHamburgerMenu(!showHamburgerMenu)}
            className="text-white hover:text-cafe-cream-dark p-1.5 transition-colors focus:outline-none"
            id="mobile-hamburger"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
        </div>
      </header>

      {/* Hamburger Menu Dropdown Screen */}
      {showHamburgerMenu && (
        <div className="bg-[#4B0F15] text-white border-b-2 border-cafe-gold py-6 px-6 space-y-4 absolute top-[61px] inset-x-0 z-30 shadow-2xl animate-fade-in" id="mobile-hamburger-dropdown">
          {(['home', 'menu', 'order', 'about', 'contact'] as ActiveSection[]).map((tab) => (
            <button
              key={tab}
              onClick={() => {
                if (tab === 'order') {
                  setShowDrawer(true);
                  setShowHamburgerMenu(false);
                } else {
                  handleScrollToSegment(tab);
                }
              }}
              className="w-full text-left py-2 font-serif font-bold text-lg text-cafe-cream-dark uppercase tracking-wider hover:text-white transition-colors border-b border-white/5"
            >
              {tab === 'contact' ? 'Contact Us' : tab}
            </button>
          ))}
          <div className="pt-2 text-xs text-white/50 flex justify-between items-center">
            <span>Call us: {CAFE_METADATA.phone}</span>
            <span className="font-mono text-cafe-gold uppercase">Est. Ipswich</span>
          </div>
        </div>
      )}

      {/* 2. Hero Header Illustration with Text Overlay exactly like image 2 */}
      <section className="relative w-full bg-cafe-burgundy py-8 px-4 flex flex-col items-center justify-between border-b-2 border-cafe-gold/30 shadow-inner" id="mobile-hero">
        <div className="w-full max-w-[280px] aspect-square flex items-center justify-center pt-2">
          <BreakfastIllustration className="w-full h-full" />
        </div>
        
        {/* Centered Serif overlay */}
        <div className="text-center mt-4">
          <h1 className="font-serif font-bold italic text-3xl text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.4)] leading-tight tracking-tight">
            Best Breakfast<br />
            <span className="not-italic text-cafe-cream-dark font-black tracking-wide text-4xl">in Ipswich</span>
          </h1>
        </div>
      </section>

      {/* Main Content Body Pack */}
      <div className="px-4 py-5 space-y-6" id="mobile-body-wrapper">

        {/* 3. Action Phone Segment */}
        <div className="bg-cafe-cream rounded-xl p-5 double-border text-center shadow-sm" id="mobile-call-action">
          <span className="text-[10px] font-mono tracking-[0.3em] text-cafe-gold uppercase block mb-1">TAP TO CALL</span>
          <a
            href={`tel:${CAFE_METADATA.phoneFormatted}`}
            className="font-serif font-black text-3xl text-cafe-burgundy block tracking-widest leading-none my-1"
          >
            {CAFE_METADATA.phone}
          </a>
          
          <button
            onClick={handleWhatsAppSend}
            className="w-full mt-3.5 bg-cafe-green hover:bg-cafe-green-hover text-white py-2.5 px-4 rounded-full font-bold text-sm tracking-wide inline-flex items-center justify-center gap-2 transition-colors duration-250 cursor-pointer shadow"
          >
            <MessageSquare size={16} className="fill-current text-white" />
            Order on WhatsApp
          </button>
        </div>

        {/* 4. Toolbar Navigation Tile Grid */}
        <div className="grid grid-cols-5 gap-2" id="mobile-nav-grid">
          {[
            { tag: 'home', icon: Home, label: 'Home' },
            { tag: 'menu', icon: BookOpen, label: 'Menu' },
            { tag: 'order', icon: ShoppingBag, label: 'Order' },
            { tag: 'about', icon: Info, label: 'About' },
            { tag: 'contact', icon: MapPin, label: 'Contact' },
          ].map((tile) => (
            <button
              key={tile.tag}
              onClick={() => {
                if (tile.tag === 'order') {
                  setShowDrawer(true);
                } else {
                  handleScrollToSegment(tile.tag as ActiveSection);
                }
              }}
              className={`bg-white rounded-lg p-2.5 border border-[#e1d9cc] flex flex-col items-center justify-center shadow-sm active:scale-95 transition-all cursor-pointer ${
                activeSection === tile.tag ? 'border-2 border-cafe-burgundy' : ''
              }`}
            >
              <div className="w-8 h-8 rounded-full bg-cafe-cream flex items-center justify-center text-cafe-burgundy mb-1 shadow-inner">
                <tile.icon size={15} />
              </div>
              <span className="text-[10px] font-medium text-[#5c161e] leading-none text-center truncate w-full">{tile.label}</span>
            </button>
          ))}
        </div>

        {/* 5. Menu Section Card ("Café Favourites") - Double Outline */}
        <div className="bg-white rounded-xl p-5 border-2 border-[#f0e5ca] shadow-sm" id="mobile-favourites-panel">
          <div className="text-center pb-4 mb-4 border-b border-[#faf6ee]" id="mobile-favourites-header">
            <span className="text-cafe-gold text-[10px] font-mono font-bold tracking-[0.25em] uppercase block mb-1">MENU HIGHLIGHTS</span>
            <h2 className="font-serif font-black text-2xl text-cafe-burgundy">Café Favourites</h2>
          </div>

          <div className="space-y-4" id="mobile-favourites-list">
            {highlights.map((item) => {
              // Find details in static MENU_ITEMS to support interactive addition
              const fullItem = MENU_ITEMS.find(mi => mi.id === item.id) || MENU_ITEMS[0];
              return (
                <div
                  key={item.id}
                  onClick={() => onUpdateCart(fullItem, 1)}
                  className="pb-3 border-b border-gray-100 last:border-b-0 flex justify-between items-start gap-3 group cursor-pointer active:bg-cafe-cream/30 p-1.5 rounded"
                  id={`mobile-fav-item-${item.id}`}
                >
                  <div className="space-y-0.5">
                    <h4 className="font-serif font-bold text-[15px] text-cafe-burgundy flex items-center gap-1.5 leading-tight">
                      {item.name}
                    </h4>
                    <p className="text-[11px] text-[#5C161E]/70 font-sans leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                  <div className="flex flex-col items-end shrink-0 pl-1">
                    <span className="font-mono text-sm font-extrabold text-[#5C161E]">
                      £{item.price.toFixed(2)}
                    </span>
                    <span className="text-[9px] font-mono font-bold text-cafe-green leading-none mt-1 group-hover:underline">Add +</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* 6. About Us section card */}
        <div className="bg-cafe-cream rounded-xl p-5 double-border text-center shadow-sm" id="mobile-about-card">
          <span className="text-[10px] font-mono tracking-[0.2em] text-cafe-gold uppercase block mb-1">ABOUT US</span>
          <h3 className="font-serif font-black text-[18px] text-cafe-burgundy mb-2">A Proper Ipswich Caff</h3>
          <p className="text-xs text-[#5C161E] leading-relaxed font-sans max-w-sm mx-auto">
            Family-run since day one. Fresh ingredients, generous plates and a friendly hello — that's our promise. No premium nonsense, just decent grub made right.
          </p>
        </div>

        {/* 7. Visit Us section map spot */}
        <div className="bg-white rounded-xl p-5 border border-[#e1d9cc] shadow-sm flex flex-col md:flex-row gap-4" id="mobile-visit-section">
          <div className="flex-1 space-y-3">
            <span className="text-[9px] font-mono tracking-[0.25em] text-cafe-gold uppercase block">VISIT US</span>
            <div className="space-y-2.5">
              <div className="flex items-start gap-2">
                <MapPin className="text-cafe-burgundy shrink-0 mt-0.5" size={15} />
                <span className="text-xs text-[#5c161e] leading-normal font-sans">
                  <strong>Penny Corner Café</strong><br />
                  {CAFE_METADATA.address}, Ipswich
                </span>
              </div>
              <div className="flex items-start gap-2">
                <Clock className="text-cafe-burgundy shrink-0 mt-0.5" size={15} />
                <span className="text-xs text-[#5c161e] leading-tight font-sans">
                  Mon–Sat 7am – 3pm<br />
                  Sun 8am – 2pm
                </span>
              </div>
            </div>
          </div>

          {/* Real simulated hand-drawn looking mini map */}
          <div className="w-full md:w-32 h-24 bg-cafe-cream border border-[#e2dacb] rounded-lg relative overflow-hidden shrink-0 flex items-center justify-center">
            {/* Background grids resembling roads */}
            <div className="absolute inset-x-0 h-[2px] bg-slate-200/50 top-6" />
            <div className="absolute inset-x-0 h-[2px] bg-slate-200/50 top-16" />
            <div className="absolute inset-y-0 w-[2px] bg-slate-200/50 left-10" />
            <div className="absolute inset-y-0 w-[2px] bg-slate-200/50 left-20" />
            
            {/* Foxhall Road label */}
            <span className="absolute text-[8px] font-mono tracking-tighter text-gray-400 rotate-12 left-2 top-8">Foxhall Road</span>
            
            {/* Center target circle pulse */}
            <span className="absolute w-6 h-6 rounded-full bg-cafe-burgundy/10 animate-ping" />
            <div className="w-4 h-4 bg-cafe-burgundy rounded-full flex items-center justify-center border-2 border-white shadow-md z-10 shrink-0">
              <div className="w-1.5 h-1.5 bg-cafe-gold rounded-full" />
            </div>
            <span className="absolute text-[8px] font-bold text-cafe-burgundy/80 font-serif bottom-2">We are here</span>
          </div>
        </div>

      </div>

      {/* 8. Footer Plate */}
      <footer className="bg-cafe-burgundy text-white pt-10 pb-12 px-5 border-t-4 border-cafe-gold text-center space-y-4" id="mobile-footer">
        <div className="flex justify-center flex-col items-center">
          <Logo size="sm" />
          <p className="text-[11px] text-white/50 max-w-xs mt-3 leading-relaxed">
            Ipswich's hallmark family-run breakfast parlour. Freshly sourced meats, hot barista brews, and specialty paninis.
          </p>
        </div>
        
        <div className="pt-2 border-t border-white/5 flex flex-col items-center gap-1 text-xs">
          <a href="https://www.ipswichcafe.co.uk" target="_blank" rel="noreferrer" className="text-cafe-gold hover:underline font-mono">
            www.ipswichcafe.co.uk
          </a>
          <a href={`tel:${CAFE_METADATA.phoneFormatted}`} className="text-white hover:text-cafe-cream-dark font-sans tracking-widest mt-1">
            {CAFE_METADATA.phone}
          </a>
        </div>
      </footer>

      {/* Slide-out Cart Drawer */}
      {showDrawer && (
        <div className="fixed inset-0 bg-black/60 z-50 flex justify-end" id="mobile-cart-tray">
          <div className="absolute inset-0" onClick={() => setShowDrawer(false)} />
          <div className="relative w-[85%] max-w-sm bg-white h-full shadow-2xl flex flex-col z-10">
            <div className="p-4 bg-cafe-burgundy text-white flex items-center justify-between">
              <div className="flex items-center gap-2">
                <ShoppingBag size={18} className="text-cafe-gold" />
                <h3 className="font-serif font-black text-lg">My Cart Tray</h3>
              </div>
              <button onClick={() => setShowDrawer(false)} className="text-white p-1">
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.map((item) => (
                <div key={item.menuItem.id} className="flex items-center justify-between border-b pb-3">
                  <div className="flex-1">
                    <h5 className="font-bold text-sm text-cafe-burgundy">{item.menuItem.name}</h5>
                    <span className="font-mono text-xs text-cafe-gold font-bold">£{(item.menuItem.price * item.quantity).toFixed(2)}</span>
                  </div>
                  <div className="flex items-center gap-2 pr-1">
                    <button
                      onClick={() => onUpdateCart(item.menuItem, -1)}
                      className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-cafe-burgundy"
                    >
                      <Minus size={11} strokeWidth={3} />
                    </button>
                    <span className="font-mono text-xs font-bold w-4 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateCart(item.menuItem, 1)}
                      className="w-6 h-6 bg-gray-100 rounded-full flex items-center justify-center text-xs font-bold text-cafe-burgundy"
                    >
                      <Plus size={11} strokeWidth={3} />
                    </button>
                  </div>
                </div>
              ))}

              {cart.length === 0 && (
                <div className="flex flex-col items-center justify-center h-48 text-center">
                  <ShoppingBag size={32} className="text-gray-300 mb-1" />
                  <p className="text-xs text-gray-400 font-medium">Your basket is empty</p>
                </div>
              )}
            </div>

            <div className="p-4 border-t bg-gray-50 space-y-3">
              <div className="flex justify-between text-xs text-gray-500">
                <span>Tray Total</span>
                <span className="font-mono text-sm font-bold text-cafe-burgundy">£{cartTotal.toFixed(2)}</span>
              </div>
              
              {cartTotal > 0 && (
                <div className="space-y-2">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full bg-[#12a14b] text-white py-2.5 rounded-lg text-sm font-bold flex items-center justify-center gap-2 outline-none cursor-pointer"
                  >
                    <MessageSquare size={14} className="fill-current text-white" />
                    Place Order via WhatsApp
                  </button>
                  <button
                    onClick={onClearCart}
                    className="w-full text-center text-[10px] text-gray-400 py-1 uppercase font-semibold hover:text-cafe-burgundy"
                  >
                    Clear Cart
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

      {/* Fixed quick mobile order bottom bar */}
      {cartItemCount > 0 && !showDrawer && (
        <div 
          onClick={() => setShowDrawer(true)}
          className="fixed bottom-0 inset-x-0 bg-cafe-green text-white px-5 py-3.5 flex items-center justify-between shadow-2xl z-40 animate-slide-up select-none cursor-pointer"
        >
          <div className="flex items-center gap-2">
            <ShoppingBag size={20} className="text-white fill-current animate-bounce" />
            <span className="text-xs font-sans">
              <strong>Order Tray Updated:</strong> {cartItemCount} item{cartItemCount > 1 ? 's' : ''}
            </span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="font-mono text-sm font-black text-white">£{cartTotal.toFixed(2)}</span>
            <X size={14} className="text-white/70 hover:text-white" onClick={(e) => { e.stopPropagation(); onClearCart(); }} />
          </div>
        </div>
      )}

    </div>
  );
}
