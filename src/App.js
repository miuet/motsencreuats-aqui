import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Crossword from "@jaredreisinger/react-crossword";

const data = {
  across: {
    1: {
      clue: "PISTA",
      answer: "PARAULA",
      row: 0,
      col: 0,
    },
    5: {
      clue: "PISTA2",
      answer: "PARAULA2",
      row: 2,
      col: 0,
    },
    6: {
      clue: "PISTA3",
      answer: "PARAULA3",
      row: 4,
      col: 0,
    },
    // Add more words here
  },
  down: {
    2: {
      clue: "PISTA4",
      answer: "PARAULA4",
      row: 0,
      col: 2,
    },
    3: {
      clue: "PISTA5",
      answer: "PARAULA5",
      row: 0,
      col: 4,
    },
    4: {
      clue: "PISTA6",
      answer: "PARAULA6",
      row: 0,
      col: 6,
    },
    // Add more words here
  },
};
function App() {
  return (
    <div className="App">
      <div className="encreuats">
        <Crossword data={data} />;
      </div>
    </div>
  );
}

export default App;
