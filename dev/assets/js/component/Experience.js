import React, { PropTypes } from 'react';
import Waypoint from 'react-waypoint';

const Experience = (props) => (  
  <div id="experience-section" className="experience-section">
    <Waypoint
      onEnter={({ previousPosition, waypointTop }) => {
        console.log('experience', waypointTop);
        previousPosition === Waypoint.above && waypointTop < 50 && props.changeSection('experience-section')
      }}
      onLeave={({ currentPosition }) => (
        currentPosition === Waypoint.above && props.changeSection('trackrecord-section')
      )}
      topOffset={10}
      bottomOffset={-10}
    />
    Experience
  </div>
);

Experience.propTypes = {
  changeSection: PropTypes.func
};

export default Experience;
