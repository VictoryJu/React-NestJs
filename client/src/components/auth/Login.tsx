import React, { Component } from "react";
import Title from "../../presentational/Title";

export default class Login extends Component {
  render() {
    return (
      <Title fontSize={24} fontWeight={600} description={"로그인창"}></Title>
    );
  }
}
