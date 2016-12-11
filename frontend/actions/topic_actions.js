import * as APIUtil from '../util/topics_api_util';

export const RECEIVE_TOPICS = "RECEIVE_TOPICS";

export const receiveTopics = (topics) => {
  return ({
    type: RECEIVE_TOPICS,
    topics: topics
  });
}


export const fetchTopics = () => {
  return (dispatch) => {
    return APIUtil.fetchTopics().then((topics) => {
      return dispatch(receiveTopics(topics));
    });
  };
}
