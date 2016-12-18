import React, { PropTypes } from 'react';
import Waypoint from 'react-waypoint';

import FontAwesome from './FontAwesome';

const Contact = (props) => (  
  <div id="contact-section" className="contact-section">
    <Waypoint
      onEnter={({ previousPosition, waypointTop }) => {
        previousPosition === Waypoint.above && props.changeSection('contact-section')
      }}
      topOffset={10}
      bottomOffset={-10}
    />
    <h2 className="section-title">Around the Web</h2>

    <ol className="list-inline">
      <li>
        <a href="https://www.linkedin.com/in/try-ajitiono">
          <FontAwesome icon="linkedin-square" additionalClass="fa-fw" />
        </a>
      </li>
      <li>
        <a href="https://twitter.com/Ajiballinst">
          <FontAwesome icon="twitter" additionalClass="fa-fw" />
        </a>
      </li>
      <li>
        <a href="https://github.com/Imballinst/">
          <FontAwesome icon="github" additionalClass="fa-fw" />
        </a>
      </li>
    </ol>

    <p className="text-center">
      <FontAwesome icon="copyright" additionalClass="fa-fw margin-ri-5" />
      Try Ajitiono, 2016
    </p>
  </div>
);

Contact.propTypes = {
  changeSection: PropTypes.func
};

export default Contact;
