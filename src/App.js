import React, { useState } from "react";
import data from "./dummy.js";
import Table from "./components/Table";
import Chart from "./components/Chart";
import "./App.css";

export default function App() {
  const [showTable, setShowTable] = useState(true);

  const toggleView = () => {
    setShowTable(!showTable);
  };
  return (
    <div className="App">
      <h1>Tracker</h1>
      <div className="toggle-container">
        <button onClick={toggleView}>
          {showTable ? "Show Chart" : "Show Table"}
        </button>
      </div>
      {showTable ? <Table data={data} /> : <Chart data={data} />}
    </div>
  );
}
