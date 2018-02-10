import React from 'react';

import Banner from '../library/Banner';
import ContentAreaMain from '../library/ContentAreaMain';

const smallGroupContent = (
  <div>
    <div>
      <p>At Cross Covenant, small groups are an important way to get more deeply connected to our community. Although we gather for worship each Sunday morning, we believe that spending time with one another outside of church is a vital way that we can show others the love of Christ as we continue to learn and grow together. In your small group, you'll have the opportunity to build closer relationships through food, fellowship, prayer, and study.</p>
      <p>There are 2 groups that meet on mid-week. We'd love for you to join a group where you can be encouraged, grow in grace and in the knowledge of God, and spend meaningful time with our church family.</p>
    </div>
    <div>
      <p>Book Reading Club</p>
      <p>Eric and Shannon Tse</p>
      <p>When: Wednesdays 7-9pm</p>
      <p>Where: Providence area near 51</p>
      <p>Contact: Eric etse123@gmail.com</p>
    </div>
    <div>
      <p>Gospel Meeting</p>
      <p>Chen & Tse</p>
      <p>When: Morning section 10am-lunch; evening section 7-9pm</p>
      <p>Where: Providence area near 51</p>
      <p>Contact: Shannon 803-609-1961</p>
    </div>
  </div>
);

const SmallGroup = () => (
    <div id = "smallgroup-container" className="page-container">
      <Banner title="Small Group" />
      <ContentAreaMain id="small-group" title="Small Group" textPosition="text-left" content={smallGroupContent} />
      <div className="content-area" id="content-area-contact">
          <div><p>ph: (123) 456-78910</p></div><div><p>physical address: 123 Happy Ln. Matthew, NC 28226</p></div><div><p>mailing address: 123 Happy Ln. Matthew, NC 28226</p></div>
      </div>
    </div>
)

export default SmallGroup 
