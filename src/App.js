import "./styles.css";
import { Routes, Route, Link, Outlet } from "react-router-dom";
import Card from "./components/Card";
import Header from "./components/Header";
import { useState } from "react";
import Start from "./components/Start";

export default function App() {
  //state for start button
  const [start, setStart] = useState(false);

  //function to change start state, and begin game
  function startGame() {
    setStart(true);
  }
  return (
    <div className="App">
      <Header />
      {start ? <Card /> : <Start startGame={startGame} />}
    </div>
  );
}
