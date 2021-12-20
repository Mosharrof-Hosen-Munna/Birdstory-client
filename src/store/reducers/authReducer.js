const initialState = {
  user: {},
  isLoading: true,
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEW_USER":
      return (state = {
        ...state,
        user: action.payload,
      });
      break;
    case "SET_ISLOADING":
      return (state = { ...state, isLoading: action.payload });
    default:
      return state;
  }
};

export default authReducer;
