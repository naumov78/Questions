

export const createQuestion = (question) => {
  // debugger
  return $.ajax({
    type: "POST",
    url: `/api/topics/${question.topic_id}/questions`,
    data: {question}
  });
};


export const fetchSingeleQuestion = (question) => {
  return $.ajax({
    method: "GET",
    url: `/api/topics/${question.topic_id}/questions/${question.id}`
  });
}

export const fetchQuestions = (topic_id) => {
  return $.ajax({
    method: "GET",
    url: `/api/topics/${topic_id}/questions`
  });
}
