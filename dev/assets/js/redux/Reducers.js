import { combineReducers } from 'redux';

import * as ActionTypes from '../constants/ActionTypes';

const initialSectionState = {
  currentSection: 'biography-section'
};

function changeSectionState(state = initialSectionState, action) {
  switch (action.type) {
    case (ActionTypes.CHANGE_WAYPOINT): {
      return Object.assign({}, state, {
        currentSection: action.section
      });
    }
    default: {
      return state;
    }
  }
}

const initialPortfolioModalState = {
  portfolio: {
    show: false,
    content: 'go2015'
  }
}

function changePortfolioModalState(state = initialPortfolioModalState, action) {
  switch (action.type) {
    case (ActionTypes.TOGGLE_PORTFOLIO): {
      const oldPortfolioState = state.portfolio;
      const newPortfolioState = Object.assign({}, oldPortfolioState, {
        show: action.toggle,
        content: action.content
      });

      return Object.assign({}, state, {
        portfolio: newPortfolioState
      }); 
    }
    default: {
      return state;
    }
  }
}

const rootReducer = combineReducers({
  changeSectionState,
  changePortfolioModalState
});

export default rootReducer;