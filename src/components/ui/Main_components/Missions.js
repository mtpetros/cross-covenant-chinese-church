import React from 'react';

import Banner from './library/Banner';
import ContentAreaMain from './library/ContentAreaMain';

const missionsContent = (
    <div>
      <p>Covenant Day School Chinese Student Ministry is another emphasis. Currently, there are 9 Chinese students are enrolled, and we are sure that more Chinese students are coming in the future. We specifically designed this Covenant Day Youth Ministry for them because we know they are mostly unbelievers, even though some of them are doing an excellent job in their Bible class, but they are only take it academically.</p><br/>
      <p> Also, we are excited that through the Covenant Day Youth Ministry, we were able to connect with other Chinese students and their host families in town. We are hoping that our ministry would be useful not only to Christ Covenant Day Chinese students, but also to other Chinese students in other schools in Charlotte.</p><br/>
      <p>Many times that I heard from their host families that they are irrelevant to the English sermon because they don’t really understand. We want to help them to know the Bible outside the academic class, and eventually to be converted one day. Also, we want to be helpful to their host families and their schools. Again, our goal is to evangelize and convert them.</p><br/>
    </div>
);

const Missions = () => (
    <div id = "missions-container" className="page-container">
        <Banner title="Missions Ministry" />
        <ContentAreaMain position="no-parallax" id="local" title="Local Missions" content={missionsContent} />
    </div>
)

export default Missions
