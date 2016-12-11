import { RECEIVE_TOPICS } from '../actions/topic_actions';

const initState = {
  topics: []
}


const TopicReducer = (state = initState, action) => {
  switch(action.type) {
    case RECEIVE_TOPICS:
      return action.topics;
    default:
      return state;
  }
}

export default TopicReducer;
