import { Buy_Icecream } from "./IceAction";

const initialState = {
  Icecream_Quantity: 200,
};
const icecream_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Buy_Icecream:
      return {
        Icecream_Quantity: decrease(state.Icecream_Quantity, action.payload),
      };
    default:
      return {
        ...state,
      };
  }
};
function decrease(total, val) {
  return total - val;
}
export default icecream_Reducer;
