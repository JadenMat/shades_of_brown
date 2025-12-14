import { Link } from 'react-router-dom';
import '../styles/home.css';
import DigitalClock from '../components/digitalclock'; // Adjust the path if needed

import Scribble1 from '../assets/scribbles/shades_of_brown_web_Scribbles-01.svg';
import Scribble2 from '../assets/scribbles/shades_of_brown_web_Scribbles-02.svg';
import Scribble3 from '../assets/scribbles/shades_of_brown_web_Scribbles-03.svg';
import Scribble4 from '../assets/scribbles/shades_of_brown_web_Scribbles-04.svg';

function Home() {
    return (
      <div>
        <div className="home_content">
          
          <div className="home_scribbles">
            <Scribble1 className="home_scribble1"/>
            {/* <Scribble2 className="home_scribble2"/>
            <Scribble3 className="home_scribble3"/>
            <Scribble4 className="home_scribble4"/> */}
          </div>

          <div className="home_content_clock">
            <DigitalClock />
          </div>

          <div className="home_content_projects">
            <div className="Bench_Redesign">
              <Link to="../pages/projects/project1.jsx" className="new_york_bench">
                <p className="bench_date">12:58:03 PM - 12/13/2025</p>
                <p className="bench_link">New York City Park Bench Re-Design</p>
              </Link>
            </div>

          </div>
        </div>
      </div>
    );
  }
  
  export default Home;