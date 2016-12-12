import { RECEIVE_TOPICS } from '../actions/topic_actions';
import merge from 'lodash/merge';

const initState = {
  topics: []
}


const TopicsReducer = (state = initState, action) => {
  switch(action.type) {
    case RECEIVE_TOPICS:
      // const newState = action.topics;
      // debugger
      return merge({}, state, { topics: action.topics });
    default:
      return state;
  }
}

export default TopicsReducer;
