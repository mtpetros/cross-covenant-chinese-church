import React from 'react';

import Banner from './library/Banner';
import ContentAreaMain from './library/ContentAreaMain';

const contactContent = (
  <div>
    <p>
      For more information, email Allen at <a href="mailto://allen@crossccc.org" target="_blank">allen@crossccc.org</a>
    </p><br/>
    <p>
      Our service is held at Christ Covenant Church inside of the chapel in the Community Life Center.
    </p><br/>
    <p>
      Address: <a href="https://www.google.com/maps/place/800+Fullwood+Ln,+Matthews,+NC+28105/@35.1183378,-80.7325355,221m/data=!3m1!1e3!4m5!3m4!1s0x885426adf5a77fc5:0x497f9ddbef3299c0!8m2!3d35.118899!4d-80.73241" target="_blank">800 Fullwood Lane, Matthews, NC 28105</a>
    </p>
  </div>
);

const serviceTimeContent = (
  <div>
    <div>
        <h3>Sunday School</h3>
        <p>Adult, Youth, and Children: 9am-10:15am</p>
    </div><br/><br/><br/>
    <div>
        <h3>Nursery</h3>
        <p>Check-in: 9am</p><br/>
        <p>Pick-up: after worship service</p>
    </div><br/><br/><br/>
    <div>
        <h3>Worship Service</h3>
        <p>10:45am - 12pm</p>
    </div>
  </div>
);

const Contact = () => (
    <div id = "contact-container" className="page-container">
        <Banner title="Contact" parallaxImage="/assets/img/contact-bg.jpg"/>
        <ContentAreaMain position="no-parallax" id="contact-info" title="Contact Us" content={contactContent} />
        <ContentAreaMain position="no-parallax" id="service-time" title="Service Time" content={serviceTimeContent} />
    </div>
)

export default Contact 
