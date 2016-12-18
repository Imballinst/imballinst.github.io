import React, { PropTypes } from 'react';
import { Row, Col } from 'react-bootstrap';
import Waypoint from 'react-waypoint';

class Portfolio extends React.Component {
  onPortfolioClick = (toggle, content) => (e) => {
    e.preventDefault();

    this.props.togglePortfolio(toggle, content);
  }

  render() {
    return (
      <div id="portfolio-section" className="portfolio-section">
        <Waypoint
          onEnter={({ previousPosition, waypointTop }) => {
            previousPosition === Waypoint.above && waypointTop < 50 && this.props.changeSection('portfolio-section')
          }}
          onLeave={({ currentPosition }) => (
            currentPosition === Waypoint.above && this.props.changeSection('contact-section')
          )}
          topOffset={10}
          bottomOffset={-10}
        />
        <h2 className="section-title">Portfolio</h2>

        <p className="section-text">
          Apart from my work/assignments, I also did some side web development stuffs, either that be for an event or for technology research.
        </p>
        
        <Row className="margin-tp-30">
          <Col xs={12} sm={6} md={4} className="portfolio-element">
            <img 
              onClick={this.onPortfolioClick(true, 'dota2')}
              className="portfolio-img" 
              src="assets/img/dota2.png" 
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="portfolio-element">
            <img 
              onClick={this.onPortfolioClick(true, 'go2015')}
              className="portfolio-img" 
              src="assets/img/go2015.jpg" 
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="portfolio-element">
            <img 
              onClick={this.onPortfolioClick(true, 'rtd')}
              className="portfolio-img" 
              src="assets/img/rtd.png" 
            />
          </Col>
          <Col xs={12} sm={6} md={4} className="portfolio-element">
            <img 
              onClick={this.onPortfolioClick(true, 'jsTimezone')}
              className="portfolio-img" 
              src="assets/img/javascript-timezone.jpg" 
            />
          </Col>
        </Row>
      </div>
    );
  }
}

Portfolio.propTypes = {
  changeSection: PropTypes.func,
  togglePortfolio: PropTypes.func
};

export default Portfolio;
