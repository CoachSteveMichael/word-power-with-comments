import { connect } from "react-redux";
import store from "../store/store";
import { INCREMENT_COUNT, INCREMENT_SCORE } from "../utils/constants";

//action that increases score
function addPoints() {
  return {
    type: INCREMENT_SCORE,
    payload: 10
  };
}

export { addPoints };
