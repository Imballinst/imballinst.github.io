import React, { PropTypes } from 'react';
import { Row, Col, Modal, Button } from 'react-bootstrap';

import PortfolioContent from '../constants/PortfolioContent';

class PortfolioModal extends React.Component {
  onPortfolioHide = (toggle, content) => (e) => {    
    this.props.togglePortfolio(toggle, content);
  }

  render() {
    return (
      <Modal className="portfolio-modal" show={this.props.portfolio.show} onHide={this.onPortfolioHide(false, this.props.portfolio.content)} backdrop={true}>
        <Modal.Header className="portfolio-modal-header" closeButton />
        <Modal.Body className="portfolio-modal-body">
          <div className="portfolio-title">
            <img 
              className="portfolio-title-img" 
              src={PortfolioContent[this.props.portfolio.content].img} 
            />
            <h2 className="portfolio-title-text">
              {PortfolioContent[this.props.portfolio.content].title}
            </h2>
          </div>
          <hr className="portfolio-hr" />
          {PortfolioContent[this.props.portfolio.content].text()}
        </Modal.Body>
        <Modal.Footer className="portfolio-modal-footer">
          <Button onClick={this.onPortfolioHide(false, this.props.portfolio.content)}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    );
  }
}

PortfolioModal.propTypes = {
  portfolio: PropTypes.shape({
    show: PropTypes.bool,
    content: PropTypes.string
  }),
  togglePortfolio: PropTypes.func,
  changeSection: PropTypes.func
};

export default PortfolioModal;
