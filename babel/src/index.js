import React from "react";
import ReactDOM from "react-dom";
class HelloMessage extends React.Component {
  render() {
    return <div>Hello {this.props.name}</div>;
  }
}

// root.render(<HelloMessage name="Taylor" />);
ReactDOM.render(HelloMessage, document.querySelector(".hello-message"));
