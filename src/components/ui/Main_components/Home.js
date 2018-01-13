import React from 'react';

const welcomeContent = (
    <div>
        <p>Welcome to Cross Covenant Chinese Church! We are a growing community in Charlotte consisting of multi-ethnic groups of Christians who have been transformed by the Gospel of Jesus Christ, and who want to know, worship, defend, and live for God through proclaiming Jesus Christ to the Chinese community both locally and globally.</p>
        <br/>
        <p>We serve Chinese primarily, yet we love our intercultural atmosphere. Our bi-lingual system makes us a family of different lanuages and cultures. We warmly invite you to join us on Sundays to hear God's Word preached, to worship and fellowship together, and to grow in the knowledge and faith in Jesus Christ. If you are new to Cross Covenant Chinese Church, or if you have any questions, please feel free to contact us!</p>
    </div>
);

const Home = () => (
    <div id="home-container" className="page-container">
        <div className="head-banner">
            <div className="banner-contents">
                <h1>welcome to</h1>
                <img src="/assets/img/cccctitle-2.png" className="head-image" />
                <h2>Cross Covenant Chinese Church</h2>
            </div>
        </div>

        <div className="content-area content-area-primary">
            <h2>Hi! 您好</h2>
            {welcomeContent}
        </div>

        <div className="content-areas-secondary">
            <div className="content-area secondary-child" id="content-area-times">
                <h2>Meeting Times</h2>
                <div id="times-container">
                    <p>Sunday School - 9:00am</p>
                    <p>Sunday Worship - 9:30am</p>
                    <p>Wednesday Fellowship - 6:30pm</p>
                </div>
            </div>

            <div className="content-area secondary-child" id="content-area-location">
                <h2>Location</h2>
                <div id="location-container">
                    <p>We meet on Sunday mornings in the chapel at Christ Covenant Church in Matthews, NC.</p>
                </div>
            </div>
        </div>

        <div className="content-area" id="content-area-contact">
            <div><p>ph: (123) 456-78910</p></div><div><p>physical address: 123 Happy Ln. Matthew, NC 28226</p></div><div><p>mailing address: 123 Happy Ln. Matthew, NC 28226</p></div>
        </div>
    </div>
)

export default Home