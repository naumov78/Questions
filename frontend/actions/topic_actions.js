import * as APIUtil from '../util/topics_api_util';

export const RECEIVE_TOPICS = "RECEIVE_TOPICS";
export const RECEIVE_SINGLE_TOPIC = "RECEIVE_SINGLE_TOPIC";

export const receiveTopics = (topics) => {
  debugger
  return ({
    type: RECEIVE_TOPICS,
    topics: topics
  });
}

export const receiveSingleTopic = (topic) => {
  debugger
  return ({
    type: RECEIVE_TOPICS,
    topic_id: topis.id,
    topic_title: topic.title
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

export const fetchSingleTopic = (id) => {
  // debugger
  return (dispatch) => {
    return APIUtil.fetchSingleTopics(id).then((topic) => {
      // debugger
      return dispatch(receiveSingleTopic(topic));
    });
  };
}
