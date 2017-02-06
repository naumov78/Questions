import { RECEIVE_SINGLE_QUESTION, RECEIVE_QUESTIONS, RECEIVE_ERRORS, UPDATE_ASK_FORM, createQuestion } from '../actions/question_actions';
import { RECEIVE_SINGLE_ANSWER, RECEIVE_ANSWERS } from '../actions/answer_actions';
import merge from 'lodash/merge';


const initState = {
  question: {
    topic_id: 0,
    body: ""
  },
  askForm: "",
  errors: []
}


const QuestionReducer = (state = initState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_SINGLE_ANSWER:
      newState = merge({}, state);
      newState.question.answers.push(action.answer);
      return newState;
    case RECEIVE_SINGLE_QUESTION:
      newState = { question: action.question, errors: [] }
      const updatedState = Object.assign({}, state, newState);
      return updatedState;
    case RECEIVE_ERRORS:
      newState = { question: {}, errors: action.errors }
      return merge({}, state, newState);
    case UPDATE_ASK_FORM:
      newState = { question: {}, errors: [], askForm: action.askForm }
      return merge({}, state, newState);
    default:
      return state;
  }
}


export default QuestionReducer;
