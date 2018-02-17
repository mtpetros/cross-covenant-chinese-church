import React from 'react';

import Banner from '../library/Banner';
import ContentAreaMain from '../library/ContentAreaMain';

const aboutContent = (
    <div>
      <p>Mission: The Children’s Ministry seeks to serve the church by Educating Children, Equipping Parents, and Engaging Volunteers so that the Kingdom of God might be glorified.</p><br/>
      <p>Vision:</p><br/>
      <p>We will educate children by teaching the Word in an environment that is inviting, compelling, and age-appropriate.</p><br/>
      <p>We will equip parents by partnering with them to encouraging the spiritual development of their children.</p><br/>
      <p>We will engage volunteers by building relationships, honoring their spiritual gifts, and providing strategic support.</p><br/>
    </div>
);

const Children = () => (
    <div id = "children-container" className="page-container">
        <Banner title="Children's Ministry" />
        <ContentAreaMain id="about-childrens-ministry" title="About" textPosition="text-left" content={aboutContent} />
    </div>
)

export default Children
