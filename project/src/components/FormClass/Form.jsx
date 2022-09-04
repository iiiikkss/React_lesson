import React, { Component } from "react";
import { Button } from "./Button";
import { Input } from "./Input";

export class From extends Component {
  state = {
    visible: true,
    count: 0,
    name: "click",
  };

  componentDidMount() {
    console.log("did mount form");
  }

  handleVisible = () => {
    this.setState({ visible: !this.state.visible });
  };

  handleChangeName = (event) => {
    this.setState({ name: event.target.value });
  };

  handleChangeCount = () => {
    this.setState({ count: this.state.count + 1 });
  };

  render() {
    return (
      <>
        <h3>Parent Component</h3>
        <button onClick={this.handleVisible}>
          {this.state.visible ? "hide" : "visible"}
        </button>
        <br />
        <p>{this.state.count}</p>
        <button onClick={this.handleChangeCount}>count + 1 </button>
        <h3>Child Component</h3>
        {this.state.visible && <Button count={this.state.count} />}
        <br />
        <p>Name: {this.state.name}</p>
        <Input value={this.state.name} change={this.handleChangeName} />
      </>
    );
  }
}
