
export const signup = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/users",
    data: user
  });
};

export const login = (user) => {
  return $.ajax({
    method: "POST",
    url: "/api/session",
    data: user
  });
};

export const logout = () => {
  return $.ajax({
    method: "delete",
    url: "/api/session"
  });
};

export const updateUser = (user, id) => {
  if (user instanceof FormData) {
    return $.ajax({
      method: "PATCH",
      url: `/api/users/${id}`,
      contentType: false,
      processData: false,
      data: user
    });
  } else {
    return $.ajax({
      method: "PATCH",
      url: `/api/users/${id}`,
      data: {user}
    });
  }
};
