import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../../contexts/auth-context';
import './Navbar.css';

export default function Navbar({ showNavLinks = false }) {
  const [isOpen, setIsOpen] = useState(false);
  const {
    authState: { isAuthenticated },
    logout,
  } = useAuth();

  return (
    <nav className="navbar flat">
      <h3 className="nav-title">
        <Link to="/">Breadboard</Link>
      </h3>

      {showNavLinks && (
        <>
          <div className="hamburger" onClick={() => setIsOpen((value) => !value)}>
            <span className={`${isOpen ? 'fas fa-xmark' : 'fas fa-bars'}`}></span>
          </div>

          {isAuthenticated ? (
            <span className="nav-link" onClick={() => logout()}>
              Logout
            </span>
          ) : (
            <ul className={`nav-link-section ${isOpen ? 'active' : ''} pl-0`}>
              <Link to="/register">
                <li className="nav-link">Sign Up</li>
              </Link>
              <Link to="/login">
                <li className="nav-link">Login</li>
              </Link>
            </ul>
          )}
        </>
      )}
    </nav>
  );
}
