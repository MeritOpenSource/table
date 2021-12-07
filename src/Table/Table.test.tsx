import React from 'react';
import { render } from '@testing-library/react';
import { Table } from './Table';

const people = [
  { name: "Stephen", age: 41 },
  { name: "Julia", age: 12 },
  { name: "Potato", age: 9 },
];

test('renders an accessible thead', () => {
  const table = render(<Table data={people} />).getByTestId("table");
  const tableRows = table.querySelectorAll("tr");

  // Must be inside a <thead>
  expect(tableRows[0].parentElement?.nodeName).toBe("THEAD");
});

test('renders the correct number of rows inside tbody', () => {
  const tbody = render(<Table data={people} />).getByTestId("tbody");
  const tableRows = tbody.querySelectorAll("tr");

  // Must match the length of data sent in
  expect(tableRows.length).toEqual(people.length);
});

test('sorts by name correctly', () => {
  const tbody = render(<Table data={people} />).getByTestId("tbody");
  const tableRows = tbody.querySelectorAll("tr");

  const sortedPeople = [...people].sort((a, b) => a.name.localeCompare(b.name));

  sortedPeople.forEach((person, i) => {
    expect(tableRows[i].cells[0].textContent).toBe(person.name);
  });
});

test('sorts by age correctly', () => {
  const tbody = render(<Table data={people} />).getByTestId("tbody");
  const tableRows = tbody.querySelectorAll("tr");

  const sortedPeople = [...people].sort((a, b) => a.age - b.age);

  sortedPeople.forEach((person, i) => {
    expect(tableRows[i].cells[0].textContent).toBe(person.name);
  });
});
