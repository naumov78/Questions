import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => {
  type: RECEIVE_CURRENT_USER,
  currentUser
}

export const receiveErrors = (errors) => {
  type: RECEIVE_ERRORS,
  errors
}

// thunk action creators

export const signup = (user) => {
  return(dispatch) => {
    return APIUtil.signup(user).then((user) => {
      return dispatch(receiveCurrentUser(user));
    }),
  (errors) => {
    return dispatch(receiveErrors(errors));
    }
  }
}

export const login = (user) => {
  return (dispatch) => {
    return APIUtil.login(user).then((user) => {
      return dispatch(receiveCurrentUser(user));
    }),
    (errors) => {
      return dispatch(receiveErrors(errors));
    }
  }
}

export const logout = () => {
  return(dispatch) => {
    return APIUtil.logout.then(() => {
      return dispatch(receiveCurrentUser(null));
    }),
    (errors) => {
      return dispatch(receiveErrors(errors));
      }
  }
}
