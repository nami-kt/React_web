import React from "react";

export default class Content extends React.Component {
  constructor() {
    super();
    this.state = { counter: 0 };
  }

  render() {
    return (
      <div>
        Uz jste klikli: {this.state.counter} krat
        <br />
        <button onClick={e => this.handleClick(e)}>Click content</button>
        <button onWheel={e => this.handleWheel(e)}>Wheel content</button>
      </div>
    );
  }

  handleClick(e) {
    this.setState({ counter: this.state.counter + 1 });
  }

  handleWheel(e) {
    this.setState({ counter: this.state.counter * 13 + 1 });
  }
}
