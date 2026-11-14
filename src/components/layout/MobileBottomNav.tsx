import { NavLink } from 'react-router-dom';
import { NAV_ITEMS } from './navConfig';
import './layout.css';

export function MobileBottomNav() {
  const mobileLinks = NAV_ITEMS.filter((item) => item.showInMobileBar);

  return (
    <nav aria-label="Mobile bottom navigation" className="mobile-nav">
      {mobileLinks.map((item) => (
        <NavLink
          key={item.to}
          to={item.to}
          end={item.to === '/'}
          className={({ isActive }) =>
            `mobile-nav__item ${isActive ? 'mobile-nav__item--active' : ''}`
          }
        >
          <span>{item.label}</span>
        </NavLink>
      ))}
    </nav>
  );
}
