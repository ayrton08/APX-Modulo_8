import React from "react";
import { FormLogin } from "./FormLogin";
import { ThankYou } from "./ThankYou";

export class App extends React.Component<any, any> {
  constructor(props) {
    super(props);
    this.state = {
      loggedIn: false,
    };
  }

  onLogin(userData) {
    console.log("soy app on login");
    this.setState({
      loggedIn: true,
    });
  }

  render() {
    const showForm = !this.state.loggedIn;
    return showForm ? (
      <FormLogin onLogin={(val) => this.onLogin(val)} />
    ) : (
      <ThankYou />
    );
  }
}
