import '../styles/worldview.css';

import background from '../assets/animation_assets/background_elements/Background_shade.png';
import lamp from '../assets/animation_assets/background_elements/lamp.png';

import head from '../assets/animation_assets/worldview_animation/head.png';
import torso from '../assets/animation_assets/worldview_animation/torso.png';

import right_arm1 from '../assets/animation_assets/worldview_animation/arm1.png';
import right_arm2 from '../assets/animation_assets/worldview_animation/arm2.png';
import right_hand from '../assets/animation_assets/worldview_animation/right_hand.png';
import hammer from '../assets/animation_assets/worldview_animation/hammer.png';

import left_arm1 from '../assets/animation_assets/worldview_animation/arm1.png';
import left_arm2 from '../assets/animation_assets/worldview_animation/arm2.png';
import left_hand from '../assets/animation_assets/worldview_animation/left_hand.png';

import right_upper_leg from '../assets/animation_assets/worldview_animation/upperleg1.png';
import right_lower_leg from '../assets/animation_assets/worldview_animation/lowerleg1.png';
import right_foot from '../assets/animation_assets/worldview_animation/foot1.png';

function Worldview() {
    return (
      <div>
        <div className="worldview_page">
          <div className="worldview_animation">

            <div className="worldview_environment">
              <img src={background} alt={"background"}  className="worldview_background"/>
              <img src={lamp} alt={"lamp"} className="worldview_lamp"/>
            </div>

            <div className="worldview_figure">
              <img src={head} alt={"head"} className="worldview_head"/> 
              <img src={torso} alt={"torso"} className="worldview_torso"/> 

              <div className="worldview_right_arm">
                <img src={right_arm1} alt={"right_arm1"} className="worldview_right_arm1"/> 
                <img src={right_arm2} alt={"right_arm2"} className="worldview_right_arm2"/> 
                <img src={right_hand} alt={"right_hand"} className="worldview_right_hand"/>
                <img src={hammer} alt={"hammer"} className="worldview_hammer"/>
             </div>

              <div className="worldview_left_arm">
                <img src={left_arm1} alt={"left_arm1"} className="worldview_left_arm1"/> 

                <div className="worldview_left_arm2_hand">
                  <img src={left_arm2} alt={"left_arm2"} className="worldview_left_arm2"/> 
                  <img src={left_hand} alt={"left_hand"} className="worldview_left_hand"/>
                </div>
              </div>
            
              <div className="worldview_right_leg">
                <img src={right_upper_leg} alt={"right_upper_leg"} className="worldview_right_upper_leg"/>
                <img src={right_lower_leg} alt={"right_lower_leg"} className="worldview_right_lower_leg"/>
                <img src={right_foot} alt={"right_foot"} className="worldview_right_foot"/>
              </div>

            </div>
          </div>

          <div className="worldview_content">
            <h1>Worldview Page</h1>
            <p>Welcome to my website!</p>
          </div>

        </div>
      </div>
    );
  }
  
  export default Worldview;