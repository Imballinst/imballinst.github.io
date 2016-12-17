import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Biography from './Biography';
import Contact from './Contact';
import Experience from './Experience';
import Introduction from './Introduction';
import Portfolio from './Portfolio';
import Sidebar from './Sidebar';
import TrackRecord from './TrackRecord';

const PageContent = (props) => (  
  <Row className="margin-0">
    <Col xs={12} md={12} className="padding-0">
      <Introduction changeSection={props.changeSection} />
      <Biography changeSection={props.changeSection} />
      <Experience changeSection={props.changeSection} />
      <TrackRecord changeSection={props.changeSection} />
      <Portfolio changeSection={props.changeSection} />
      <Contact changeSection={props.changeSection} />
    </Col>
  </Row>
);

PageContent.propTypes = {
  changeSection: PropTypes.func
};

export default PageContent;
