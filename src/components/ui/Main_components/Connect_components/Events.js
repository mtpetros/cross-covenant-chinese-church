import React from 'react';

import Banner from '../library/Banner';
import ContentAreaMain from '../library/ContentAreaMain';

const announcementsContent = (
  <div><p>Our launching service is on March 25, 10am. No Sunday school for all ages on that day.</p></div>
);
const eventsContent = (<div><p>The launching Service is on March 25, 10:45am.</p></div>);



const Events = () => (
    <div id = "events-container" className="page-container">
      <Banner title="Announcements and Events" parallaxImage="/assets/img/events-bg.jpg"/>
      <ContentAreaMain position="no-parallax" id="announcements" title="Announcements" content={announcementsContent} />
      <ContentAreaMain position="no-parallax" id="events" title="Events" content={eventsContent} />
    </div>
)

export default Events
