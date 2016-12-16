import { RECEIVE_CURRENT_USER, logout, RECEIVE_ERRORS } from '../actions/session_actions';
import merge from 'lodash/merge';



const initState = {
    currentUser: null,
    errors: {login: [], signup:[]}
}

const SessionReducer = (state = initState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return Object.assign({}, state, { currentUser });
    case logout:
      return initState;
    case  RECEIVE_ERRORS:
      let errors = action.errors;
      errors = merge({}, state.errors, errors);
      const newState = Object.assign({}, state);
      newState.errors = errors;
      return newState;
    default:
      return state;
  }

}

export default SessionReducer;
