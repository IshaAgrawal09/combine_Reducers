import { Buy_Chocolate } from "./ChocoAction";

const initialState = {
  choco_Quantity: 200,
};
const chocolate_Reducer = (state = initialState, action) => {
  switch (action.type) {
    case Buy_Chocolate:
      return {
        choco_Quantity: decrease(state.choco_Quantity, action.payload),
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
export default chocolate_Reducer;
