import logo from "./logo.svg";
import "./App.css";
import React from "react";
import Crossword from "@jaredreisinger/react-crossword";

const data = {
  across: {
    1: {
      clue: "mots",
      answer: "MOTS",
      row: 0,
      col: 0,
    },
  },
  down: {
    2: {
      clue: "berguedans al revés",
      answer: "SNADEGUEB",
      row: 0,
      col: 3,
    },
  },
};
function App() {
  return (
    <div className="App">
      <Crossword data={data} />;
    </div>
  );
}

export default App;
