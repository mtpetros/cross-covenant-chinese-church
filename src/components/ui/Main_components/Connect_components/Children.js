import React from 'react';

import Banner from '../library/Banner';
import ContentAreaMain from '../library/ContentAreaMain';

const aboutContent = (
    <div>
        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin interdum orci et lectus bibendum fermentum. Praesent ut arcu non lorem consectetur vehicula non vitae magna. Morbi ut felis sem. Proin vitae tincidunt nisi. Aliquam vitae est at tortor malesuada varius.</p>
        <br/>
        <p>Integer non malesuada odio. Aliquam arcu nisl, tempor vitae facilisis at, vulputate luctus mi. Duis in dolor libero. Nam sodales dui consequat maximus dignissim. Sed vitae metus sit amet massa faucibus consectetur vel eu dui. Phasellus in posuere libero, id volutpat nisi.</p>
        <br/>
        <p>Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Cras sagittis diam orci. Donec eros nisi, molestie ac turpis ut, iaculis vehicula eros. Integer vitae lorem ac erat sodales cursus. Sed id scelerisque ligula. Vivamus accumsan sapien ac odio luctus consequat.</p>
    </div>
);

const Children = () => (
    <div id = "children-container" className="page-container">
        <Banner title="Children's Ministry" />
        <ContentAreaMain id="about-childrens-ministry" title="About" textPosition="text-right" content={aboutContent} />
    </div>
)

export default Children