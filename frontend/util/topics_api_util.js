


export const fetchTopics = () => {
  // debugger
  return $.ajax({
    type: "GET",
    url: 'api/topics'
  });
};
