import React from "react";
import "./App.css";
import { Query } from "./components/query";
import { Pagination } from "./components/Pagination";
// import { MainTest } from "./components/Test";

function App() {
  return (
    <div className="App">
      <Query />
      <Pagination />
      {/* <MainTest /> */}
    </div>
  );
}

export default App;
