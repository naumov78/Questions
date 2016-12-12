import { RECEIVE_QUESTIONS } from '../actions/question_actions';
import merge from 'lodash/merge';

const initState = {
  questions: []
}

const TopicReducer = (state = initState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_QUESTIONS:
      return action.questions;
    default:
      return state;
  }
}

export default TopicReducer;
