import { RECEIVE_MESSAGE, RECEIVE_ERRORS } from '../actions/message_actions';
import merge from 'lodash/merge';


const initState = {
  message: {
    title: "",
    body: ""
  },
  errors: []
}

const MessageReducer = (state = initState, action) => {
  Object.freeze(state);
  let newState;
  switch (action.type) {
    case RECEIVE_MESSAGE:
      newState = { message: action.message, errors: [] }
      return merge({}, state, newState);
    case RECEIVE_ERRORS:
      newState = { message: {}, errors: action.errors }
      return merge({}, state, newState);
    default:
      return state;
  }
}


export default MessageReducer;
