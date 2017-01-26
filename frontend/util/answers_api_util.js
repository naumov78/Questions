
export const createAnswer = (answer, topic_id) => {
  return $.ajax({
    type: "POST",
    url: `/api/topics/${topic_id}/questions/${answer.question_id}/answers`,
    data: {answer}
  });
};

export const fetchSingeleAnswer = (answer) => {
  const topic_id = parseInt(answer.answer_data.topic_id);
  const question_id = parseInt(answer.answer_data.question_id);
  const answer_id  = parseInt(answer.answer_data.answer_id);
  return $.ajax({
    method: "GET",
    url: `/api/topics/${topic_id}/questions/${question_id}/answers/${answer_id}`
  });
}

export const fetchAnswers = (topic_id, question_id) => {
  return $.ajax({
    method: "GET",
    url: `/api/topics/${topic_id}/questions/${question_id}/answers`
  });
}
