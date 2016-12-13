import React, { PropTypes } from 'react';

const Sidebar = (props) => (  
  <div className="sidebar">
    <ul className="sidebar-list">
      <li>Photoframe</li>
      <li>Biography</li>
      <li>Experience</li>
      <li>TrackRecord</li>
      <li>Portfolio</li>
      <li>Contact</li>
    </ul>
  </div>
);

Sidebar.propTypes = {};

export default Sidebar;
