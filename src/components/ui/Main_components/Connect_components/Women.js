import React from 'react';

import Banner from '../library/Banner';
import ContentAreaMain from '../library/ContentAreaMain';

const womensContent = (
  <div>
    <p>Women’s ministry is primarily for connecting female believers through prayer and fellowship. It is also a place for sharing useful information, such as marriage, family life, children’s education, homeschooling materials, Christian books, or even a great cooking recipe.</p>
  </div>
);

const Women = () => (
    <div id = "womens-ministry-container" className="page-container">
      <Banner title="Women's Ministry" />
      <ContentAreaMain position="no-parallax" id="womens-ministry" title="Women's Ministry" content={womensContent} />
      <div className="content-area" id="content-area-contact">
          <div><p>ph: (123) 456-78910</p></div><div><p>physical address: 123 Happy Ln. Matthew, NC 28226</p></div><div><p>mailing address: 123 Happy Ln. Matthew, NC 28226</p></div>
      </div>
    </div>
)

export default Women 
