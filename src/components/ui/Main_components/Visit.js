import React from 'react';

import Iframe from "react-iframe";
import Banner from './library/Banner';
import ContentAreaMain from './library/ContentAreaMain';

const timeAndLocationContent = (
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
        </div><br/><br/><br/>
        <div>
            <h3>Location</h3>
            <p>Adult Sunday School: Hall at Covenant Day</p><br/>
            <p>Youth Sunday School: Youth Center at 1st floor of Community Life Center</p><br/>
            <p>Children Sunday School: Classrooms at children's center</p><br/>
            <p>Nursery check in: Gym at building A</p><br/>
            <p>Nursery pick up: Nursery room at children's center</p><br/>
            <p>Worship service: Chapel at Community Life Center</p>
        </div><br/><br/><br/>
        <div>
            <p>Address: 800 Fullwood Lane, Matthews, NC 28105.</p>
        </div><br/><br/><br/>
     </div>
);


const whatToExpectContent = (
    <div>
     <div>
       <p>What language do you use during Sunday worship service?</p><br/>
       <p>Since we are focused on serving the Chinese community, our Sunday worship service will be conducted in Mandarin Chinese. However, we will be providing an live English simultaneous interpretation through our bi-lingual broadcasting system. Our English-speaking friends can simply use their smartphone to access such service. More than that, our presentation, including any handout, bulletin, brochure, or powerpoint slides will also be in two languages.</p>  
     </div><br/><br/><br/>
     <div>
      <p>What about our English speaking children?</p><br/>
      <p>Children will be dropped off at the children's worship after singing and praying with their parents. Our children will be worshiping with the larger crowd of the English-speaking congregation and the worship will be conducted in English.</p>
     </div><br/><br/><br/>
     <div>
      <p>What about youth?</p><br/>
      <p>All youth go to the youth Sunday school with the larger crowd of English-speaking congregation. After that, they are encouraged to worship with their parents during the entire worship service. They can use any Android or IOS device, such as tablet, ipod, ipad, or smartphone to access English interpretation.</p>
     </div><br/><br/><br/>
     <div>
      <p>What will be available for my kids?</p><br/>
      <p>All children are encouraged and welcomed to participate in the worship service. We provide nursery childcare for newborns to age 2. Kids from age 2 to 5th grade stay with the congregation during our singing and praying, and then attend children's worship during the sermon. Older kids who can engage with the sermon may stay. We also have Sunday school classes for all ages from 9am to 10:15am before the service. Look for more below about our Sunday school information.</p>
     </div><br/><br/><br/>
     <div>
      <p>What should I expect about Sunday school when I come to Cross Covenant?</p><br/>
      <p>We provide Sunday schools for all ages. The adult Sunday School will be in Mandarin Chinese, whereas the youth and children Sunday School will be in English. All Sunday school classes run from 9am to 10:15am, different locations are designated according to the age. Please click here to see a list of location (direct to the page of "time and location")</p>
     </div><br/><br/><br/>
     <div>
      <p>Do you have any other activities for my children beside sunday school?</p><br/>
      <p>Yes. For high schoolers, we have LINK program on Wednesdays 7-9pm at CLC youth center. For middle schoolers, we have TIMOTHY PROJECT on Sundays 5-5:45 at CLC youth center, and EPIC program on Wednesdays 7-9pm at Gym located in building A. For all youths, we have Spring Retreat in April each year, as well as a short mission trip "Seek the City" during June each year. For more information, please contact us: info@crossccc.org</p>
     </div><br/><br/><br/>
     <div>
      <p>What language do you sing during worship?</p><br/>
      <p>We will be singing in both Chinese and English with a well-balanced proportion. Most Chinese-speakers can sing in English, but it's not quite true on the opposite. In order to help our English-speaking congregation worshiping along with us when we are sing a Chinese song, we will mark the Chinese pronounciation with English letters on top of each Chinese character, as well as the English translation underneath. We hope this would help our English-speakers not only understand, but also participate in worship by singing.</p>
     </div><br/><br/><br/>
     <div>
      <p>What kind of music do you sing during worship?</p><br/>
      <p>We try to choose songs that are spiritually helpful, Christ-centered, musically excellent, and inviting for everyone to sing. There will be a mix of old songs, new songs, and old songs done in new ways. Cross Covenant highly values singing that engages your heart and mind, and that fixes your focus on God during worship.</p>
     </div><br/><br/><br/>
     <div>
      <p>Why do you meet at Christ Covenant Church?</p><br/>
      <p>Christ Covenant Church is also a member of the Presbyterian Church in Amercia. We are grateful for their generous help for providing space and facilities, and assistance on children ministry, nursery childcare, and youth ministry. We hold the same value and standard of theology as members of the body of Christ. We believe you will love the ministries and the overall church atmosphere that they created!</p>
     </div><br/><br/><br/>
     <div>
      <p>How does Church membership work at Cross Covenant Chinese Church?</p><br/>
      <p>In 1 Corinthians 12, the Bible talks about the idea of being members of one body, so we value the idea membership. Anyone is welcome to attend as long as they like without becoming a member, but we do believe that in the long run we will be a better church as individuals commit their gifts to use in the community. We also believe that you will benefit more from our community life by becoming a faithful member. You can learn more in our membership classes, which happen several times throughout the year.</p>
     </div><br/><br/><br/>
     <div>
      <p>Do you have weekday events or activities?</p><br/>
      <p>Yes. Currently, we have 2 small groups. Our Book Reading Club meets on Wednesdays 7-9pm. It's a casual book sharing time with church friends. We pick a good Christian book, read it together, and share our insights afterwards. If you are interested in join in, please contact the Tse family for details: etse123@gmail.com. On each Friday, we have two sections of Gospel meeting. The morning section begins at 10am followed by a simple lunch, and the evening section is from 7-9pm. This is an evangelistic opportunity to reach out to unbelievers, seekers, and beginners. There is no harsh teaching but a casual expository sharing of the Word with a plenty of discussion and Q&A time. Anyone is welcome to join us! Please contact Shannon at 803-609-1961.</p>
     </div><br/><br/><br/>
     <div>
      <p>How do I get connected with Cross Covenant Chinese Church?</p><br/>
      <p>Coming to our service on Sunday morning is a great way to start! You can get to know us by checking out our website, joining our small groups or weekday activities, or connecting with us by simply sending us an email. There are several ways to contact us on our "Contact" page.</p>
     </div>
    </div>
);  

const Visit = () => (
    <div id = "visit-container" className="page-container">

      <Banner title="Visit Our Church" parallaxImage="/assets/img/visit-bg.jpg"/>
      <ContentAreaMain position="no-parallax" id="time-location" title="Time and Location" content={timeAndLocationContent} />

      <div id="location-map">
      <Iframe url="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1728.793319629065!2d-80.73365487415258!3d35.119301309392924!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x885426adea27fd8d%3A0x91f1b808e86f6148!2sChrist+Covenant+Church!5e0!3m2!1sen!2sus!4v1512217607741" position="static" width="100%" height="100%" allowfullscreen></Iframe>
      </div>

       <ContentAreaMain position="no-parallax" id="what-to-expect" title="What to Expect" content={whatToExpectContent} /> 
    </div>
)

export default Visit
