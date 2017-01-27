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
  return (dispatch) => {
    return APIUtil.fetchUser(id).then((user) => {
      dispatch(receiveUser(user))},
    (errors) => {
      dispatch(receiveErrors(errors))}
     );
  }
}


export const follow = (current_user_id, user_id) => {
  return (dispatch) => {
    return APIUtil.follow(current_user_id, user_id).then((user) => {
      return dispatch(receiveUser(user))
    });
  }
}


export const unfollow = (current_user_id, user_id) => {
  return (dispatch) => {
    return APIUtil.unfollow(current_user_id, user_id).then((user) => {
      return dispatch(receiveUser(user))
    });
  }
}
