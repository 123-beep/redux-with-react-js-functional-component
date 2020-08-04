const iState = {
  name: "2016"
};
const year = (state = iState, action) => {
  if (action.type === "CHANGE_YEAR") {
    return { name: action.payload };
  } else {
    return state;
  }
};
export default year;
