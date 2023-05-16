import React from "react";
import "./App.css";
import { Query } from "./components/query";
import { Pagination } from "./components/Pagination";
import { InputForm } from "./components/HM39_folder/HM39";
import { List } from "./HM37_folder/List";
import { FormFormik } from "./components/HM40_folder/Form";

function App() {
  return (
    <div className="App">
      <Query />
      <Pagination />
      <InputForm />
      <FormFormik />
      <List />
    </div>
  );
}

export default App;
