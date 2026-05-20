/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { ViewMode, CartItem, MenuItem, ActiveSection } from './types';
import MockDeviceFrame from './components/MockDeviceFrame';
import DesktopView from './components/DesktopView';
import MobileView from './components/MobileView';

export default function App() {
  const [viewMode, setViewMode] = useState<ViewMode>('responsive');
  const [cart, setCart] = useState<CartItem[]>([]);
  const [activeSection, setActiveSection] = useState<ActiveSection>('home');
  const [windowWidth, setWindowWidth] = useState<number>(
    typeof window !== 'undefined' ? window.innerWidth : 1200
  );

  // Measure window widths for fluid responsive breakpoint switching
  useEffect(() => {
    const handleResize = () => setWindowWidth(window.innerWidth);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Handler to add/reduce cart quantities
  const handleUpdateCart = (item: MenuItem, change: number) => {
    setCart((prevCart) => {
      const existing = prevCart.find((ci) => ci.menuItem.id === item.id);
      if (existing) {
        const nextQty = existing.quantity + change;
        if (nextQty <= 0) {
          return prevCart.filter((ci) => ci.menuItem.id !== item.id);
        }
        return prevCart.map((ci) =>
          ci.menuItem.id === item.id ? { ...ci, quantity: nextQty } : ci
        );
      }
      if (change > 0) {
        return [...prevCart, { menuItem: item, quantity: change }];
      }
      return prevCart;
    });
  };

  const handleSelectItem = (item: MenuItem) => {
    // Adds directly to tray with micro feedback
    handleUpdateCart(item, 1);
  };

  const handleClearCart = () => setCart([]);

  const handleNavigate = (sectionId: ActiveSection) => {
    setActiveSection(sectionId);
  };

  // Determine which layout look to serve
  const renderLayoutContent = () => {
    if (viewMode === 'mobile-mockup') {
      return (
        <MobileView
          onSelectItem={handleSelectItem}
          cart={cart}
          onUpdateCart={handleUpdateCart}
          onClearCart={handleClearCart}
          onNavigate={handleNavigate}
          activeSection={activeSection}
        />
      );
    }

    if (viewMode === 'desktop-mockup') {
      return (
        <DesktopView
          onSelectItem={handleSelectItem}
          cart={cart}
          onUpdateCart={handleUpdateCart}
          onClearCart={handleClearCart}
          onNavigate={handleNavigate}
          activeSection={activeSection}
        />
      );
    }

    // Responsive fluid breakpoint
    if (windowWidth < 768) {
      return (
        <MobileView
          onSelectItem={handleSelectItem}
          cart={cart}
          onUpdateCart={handleUpdateCart}
          onClearCart={handleClearCart}
          onNavigate={handleNavigate}
          activeSection={activeSection}
        />
      );
    }

    return (
      <DesktopView
        onSelectItem={handleSelectItem}
        cart={cart}
        onUpdateCart={handleUpdateCart}
        onClearCart={handleClearCart}
        onNavigate={handleNavigate}
        activeSection={activeSection}
      />
    );
  };

  return (
    <MockDeviceFrame mode={viewMode} onModeChange={setViewMode}>
      {renderLayoutContent()}
    </MockDeviceFrame>
  );
}
