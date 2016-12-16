import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Biography from './Biography';
import Contact from './Contact';
import Experience from './Experience';
import Photoframe from './Photoframe';
import Portfolio from './Portfolio';
import Sidebar from './Sidebar';
import TrackRecord from './TrackRecord';

const PageContent = () => (  
  <Row>
    <Col xs={12} md={12}>
      <Photoframe />
      <Biography />
      <Experience />
      <TrackRecord />
      <Portfolio />
      <Contact />
    </Col>
  </Row>
);

PageContent.propTypes = {};

export default PageContent;
