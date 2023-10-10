// src/components/Table.js
import React from "react";

const Table = ({ data }) => {
  return (
    <table>
      <thead>
        <tr>
          <th>ID</th>
          <th>Year</th>
          <th>Medals</th>
        </tr>
      </thead>
      <tbody>
        {data.map((item) => (
          <tr key={item.Id}>
            <td>{item.Id}</td>
            <td>{item.Year}</td>
            <td>{item.Medals}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default Table;
