import Iframe from "react-iframe"

const Visit = () => (
    <div id = "visit-container" className="page-container">
    <div className="head-banner">
        <div className="banner-contents">
            <h1>visit our church</h1>
        </div>
    </div>

    <div id="time-location" className="content-area content-area-main">
        <div className="main-content-text">
            <h2>Time and Location</h2>
            <p>We meet Sundays for Sunday School at 8:30am and the church service at 9am.</p>
            <br/>
            <p>We meet at the chapel at Christ Covenant Church in Matthews, NC</p>
            <br/>            
        </div>
        <div className="main-content-parallax"></div>
    </div>

    <div id="location-map">
    <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1728.793319629065!2d-80.73365487415258!3d35.119301309392924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885426adea27fd8d%3A0x91f1b808e86f6148!2sChrist+Covenant+Church!5e0!3m2!1sen!2sus!4v1512217607741" position="static" width="100%" height="100%" allowfullscreen></Iframe>
    </div>

    <div id="what-to-expect" className="content-area content-area-main">
        <div className="main-content-parallax"></div>
        <div className="main-content-text">
            <h2>What To Expect</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum orci et lectus bibendum fermentum. Praesent ut arcu non lorem consectetur vehicula non vitae magna. Morbi ut felis sem. Proin vitae tincidunt nisi. Aliquam vitae est at tortor malesuada varius.</p>
            <br/>
            <p>Integer non malesuada odio. Aliquam arcu nisl, tempor vitae facilisis at, vulputate luctus mi. Duis in dolor libero. Nam sodales dui consequat maximus dignissim. Sed vitae metus sit amet massa faucibus consectetur vel eu dui. Phasellus in posuere libero, id volutpat nisi.</p>
            <br/>
            <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras sagittis diam orci. Donec eros nisi, molestie ac turpis ut, iaculis vehicula eros. Integer vitae lorem ac erat sodales cursus. Sed id scelerisque ligula. Vivamus accumsan sapien ac odio luctus consequat.</p>
        </div>
    </div>

    <div className="content-area" id="content-area-contact">
        <div><p>ph: (123) 456-78910</p></div><div><p>physical address: 123 Happy Ln. Matthew, NC 28226</p></div><div><p>mailing address: 123 Happy Ln. Matthew, NC 28226</p></div>
    </div>
    </div>
)

export default Visit