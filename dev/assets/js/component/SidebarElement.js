import React, { PropTypes } from 'react';

import FontAwesome from './FontAwesome';

class SidebarElement extends React.Component {
  onSideBarClick = (section) => (e) => {
    this.props.changeSection(section);
  }

  render() {
    return (
      <a href={'#' + this.props.section}>
        <li className={this.props.active} onClick={this.onSideBarClick(this.props.section)}>
          <span className="sidebar-text">{this.props.text}</span>
          <FontAwesome icon={this.props.faIcon} additionalClass="fa-fw" />
        </li>
      </a>
    );
  }
}

SidebarElement.propTypes = {};

export default SidebarElement;
