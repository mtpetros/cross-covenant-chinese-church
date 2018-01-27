import React from 'react';

import Iframe from "react-iframe";
import Banner from './library/Banner';
import ContentAreaMain from './library/ContentAreaMain';

const timeAndLocationContent = (
    <div>
        <div>
            <h3>Sunday School</h3>
            <p>Adult, Youth, and Children: 9am-10:15am</p>
        </div>
        <div>
            <h3>Nursery</h3>
            <p>Check-in: 9am</p>
            <p>Pick-up: after worship service</p>
        </div>
        <div>
            <h3>Worship Service</h3>
            <p>10:45am - 12pm</p>
        </div>
        <div>
            <h3>Location</h3>
            <p>Adult Sunday School: Hall at Covenant Day</p>
            <p>Youth Sunday School: Youth Center at 1st floor of Community Life Center</p>
            <p>Children Sunday School: Classrooms at children's center</p>
            <p>Nursery check in: Gym at building A</p>
            <p>Nursery pick up: Nursery room at children's center</p>
            <p>Worship service: Chapel at Community Life Center</p>
        </div>
        <div>
            <p>Address: 800 Fullwood Lane, Matthews, NC 28105.</p>
        </div>
    </div>
);

const Visit = () => (
    <div id = "visit-container" className="page-container">

    <Banner title="Visit Our Church" />
    <ContentAreaMain id="time-location" title="Time and Location" textPosition="text-left" content={timeAndLocationContent} />


    <div id="location-map">
    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1728.793319629065!2d-80.73365487415258!3d35.119301309392924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885426adea27fd8d%3A0x91f1b808e86f6148!2sChrist+Covenant+Church!5e0!3m2!1sen!2sus!4v1512217607741" position="static" width="100%" height="100%" allowfullscreen></Iframe>
    </div>

    {/* <ContentAreaMain id="what-to-expect" title="What to Expect" textposition="text-left" content={} /> */}

    <div className="content-area" id="content-area-contact">
        <div><p>ph: (123) 456-78910</p></div><div><p>physical address: 123 Happy Ln. Matthew, NC 28226</p></div><div><p>mailing address: 123 Happy Ln. Matthew, NC 28226</p></div>
    </div>
    </div>
)

export default Visit