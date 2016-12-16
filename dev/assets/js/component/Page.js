import React, { PropTypes } from 'react';
import { Grid, Row, Col } from 'react-bootstrap';

import PageContent from './PageContent';
import Sidebar from './Sidebar';

const Page = () => (  
  <Grid className="page-container" fluid>
    <div className="page-content">
      <PageContent />
    </div>
    <div className="sidebar">
      <Sidebar />
    </div>
  </Grid>
);

Page.propTypes = {};

export default Page;
