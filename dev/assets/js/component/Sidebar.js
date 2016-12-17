import React, { PropTypes } from 'react';

import SidebarElement from './SidebarElement';

const Sidebar = (props) => (  
  <ul className="sidebar-list">
    <SidebarElement
      changeSection={props.changeSection}
      text="Intro"
      section="intro-section"
      faIcon="user-circle"
      active={props.currentSection === "intro-section" ? "active" : ""}
    />
    <SidebarElement
      changeSection={props.changeSection}
      text="Biography"
      section="biography-section"
      faIcon="align-justify"
      active={props.currentSection === "biography-section" ? "active" : ""}
    />
    <SidebarElement
      changeSection={props.changeSection}
      text="Experience"
      section="experience-section"
      faIcon="star"
      active={props.currentSection === "experience-section" ? "active" : ""}
    />
    <SidebarElement
      changeSection={props.changeSection}
      text="Track Record"
      section="trackrecord-section"
      faIcon="history"
      active={props.currentSection === "trackrecord-section" ? "active" : ""}
    />
    <SidebarElement
      changeSection={props.changeSection}
      text="Portfolio"
      section="portfolio-section"
      faIcon="archive"
      active={props.currentSection === "portfolio-section" ? "active" : ""}
    />
    <SidebarElement
      changeSection={props.changeSection}
      text="Contact"
      section="contact-section"
      faIcon="address-card"
      active={props.currentSection === "contact-section" ? "active" : ""}
    />
  </ul>
);

Sidebar.propTypes = {
  currentSection: PropTypes.string,
  changeSection: PropTypes.func
};

export default Sidebar;
