import * as ActionTypes from '../constants/ActionTypes';

function changeSection(section) {
  return {
    type: ActionTypes.CHANGE_WAYPOINT,
    section: section
  };
}

function togglePortfolio(toggle, content) {
  return {
    type: ActionTypes.TOGGLE_PORTFOLIO,
    toggle: toggle,
    content: content
  };
}

export { changeSection, togglePortfolio };