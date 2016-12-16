import * as APIUtil from '../util/user_subscribed_topics_api_util';

export const RECEIVE_SUBSCRIBED_TOPIC = "RECEIVE_SUBSCRIBED_TOPIC";

export const receiveSubscribedTopic = (topic) => {
  return ({
    type: RECEIVE_SUBSCRIBED_TOPIC,
    topic: topic
  })
}

export const createSubscribedTopic = (topic) => {
  return (dispatch) => {
    return APIUtil.createSubscribedTopic(topic).then((topic) => {
      return dispatch(receiveSubscribedTopic(topic));
    });
  }
}
