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


export const changeMessage = (id, parameter) => {
  let data;
  if (parameter === 'unread') {
    data = {message: { unread: false }}
  } else if (parameter === 'delete_from_inbox') {
    data = {message: { addressee_visible: false }}
  } else if (parameter === "delete_from_outbox") {
    data = {message: {author_visible: false }}
  }
  return $.ajax({
    method: "PATCH",
    url: `/api/messages/${id}`,
    data: data
  })
}
