import React, { PropTypes } from 'react';
import Waypoint from 'react-waypoint';

const Biography = (props) => (  
  <div id="biography-section" className="biography-section">
    <Waypoint
      onEnter={({ previousPosition, waypointTop }) => {
        console.log('biography', waypointTop);
        previousPosition === Waypoint.above && waypointTop < 50 && props.changeSection('biography-section')
      }}
      onLeave={({ currentPosition }) => (
        currentPosition === Waypoint.above && props.changeSection('experience-section')
      )}
      topOffset={10}
      bottomOffset={-10}
    />
    Biography
  </div>
);

Biography.propTypes = {
  changeSection: PropTypes.func
};

export default Biography;
