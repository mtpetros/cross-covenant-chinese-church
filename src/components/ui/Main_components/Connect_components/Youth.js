import React from 'react';

import Banner from '../library/Banner';
import ContentAreaMain from '../library/ContentAreaMain';

const youthContent = (
  <div>
    <div>
      <p>We have youth program covers all ages from the 6th grade to 12th grade middle schoolers and high schoolers. For Sunday school, they have morning program together from 9:00-10:15, and an evening from called “Timothy project” from 6-7pm.</p>
      <p>For Wednesday evening, a project named “EPIC” is specifically designed for the middle schoolers, and another project called “LINK” is designed for the high schoolers.</p>
      <p>Besides, they have summer camp and short missions trip during the spring and summer. Download a chart for youth programs and activities HERE.</p>
    </div>
    <div>
      <p>Covenant Day School Chinese Student Ministry is another emphasis. Currently, there are 9 Chinese students are enrolled, and we are sure that more Chinese students are coming in the future. We specifically designed this Covenant Day Youth Ministry for them because we know they are mostly unbelievers, even though some of them are doing an excellent job in their Bible class, but they are only take it academically. Also, we are excited that through the Covenant Day Youth Ministry, we were able to connect with other Chinese students and their host families in town. We are hoping that our ministry would be useful not only to Christ Covenant Day Chinese students, but also to other Chinese students in other schools in Charlotte. Many times that I heard from their host families that they find the English sermon irrelevant because they don’t really understand. We want to help them to know the Bible outside the academic class, and eventually to be converted one day. Also, we want to be helpful to their host families and their schools. Again, our goal is to evangelize and convert them.</p>
      <p>For the host families who go to Christ Covenant Church, you can simple drop them off on Sunday mornings. For those who go to different churches, you could consider letting them join our Chinese worship service every once a while. Talk to us if you need suggestion of helping planning out the best solution for your family. We’d like to help.</p>
    </div>
  </div>
);

const Youth = () => (
    <div id = "youth-container" className="page-container">
      <Banner title="Youth" />
      <ContentAreaMain id="youth" title="Youth" textPosition="text-left" content={youthContent} />
      <div className="content-area" id="content-area-contact">
          <div><p>ph: (123) 456-78910</p></div><div><p>physical address: 123 Happy Ln. Matthew, NC 28226</p></div><div><p>mailing address: 123 Happy Ln. Matthew, NC 28226</p></div>
      </div>
    </div>
)

export default Youth 
