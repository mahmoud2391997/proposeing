/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState } from 'react';
import { Phone, MessageSquare, MapPin, Clock, Plus, Minus, ShoppingBag, X } from 'lucide-react';
import Logo from './Logo';
import BreakfastIllustration from './BreakfastIllustration';
import { MenuItem, CartItem, ActiveSection } from '../types';
import { MENU_ITEMS, CAFE_METADATA } from '../data';

interface DesktopViewProps {
  onSelectItem: (item: MenuItem) => void;
  cart: CartItem[];
  onUpdateCart: (item: MenuItem, change: number) => void;
  onClearCart: () => void;
  onNavigate: (sectionId: ActiveSection) => void;
  activeSection: ActiveSection;
}

export default function DesktopView({
  onSelectItem,
  cart,
  onUpdateCart,
  onClearCart,
  onNavigate,
  activeSection
}: DesktopViewProps) {
  const [showOrderTray, setShowOrderTray] = useState(false);

  // Filter highlights for the "Fresh from the Grill" section
  const highlights = MENU_ITEMS.filter(item => item.isHighlight && item.id !== 'cottage-pie');
  
  // Cottage pie is specifically on mobile list but we can display the rest
  const favorites = MENU_ITEMS.filter(item => item.category === 'favorites' || item.id === 'cottage-pie');
  const drinks = MENU_ITEMS.filter(item => item.category === 'drinks');
  const mains = MENU_ITEMS.filter(item => item.category === 'breakfast' && !item.isHighlight);

  const cartTotal = cart.reduce((total, item) => total + item.menuItem.price * item.quantity, 0);
  const cartItemCount = cart.reduce((count, item) => count + item.quantity, 0);

  // Generate WhatsApp Message text
  const generateWhatsAppMessage = () => {
    let text = `Hello Penny Corner Café! I'd like to place an order for delivery/collection:\n\n`;
    cart.forEach(item => {
      text += `• ${item.quantity}x ${item.menuItem.name} (£${(item.menuItem.price * item.quantity).toFixed(2)})\n`;
    });
    text += `\nTotal: £${cartTotal.toFixed(2)}`;
    text += `\n\nMy Details:\nName: [Enter Name]\nAddress: [Enter Delivery Address or 'Collection']`;
    return encodeURIComponent(text);
  };

  const handleWhatsAppSend = () => {
    window.open(`${CAFE_METADATA.whatsappBaseUrl}?text=${generateWhatsAppMessage()}`, '_blank');
  };

  return (
    <div className="min-h-screen bg-[#FAF6EE] text-[#2d060a] font-sans antialiased relative selection:bg-cafe-burgundy selection:text-white" id="desktop-view-root">
      
      {/* 1. Header (Red background custom bar) */}
      <header className="bg-cafe-burgundy text-white sticky top-0 z-40 px-6 py-4 shadow-lg border-b border-cafe-gold/30" id="desktop-header">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          
          {/* Logo & Cafe Title */}
          <div className="cursor-pointer" onClick={() => {
            onNavigate('home');
            const el = document.getElementById('desktop-view-root');
            if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
          }}>
            <Logo size="md" />
          </div>

          {/* Navigation Links */}
          <nav className="flex items-center gap-8" id="desktop-nav">
            {(['home', 'menu', 'order', 'about', 'contact'] as ActiveSection[]).map((section) => (
              <button
                key={section}
                onClick={() => {
                  onNavigate(section);
                  const id = section === 'home' 
                    ? 'desktop-view-root' 
                    : section === 'contact' 
                    ? 'footer-contact' 
                    : section === 'order'
                    ? 'comprehensive-menu'
                    : `${section}-section`;
                  const el = document.getElementById(id);
                  if (el) {
                    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
                  }
                }}
                className={`text-[15px] font-sans font-medium uppercase tracking-widest transition-colors duration-200 cursor-pointer ${
                  activeSection === section
                    ? 'text-cafe-cream-dark border-b-2 border-cafe-gold pb-1'
                    : 'text-white/80 hover:text-white hover:border-b-2 hover:border-white/50 pb-1'
                }`}
              >
                {section === 'contact' ? 'Contact Us' : section}
              </button>
            ))}
          </nav>

          {/* Main Telephone Feature Pill */}
          <div className="flex items-center gap-4">
            {/* Cart Button */}
            <button
              onClick={() => setShowOrderTray(!showOrderTray)}
              className="bg-cafe-burgundy-dark hover:bg-[#6c1d27] border border-cafe-gold/50 text-white rounded-full p-2.5 relative transition-all duration-300 flex items-center gap-2 cursor-pointer shadow-inner"
              id="desktop-cart-toggle"
            >
              <ShoppingBag size={20} className="text-cafe-cream-dark" />
              {cartItemCount > 0 && (
                <span className="absolute -top-1 -right-1.5 bg-cafe-green text-white text-[11px] font-bold w-5 h-5 rounded-full flex items-center justify-center animate-pulse">
                  {cartItemCount}
                </span>
              )}
            </button>

            {/* Click to Call banner */}
            <a
              href={`tel:${CAFE_METADATA.phoneFormatted}`}
              className="bg-[#faf6ee] text-[#5C161E] hover:bg-[#f2e8d3] transition-all duration-300 flex items-center gap-2.5 px-5 py-2.5 rounded-full font-mono font-bold text-[16px] border-2 stroke-cafe-gold border-cafe-gold shadow-md hover:scale-102 group"
              id="desktop-phone-pill"
            >
              <div className="p-1 rounded-full bg-cafe-burgundy text-[#faf6ee] group-hover:scale-110 transition-transform">
                <Phone size={14} className="fill-current" />
              </div>
              <span className="tracking-wider">{CAFE_METADATA.phone}</span>
            </a>
          </div>

        </div>
      </header>

      {/* 2. Hero Section */}
      <section className="bg-cafe-burgundy text-white pb-20 pt-12 px-6 overflow-hidden relative" id="desktop-hero">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Hero Content */}
          <div className="lg:col-span-7 flex flex-col justify-center space-y-8 z-10" id="hero-left">
            <div className="inline-flex flex-col items-start gap-1" id="hero-est-stamp">
              <span className="text-cafe-gold text-xs font-semibold tracking-[0.3em] uppercase">EST · IPSWICH</span>
              <div className="w-16 h-[2px] bg-cafe-gold" />
            </div>

            <h1 className="font-serif font-black text-5xl xl:text-7xl leading-[1.1] tracking-tight text-white" id="hero-heading">
              The Best Breakfast in <span className="text-cafe-cream-dark font-normal italic">Ipswich.</span>
            </h1>

            <p className="text-white/80 text-[17px] leading-relaxed max-w-xl font-sans" id="hero-paragraph">
              {CAFE_METADATA.tagline} Family-run café serving proper English breakfasts with golden runny eggs, sizzling sausages, hot baps, specialty paninis, and premium tea that actually tastes like tea. Order ahead – collect or get it delivered!
            </p>

            <div className="flex flex-wrap gap-4 pt-4" id="hero-actions">
              {/* Green Accent WhatsApp */}
              <button
                onClick={() => {
                  onNavigate('menu');
                  const menuSec = document.getElementById('menu-section');
                  if (menuSec) menuSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="bg-cafe-green hover:bg-cafe-green-hover text-white text-base font-bold px-8 py-4 rounded-full flex items-center gap-3 transition-all duration-300 transform hover:-translate-y-0.5 shadow-lg shadow-cafe-green/20 cursor-pointer"
                id="hero-order-whatsapp-btn"
              >
                <MessageSquare size={20} className="fill-current" />
                Order on WhatsApp
              </button>
              
              <button
                onClick={() => {
                  onNavigate('menu');
                  const menuSec = document.getElementById('comprehensive-menu');
                  if (menuSec) menuSec.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }}
                className="bg-transparent hover:bg-white/10 text-white text-base font-medium px-8 py-4 rounded-full border-2 border-white/50 transition-all duration-300 cursor-pointer"
                id="hero-view-menu-btn"
              >
                View Menu
              </button>
            </div>
          </div>

          {/* Right Hero Image (The focal breakfast illustration) */}
          <div className="lg:col-span-5 relative" id="hero-right">
            {/* Elegant outer border frame */}
            <div className="absolute inset-0 border border-cafe-gold/30 translate-x-4 translate-y-4 rounded-lg" />
            <div className="relative z-10 overflow-hidden rounded-lg shadow-2xl border-4 border-cafe-cream-dark/20 p-4 bg-[#410f15]/20 backdrop-blur-xs flex items-center justify-center min-h-[350px]">
              <BreakfastIllustration className="w-full h-full max-h-[340px]" />
              <div className="absolute bottom-3 right-3 bg-cafe-burgundy/95 px-3 py-1.5 rounded border border-cafe-gold/30 text-xs font-serif font-black text-cafe-gold flex items-center gap-1.5 shadow-md">
                <span>Our Standard Full English</span>
                <span className="font-mono text-white">£11.50</span>
              </div>
            </div>
            
            {/* Subtle floating gold stamp accent */}
            <div className="absolute -top-6 -left-6 bg-[#FAF6EE] text-[#5C161E] w-14 h-14 rounded-full flex items-center justify-center font-serif font-black border-2 border-[#C6943C] z-20 shadow-lg rotate-[-12deg] select-none text-center leading-none text-xs">
              100%<br/>Fresh
            </div>
          </div>

        </div>
      </section>

      {/* 3. double-bordered Call to Order banner */}
      <section className="bg-[#FAF6EE] py-16 px-6" id="desktop-call-banner">
        <div className="max-w-4xl mx-auto bg-cafe-cream rounded-xl p-8 double-border text-center relative" id="call-order-wrapper">
          <span className="text-[12px] font-mono tracking-[0.36em] text-cafe-gold uppercase block mb-1">CALL TO ORDER</span>
          
          <a
            href={`tel:${CAFE_METADATA.phoneFormatted}`}
            className="font-serif font-black text-5xl md:text-7xl lg:text-8xl text-cafe-burgundy hover:text-[#7f1f2a] transition-colors duration-200 tracking-wider block my-2 select-all outline-none"
            id="call-order-phone"
          >
            {CAFE_METADATA.phone}
          </a>

          <p className="text-sm font-sans tracking-wide text-[#5C161E]/80 uppercase mt-4">
            {CAFE_METADATA.deliveryNotice}
          </p>
        </div>
      </section>

      {/* 4. Three Action Cards Grid */}
      <section className="bg-[#FAF6EE] pb-16 px-6" id="action-cards">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Card 1: Our Menu */}
          <div className="bg-white rounded-lg p-8 border border-[#e1d9cc] text-center cafe-card-shadow hover:-translate-y-1 transition-all duration-300 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-cafe-burgundy text-[#faf6ee] flex items-center justify-center mb-6 shadow-md">
              {/* Custom culinary target icon */}
              <div className="w-7 h-7 rounded-full border-[2px] border-dashed border-[#faf6ee] flex items-center justify-center">
                <div className="w-2 h-2 rounded-full bg-[#faf6ee]" />
              </div>
            </div>
            <h3 className="font-serif font-bold text-2xl text-cafe-burgundy mb-3">Our Menu</h3>
            <p className="text-[#5C161E]/80 text-[14px] leading-relaxed max-w-[250px] font-sans">
              Full English breakfasts, classic baps, paninis, burgers, jackets, and traditional sweet puddings.
            </p>
            <button
              onClick={() => {
                onNavigate('menu');
                const menuSec = document.getElementById('menu-section');
                if (menuSec) menuSec.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 text-xs uppercase tracking-widest font-bold text-cafe-burgundy hover:text-cafe-gold inline-flex items-center gap-1.5 cursor-pointer"
            >
              Examine Menu  &rarr;
            </button>
          </div>

          {/* Card 2: WhatsApp Order */}
          <div className="bg-white rounded-lg p-8 border border-[#e1d9cc] text-center cafe-card-shadow hover:-translate-y-1 transition-all duration-300 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-cafe-burgundy text-[#faf6ee] flex items-center justify-center mb-6 shadow-md">
              <MessageSquare size={24} className="fill-current text-cafe-cream-dark" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-cafe-burgundy mb-3">WhatsApp Order</h3>
            <p className="text-[#5C161E]/80 text-[14px] leading-relaxed max-w-[250px] font-sans">
              Send your order &amp; address directly. Best speed on collection or delivery, fresh and piping hot.
            </p>
            <button
              onClick={() => {
                onNavigate('menu');
                setShowOrderTray(true);
              }}
              className="mt-6 text-xs uppercase tracking-widest font-bold text-cafe-green hover:underline inline-flex items-center gap-1.5 cursor-pointer"
            >
              Start Order Tray  &rarr;
            </button>
          </div>

          {/* Card 3: Find the Café */}
          <div className="bg-white rounded-lg p-8 border border-[#e1d9cc] text-center cafe-card-shadow hover:-translate-y-1 transition-all duration-300 flex flex-col items-center">
            <div className="w-14 h-14 rounded-full bg-cafe-burgundy text-[#faf6ee] flex items-center justify-center mb-6 shadow-md">
              <MapPin size={24} className="text-cafe-cream-dark" />
            </div>
            <h3 className="font-serif font-bold text-2xl text-cafe-burgundy mb-3">Find the Café</h3>
            <p className="text-[#5C161E]/80 text-[14px] leading-relaxed max-w-[250px] font-sans">
              {CAFE_METADATA.address}, Ipswich.<br />
              Open Mon–Sat from 7:00 am.
            </p>
            <button
              onClick={() => {
                onNavigate('contact');
                const contactSec = document.getElementById('footer-contact');
                if (contactSec) contactSec.scrollIntoView({ behavior: 'smooth' });
              }}
              className="mt-6 text-xs uppercase tracking-widest font-bold text-cafe-burgundy hover:text-cafe-gold inline-flex items-center gap-1.5 cursor-pointer"
            >
              Get Directions  &rarr;
            </button>
          </div>

        </div>
      </section>

      {/* 5. Fresh from the Grill (Menu Highlights - Burgundy background) */}
      <section className="bg-cafe-burgundy text-white py-20 px-6 relative" id="menu-section">
        {/* Decorative elements */}
        <div className="absolute top-0 inset-x-0 h-4 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-black/20 to-transparent" />
        
        <div className="max-w-7xl mx-auto text-center mb-16">
          <span className="text-cafe-gold text-xs font-mono font-semibold tracking-[0.3em] uppercase block mb-3">MENU HIGHLIGHTS</span>
          <h2 className="font-serif font-black text-4xl md:text-5xl text-white">Fresh from the Grill</h2>
          <div className="vintage-divider max-w-xs mx-auto text-center" />
        </div>

        {/* Highlight Grid */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {highlights.map((item) => (
            <div
              key={item.id}
              className="bg-cafe-burgundy-dark hover:bg-black/20 transition-all duration-300 rounded-lg p-6 border-2 border-cafe-gold/30 hover:border-cafe-gold flex flex-col justify-between group h-64 shadow-xl"
              id={`item-highlight-${item.id}`}
            >
              <div id={`item-desc-wrap-${item.id}`}>
                <div className="flex justify-between items-start mb-3">
                  <h3 className="font-serif font-extrabold text-xl text-white group-hover:text-cafe-cream-dark transition-colors">
                    {item.name}
                  </h3>
                </div>
                <p className="text-cafe-cream-dark/70 text-sm leading-relaxed font-sans mb-4">
                  {item.description}
                </p>
              </div>

              <div className="flex justify-between items-end mt-auto pt-4 border-t border-cafe-gold/10" id={`item-footer-${item.id}`}>
                <span className="font-mono text-xl text-cafe-gold font-bold">
                  £{item.price.toFixed(2)}
                </span>
                
                <button
                  onClick={() => onUpdateCart(item, 1)}
                  className="bg-cafe-gold text-cafe-burgundy hover:bg-white hover:text-cafe-burgundy p-1.5 rounded transition-colors group-hover:scale-110 cursor-pointer"
                  title="Add to order tray"
                >
                  <Plus size={16} strokeWidth={3} />
                </button>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 6. Comprehensive Interactive Menu Section */}
      <section className="bg-cafe-cream py-20 px-6" id="comprehensive-menu">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center mb-16">
            <span className="text-cafe-gold text-xs font-mono font-semibold tracking-[0.3em] uppercase block mb-3 font-mono">COMPLETE DIGITAL CARD</span>
            <h2 className="font-serif font-black text-4xl md:text-5xl text-cafe-burgundy">Explore Our Caff Menu</h2>
            <p className="text-[#5C161E]/70 max-w-xl mx-auto font-sans mt-3">
              Add individual items directly to your Order Tray below to easily format and send a message over WhatsApp!
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Left Portion: Full Menu lists by category */}
            <div className="lg:col-span-8 space-y-12">
              
              {/* Category 1: Breakfasts, Rolls & Baps */}
              <div>
                <h3 className="font-serif font-black text-2xl text-cafe-burgundy border-b-2 border-cafe-gold/40 pb-2 mb-6 flex items-center justify-between">
                  <span>🍳 Breakfast, Baps &amp; Rolls</span>
                  <span className="font-mono text-xs text-cafe-gold uppercase font-normal tracking-widest">SERVED PIPING HOT</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {MENU_ITEMS.filter(it => it.category === 'breakfast').map(item => (
                    <div key={item.id} className="bg-white rounded-lg p-5 border border-cafe-cream-dark shadow-sm flex justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif font-bold text-lg text-cafe-burgundy">{item.name}</h4>
                          {item.isHighlight && <span className="text-[9px] font-mono font-bold bg-cafe-gold/20 text-cafe-burgundy px-1.5 py-0.5 rounded">FAVOURITE</span>}
                        </div>
                        <p className="text-xs text-[#5C161E]/70 leading-relaxed">{item.description}</p>
                        <span className="font-mono text-sm text-cafe-gold font-bold block pt-1">£{item.price.toFixed(2)}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-1 bg-cafe-cream rounded h-fit self-center">
                        <button
                          onClick={() => onUpdateCart(item, 1)}
                          className="bg-cafe-burgundy hover:bg-cafe-gold text-white p-1 rounded-full transition-all duration-200 cursor-pointer"
                        >
                          <Plus size={14} strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 2: Favourites & Extras */}
              <div>
                <h3 className="font-serif font-black text-2xl text-cafe-burgundy border-b-2 border-cafe-gold/40 pb-2 mb-6 flex items-center justify-between">
                  <span>🍽️ Café Favourites &amp; Lunch</span>
                  <span className="font-mono text-xs text-cafe-gold uppercase font-normal tracking-widest">RUSTIC PLATES</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {favorites.map(item => (
                    <div key={item.id} className="bg-white rounded-lg p-5 border border-cafe-cream-dark shadow-sm flex justify-between gap-4">
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <h4 className="font-serif font-bold text-lg text-cafe-burgundy">{item.name}</h4>
                          {item.id === 'cottage-pie' && <span className="text-[9px] font-mono font-bold bg-cafe-burgundy text-white px-1.5 py-0.5 rounded">MOCKUP ORIGINAL</span>}
                        </div>
                        <p className="text-xs text-[#5C161E]/70 leading-relaxed">{item.description}</p>
                        <span className="font-mono text-sm text-cafe-gold font-bold block pt-1">£{item.price.toFixed(2)}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-1 bg-cafe-cream rounded h-fit self-center">
                        <button
                          onClick={() => onUpdateCart(item, 1)}
                          className="bg-cafe-burgundy hover:bg-cafe-gold text-white p-1 rounded-full transition-all duration-200 cursor-pointer"
                        >
                          <Plus size={14} strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Category 3: BARISTA HOT BREWS */}
              <div>
                <h3 className="font-serif font-black text-2xl text-cafe-burgundy border-b-2 border-cafe-gold/40 pb-2 mb-6 flex items-center justify-between">
                  <span>☕ Barista Hot Brews &amp; Teas</span>
                  <span className="font-mono text-xs text-cafe-gold uppercase font-normal tracking-widest">BREWED FRESH</span>
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {drinks.map(item => (
                    <div key={item.id} className="bg-white rounded-lg p-5 border border-cafe-cream-dark shadow-sm flex justify-between gap-4">
                      <div className="space-y-1">
                        <h4 className="font-serif font-bold text-lg text-cafe-burgundy">{item.name}</h4>
                        <p className="text-xs text-[#5C161E]/70 leading-relaxed">{item.description}</p>
                        <span className="font-mono text-sm text-cafe-gold font-bold block pt-1">£{item.price.toFixed(2)}</span>
                      </div>
                      <div className="flex flex-col items-center justify-center p-1 bg-cafe-cream rounded h-fit self-center">
                        <button
                          onClick={() => onUpdateCart(item, 1)}
                          className="bg-cafe-burgundy hover:bg-cafe-gold text-white p-1 rounded-full transition-all duration-200 cursor-pointer"
                        >
                          <Plus size={14} strokeWidth={2.5} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

            </div>

            {/* Right Portion: Interactive Real-Time order calculator */}
            <div className="lg:col-span-4">
              <div className="bg-white rounded-lg p-6 border-2 border-cafe-gold/40 shadow-lg sticky top-28" id="desktop-order-builder">
                <div className="flex items-center justify-between border-b pb-4 mb-4" id="order-builder-header">
                  <div className="flex items-center gap-2">
                    <ShoppingBag className="text-cafe-burgundy" size={20} />
                    <h3 className="font-serif font-black text-xl text-cafe-burgundy">Your Order Tray</h3>
                  </div>
                  <span className="bg-cafe-burgundy/10 text-cafe-burgundy font-mono text-xs px-2 py-1 rounded-full font-bold">
                    {cartItemCount} items
                  </span>
                </div>

                {cart.length === 0 ? (
                  <div className="py-12 text-center" id="empty-tray-state">
                    <div className="text-gray-300 mb-4 flex justify-center">
                      <ShoppingBag size={48} strokeWidth={1.5} />
                    </div>
                    <p className="text-sm font-medium text-gray-500">Your Tray is currently empty.</p>
                    <p className="text-xs text-gray-400 mt-2 max-w-[200px] mx-auto">
                      Click the "+" buttons on any menu item to start building your order.
                    </p>
                  </div>
                ) : (
                  <div className="space-y-4" id="active-tray-state">
                    <div className="max-h-60 overflow-y-auto pr-1 space-y-3" id="tray-list">
                      {cart.map((item) => (
                        <div key={item.menuItem.id} className="flex items-center justify-between border-b border-gray-100 pb-3" id={`tray-item-${item.menuItem.id}`}>
                          <div className="flex-1 min-w-0 pr-2">
                            <h4 className="font-sans font-bold text-sm text-cafe-burgundy truncate">{item.menuItem.name}</h4>
                            <span className="font-mono text-xs text-gray-400">£{item.menuItem.price.toFixed(2)} each</span>
                          </div>
                          
                          <div className="flex items-center gap-2.5">
                            {/* Quantity Controls */}
                            <button
                              onClick={() => onUpdateCart(item.menuItem, -1)}
                              className="w-6 h-6 rounded-full bg-gray-100 hover:bg-[#FAF6EE] text-cafe-burgundy flex items-center justify-center cursor-pointer font-bold text-sm"
                            >
                              <Minus size={11} strokeWidth={3} />
                            </button>
                            <span className="font-mono text-sm font-bold text-cafe-burgundy w-4 text-center">{item.quantity}</span>
                            <button
                              onClick={() => onUpdateCart(item.menuItem, 1)}
                              className="w-6 h-6 rounded-full bg-gray-100 hover:bg-[#FAF6EE] text-cafe-burgundy flex items-center justify-center cursor-pointer font-bold text-sm"
                            >
                              <Plus size={11} strokeWidth={3} />
                            </button>
                          </div>
                        </div>
                      ))}
                    </div>

                    {/* Order summary calculations */}
                    <div className="border-t pt-4 space-y-2" id="order-tray-totals">
                      <div className="flex justify-between text-xs text-[#5C161E]/80">
                        <span>Bag Total</span>
                        <span className="font-mono font-medium">£{cartTotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-xs text-[#5C161E]/80">
                        <span>Tax &amp; Vat</span>
                        <span className="font-mono">Included</span>
                      </div>
                      <div className="flex justify-between text-base font-extrabold text-cafe-burgundy pt-2 border-t border-dashed">
                        <span>Est. Subtotal</span>
                        <span className="font-mono text-lg text-cafe-gold">£{cartTotal.toFixed(2)}</span>
                      </div>
                    </div>

                    {/* Actions */}
                    <div className="space-y-2 pt-2">
                      <button
                        onClick={handleWhatsAppSend}
                        className="w-full bg-[#12a14b] hover:bg-[#0e853c] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-all duration-300 shadow-md cursor-pointer"
                        id="tray-whatsapp-order-btn"
                      >
                        <MessageSquare size={16} className="fill-current" />
                        Send Order via WhatsApp
                      </button>
                      
                      <button
                        onClick={onClearCart}
                        className="w-full bg-transparent hover:bg-gray-50 text-gray-400 py-2 rounded text-xs tracking-wider uppercase font-semibold transition-colors cursor-pointer"
                      >
                        Clear Order Tray
                      </button>
                    </div>

                    <div className="bg-cafe-cream/80 border border-cafe-gold/20 rounded p-3 text-[11px] text-[#5C161E]/80 leading-relaxed text-center">
                      ⚡ <strong>Clicking will launch WhatsApp</strong> pre-filled with this exact list, price, and formatting. You can then add your delivery address and send!
                    </div>
                  </div>
                )}
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* 7. About section "A Proper Ipswich Caff" */}
      <section className="bg-cafe-cream border-t border-b border-cafe-gold/20 py-20 px-6" id="about-section">
        <div className="max-w-4xl mx-auto text-center">
          <span className="text-cafe-gold text-xs font-mono font-semibold tracking-[0.3em] uppercase block mb-3 font-mono">OUR STORY</span>
          <h2 className="font-serif font-black text-3xl md:text-5xl text-cafe-burgundy mb-6">A Proper Ipswich Caff</h2>
          <p className="text-[#5C161E] text-lg leading-relaxed max-w-2xl mx-auto font-sans">
            "Family-run from day one. Proper grease, generous portions, freshly ground barista beans, sizzling Cumberland links, and a warm, friendly British greeting — that is our promise. No premium nonsense, just decent grub made right."
          </p>
          <div className="mt-8 inline-flex items-center gap-8 justify-center flex-wrap">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cafe-green" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-cafe-burgundy">Locally Sourced</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cafe-green" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-cafe-burgundy">Family Run</span>
            </div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-cafe-green" />
              <span className="font-mono text-xs font-bold uppercase tracking-wider text-cafe-burgundy">Est. Ipswich</span>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Footer Block */}
      <footer className="bg-cafe-burgundy text-white pt-16 pb-12 px-6 border-t-4 border-cafe-gold" id="footer-contact">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-cafe-gold/20 pb-12">
          
          {/* Logo brand */}
          <div className="md:col-span-5 space-y-4">
            <Logo size="lg" />
            <p className="text-white/60 text-sm max-w-sm mt-4 leading-relaxed">
              Penny Corner Café is Ipswich's hallmark family-run breakfast parlour. Bringing together freshly sourced meats, eggs, hot barista brews, and specialty paninis right to Foxhall Road.
            </p>
          </div>

          {/* Quick info address */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-serif font-bold text-lg text-cafe-cream-dark uppercase tracking-wider">VISIT THE CAFF</h4>
            <div className="space-y-3.5 text-sm text-white/80">
              <div className="flex items-start gap-2.5">
                <MapPin size={18} className="text-cafe-gold mt-0.5 shrink-0" />
                <span>
                  <strong>Penny Corner Café</strong><br />
                  {CAFE_METADATA.address}<br />
                  Ipswich, {CAFE_METADATA.postcode}
                </span>
              </div>
              <div className="flex items-center gap-2.5">
                <Phone size={16} className="text-cafe-gold shrink-0" />
                <a href={`tel:${CAFE_METADATA.phoneFormatted}`} className="underline hover:text-cafe-gold font-mono">{CAFE_METADATA.phone}</a>
              </div>
            </div>
          </div>

          {/* Hours info */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-serif font-bold text-lg text-cafe-cream-dark uppercase tracking-wider">OPENING HOURS</h4>
            <div className="space-y-2.5 text-sm font-mono text-white/80">
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-cafe-gold shrink-0" />
                <span>{CAFE_METADATA.hours.weekdays}</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock size={16} className="text-cafe-gold shrink-0" />
                <span>{CAFE_METADATA.hours.sunday}</span>
              </div>
            </div>
          </div>

        </div>

        {/* Small Print Copyright info */}
        <div className="max-w-7xl mx-auto pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-white/50 gap-4" id="small-print">
          <span>&copy; {new Date().getFullYear()} Penny Corner Café. All rights reserved. Registered Ipswich.</span>
          <div className="flex gap-6">
            <span className="hover:text-cafe-gold cursor-help">Terms of orders</span>
            <span className="hover:text-cafe-gold cursor-help font-mono">www.ipswichcafe.co.uk</span>
          </div>
        </div>
      </footer>

      {/* Floating Order Tray Toggle for mobile/desktop overlap HUD */}
      {cartItemCount > 0 && !showOrderTray && (
        <button
          onClick={() => setShowOrderTray(true)}
          className="fixed bottom-6 right-6 bg-cafe-green hover:bg-cafe-green-hover text-white p-4 rounded-full shadow-2xl z-50 transform hover:scale-110 active:scale-95 transition-all duration-300 flex items-center gap-2.5 cursor-pointer"
          id="floating-basket"
        >
          <ShoppingBag size={22} className="fill-current" />
          <span className="font-mono text-sm font-bold flex items-center justify-center bg-white text-cafe-green w-5 h-5 rounded-full text-xs">
            {cartItemCount}
          </span>
        </button>
      )}

      {/* Slide-out Order Tray Overlay (for overlap drawer fallback) */}
      {showOrderTray && (
        <div className="fixed inset-0 bg-black/50 z-50 flex justify-end" id="tray-drawer-overlay">
          <div className="absolute inset-0" onClick={() => setShowOrderTray(false)} />
          <div className="relative w-full max-w-md bg-white h-full shadow-2xl flex flex-col z-10 animate-slide-in">
            <div className="p-6 border-b flex items-center justify-between bg-cafe-burgundy text-white">
              <div className="flex items-center gap-2">
                <ShoppingBag size={20} className="text-cafe-gold" />
                <h3 className="font-serif font-bold text-xl">My Order Tray</h3>
              </div>
              <button
                onClick={() => setShowOrderTray(false)}
                className="text-white/80 hover:text-white hover:bg-white/10 p-1.5 rounded-full cursor-pointer"
              >
                <X size={20} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6 space-y-4">
              {cart.map((item) => (
                <div key={item.menuItem.id} className="flex items-center justify-between border-b border-gray-100 pb-4">
                  <div className="flex-1">
                    <h4 className="font-bold text-cafe-burgundy text-sm">{item.menuItem.name}</h4>
                    <p className="text-xs text-gray-500">{item.menuItem.description}</p>
                    <span className="font-mono text-xs text-cafe-gold font-bold">£{item.menuItem.price.toFixed(2)} each</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => onUpdateCart(item.menuItem, -1)}
                      className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center font-bold text-sm text-cafe-burgundy cursor-pointer"
                    >
                      <Minus size={12} strokeWidth={3.5} />
                    </button>
                    <span className="font-mono text-sm font-semibold text-cafe-burgundy w-5 text-center">{item.quantity}</span>
                    <button
                      onClick={() => onUpdateCart(item.menuItem, 1)}
                      className="w-7 h-7 bg-gray-100 rounded-full flex items-center justify-center font-bold text-sm text-cafe-burgundy cursor-pointer"
                    >
                      <Plus size={12} strokeWidth={3.5} />
                    </button>
                  </div>
                </div>
              ))}

              {cart.length === 0 && (
                <div className="h-48 flex flex-col items-center justify-center text-center">
                  <ShoppingBag size={40} className="text-gray-300 mb-2" />
                  <p className="text-sm font-medium text-gray-400">Your Basket is empty.</p>
                </div>
              )}
            </div>

            <div className="p-6 border-t bg-gray-55/30 space-y-4">
              <div className="space-y-2">
                <div className="flex justify-between text-xs text-gray-500">
                  <span>Tray Items</span>
                  <span className="font-mono">£{cartTotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-sm font-extrabold text-cafe-burgundy pt-2 border-t border-dashed">
                  <span>Estimated Total</span>
                  <span className="font-mono text-lg text-cafe-gold">£{cartTotal.toFixed(2)}</span>
                </div>
              </div>

              {cart.length > 0 && (
                <div className="space-y-2">
                  <button
                    onClick={handleWhatsAppSend}
                    className="w-full bg-[#12a14b] text-white py-3 rounded-lg font-bold flex items-center justify-center gap-2 transition-transform hover:scale-[1.01] shadow-md cursor-pointer"
                  >
                    <MessageSquare size={16} className="fill-current" />
                    Place Order via WhatsApp
                  </button>
                  <button
                    onClick={onClearCart}
                    className="w-full text-center text-xs text-gray-400 py-1 uppercase font-semibold hover:text-[#5C161E] cursor-pointer"
                  >
                    Clear Tray
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      )}

    </div>
  );
}
