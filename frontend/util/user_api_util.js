export const fetchUser = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`
  });
};


export const follow = (current_user_id, user_id) => {
  return $.ajax({
    method: "POST",
    url: `/api/users/${current_user_id}/follows`,
    data: {follow: { followee_id: user_id }}
  });
}


export const unfollow = (current_user_id, user_id) => {
  return $.ajax({
    method: "DELETE",
    url: `/api/users/${current_user_id}/follows/1`,
    data: {follow: { followee_id: user_id }}
  });
}
