// App.jsx
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './App.css';

// Import your components
import Navbar from './components/navbar';
import Footer from './components/footer';
import ThreeScene from './components/threescene';

// Import your page components
import Home from './pages/home';
import About from './pages/about';
import Projects from './pages/projects'
import Contact from './pages/contact';
import NotFound from './pages/not_found';

// Main App Component
function App() {
  return (
    <BrowserRouter>
      <div className="grid-container1">
        {/* Navigation appears on all pages */}
        <div className="nav">
          <Navbar />
        </div>
        
        {/* Main content area where pages will render */}
        <main className="main-content">
          <Routes>
            {/* Define all your routes here */}
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            
            {/* Catch-all route for 404 - must be last */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
        
        {/* Optional: Footer that appears on all pages */}
        <div className="footer">
          <Footer />
        </div>

      </div>
    </BrowserRouter>
  );
}

export default App;