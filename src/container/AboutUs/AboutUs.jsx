import React from 'react';

import {images} from '../../constants'
import './AboutUs.css';

const AboutUs = () => (
  <div className='app__aboutus app__bg flex__center section__padding' id='about'>
      <div className="app__aboutus-overlay flex__center">
        <img src={images.G} alt="g letter" />
      </div>
      <div className="app__aboutus-content flex__center">
        <div className="app__aboutus-content_about">
          <h1 className="headtext__cormorant">About Us</h1>
          <img src={images.spoon} alt="spoon" />
          <p className="p__opensans">Lorem Ipsum Dolor Sit Amet, CIbsectetur Adipuscing Elit. Quis Pharetra Adipiscing Vulputate Posuere Trstique. In sed Odio Nec Aliquet eu Proin Mauris Et.</p>
          <button type='button' className="custom__button">Know More</button>
        </div>

        <div className="app__aboutus-content_knife">
          <img src={images.knife} alt="about__knife" />
        </div>

        <div className="app__aboutus-content_history">
          <h1 className="headtext__cormorant">Our History</h1>
          <img src={images.spoon} alt="spoon" />
          <p className="p__opensans">Lorem Ipsum Dolor Sit Amet, CIbsectetur Adipuscing Elit. Quis Pharetra Adipiscing Vulputate Posuere Trstique. In sed Odio Nec Aliquet eu Proin Mauris Et.</p>
          <button type='button' className="custom__button">Know More</button>
        </div>
        
      </div>
  </div>
);

export default AboutUs;
