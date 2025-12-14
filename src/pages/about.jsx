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
          <div className="about_animation">

            <div className="about_environment">
              <img src={background} alt={"background"}  className="about_background"/>
              <img src={lamp} alt={"lamp"} className="about_lamp"/>
            </div>

            <div className="about_figure">
              <img src={head} alt={"head"} className="about_head"/> 
                <img src={torso} alt={"torso"} className="about_torso"/> 

                <div className="about_right_arm">
                  <img src={right_arm1} alt={"right_arm1"} className="about_right_arm1"/> 
                  <img src={right_arm2} alt={"right_arm2"} className="about_right_arm2"/> 
                  <img src={right_hand} alt={"right_hand"} className="about_right_hand"/>
                  <img src={stick} alt={"stick"} className="about_stick"/>
               </div>

                <div className="about_left_arm">
                  <img src={left_arm1} alt={"left_arm1"} className="about_left_arm1"/> 

                  <div className="about_left_arm2_hand">
                    <img src={left_arm2} alt={"left_arm2"} className="about_left_arm2"/> 
                    <img src={left_hand} alt={"left_hand"} className="about_left_hand"/>
                 </div>
                </div>
            
                <div className="about_right_leg">
                  <img src={right_upper_leg} alt={"right_upper_leg"} className="about_right_upper_leg"/>
                  <img src={right_lower_leg} alt={"right_lower_leg"} className="about_right_lower_leg"/>
                  <img src={right_foot} alt={"right_foot"} className="about_right_foot"/>
                </div>
            </div>
          </div>
          <div className="about_content">

            <div className="about_content_definition">
              <h1>Shades of Brown is a creative studio driven by crafting <span className="educational_">educational</span>, <span className="story-driven_">story-driven</span>, and <span className="community_oriented_">community oriented projects</span>.</h1>
            </div>

            <div className="Educational">
              <h2>Educational</h2>
              <p>We believe progress is made through communal understanding and the sharing of knowledge.</p>
            </div>

            <div className="Story-Driven">
              <h2>Story-Driven</h2>
              <p>We are dedicated to crafting stories that speak to our past, present, and future audiences.</p>
            </div>

            <div className="Community_Oriented">
              <h2>Community Oriented</h2>
              <p>We are cutting through the noise and directly creating solutions for our communities in need.</p>
            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;