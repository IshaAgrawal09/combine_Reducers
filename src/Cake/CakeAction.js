export const Buy_Cake = "Buy_Cake";

// ACTION CRREATOR
export const CakeAction = (value) => {
  return {
    type: Buy_Cake,
    payload: value,
  };
};
