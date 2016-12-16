import { RECEIVE_ANSWERS } from '../actions/answer_actions';
import merge from 'lodash/merge';


const initState = {
  answers: []
}

const AnswersReducer = (state = initState, action) => {
  Object.freeze(state);
  switch (action.type) {
    case RECEIVE_ANSWERS:
      return merge({}, state, { answers: action.answers })
    default:
      return state;
  }
}


export default AnswersReducer;
