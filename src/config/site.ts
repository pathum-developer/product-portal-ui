export interface NavigationItem {
  readonly label: string;
  readonly href: string;
}

export const SITE_NAME = 'Product Portal';

export const PRIMARY_NAVIGATION: readonly NavigationItem[] = [
  { label: 'Home', href: '/' },
  { label: 'MyShops', href: '/my-shops' },
  { label: 'About', href: '/about' },
  { label: 'Contact', href: '/contact' },
];

export const LEGAL_NAVIGATION: readonly NavigationItem[] = [
  { label: 'Privacy', href: '/privacy' },
  { label: 'Terms', href: '/terms' },
];
