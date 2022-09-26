const initialState = {
  name: "ardy",
};

const globalReducer = (state = initialState, action) => {
  if (action.type === "UPDATE_NAME") {
    return {
      ...state,
      name: "setiawan",
    };
  }
  return state;
};

export default globalReducer;
