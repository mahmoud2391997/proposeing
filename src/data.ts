/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { MenuItem } from './types';

export const MENU_ITEMS: MenuItem[] = [
  {
    id: 'full-breakfast',
    name: 'Full Breakfast',
    description: '2 saus, 2 bacon, egg, beans, tomato, mushrooms, hash, toast',
    price: 11.50,
    category: 'breakfast',
    isHighlight: true
  },
  {
    id: 'small-breakfast',
    name: 'Small Breakfast',
    description: 'Egg, sausage, bacon, beans, hash brown & toast',
    price: 8.50,
    category: 'breakfast',
    isHighlight: true
  },
  {
    id: 'veg-breakfast',
    name: 'Veg Breakfast',
    description: 'Scrambled or poached egg on toast with grilled tom & beans',
    price: 8.50,
    category: 'breakfast',
    isHighlight: true
  },
  {
    id: 'large-panini',
    name: 'Large Panini',
    description: 'Cheese + ham, chicken, bacon — filling of your choice',
    price: 4.70,
    category: 'panini',
    isHighlight: true
  },
  {
    id: 'cottage-pie',
    name: 'Cottage Pie',
    description: 'Hearty traditional cottage pie served with warm chips & garden peas',
    price: 7.50,
    category: 'favorites',
    isHighlight: true
  },
  {
    id: 'breakfast-bap',
    name: 'Breakfast Bap',
    description: 'Smoked bacon, grilled sausage, and a fried egg in a soft white floury bap',
    price: 4.55,
    category: 'breakfast',
    isHighlight: false
  },
  {
    id: 'bacon-bap',
    name: 'Double Bacon Bap',
    description: 'Three slices of thick-cut crispy breakfast bacon in a buttered soft roll',
    price: 3.90,
    category: 'breakfast',
    isHighlight: false
  },
  {
    id: 'sausage-bap',
    name: 'Butchers Sausage Bap',
    description: 'Two grilled premium pork sausages in a soft bakery bap',
    price: 3.90,
    category: 'breakfast',
    isHighlight: false
  },
  {
    id: 'breakfast-burger',
    name: 'Gourmet Cafe Burger',
    description: 'Beef patty, grilled bacon, fried egg, cheese, and relish on a toasted bun with chips',
    price: 8.95,
    category: 'favorites',
    isHighlight: false
  },
  {
    id: 'proper-brew',
    name: 'Proper English Brew',
    description: 'A steaming mug of premium English Breakfast tea that actually tastes like tea',
    price: 2.00,
    category: 'drinks',
    isHighlight: false
  },
  {
    id: 'americano',
    name: 'Barista Americano',
    description: 'Rich, smooth double espresso shot with hot water',
    price: 2.65,
    category: 'drinks',
    isHighlight: false
  },
  {
    id: 'cappuccino',
    name: 'Cafe Cappuccino',
    description: 'Rich double espresso with velvety frothed milk and chocolate dusting',
    price: 2.95,
    category: 'drinks',
    isHighlight: false
  },
  {
    id: 'hot-chocolate',
    name: 'Luxury Hot Chocolate',
    description: 'Thick, creamy hot chocolate topped with pillowy whipped cream and mini marshmallows',
    price: 3.40,
    category: 'drinks',
    isHighlight: false
  }
];

export const CAFE_METADATA = {
  phone: '07719 771 977',
  phoneFormatted: '07719771977',
  address: '166 Foxhall Road, Ipswich',
  postcode: 'IP3 8HN',
  whatsappBaseUrl: 'https://wa.me/447719771977',
  hours: {
    weekdays: 'Mon–Sat 7:00 – 15:00',
    sunday: 'Sun 8:00 – 14:00'
  },
  tagline: 'Proper fry-ups, fresh baps, hot panini and a brew that actually tastes like tea.',
  deliveryNotice: 'Message your order & address — collection or delivery'
};
