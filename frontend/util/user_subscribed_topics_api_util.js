
export const createSubscribedTopic = (topic) => {
  return $.ajax({
    method: "POST",
    url: '/api/user_subscribed_topics',
    data: {user_subscribed_topic: {topic_id: topic}}
  });
};
