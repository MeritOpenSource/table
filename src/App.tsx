import './App.css';
import { Table } from './Table/Table';

type Person = {
  readonly name: string;
  readonly age: number;
}

function App() {
  const people: readonly Person[] = [
    { name: "Stephen", age: 41 },
    { name: "Julia", age: 12 },
    { name: "Potato", age: 9 },
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
