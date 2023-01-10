import React from "react";
import { INCREMENT_SCORE } from "../utils/constants";

//reducer and state

function reducer(state = { score: 0, hiScore: 0, count: 0 }, action) {
  switch (action.type) {
    case INCREMENT_SCORE:
      return { ...state, score: (state.score += 10) };
    default:
      return state;
  }
}
export default reducer;
