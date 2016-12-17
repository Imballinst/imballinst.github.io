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
          {this.props.text}
          <FontAwesome icon={this.props.faIcon} additionalClass="fa-fw" />
        </li>
      </a>
    );
  }
}

SidebarElement.propTypes = {};

export default SidebarElement;
