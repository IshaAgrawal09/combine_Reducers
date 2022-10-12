import { Buy_Cake } from "./CakeAction";

const initialState = {
  Cake_Quantity: 200,
};
const cake_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Buy_Cake:
      return {
        Cake_Quantity: decrease(state.Cake_Quantity, action.payload),
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
export default cake_Reducer;
