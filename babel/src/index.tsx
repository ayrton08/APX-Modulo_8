import React from "react";
import ReactDOM from "react-dom";
import { Button } from "./button";
// const React = require("react");
// const ReactDOM = require("react-dom");
class Home extends React.Component<any> {
  constructor(props) {
    super(props);
  }
  render() {
    return <div><Button>Hello</Button></div>;
  }
}

// root.render(<HelloMessage name="Taylor" />);
ReactDOM.render(<Home />, document.querySelector(".hello-message"));
