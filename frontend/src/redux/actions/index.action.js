export const setLogin = (value, dispatch) => {
  return dispatch({
    type: "login",
    payload: value,
  });
};

export const setSignup = (value, dispatch) => {
  return dispatch({
    type: "signup",
    payload: value,
  });
};

export const setAuth = (value, dispatch) => {
  return dispatch({
    type: "auth",
    payload: value,
  });
};

export const setMovies = (value, dispatch) => {
  return dispatch({
    type: "movies",
    payload: value,
  });
};
