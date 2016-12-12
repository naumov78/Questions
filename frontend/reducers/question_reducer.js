import { RECEIVE_SINGLE_QUESTION, RECEIVE_QUESTIONS, RECEIVE_ERRORS, createQuestion } from '../actions/question_actions';
import merge from 'lodash/merge';


const initState = {
  question: {
    topic_id: 0,
    body: ""
  },
  errors: []
}



const QuestionReducer = (state = initState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SINGLE_QUESTION:
      newState = { question: action.question, errors: [] }
      return merge({}, state, newState);
    case RECEIVE_ERRORS:
      newState = { question: {}, errors: action.errors }
      return merge({}, state, newState);
    default:
      return state;
  }
}


export default QuestionReducer;
