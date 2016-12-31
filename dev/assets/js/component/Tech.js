import React, { PropTypes } from 'react';
import Waypoint from 'react-waypoint';

const Tech = (props) => (  
  <div id="tech-section" className="tech-section">
    <Waypoint
      onEnter={({ previousPosition, waypointTop }) => {
        previousPosition === Waypoint.above && waypointTop < 50 && props.changeSection('tech-section')
      }}
      onLeave={({ currentPosition }) => (
        currentPosition === Waypoint.above && props.changeSection('trackrecord-section')
      )}
      topOffset={10}
      bottomOffset={-10}
    />
    <h2 className="section-title">Technical Skills</h2>

    <p className="section-text">
      This is the list of web technologies I have been using since I began learning about front-end web development, sorted by my comprehension and average daily interaction on each technology.
    </p>
    <ol className="section-list">
        <li><b>React</b> with <b>Redux</b>: 8.0/10</li>
        <li><b>HTML5</b> and <b>CSS3</b>: 8.0/10</li>
        <li>Module bundler (<b>browserify</b>): 7.5/10</li>
        <li>Task runner (<b>gulp</b>): 7.5/10</li>
        <li><b>JQuery</b>: 7.5/10</li>
        <li><b>Javascript</b> (including <b>ES6</b>): 7/10</li>
        <li>JS linter (<b>ESlint</b>): 7/10</li>
        <li>Content Management System (such as <b>Moodle</b> and <b>Wordpress</b>): 6.5/10</li>
        <li><b>NodeJS</b> (including <b>ExpressJS</b> and <b>EJS</b>): 5.5/10</li>
        <li>CSS coding pattern (<b>SMACSS</b>, <b>BEM</b>, etc.): 5.0/10</li>
      </ol>
  </div>
);

Tech.propTypes = {
  changeSection: PropTypes.func
};

export default Tech;
