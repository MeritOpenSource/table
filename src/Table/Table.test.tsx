import { Table } from "./Table";
import { render } from "@testing-library/react";
import React from "react";

const people = [
  { age: 41, name: "Stephen" },
  { age: 12, name: "Julia" },
  { age: 9, name: "Potato" },
];

test("renders with empty data", () => {
  const table = render(<Table data={[]} />).getByTestId("table");
  expect(table);
});

test("renders an accessible thead", () => {
  const table = render(<Table data={people} />).getByTestId("table");
  const tableRows = table.querySelectorAll("tr");

  // Must be inside a <thead>
  expect(tableRows[0].parentElement?.nodeName).toBe("THEAD");
});

test("renders the correct number of rows inside tbody", () => {
  const tbody = render(<Table data={people} />).getByTestId("tbody");
  const tableRows = tbody.querySelectorAll("tr");

  // Must match the length of data sent in
  expect(tableRows.length).toEqual(people.length);
});

test("sorts by name correctly", () => {
  const tbody = render(<Table data={people} />).getByTestId("tbody");
  const tableRows = tbody.querySelectorAll("tr");

  const sortedPeople = [...people].sort((a, b) => a.name.localeCompare(b.name));

  sortedPeople.forEach((person, i) => {
    expect(tableRows[i].cells[0].textContent).toBe(person.name);
  });
});

test("sorts by age correctly", () => {
  const tbody = render(<Table data={people} />).getByTestId("tbody");
  const tableRows = tbody.querySelectorAll("tr");

  const sortedPeople = [...people].sort((a, b) => a.age - b.age);

  sortedPeople.forEach((person, i) => {
    expect(tableRows[i].cells[0].textContent).toBe(person.name);
  });
});
