
export const fetchTopics = () => {
  return $.ajax({
    type: "GET",
    url: 'api/topics'
  });
};


export const fetchSingleTopic = (id) => {
  return $.ajax({
    type: "GET",
    url: `api/topics/${id}`
  });
};
