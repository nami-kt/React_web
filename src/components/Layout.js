import React from "react";
import Header from "./Header";
import Content from "./Content";

export default class Layout extends React.Component {
  render() {
    return (
      <div className="App">
        <Header />
        <h1>Layout</h1>
        <Content />
      </div>
    );
  }
}
