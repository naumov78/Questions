import { RECEIVE_CURRENT_USER, logout, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';



const initState = {
    currentUser: null,
    errors: {login: [], signup:[]}
}

const SessionReducer = (state = initState, action) => {
  Object.freeze(state);
  // debugger
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return Object.assign({}, state, { currentUser });
    case logout:
      return Object.assign({}, state);
    case  RECEIVE_ERRORS:
    // debugger
      let errors = action.errors;
      errors = merge({}, state.errors, errors);
      const newState = Object.assign({}, state);
      newState.errors = errors;
      // debugger
      return newState;
    default:
      return state;
  }

}

export default SessionReducer;
