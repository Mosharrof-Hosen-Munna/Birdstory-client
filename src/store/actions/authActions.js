export const setUser = (payload) => {
  console.log(payload);
  return {
    type: "SET_NEW_USER",
    payload,
  };
};

export const setIsLoading = (payload) => {
  return {
    type: "SET_ISLOADING",
    payload,
  };
};
