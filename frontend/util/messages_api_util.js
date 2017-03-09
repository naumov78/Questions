export const createMessage = (message) => {
  return $.ajax({
    type: "POST",
    url: `/api/users/${message.user_id}/messages`,
    data: {message}
  });
};

export const fetchMessage = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/messages/${id}`
  });
}


export const readMessage = (id) => {
  return $.ajax({
    method: "PATCH",
    url: `/api/messages/${id}`
  })
}
