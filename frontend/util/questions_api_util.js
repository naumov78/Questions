
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

export const dislikeQuestion = (user_id, question_id, idx) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/user_liked_questions/${idx}`,
    data: {user_liked_question: {user_id: user_id, question_id: question_id}}
  });
};


export const likeAnswer = (user_id, answer_id) => {
  return $.ajax({
    method: "POST",
    url: '/api/user_liked_answers',
    data: {user_liked_answer: {user_id: user_id, answer_id: answer_id}}
  });
};

export const dislikeAnswer = (user_id, answer_id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/user_liked_answers/1`,
    data: {user_liked_answer: {user_id: user_id, answer_id: answer_id}}
  });
};


export const createComment = (new_comment) => {
  return $.ajax({
    method: "POST",
    url: 'api/comments',
    data: {comment: {answer_id: new_comment.answer_id, body: new_comment.body}}
  });
};
