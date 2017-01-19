
export const createQuestion = (question) => {
  return $.ajax({
    type: "POST",
    url: `/api/topics/${question.topic_id}/questions`,
    data: {question}
  });
};

export const fetchSingeleQuestion = (question) => {
  const topic_id = parseInt(question.question_data.topic_id);
  const question_id = parseInt(question.question_data.question_id);
  return $.ajax({
    method: "GET",
    url: `/api/topics/${topic_id}/questions/${question_id}`
  });
}

export const fetchQuestions = (topic_id) => {
  return $.ajax({
    method: "GET",
    url: `/api/topics/${topic_id}/questions`
  });
}


export const likeQuestion = (user_id, question_id) => {
  return $.ajax({
    method: "POST",
    url: '/api/user_liked_questions',
    data: {user_liked_question: {user_id: user_id, question_id: question_id}}
  });
};

export const dislikeQuestion = (user_id, question_id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/user_liked_questions/1`,
    data: {user_liked_question: {user_id: user_id, question_id: question_id}}
  });
};
