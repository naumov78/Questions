


export const fetchTopics = () => {
  // debugger
  return $.ajax({
    type: "GET",
    url: 'api/topics'
  });
};


export const fetchSingleTopic = (id) => {
  // debugger
  return $.ajax({
    type: "GET",
    url: `api/topics/${id}`
  });
};
