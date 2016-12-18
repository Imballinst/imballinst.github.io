import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import Waypoint from 'react-waypoint';

import FontAwesome from './FontAwesome';

const Biography = (props) => (
  <div id="biography-section" className="biography-section">
    <Waypoint
      onEnter={({ previousPosition, waypointTop }) => {
        previousPosition === Waypoint.above && waypointTop < 50 && props.changeSection('biography-section')
      }}
      onLeave={({ currentPosition }) => (
        currentPosition === Waypoint.above && props.changeSection('tech-section')
      )}
      topOffset={10}
      bottomOffset={-10}
    />
    <h1 className="biography-logo">
      <FontAwesome icon="snowflake-o" additionalClass="fa-fw" />
    </h1>
    <h1 className="biography-name">Try Ajitiono</h1>
    <h2 className="biography-position">Front-end Web Developer</h2>
    <p className="section-text">
      My name is Try Ajitiono and I have big passion in front-end web development. I was graduated from Informatics Engineering undergraduate program of Institut Teknologi Bandung, Indonesia, in October 2016.
    </p>
  </div>
);

Biography.propTypes = {
  changeSection: PropTypes.func
};

export default Biography;
