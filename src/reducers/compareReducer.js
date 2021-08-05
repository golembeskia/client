let initialState = [];

// load compare items from local storage
if (typeof window !== "undefined") {
  if (localStorage.getItem("compare")) {
    initialState = JSON.parse(localStorage.getItem("compare"));
  } else {
    initialState = [];
  }
}

export const compareReducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_TO_COMPARE":
      return action.payload;
    default:
      return state;
  }
};