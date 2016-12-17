import React, { PropTypes } from 'react';
import Waypoint from 'react-waypoint';

const TrackRecord = (props) => (  
  <div id="trackrecord-section" className="trackrecord-section">
    <Waypoint
      onEnter={({ previousPosition, waypointTop }) => {
        console.log('trackrecord', waypointTop);
        previousPosition === Waypoint.above && waypointTop < 50 && props.changeSection('trackrecord-section')
      }}
      onLeave={({ currentPosition }) => (
        currentPosition === Waypoint.above && props.changeSection('portfolio-section')
      )}
      topOffset={10}
      bottomOffset={-10}
    />
    Track Record
  </div>
);

TrackRecord.propTypes = {
  changeSection: PropTypes.func
};

export default TrackRecord;
