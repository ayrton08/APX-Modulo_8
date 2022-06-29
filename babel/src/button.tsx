import React from "react";
import ReactDOM from "react-dom";

export class Button extends React.Component {
  render() {
    return (
      <button style={{ backgroundColor: "aqua" }}>
        {this.props["children"]}
      </button>
    );
  }
}
