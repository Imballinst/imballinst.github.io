import React, { PropTypes } from 'react';
import Waypoint from 'react-waypoint';

const Contact = (props) => (  
  <div id="contact-section" className="contact-section">
    <Waypoint
      onEnter={({ previousPosition, waypointTop }) => {
        console.log('contact', waypointTop);
        previousPosition === Waypoint.above && props.changeSection('contact-section')
      }}
      topOffset={10}
      bottomOffset={-10}
    />
    Contact
  </div>
);

Contact.propTypes = {
  changeSection: PropTypes.func
};

export default Contact;
