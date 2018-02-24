import React from 'react';

import Banner from '../library/Banner';
import ContentAreaMain from '../library/ContentAreaMain';

const membershipContent = (
    <div>
      <p>In 1 Corinthians 12, the Bible talks about the idea of being members of one body, so we value the idea membership. Anyone is welcome to attend as long as they like without becoming a member, but we do believe that in the long run we will be a better church as individuals commit their gifts to use in the community. We also believe that you will benefit more from our community life by becoming a faithful member. You can learn more in our membership classes, which happen several times throughout the year.</p><br/>
      <p>Membership Schedule for 2018 will be accounced soon.</p><br/>
  </div>
);

const Membership  = () => (
    <div id = "membership-container" className="page-container">
        <Banner title="Membership" />
        <ContentAreaMain position="no-parallax" id="about-serving" title="About" content={membershipContent} />
    </div>
)

export default Membership 
