import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";

function Search({ onChange, onClick }) {
  return (
    <div>
      <Input
        placeholder="eg. Dogs"
        onChange={(event) => onChange(event.target.value)}
      ></Input>
      <Button color="default" children="Search" onClick={onClick}></Button>
    </div>
  );
}
export default Search;
