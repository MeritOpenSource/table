import "./Table.css";
import React, { useState } from "react";

type Props = {
  data: any[];
};

export function Table({ data }: Props) {
  const [sortedData, setSortedData] = useState(data);
  const headers = Object.keys(data[0]);

  function sort(sortBy: string) {
    const sorted = [...data].sort((a: any, b: any) => a[sortBy].toString().localeCompare(b[sortBy].toString()));

    setSortedData(sorted);
  }

  return (
    <table data-testid="table">
      <tbody data-testid="tbody">
        <tr>
          {headers.map((header) => (
            <td
              className="heading"
              data-testid={`heading-${header}`}
              key={header}
              onClick={() => {
                sort(header);
              }}
            >
              {header}
            </td>
          ))}
        </tr>

        {sortedData.map((datum, i) => (
          <tr key={i}>
            {Object.values(datum).map((a: any, i) => (
              <td key={i}>{a}</td>
            ))}
          </tr>
        ))}
      </tbody>
    </table>
  );
}
