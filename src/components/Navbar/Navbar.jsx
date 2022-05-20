import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

export default function Navbar({ showNavLinks = false }) {
  const [isOpen, setIsOpen] = useState(false);

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

          <ul className={`nav-link-section ${isOpen ? 'active' : ''} pl-0`}>
            <li className="nav-link">Sign Up</li>
            <li className="nav-link">Login</li>
          </ul>
        </>
      )}
    </nav>
  );
}
