import { useEffect, useState } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function Footer() {
  const year = new Date().getFullYear();
  const { user } = useAuth();
  const location = useLocation();
  const [hasSidebar, setHasSidebar] = useState(false);

  useEffect(() => {
    const checkSidebar = () => {
      const sb = document.querySelector(".sidebar");
      setHasSidebar(Boolean(sb));
    };

    checkSidebar();
    const t1 = setTimeout(checkSidebar, 50);
    const t2 = setTimeout(checkSidebar, 200);
    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
    };
  }, [location.pathname]);

  return (
    <footer className={`site-footer ${hasSidebar ? "site-footer--with-sidebar" : ""}`}>
      <div className="footer-brand">
        <span className="footer-logo">∂</span>
        <div>
          <p>CalcVoyager</p>
          <span className="footer-tagline">
            Study guides, practice, AI solver, and interactive tools.
          </span>
        </div>
      </div>

      <nav className="footer-nav" aria-label="Footer navigation">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/partial-derivatives/1">Partials</NavLink>
        <NavLink to="/taylor-series/1">Taylor</NavLink>
        <NavLink to="/lagrange-multipliers/1">Lagrange</NavLink>
        <NavLink to="/divergence-curl/1">Divergence</NavLink>
        <NavLink to="/stokes-theorem/1">Stokes</NavLink>
        <NavLink to="/practice">Practice</NavLink>
        <NavLink to="/ai-solver">AI Solver</NavLink>
        {user ? (
          <NavLink to="/dashboard">Dashboard</NavLink>
        ) : (
          <Link to="/signup">Sign up free</Link>
        )}
      </nav>

      <p className="footer-copy">© {year} CalcVoyager</p>
    </footer>
  );
}

export default Footer;
