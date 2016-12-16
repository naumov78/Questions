import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
  };
}

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  errors: errors
});

export const signup = (user) => {
  return(dispatch) => {
    return APIUtil.signup(user).then((user) => {
      return dispatch(receiveCurrentUser(user));
    }, ({responseJSON}) => {
      return dispatch(receiveErrors({signup: responseJSON}));
    })
  }
}

export const updateUser = (user, id) => {
  return (dispatch) => {
    return APIUtil.updateUser(user, id).then(
      (user) => {
      return dispatch(receiveCurrentUser(user))},
      ({responseJSON}) => {
      return dispatch(receiveErrors(responseJSON))});
  }
}


export const login = (user) => {
  return (dispatch) => {
    return APIUtil.login(user).then((user) => {
      dispatch(receiveCurrentUser(user))},
      ({ responseJSON }) => {
        dispatch(receiveErrors({login: responseJSON}));
      }
    )
  }
}


export const logout = () => {
  return(dispatch) => {
    return APIUtil.logout().then(() => {
      return dispatch(receiveCurrentUser(null));
    },
    (errors) => {
      return dispatch(receiveErrors(errors));
    })
  }
}
