import { useState } from "react";
import { addPoints } from "../actions/actions";
import { connect } from "react-redux";

function RightAnswer(props) {
  const { answer, id, handleClick, dispatch, value } = props;

  //background state to trigger color changes when selected
  const [background, setBackground] = useState(true);

  let styles = {
    backgroundColor: !background && "#06d6a0",
    color: !background && "white",
    boxShadow: !background && "0px 10px 10px rgba(27, 154, 170, .5)"
  };

  //runs the function to confirm question is right, changes background color, and increments points
  function click() {
    handleClick(id);
    setBackground(false);
    dispatch(addPoints());
  }

  return (
    <div
      onClick={() => click(id)}
      className="answer right"
      id={id}
      key={id}
      style={styles}
    >
      {answer}
    </div>
  );
}

function mapStateToProps(state) {
  return {
    value: state
  };
}
export default connect(mapStateToProps)(RightAnswer);
