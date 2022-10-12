import { combineReducers, createStore } from "redux";
import chocolate_Reducer from "../Chocolate/ChocoReducer";
import icecream_Reducer from "../Icecream/IceReducer";
import cake_Reducer from "./CakeReducer";
// import cake_Reducer

const rootReducer = combineReducers({
  cake: cake_Reducer,
  icecream: icecream_Reducer,
  chocolate: chocolate_Reducer
});
const store = createStore(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
