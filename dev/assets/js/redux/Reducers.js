import { combineReducers } from 'redux';

import * as ActionTypes from '../constants/ActionTypes';

const initialSectionState = {
  currentSection: 'intro-section'
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
};

const rootReducer = combineReducers({
  changeSectionState
});

export default rootReducer;