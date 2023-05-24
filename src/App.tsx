import React from "react";
import "./App.css";
import { Query } from "./components/query";
import { Pagination } from "./components/Pagination";
import { InputForm } from "./components/HM39_folder/HM39";
import { List } from "./HM37_folder/List";
import { FormFormik } from "./components/HM40_folder/Form";
import { Form41 } from "./components/HM41_folder/Form";
import { Form42 } from "./components/HM42_folder/Form42";

function App() {
  return (
    <div className="App">
      <Query />
      <Pagination />
      <InputForm />
      <FormFormik />
      <Form41 />
      <Form42 />

      <List />
    </div>
  );
}

export default App;
