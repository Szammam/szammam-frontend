export interface NavItem {
  to: string;
  label: string;
  showInMobileBar?: boolean;
}

export const NAV_ITEMS: NavItem[] = [
  { to: '/', label: 'Home', showInMobileBar: true },
  { to: '/vendors', label: 'Vendors', showInMobileBar: true },
  { to: '/cart', label: 'Cart', showInMobileBar: true },
  { to: '/orders', label: 'Orders', showInMobileBar: true },
  { to: '/profile', label: 'Profile', showInMobileBar: true },
  { to: '/login', label: 'Login', showInMobileBar: false },
];
