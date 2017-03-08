import * as APIUtil from '../util/messagess_api_util';


export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";


export const receiveMessage = (message) => {
  return ({
    type: RECEIVE_MESSAGE,
    message: message
  });
}


export const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_ERRORS,
    errors
  });
}


export const createMessage = (message) => {
  return (dispatch) => {
    return APIUtil.createMessage(message).then((result) => {
      return dispatch(receiveMessage(result));
      },
      (errors) => {
        return dispatch(receiveErrors(errors));
      });
  }
}

export const fetchMessage = (id) => {
  return (dispatch) => {
    return APIUtil.fetchMessage(id).then((result) => {
      return dispatch(receiveMessage(result))
    });
  }
}
