import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';

import Biography from './Biography';
import Contact from './Contact';
import Tech from './Tech';
import Portfolio from './Portfolio';
import Sidebar from './Sidebar';
import TrackRecord from './TrackRecord';
import PortfolioModal from './PortfolioModal';

const PageContent = (props) => (  
  <Row className="margin-0">
    <Col xs={12} md={12} className="padding-0">
      <Biography changeSection={props.changeSection} />
      <Tech changeSection={props.changeSection} />
      <TrackRecord changeSection={props.changeSection} />
      <Portfolio 
        changeSection={props.changeSection} 
        togglePortfolio={props.togglePortfolio} 
      />
      <Contact changeSection={props.changeSection} />

      <PortfolioModal
        portfolio={props.portfolio}
        togglePortfolio={props.togglePortfolio}
      />
    </Col>
  </Row>
);

PageContent.propTypes = {
  changeSection: PropTypes.func,
  portfolio: PropTypes.shape({
    show: PropTypes.bool,
    content: PropTypes.string
  }),
  togglePortfolio: PropTypes.func
};

export default PageContent;
