// show
// edit
// update


export const fetchUser = (id) => {
  return $.ajax({
    method: "GET",
    url: `/api/users/${id}`
    // data: user
  });
};

// export const editUser = (user) => {
//   return $.ajax({
//     method: "GET",
//     url: '/api/users/:id/edit',
//     data: user
//   });
// };

export const updateUser = (user) => {
  return $.ajax({
    method: "POST",
    url: `/api/users/${user.id}`,
    data: { _method:'PUT', user: user },
  });
};

// data: user
