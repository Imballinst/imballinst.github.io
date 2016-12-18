import { connect } from 'react-redux';
import * as Actions from '../redux/Actions';
import Page from '../component/Page';

function mapStateToProps(state) {
  return {
    currentSection: state.changeSectionState.currentSection,
    portfolio: state.changePortfolioModalState.portfolio
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeSection: function(section) {
      dispatch(Actions.changeSection(section));
    },
    togglePortfolio: function(toggle, content) {
      dispatch(Actions.togglePortfolio(toggle, content));
    }
  };
}

const PageContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Page);

export default PageContainer;