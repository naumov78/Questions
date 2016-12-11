


export const fetchTopics = () => {
  return $.ajax({
    type: "GET",
    url: 'api/topics'
  });
};
