import React, { Component } from "react";
import "./counter.css";

export default class ClassBasedCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  
  render() {
    

    return (
      <div className="app">
        <h1>{this.state.count}</h1>
        <button onClick={() => this.setState({ count: this.state.count + 1 })}>+</button>
        <button onClick={() => this.setState({ count: this.state.count - 1 })}>-</button>
      </div>
    );
  }
}
