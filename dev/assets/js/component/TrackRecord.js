import React, { PropTypes } from 'react';
import Waypoint from 'react-waypoint';

const WorkExperience = (props) => (  
  <div id="trackrecord-section" className="trackrecord-section">
    <Waypoint
      onEnter={({ previousPosition, waypointTop }) => {
        previousPosition === Waypoint.above && waypointTop < 50 && props.changeSection('trackrecord-section')
      }}
      onLeave={({ currentPosition }) => (
        currentPosition === Waypoint.above && props.changeSection('portfolio-section')
      )}
      topOffset={10}
      bottomOffset={-10}
    />
    <h2 className="section-title">Track Record</h2>

    <ol className="section-list">
      <li>Front-end Web Developer Intern in <b>Springfields Bandung</b>: June - July 2015</li>
      <li>Front-end Web Developer Intern in <b>eFishery</b>: June - August 2016</li>
      <li>Front-end Web Developer in <b>eFishery</b>: September 2016 - now</li>
    </ol>
  </div>
);

WorkExperience.propTypes = {
  changeSection: PropTypes.func
};

export default WorkExperience;
