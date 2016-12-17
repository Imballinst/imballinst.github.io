import React, { PropTypes } from 'react';
import Waypoint from 'react-waypoint';

const Portfolio = (props) => (  
  <div id="portfolio-section" className="portfolio-section">
    <Waypoint
      onEnter={({ previousPosition, waypointTop }) => {
        console.log('portfolio', waypointTop);
        previousPosition === Waypoint.above && waypointTop < 50 && props.changeSection('portfolio-section')
      }}
      onLeave={({ currentPosition }) => (
        currentPosition === Waypoint.above && props.changeSection('contact-section')
      )}
      topOffset={10}
      bottomOffset={-10}
    />
    Portfolio
  </div>
);

Portfolio.propTypes = {
  changeSection: PropTypes.func
};

export default Portfolio;
