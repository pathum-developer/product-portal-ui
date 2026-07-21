import type { Shop } from '../types/shop';

import activeLifeImage from '../../../assets/shops/active-life.jpg';
import artisanCornerImage from '../../../assets/shops/artisan-corner.jpg';
import greenBasketImage from '../../../assets/shops/green-basket.jpg';
import happyPawsImage from '../../../assets/shops/happy-paws.jpg';
import homeAndHavenImage from '../../../assets/shops/home-and-haven.jpg';
import lunaBeautyImage from '../../../assets/shops/luna-beauty.jpg';
import northstarElectronicsImage from '../../../assets/shops/northstar-electronics.jpg';
import playhouseImage from '../../../assets/shops/playhouse.jpg';
import theBookNookImage from '../../../assets/shops/the-book-nook.jpg';
import urbanThreadImage from '../../../assets/shops/urban-thread.jpg';

export const FAVORITE_SHOPS: readonly Shop[] = [
  {
    id: 'northstar-electronics',
    name: 'Northstar Electronics ',
    category: 'Electronics',
    description: 'Smart devices,',
    location: 'Colombo 03',
    href: '/shops/northstar-electronics',
    imageSrc: northstarElectronicsImage,
    imageAlt: 'A curated display of modern electronics in a deep blue showroom.',
  },
  {
    id: 'urban-thread',
    name: 'Urban Thread',
    category: 'Fashion',
    description: 'Contemporary clothing and accessories designed for effortless everyday style.',
    location: 'Colombo 07',
    href: '/shops/urban-thread',
    imageSrc: urbanThreadImage,
    imageAlt: 'A contemporary boutique display with clothing and leather accessories.',
  },
  {
    id: 'green-basket',
    name: 'Green Basket',
    category: 'Groceries',
    description: 'Fresh produce, pantry essentials, and locally sourced goods delivered daily.',
    location: 'Nugegoda',
    href: '/shops/green-basket',
    imageSrc: greenBasketImage,
    imageAlt: 'Fresh vegetables, herbs, and citrus arranged in market baskets.',
  },
  {
    id: 'the-book-nook',
    name: 'The Book Nook',
    category: 'Books & stationery',
    description: 'Books, stationery, and thoughtful gifts for curious minds of every age.',
    location: 'Kandy',
    href: '/shops/the-book-nook',
    imageSrc: theBookNookImage,
    imageAlt: 'A warmly lit independent bookstore filled with books and a reading lamp.',
  },
  {
    id: 'home-and-haven',
    name: 'Home & Haven',
    category: 'Home & living',
    description: 'Considered furniture, décor, and practical pieces for comfortable living.',
    location: 'Dehiwala',
    href: '/shops/home-and-haven',
    imageSrc: homeAndHavenImage,
    imageAlt: 'A calm living room display with a sculptural chair and handcrafted decor.',
  },
  {
    id: 'active-life',
    name: 'Active Life',
    category: 'Sports & fitness',
    description: 'Quality equipment, apparel, and essentials for training and outdoor adventures.',
    location: 'Battaramulla',
    href: '/shops/active-life',
    imageSrc: activeLifeImage,
    imageAlt: 'Running shoes, a fitness mat, water bottle, and dumbbells in a sports shop.',
  },
  {
    id: 'luna-beauty',
    name: 'Luna Beauty',
    category: 'Health & beauty',
    description: 'Skincare, wellness essentials, and beauty favorites selected with care.',
    location: 'Colombo 05',
    href: '/shops/luna-beauty',
    imageSrc: lunaBeautyImage,
    imageAlt: 'Elegant unbranded skincare bottles arranged with flowers and smooth stones.',
  },
  {
    id: 'happy-paws',
    name: 'Happy Paws',
    category: 'Pet supplies',
    description: 'Food, toys, grooming products, and everyday essentials for happy pets.',
    location: 'Rajagiriya',
    href: '/shops/happy-paws',
    imageSrc: happyPawsImage,
    imageAlt: 'Colorful pet bowls, toys, treats, and a collar on a bright shop counter.',
  },
  {
    id: 'playhouse',
    name: 'Playhouse',
    category: 'Toys & games',
    description: 'Creative toys, games, and learning activities for children of every age.',
    location: 'Galle',
    href: '/shops/playhouse',
    imageSrc: playhouseImage,
    imageAlt: 'Colorful wooden blocks, a toy train, and stacking rings in a playful display.',
  },
  {
    id: 'artisan-corner',
    name: 'Artisan Corner',
    category: 'Gifts & crafts',
    description: 'Handcrafted gifts, local artwork, and unique pieces made by skilled artisans.',
    location: 'Negombo',
    href: '/shops/artisan-corner',
    imageSrc: artisanCornerImage,
    imageAlt: 'Handcrafted pottery, textiles, baskets, and artisan tools on a wooden table.',
  },
];
