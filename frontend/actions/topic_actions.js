import * as APIUtil from '../util/topics_api_util';

export const RECEIVE_TOPICS = "RECEIVE_TOPICS";

export const receiveTopics = (topics) => {
  // debugger
  return ({
    type: RECEIVE_TOPICS,
    topics: topics
  });
}


export const fetchTopics = () => {
  // debugger
  return (dispatch) => {
    return APIUtil.fetchTopics().then((topics) => {
      // debugger
      return dispatch(receiveTopics(topics));
    });
  };
}
