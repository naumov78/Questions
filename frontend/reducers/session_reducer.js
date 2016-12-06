import { RECEIVE_CURRENT_USER, logout, RECEIVE_ERRORS } from '../actions/session_actions';
// import merge from 'lodash/merge';


const initState = {
    currentUser: null,
    errors: []
}

const SessionReducer = (state = initState, action) => {
  Object.freeze(state);
  switch(action.type){
    case RECEIVE_CURRENT_USER:
      const currentUser = action.currentUser;
      return Object.assign({}, state, { currentUser });
    case logout:
      return Object.assign({}, state);
    case  RECEIVE_ERRORS:
      const errors = action.errors;
      return Object.assign({}, state, { errors });
    default:
      return state;
  }

}

export default SessionReducer;
