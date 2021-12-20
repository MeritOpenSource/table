import { Table } from "./Table";
import { render } from "@testing-library/react";
import React from "react";

const people = [
  { age: 41, name: "Stephen" },
  { age: 12, name: "Julia" },
  { age: 9, name: "Potato" },
];

describe("table rendering", () => {
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

  test("renders with empty data", () => {
    const table = render(<Table data={[]} />).getByTestId("table");
    expect(table);
  });
});

describe("table storting", () => {
  test("sorts by { name, ascending } correctly", () => {
    const table = render(<Table data={people} />);
    const nameHeader = table.getByTestId("heading-name");
    nameHeader.click();

    const correctSorting = [
      { age: 12, name: "Julia" },
      { age: 9, name: "Potato" },
      { age: 41, name: "Stephen" },
    ];

    const tableRows = table.getByTestId("tbody").querySelectorAll("tr");
    const nameIndex = 1;
    tableRows.forEach((row, index) => {
      expect(row.querySelectorAll("td")[nameIndex]).toHaveTextContent(correctSorting[index].name);
    });
  });

  test("sorts by { name, descending } correctly", () => {
    const table = render(<Table data={people} />);
    const nameHeader = table.getByTestId("heading-name");
    nameHeader.click();
    nameHeader.click();

    const correctSorting = [
      { age: 41, name: "Stephen" },
      { age: 9, name: "Potato" },
      { age: 12, name: "Julia" },
    ];

    const tableRows = table.getByTestId("tbody").querySelectorAll("tr");
    const nameIndex = 1;
    tableRows.forEach((row, index) => {
      expect(row.querySelectorAll("td")[nameIndex]).toHaveTextContent(correctSorting[index].name);
    });
  });

  test("sorts by { age, ascending } correctly", () => {
    const table = render(<Table data={people} />);
    const ageHeader = table.getByTestId("heading-age");
    ageHeader.click();

    const correctSorting = [
      { age: 9, name: "Potato" },
      { age: 12, name: "Julia" },
      { age: 41, name: "Stephen" },
    ];

    const tableRows = table.getByTestId("tbody").querySelectorAll("tr");
    const ageIndex = 0;
    tableRows.forEach((row, index) => {
      expect(row.querySelectorAll("td")[ageIndex]).toHaveTextContent(correctSorting[index].age.toString());
    });
  });

  test("sorts by { age, descending } correctly", () => {
    const table = render(<Table data={people} />);
    const ageHeader = table.getByTestId("heading-age");
    ageHeader.click();
    ageHeader.click();

    const correctSorting = [
      { age: 41, name: "Stephen" },
      { age: 12, name: "Julia" },
      { age: 9, name: "Potato" },
    ];

    const tableRows = table.getByTestId("tbody").querySelectorAll("tr");
    const ageIndex = 0;
    tableRows.forEach((row, index) => {
      expect(row.querySelectorAll("td")[ageIndex]).toHaveTextContent(correctSorting[index].age.toString());
    });
  });
});
