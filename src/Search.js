import React, { Component } from "react";
import Input from "@material-ui/core/Input";
import Button from "@material-ui/core/Button";
const apiURL = "https://www.reddit.com/subreddits/search.json?q=";

class Search extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      input: "",
    };
  }

  updateState = (value) => {
    this.setState({ input: value });
  };

  subredditSearch = () => {
    fetch(`${apiURL}${this.state.input}`, {
      headers: { "User-agent": "your bot 0.1" },
    }).then((res) =>
      res.json().then((res) => {
        let results = res.data.children.map((child) => ({
          image: child.data.header_img,
          title: child.data.title,
          description: child.data.description,
          url: child.data.url,
          id: child.data.id,
        }));
        this.setState({ results });
      })
    ); //what happens if you error out?
  };
  render() {
    return (
      <div>
        <Input
          placeholder="eg. Dogs"
          onChange={(event) => this.updateState(event.target.value)}
        ></Input>
        <Button
          color="default"
          children="Search"
          onClick={this.subredditSearch}
        ></Button>
      </div>
    );
  }
}

export default Search;
