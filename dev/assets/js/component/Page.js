import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import Biography from './Biography';
import Contact from './Contact';
import Experience from './Experience';
import Photoframe from './Photoframe';
import Portfolio from './Portfolio';
import Sidebar from './Sidebar';
import TrackRecord from './TrackRecord';

const Page = () => (  
  <Grid className="page-container" fluid>
    <Row>
      <Col xs={8} md={10}>
        <Photoframe />
        <Biography />
        <Experience />
        <TrackRecord />
        <Portfolio />
        <Contact />
      </Col>
      <Col xs={4} md={2}>
        <Sidebar />
      </Col>
    </Row>
  </Grid>
);

Page.propTypes = {};

export default Page;
