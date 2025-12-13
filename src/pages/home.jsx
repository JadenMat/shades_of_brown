import { Link } from 'react-router-dom';
import '../styles/home.css';

function Home() {
    return (
      <div>
        <div className="home_content">
          <div className="home_content_clock">
          </div>

          <div className="home_content_projects">
            <div className="Bench_Redesign">
              <Link to="../pages/projects/project1.jsx" className="new_york_bench">
                <p className="bench_date">12/13/2025 - 12:58:03 PM</p>
                <p className="bench_link">New York City Park Bench Re-Design</p>
              </Link>
            </div>

          </div>
        </div>
      </div>
    );
  }
  
  export default Home;