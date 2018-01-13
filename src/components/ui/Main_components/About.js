import React from 'react';

import Banner from './library/Banner';
import ContentAreaMain from './library/ContentAreaMain';

const visionValuesContent = (
    <div>
        <p>"To them God chose to make known how great among the Gentiles are the riches of the glory of this mystery, which is Christ in you, the hope of glory. 
        Him we proclaim, warning everyone and teaching everyone with all wisdom, that we may present everyone mature in Christ." - Colossians 1:27-28</p>
        <p>Cross Covenant's Vision is taken from the beginning of Colossians 1:28, "Him we proclaim ..."</p>
        <p>Life is about God, revealed to us in Jesus Christ. As individuals and as the church, in all things we worship HIM. Life is designed to be lived as a part of a spiritual community. WE were meant to worship him together. Life with him is so vitally important that we long to share our faith. We will always look for ways to PROCLAIM the life that Jesus offers.</p>
        <p>HIM: Jesus is the leader of his people, and he is the main character in the story of the church.  The good news recorded in the Bible is all about Jesus--who he is, what he has done, and what he is doing.  Our preaching and worship are centered on him, and all our goals are focused on enjoying him and telling each other and the world about the greatness of Christ, the one who died and rose again to give us abundant life.</p>
        <p>WE:God has called together a community of people called the church.  He has designed his people to live not only in relationship with him, but also in connection with this group of other Christians.  In fact, it is only when regularly interacting with the community of the local church that we can live our life with God in Christ Jesus to the fullest.  It is within the church that God tangibly shows us his grace and teaches us to follow him together.</p>
        <p>PROCLAIM: When we have deeply known his love for us, we long to share the good news about Jesus with others.  God calls us together so that we can be equipped to share this good news with one another as we learn from the teaching and community of the church.  He then sends us back out to proclaim the good news to our neighbors in Charlotte, and to those in every corner of the globe who need to hear of Jesus' greatness.</p>
        <p>"HIM WE PROCLAIM"</p>
        <p>Cross Covenant Chinese Church is a growing community in Charlotte consists of multi-ethnic groups of Christians who have been transformed by the Gospel of Jesus Christ, and who want to know, worship, defense, and live for God through proclaiming Jesus Christ to the Chinese community both locally and globally.</p>
    </div>
);

const About = () => (
    <div id = "about-container" className="page-container">
    <Banner title="About" />
    <ContentAreaMain id="vision-values" title="Vision and Values" textPosition="text-left" content={visionValuesContent} />
    {/* <ContentAreaMain id="beliefs" title="What We Believe" textPosition="text-left" content={beliefsContent} />
    <ContentAreaMain id="leadership" title="Our Leaders" textPosition="text-right" content={leaderContent} /> */}

    <div className="content-area" id="content-area-contact">
        <div><p>ph: (123) 456-78910</p></div><div><p>physical address: 123 Happy Ln. Matthew, NC 28226</p></div><div><p>mailing address: 123 Happy Ln. Matthew, NC 28226</p></div>
    </div>
    </div>
);

export default About