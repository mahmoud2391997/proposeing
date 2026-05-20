/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface MenuItem {
  id: string;
  name: string;
  description: string;
  price: number;
  category: 'breakfast' | 'panini' | 'drinks' | 'favorites';
  isHighlight?: boolean;
}

export interface CartItem {
  menuItem: MenuItem;
  quantity: number;
}

export type ViewMode = 'responsive' | 'desktop-mockup' | 'mobile-mockup';

export type ActiveSection = 'home' | 'menu' | 'order' | 'about' | 'contact';
