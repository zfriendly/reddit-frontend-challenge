import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
import "./App.css";

function Search({ onChange, onClick }) {
  return (
    <div class="search_table">
      <Input
        placeholder="eg. Dogs"
        onChange={(event) => onChange(event.target.value)}
      ></Input>
      <Button id="button" children="Search" onClick={onClick}></Button>
    </div>
  );
}
export default Search;
