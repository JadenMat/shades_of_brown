import '../styles/about.css';

import background from '../assets/animation_assets/background_elements/Background_shade.png';
import lamp from '../assets/animation_assets/background_elements/lamp.png';

import head from '../assets/animation_assets/about_animation/head.png';
import torso from '../assets/animation_assets/about_animation/torso.png';
import right_arm1 from '../assets/animation_assets/about_animation/arm1.png';
import right_arm2 from '../assets/animation_assets/about_animation/arm2.png';
import right_hand from '../assets/animation_assets/about_animation/right_hand.png';
import stick from '../assets/animation_assets/about_animation/stick.png';
import left_arm1 from '../assets/animation_assets/about_animation/arm1.png';
import left_arm2 from '../assets/animation_assets/about_animation/arm2.png';
import left_hand from '../assets/animation_assets/about_animation/left_hand.png';
import right_upper_leg from '../assets/animation_assets/about_animation/upperleg2.png';
import right_lower_leg from '../assets/animation_assets/about_animation/lowerleg1.png';
import right_foot from '../assets/animation_assets/about_animation/foot1.png';

function About() {
    return (
      <div>
        <div className="about_page">
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
                  <img src={stick} alt={"stick"} className="stick"/>
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
            </div>
          </div>
          <div className="about_content">
            <h1>About Page</h1>
            <p>Welcome to my website!</p>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;