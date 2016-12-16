import { RECEIVE_SINGLE_ANSWER, RECEIVE_ERRORS, createAnswer } from '../actions/answer_actions';
import merge from 'lodash/merge';


const initState = {
  answer: {
    topic_id: 0,
    body: ""
  },
  errors: []
}

const AnswerReducer = (state = initState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SINGLE_ANSWER:
      newState = { answer: action.answer, errors: [] }
      return merge({}, state, newState);
    case RECEIVE_ERRORS:
      newState = { answer: {}, errors: action.errors }
      return merge({}, state, newState);
    default:
      return state;
  }
}


export default AnswerReducer;
