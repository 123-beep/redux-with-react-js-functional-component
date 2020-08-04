const iState = {
  name: "ramesh"
};
const reducer = (state = iState, action) => {
  if (action.type === "CHANGE_NAME") {
    return { name: action.payload };
  } else {
    return state;
  }
};
export default reducer;
