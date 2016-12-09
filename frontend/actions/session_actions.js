import * as APIUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS";

//updates state

export const receiveCurrentUser = (currentUser) => {
  return {
    type: RECEIVE_CURRENT_USER,
    currentUser: currentUser
  };
}

export const receiveErrors = (errors) => ({
  type: RECEIVE_ERRORS,
  // type: RECEIVE_LOGIN_ERRORS,
  errors: errors
});

// thunk action creators

export const signup = (user) => {
  return(dispatch) => {
    return APIUtil.signup(user).then((user) => {
      return dispatch(receiveCurrentUser(user));
    }, ({responseJSON}) => {
      return dispatch(receiveErrors({signup: responseJSON}));
    })
  }
}

export const login = (user) => {
  return (dispatch) => {
    return APIUtil.login(user).then((user) => {
      // debugger
      dispatch(receiveCurrentUser(user))},
      ({ responseJSON }) => {
        // debugger
        // dispatch(receiveErrors(responseJSON))});
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


// this.props.errors.map((error, i) => (
  // <li key={`error-${i}`}>
  //   {error}
  // </li>
