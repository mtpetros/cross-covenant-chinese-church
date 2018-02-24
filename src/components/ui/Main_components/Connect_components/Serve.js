import React from 'react';

import Banner from '../library/Banner';
import ContentAreaMain from '../library/ContentAreaMain';

const serviceAreasContent = (
    <div>
      <p>At Cross Covenant, there are many areas in which you can serve:</p><br/>
      <p>Bookkeeper</p><br/>
      <p>Music and Worship Team</p><br/>
      <p>Small Group Development</p><br/>
      <p>Missions Team</p><br/>
      <p>Finance Team</p><br/>
      <p>Welcome Team</p><br/>
      <p>Prayer Team</p><br/>
  </div>
);

const Serve  = () => (
    <div id = "serve-container" className="page-container">
      <Banner title="Serve" parallaxImage="/assets/img/serve-bg.jpg"/>
        <ContentAreaMain position="no-parallax" id="about-serving" title="About" content={serviceAreasContent} />
    </div>
)

export default Serve 
