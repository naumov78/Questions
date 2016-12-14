

export const createQuestion = (question) => {
  // debugger
  return $.ajax({
    type: "POST",
    url: `/api/topics/${question.topic_id}/questions`,
    data: {question}
  });
};


export const fetchSingeleQuestion = (question) => {
  const topic_id = parseInt(question.question_data.topic_id);
  const question_id = parseInt(question.question_data.question_id);

  debugger
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
