// components/Navbar.jsx
import { Link, useLocation } from 'react-router-dom';
import '../styles/navbar.css';
import logoVideo from '../assets/logo/shades_of_brown_text_animation.mp4';

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
              to="/about" 
              className={isActive('/about') ? 'nav-link active' : 'nav-link'}
            >
              About
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
          <li className="logo">
            <Link 
              to="/" 
              className={isActive('/') ? 'nav-link active' : 'nav-link'}
            >
                  <video 
                    src={logoVideo}
                      autoPlay
                      loop
                      muted
                      playsInline
                      className="logo-video"
                  />
            </Link>
          </li>
          <li>
            <Link 
              to="/worldview" 
              className={isActive('/worldview') ? 'nav-link active' : 'nav-link'}
            >
              Worldview
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
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;