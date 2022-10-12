export const Buy_Icecream = "Buy_Icecream";

// ACTION CRREATOR
export const IceAction = (value) => {
  return {
    type: Buy_Icecream,
    payload: value,
  };
};