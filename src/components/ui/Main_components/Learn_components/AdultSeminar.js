import React from 'react';

import Banner from '../library/Banner';
import ContentAreaMain from '../library/ContentAreaMain';

const adultSeminarContent = (
    <div>
      <p>PCA has a strong emphasis on theological and spiritual training, so do we. We strive to faithfully teach the Word of God solidly and biblically based on the Reformed tradition. Even before Cross Covenant Chinese Church was founded, we had a history of teaching Chinese Christians in town from different subjects. Since August 2016, We have gone through 4 subjects: God’s attribute, God and man relationship, Church model, and Christian worldview. We will continue to teach our adult believers during Sunday school classes and focus on deepening our understanding of the Word of God.</p><br/><br/><br/>
      <p>Adult Seminar hours: Sundays 9am-10:15am</p><br/>
      <p>Location: Covenant Day Hall (1st floor of the high school building)</p><br/>
      <p>Schedule for 2018 will be announced soon!</p><br/>
    </div>
);

const AdultSeminar = () => (
    <div id = "adult-seminar-container" className="page-container">
        <Banner title="Adult Seminar" />
        <ContentAreaMain position="no-parallax" id="about-adult-seminar" title="About" content={adultSeminarContent} />
    </div>
)

export default AdultSeminar
