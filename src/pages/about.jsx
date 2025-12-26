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

            <div className="about_content_title">
              <h1>Shades of Brown</h1>
              <h2><i>Serving the community</i></h2>
            </div>

            {/* New container for two-column layout */}
            <div className="about_content_body">
              
              <div className="about_content_rules">
                <h2>Our Ingredients</h2>
                <h3>1. All projects begin as dreams.</h3>
                <h3>2. Each project is driven by a story.</h3>
                <h3>3. Half of the work is research.</h3>
                <h3>4. We believe in the power of sharing our knowledge and educating our community.</h3>
                <h3>5. Our design is the ability to bridge research and story.</h3>
                <h3>6. Each design element should live within harmony with eachother.</h3>
                <h3>7. If stuck, ask your neighbor for thoughts.</h3>
                <h3>8. We'd rather doodle than draw.</h3>
                <h3>9. Iterate, iterate, iterate, and repeat.</h3>
                <h3>10. We are dedicated to a greater system.</h3>
              </div>

              <div className="about_content_description">
                <p>"Who?" he murmered to his friends. The cream colored wall speckled with plaster curated a simple design. Vibrant pastels pasted to it's sides, the wall had been drawn on as if inspiration had struck at that moment, and had been carried out by an author with precise intent. "****, I'm telling you it was ****." one friend said to the other. The boy who had asked for the culprit, obviously the leader of this group, marched off. His friends lingered until his command, "Come on!".</p>

                <p>"Wait why are we-" one the kids attempts to ask the leader. He isn't curious about their inquisitions. The leader storms through the doors entering the cafeteria. He announces his prey, "****! Where are you?". The room falls silent and as if choreogrpahed, begin swiveling their heads for this so called <i>****</i>. To no avail, their heads return to the sender. The leader storms outside of the cafeteria. His crew lag behind, still not quite sure the intent behind there new found motives. Fear of being separated drives their actions more than any passion could.</p>

                <p>The leader marches through the hall commanding respect. The water fountains and half a foot wide lockers bow in respect as he makes his campaign peeking through classroom windows. "So are you gonna tell us why we are looking for ****?" one of the kids asks the leader. With deadly might and the intent in smite, the leader spins to find the accuser of this insubordination. They lock eyes. "He threatens my very existence." the leader announces. For what would seem to be a vulnerable statement instead comes across as threat to it's recipent. The kid's face communicates he has further inquiries, yet chooses to silence them.</p>

                <p>They search and search yet **** is nowhere to be seen. All seemed lost until they saw Sammy, the kindergardner, walking out with paint on his hands and pastel on his face. The leaders face lights up. "Sammy! Where did you recieve that paint?". "Mrs. Barbs room. She's offering paint and pencils to those who ask.". The leader mumbles to himself, "Why didn't I think of that?". The leader announces his last command to his troops, "To Mrs. Barbs room!". </p>

                <p>They barge right into the space. "Mrs. Barb, where is ****?" the leader asks. Mrs. Barb, far too close to retirement chuckles. "Where is ****?" she repeats with a smile. "Yes! **** drew on our wall outside." the leader states angrily. "It's not <i>your</i> wall. That's the community wall." Mrs. Barb responds still with a smile on her face. "But it's not fair!" the leader rebutts. "Why?" Mrs. Barb asks the leader. "Me and my friends have been painting the wall forever!" the leader retorts. "Remember, there's not just one story here." Mrs. Barb critiques smiling. "Besides **** left a little bit ago." Mrs. Barb adds. "What?!" the whole group chants. "Yep him and his family left, they are onto the next community in their own adventure." Mrs. Barb adds as the cherry on top. She pulls back out her newspaper, enjoying the brief yet thrilling interaction.</p>

                <p>The leader looks down, upset at the realization that this fight is futile. Is it his wall to paint? Whose voice should be allowed? That was besides the point though, **** was gone. And the leader was still here. And it's up to him to let this experecience define him. "So, who gets the wall now?" the leader softly asks Mrs. Barb. While reading her newspaper she answers, "Whoever so chooses, as long as they respect the community".</p>
              </div>

            </div>
          </div>
        </div>
      </div>
    );
  }
  
  export default About;