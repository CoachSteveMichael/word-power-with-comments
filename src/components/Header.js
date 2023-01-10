import React from "react";
import { connect } from "react-redux";

//simple Header component set up in flexbox

function Header(props) {
  const { value } = props;

  return (
    <header>
      <div className="profile">
        <img src="img/student.png" alt="" />
        <div className="current-score">
          <p>score</p>
          <p>{value?.score}</p>
        </div>
      </div>
      <div className="timer">
        <img src="img/home (1).png" alt="" />
      </div>
      <div className="highscore">
        <div className="current-score right-side">
          <p>hi score</p>
          <p>{value.hiScore}</p>
        </div>
        <img src="img/high-score (1).png" alt="" />
      </div>
    </header>
  );
}

function mapStateToProps(state) {
  return {
    value: state
  };
}
export default connect(mapStateToProps)(Header);
