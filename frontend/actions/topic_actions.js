import * as APIUtil from '../util/topics_api_util';

export const RECEIVE_TOPICS = "RECEIVE_TOPICS";
export const RECEIVE_SINGLE_TOPIC = "RECEIVE_SINGLE_TOPIC";

export const receiveTopics = (topics) => {
  return ({
    type: RECEIVE_TOPICS,
    topics: topics
  });
}

export const receiveSingleTopic = (questions) => {
  debugger
  return ({
    type: RECEIVE_SINGLE_TOPIC,
    topic_title: questions.title,
    topic_id: questions.id,
    questions: questions.questions,
    watched_questions: questions.watched_questions
  });
}

export const fetchTopics = () => {
  return (dispatch) => {
    return APIUtil.fetchTopics().then((topics) => {
      return dispatch(receiveTopics(topics));
    });
  };
}

export const fetchSingleTopic = (id) => {
  return (dispatch) => {
    return APIUtil.fetchSingleTopic(id).then((topic) => {
      return dispatch(receiveSingleTopic(topic));
    });
  };
}
