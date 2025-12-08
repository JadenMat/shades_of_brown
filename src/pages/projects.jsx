import '../styles/projects.css';

import background from '../assets/animation_assets/background_elements/Background_shade.png';
import lamp from '../assets/animation_assets/background_elements/lamp.png';

import head from '../assets/animation_assets/projects_animation/head.png';
import torso from '../assets/animation_assets/projects_animation/torso.png';
import right_arm1 from '../assets/animation_assets/projects_animation/arm1.png';
import right_arm2 from '../assets/animation_assets/projects_animation/arm2.png';
import right_hand from '../assets/animation_assets/projects_animation/right_hand.png';
import hammer from '../assets/animation_assets/projects_animation/hammer.png';
import left_arm1 from '../assets/animation_assets/projects_animation/arm1.png';
import left_arm2 from '../assets/animation_assets/projects_animation/arm2.png';
import left_hand from '../assets/animation_assets/projects_animation/left_hand.png';
import right_upper_leg from '../assets/animation_assets/projects_animation/leg1.png';
import left_upper_leg from '../assets/animation_assets/projects_animation/leg1.png';
import right_lower_leg from '../assets/animation_assets/projects_animation/leg2.png';
import left_lower_leg from '../assets/animation_assets/projects_animation/leg2.png';
import right_foot from '../assets/animation_assets/projects_animation/feet.png';
import left_foot from '../assets/animation_assets/projects_animation/feet.png';


function Projects() {
    return (
      <div>
       <div className="projects_page">
          <div className="animation">
            <div className="environment">
              <img src={background} alt={"background"}  className="background"/>
              <img src={lamp} alt={"lamp"} className="lamp"/>
            </div>
          
            <div className="figure">
              <img src={head} alt={"head"} className="head"/> 
              <img src={torso} alt={"torso"} className="torso"/> 

              <div className="right_arm">
                <img src={right_arm1} alt={"right_arm1"} className="right_arm1"/> 
                <img src={right_arm2} alt={"right_arm2"} className="right_arm2"/> 
                <img src={right_hand} alt={"right_hand"} className="right_hand"/>
                <img src={hammer} alt={"hammer"} className="hammer"/>
             </div>

              <div className="left_arm">
                <img src={left_arm1} alt={"left_arm1"} className="left_arm1"/> 

                <div className="left_arm2_hand">
                  <img src={left_arm2} alt={"left_arm2"} className="left_arm2"/> 
                  <img src={left_hand} alt={"left_hand"} className="left_hand"/>
                </div>
              </div>
            
              <div className="right_leg">
                <img src={right_upper_leg} alt={"right_upper_leg"} className="right_upper_leg"/>
                <img src={right_lower_leg} alt={"right_lower_leg"} className="right_lower_leg"/>
                <img src={right_foot} alt={"right_foot"} className="right_foot"/>
              </div>

              <div className="left_leg">
                <img src={left_lower_leg} alt={"left_lower_leg"} className="left_lower_leg"/>
                <img src={left_foot} alt={"left_foot"} className="left_foot"/>
              </div>
            </div>
          </div>

          <div className="project_content">
            <h1>Projects Page</h1>
            <p>Welcome to my projects!</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default Projects;