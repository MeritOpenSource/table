import "./App.css";
import { Table } from "./Table/Table";
import React from "react";

type Person = {
  name: string;
  age: number;
};

function App() {
  const people: Person[] = [
    { age: 41, name: "Stephen" },
    { age: 12, name: "Julia" },
    { age: 9, name: "Potato" },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <Table data={people} />
      </header>
    </div>
  );
}

export default App;
