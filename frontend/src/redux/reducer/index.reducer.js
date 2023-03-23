const initialState = {
  showLogin: false,
  showSignup: false,
  auth: { isLogin: false, details: null },
  movies: [],
};

export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "login":
      return {
        ...state,
        showLogin: action.payload,
      };
    case "signup":
      return {
        ...state,
        showSignup: action.payload,
      };
    case "auth":
      return {
        ...state,
        auth: action.payload,
      };
    case "movies":
      return {
        ...state,
        movies: action.payload,
      };
    default:
      return state;
  }
};
