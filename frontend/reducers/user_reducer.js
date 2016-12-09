import { RECEIVE_USER, updateUser } from '../actions/user_actions';
import merge from 'lodash/merge';

const initState = {}


const UserReducer = (state = initState, action ) => {
  switch(action.type) {
    case RECEIVE_USER:
      return action.user;
      // return merge({}, state, newState);
    default:
      return state;
  }
}

export default UserReducer;
