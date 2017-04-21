import * as APIUtil from '../util/messages_api_util';

export const RECEIVE_MESSAGE = "RECEIVE_MESSAGE";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";
export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";


export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser,
  };
}

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const receiveMessage = (message) => {
  return ({
    type: RECEIVE_MESSAGE,
    message: message
  });
}


export const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_ERRORS,
    errors: errors
  });
}


export const createMessage = (message) => {
  return (dispatch) => {
    return APIUtil.createMessage(message).then((result) => {
      return dispatch(receiveMessage(result));
      },
      ({responseJSON}) => {
        return dispatch(receiveErrors(responseJSON));
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


export const changeMessage = (id, parameter) => {
  return (dispatch) => {
    return APIUtil.changeMessage(id, parameter).then((result) => {
      return dispatch(receiveCurrentUser(result))
    })
  }
}
