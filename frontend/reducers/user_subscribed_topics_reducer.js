import { RECEIVE_SUBSCRIBED_TOPIC } from '../actions/user_actions';
import merge from 'lodash/merge';

const initState = {}

const SubscribedTopicsReducer = (state = initState, action) => {
  switch(action.type){
    case RECEIVE_SUBSCRIBED_TOPIC:
      const newState = action.topic
      return merge({}, state, newState);
    default:
      return state;
  }
}


export default SubscribedTopicsReducer;
