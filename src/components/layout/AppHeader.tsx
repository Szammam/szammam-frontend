import { Link, NavLink } from 'react-router-dom';
import { NAV_ITEMS } from './navConfig';
import './layout.css';

export function AppHeader() {
  const mainLinks = NAV_ITEMS.filter((item) => item.to !== '/login');

  return (
    <header className="app-header">
      <div className="app-header__inner">
        <Link to="/" className="app-header__brand">
          Szammam
        </Link>

        <nav aria-label="Primary desktop navigation" className="app-header__nav">
          {mainLinks.map((item) => (
            <NavLink
              key={item.to}
              to={item.to}
              end={item.to === '/'}
              className={({ isActive }) =>
                `app-header__link ${isActive ? 'app-header__link--active' : ''}`
              }
            >
              {item.label}
            </NavLink>
          ))}
        </nav>

        <div className="app-header__actions">
          <NavLink
            to="/login"
            className={({ isActive }) =>
              `app-header__auth-btn ${isActive ? 'app-header__auth-btn--active' : ''}`
            }
          >
            Log in
          </NavLink>
        </div>
      </div>
    </header>
  );
}
