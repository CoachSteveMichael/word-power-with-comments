import reducer from "../reducer/reducer";
import { createStore } from "redux";

//store with no middleWare

const store = createStore(reducer);

store.subscribe(() => {
  console.log("state", store.getState());
});

export default store;
