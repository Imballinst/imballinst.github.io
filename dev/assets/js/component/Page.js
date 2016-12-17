import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import PageContent from './PageContent';
import Sidebar from './Sidebar';

class Page extends React.Component {
  render() {
    return (
      <Grid className="page-container" fluid>
        <div className="page-content">
          <PageContent 
            changeSection={this.props.changeSection}
          />
        </div>
        <div className="sidebar">
          <Sidebar 
            currentSection={this.props.currentSection}
            changeSection={this.props.changeSection}
          />
        </div>
      </Grid>
    );
  }
}

Page.propTypes = {
  currentSection: PropTypes.string,
  changeSection: PropTypes.func
};

export default Page;
