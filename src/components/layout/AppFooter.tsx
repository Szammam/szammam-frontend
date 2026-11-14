import './layout.css';

export function AppFooter() {
  return (
    <footer className="app-footer">
      <div className="app-footer__inner">
        <span>© {new Date().getFullYear()} Szammam — Campus Food Ordering</span>
        <span>Sprint 0 Wireframe Shell</span>
      </div>
    </footer>
  );
}
