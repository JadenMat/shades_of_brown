// pages/NotFound.jsx
import { Link } from 'react-router-dom';
import '../styles/not_found.css';

function NotFound() {
  return (
    <div className="not-found">
      <h1>404</h1>
      <h2>Page Not Found</h2>
      <p>Sorry, the page you're looking for doesn't exist.</p>
      <Link to="/" className="home-button">
        Go Back Home
      </Link>
    </div>
  );
}

export default NotFound;