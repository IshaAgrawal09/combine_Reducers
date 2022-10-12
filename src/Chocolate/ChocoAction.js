export const Buy_Chocolate = "Buy_Chocolate";

// ACTION CRREATOR
export const ChocoAction = (value) => {
  return {
    type: Buy_Chocolate,
    payload: value,
  };
};
