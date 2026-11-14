import { NavLink, Outlet } from 'react-router-dom';

const navItems = [
  { to: '/', label: 'Home' },
  { to: '/vendors', label: 'Vendors' },
  { to: '/cart', label: 'Cart' },
  { to: '/orders', label: 'Orders' },
  { to: '/profile', label: 'Profile' },
  { to: '/login', label: 'Login' },
];

export function RootLayout() {
  return (
    <div>
      <header style={{ padding: '1rem 2rem', borderBottom: '1px solid #e5e7eb' }}>
        <nav
          aria-label="Main navigation"
          style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}
        >
          <strong>Szammam</strong>
          {navItems.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              style={({ isActive }) => ({
                fontWeight: isActive ? 700 : 400,
                textDecoration: isActive ? 'underline' : 'none',
              })}
            >
              {item.label}
            </NavLink>
          ))}
        </nav>
      </header>

      <main style={{ padding: '2rem' }}>
        <Outlet />
      </main>
    </div>
  );
}
