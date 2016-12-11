import { RECEIVE_USER, RECEIVE_ERRORS } from '../actions/user_actions';
import merge from 'lodash/merge';

const initState = {
  user: { topics: [], questions: [], answers: [], comments: [] },
  errors: []
}


const UserReducer = (state = initState, action ) => {
  let newState;
  switch(action.type) {
    case RECEIVE_USER:
      // return action.user;
      newState = {user: action.user, errors: []};
      return merge({}, state, newState);
      // return merge({}, state, newState);
    case RECEIVE_ERRORS:
    // debugger
      newState = {user: {}, errors: action.errors};
      return merge({}, state, newState);
    default:
      return state;
  }
}

export default UserReducer;
