import { RECEIVE_SINGLE_TOPIC } from '../actions/topic_actions';
import merge from 'lodash/merge';

const initState = {
  topic_id: null,
  topic_title: null,
  questions: []
}

const TopicReducer = (state = initState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_SINGLE_TOPIC:
    const newState = { topic_id: action.topic_id, topic_title: action.topic_title, questions: action.questions };
      return Object.assign({}, state, newState);
    default:
      return state;
  }
}


export default TopicReducer;
