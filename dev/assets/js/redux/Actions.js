import * as ActionTypes from '../constants/ActionTypes';

function changeSection(section) {
  return {
    type: ActionTypes.CHANGE_WAYPOINT,
    section: section
  };
}

export { changeSection };