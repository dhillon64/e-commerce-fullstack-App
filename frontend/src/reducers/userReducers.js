export const userLoginReducer = (state = {}, action) => {
  switch (action.type) {
    case "LOGIN_REQUEST":
      return {
        loading: true,
      };
    case "LOGIN_SUCCESS":
      return { loading: false, userInfo: action.payload };
    case "LOGIN_FAIL":
      return { loading: false, error: action.payload };
    case "LOGOUT":
      return {};

    default:
      return state;
  }
};
