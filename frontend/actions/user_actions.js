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

export const updateUser = (user) => {
  return (dispatch) => {
    return APIUtil.updateUser(user).then(
      (user) => {
      return dispatch(receiveUser(user))},
      ({responseJSON}) => {
      return dispatch(receiveErrors(responseJSON))});
  }
}


// export const show_user = (user) => {
//   return(dispatch) => {
//     return APIUtil.show(user).then((user) => {
//       return dispatch(receiveUser(user));
//     }),
//       ({responseJSON}) => {
//         return dispatch(receiveErrors(responseJSON));
//       }
//   }
// }

// export const edit_user = (user) => {
//   return(dispatch) => {
//     return APIUtil.edit(user).then((user) => {
//       return dispatch(receiveCurrentUser(user));
//     }),
//       ({responseJSON}) => {
//         return dispatch(receiveErrors(responseJSON));
//       }
//   }
// }
//
// export const update_user = (user) => {
//   return (dispatch) => {
//     return APIUtil.update(user).then((user) => {
//       return dispatch(receiveCurrentUser(user));
//     }),
//       ({responseJSON}) => {
//         return dispatch(receiveErrors(responseJSON));
//       }
//   }
// }
