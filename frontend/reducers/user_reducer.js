import { RECEIVE_USER, RECEIVE_ERRORS } from '../actions/user_actions';
import merge from 'lodash/merge';

const initState = {
  user: {},
  errors: []
}

const UserReducer = (state = initState, action ) => {
  let newState;
  switch(action.type) {
    case RECEIVE_USER:
      newState = {user: action.user, errors: []};
      return merge({}, state, newState);
    case RECEIVE_ERRORS:
      newState = {user: {}, errors: action.errors};
      return merge({}, state, newState);
    default:
      return state;
  }
}

export default UserReducer;


// user: { topics: [], questions: [], answers: [], comments: [] },
