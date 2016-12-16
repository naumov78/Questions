import * as APIUtil from '../util/user_api_util';


export const RECEIVE_USER = "RECEIVE_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveUser = (user) => {
  return {
    type: RECEIVE_USER,
    user
  }
}

export const receiveErrors = (errors) => {
  return {
    type: RECEIVE_ERRORS,
    errors
  }
}


export const fetchUser = (id) => {
  // debugger
  return (dispatch) => {
    return APIUtil.fetchUser(id).then(user => dispatch(receiveUser(user)) );
  }
}
