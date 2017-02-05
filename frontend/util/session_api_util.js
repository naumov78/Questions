
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
  debugger
  if (user instanceof FormData) {
    debugger
    return $.ajax({
      method: "PATCH",
      url: `/api/users/${id}`,
      contentType: false,
      processData: false,
      data: user
    });
  } else {
    debugger
    return $.ajax({
      method: "PATCH",
      url: `/api/users/${id}`,
      data: {user}
    });
  }
};
