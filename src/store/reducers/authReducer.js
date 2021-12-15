const initialState = {
  user: {},
};

const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case "SET_NEW_USER":
      return (state = {
        user: action.payload,
      });
    default:
      return state;
  }
};

export default authReducer;
