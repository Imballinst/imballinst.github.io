import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import PageContent from './PageContent';
import Sidebar from './Sidebar';

class Page extends React.Component {
  render() {
    return (
      <Grid className="page-container">
        <Row>
          <Col>
            <div className="page-content">
              <PageContent 
                changeSection={this.props.changeSection}
                togglePortfolio={this.props.togglePortfolio}
                portfolio={this.props.portfolio}
              />
            </div>
            <div className="sidebar">
              <Sidebar 
                currentSection={this.props.currentSection}
                changeSection={this.props.changeSection}
              />
            </div>
          </Col>
        </Row>
      </Grid>
    );
  }
}

Page.propTypes = {
  currentSection: PropTypes.string,
  portfolio: PropTypes.shape({
    show: PropTypes.bool,
    content: PropTypes.string
  }),
  changeSection: PropTypes.func,
  togglePortfolio: PropTypes.func
};

export default Page;
