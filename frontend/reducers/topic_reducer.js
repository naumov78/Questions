import { RECEIVE_SINGLE_TOPIC } from '../actions/topic_actions';
import merge from 'lodash/merge';

const initState = {
  questions: []
}

const TopicReducer = (state = initState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_TOPIC:
      return ({ questions: action.questions });
    default:
      return state;
  }
}


export default TopicReducer;
