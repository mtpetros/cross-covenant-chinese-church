import React from 'react';

import Banner from '../library/Banner';
import ContentAreaMain from '../library/ContentAreaMain';

const mensContent = (
  <div>
    <p>For the men’s ministry, we primarily look at the possibility of growing future church leaders. We will use men’s ministry not only a way of connecting male believers, but also a means of training potential candidates for leadership.</p>
  </div>
);

const Men = () => (
    <div id = "mens-ministry-container" className="page-container">
      <Banner title="Men's Ministry" parallaxImage="/assets/img/men-bg.jpg"/>
      <ContentAreaMain position="no-parallax" id="mens-ministry" title="Men's Ministry" content={mensContent} />
      <div className="content-area" id="content-area-contact">
          <div><p>ph: (123) 456-78910</p></div><div><p>physical address: 123 Happy Ln. Matthew, NC 28226</p></div><div><p>mailing address: 123 Happy Ln. Matthew, NC 28226</p></div>
      </div>
    </div>
)

export default Men 
