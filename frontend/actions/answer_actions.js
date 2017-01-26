import * as APIUtil from '../util/answers_api_util';

export const RECEIVE_SINGLE_ANSWER = "RECEIVE_SINGLE_ANSWER";
export const RECEIVE_ANSWERS = "RECEIVE_ANSWERS";
export const RECEIVE_ERRORS = "RECEIVE_ERRORS"


export const receiveSingleAnswer = (answer) => {
  return ({
    type: RECEIVE_SINGLE_ANSWER,
    answer: answer
  });
}

export const receiveAnswers = (answers) => {
  return ({
    type: RECEIVE_ANSWERS,
    answers
  })
}

export const receiveErrors = (errors) => {
  return ({
    type: RECEIVE_ERRORS,
    errors
  })
}


export const createAnswer = (answer, topic_id) => {
  return (dispatch) => {
    return APIUtil.createAnswer(answer, topic_id).then((result) => {
      return dispatch(receiveSingleAnswer(result));
      },
      (errors) => {
        return dispatch(receiveErrors(errors));
      })
  }
}


export const fetchSingleAnswer = (answer_data) => {
  return (dispatch) => {
    return APIUtil.fetchSingeleAnswer(answer_data).then((result) => {
      return dispatch(receiveSingleAnswer(result))
    });
  }
}

export const fetchAnswers = (topic_id, question_id) => {
  return (dispatch) => {
    return APIUtil.fetchAnswers(topic_id, question_id).then((result) => {
      return dispatch(receiveAnswers(result))
    });
  }
}
