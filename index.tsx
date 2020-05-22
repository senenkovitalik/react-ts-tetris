import React, { Component } from "react";
import { render } from "react-dom";
import "./style.css";
import Row from './components/row/Row';

function App() {
  const NUM_ROWS = 20;

  return (
    <div className="playing-area">
      {[...Array(NUM_ROWS)].fill(1).map(_ => <Row numCells={10} />)}
    </div>
  );
}

render(<App />, document.getElementById("root"));
