import React, { Component } from "react";
import Nav from "./Nav";
import Search from "./Search";
import Results from "./Results";
import "./App.css";
const apiURL = "https://www.reddit.com/subreddits/search.json?q=";

class App extends Component {
  constructor() {
    super();
    this.state = {
      results: [],
      selectedResult: "",
      recentPosts: [],
      input: "",
    };
  }

  displayPosts = (path) => {
    fetch(`https://www.reddit.com${path}new.json?count=10`, {
      headers: { "User-agent": "your bot 0.1" },
    })
      .then((res) => res.json())
      .then((res) => {
        let posts = res.data.children.map((child) => ({
          title: child.data.title,
          text: child.data.selftext,
          link: child.data.permalink,
        }));
        this.setState({ recentPosts: posts });
      });
  };

  updateSearch = (value) => {
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
          description: child.data.public_description,
          url: child.data.url,
          id: child.data.id,
        }));
        this.setState({ results });
      })
    );
  };
  render() {
    return (
      <div>
        <Nav />
        <div class="search">
          <Search onClick={this.subredditSearch} onChange={this.updateSearch} />
          <Results results={this.state.results} onClick={this.displayPosts} />
        </div>
      </div>
    );
  }
}

export default App;
