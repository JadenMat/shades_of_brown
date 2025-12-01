// components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';

function Navbar() {
  const location = useLocation();
  
  // Helper function to check if link is active
  const isActive = (path) => location.pathname === path;
  
  return (
    <nav className="navbar">
      <div className="nav-container">
        <ul className="nav-menu">
          <li>
            <Link 
              to="/" 
              className={isActive('/') ? 'nav-link active' : 'nav-link'}
            >
              Home
            </Link>
          </li>
          <li>
            <Link 
              to="/about" 
              className={isActive('/about') ? 'nav-link active' : 'nav-link'}
            >
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className={isActive('/contact') ? 'nav-link active' : 'nav-link'}
            >
              Contact
            </Link>
          </li>
          <li>
            <Link 
              to="/projects" 
              className={isActive('/projects') ? 'nav-link active' : 'nav-link'}
            >
              Projects
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;