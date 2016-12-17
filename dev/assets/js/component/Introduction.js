import React, { PropTypes } from 'react';
import Waypoint from 'react-waypoint';

const Introduction = (props) => (
  <div id="intro-section" className="intro-section">
    <Waypoint
      onEnter={({ previousPosition, waypointTop }) => {
        console.log('intro', waypointTop);
        previousPosition === Waypoint.above && waypointTop < 50 && props.changeSection('intro-section')
      }}
      onLeave={({ currentPosition }) => (
        currentPosition === Waypoint.above && props.changeSection('biography-section')
      )}
      topOffset={10}
      bottomOffset={-10}
    />
    Introduction
  </div>
);

Introduction.propTypes = {
  changeSection: PropTypes.func
};

export default Introduction;
