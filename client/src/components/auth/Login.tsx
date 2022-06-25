import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../presentational/Button";
import Input from "../../presentational/Input";
import Title from "../../presentational/Title";

const LoginContainer = styled.div`
  padding-top: 100px;
  width: 100%;
  text-align: center;
`;

const LoginButton = styled(Button)`
  &:hover {
    transition: 0.3s ease-out;
    background-color: red;
    opacity: 0.7;
  }
`;

export default class Login extends Component {
  render() {
    return (
      <LoginContainer>
        <Title fontSize={24} fontWeight={600} description={"로그인창"}></Title>
        <div>
          <Input width={550} fontSize={15}></Input>
        </div>
        <div style={{ marginTop: "10px" }}>
          <Input width={550} fontSize={15}></Input>
        </div>
        <div style={{ marginTop: "20px" }}>
          <LoginButton
            width={550}
            height={50}
            padding={15}
            description={"로그인"}
          ></LoginButton>
        </div>
      </LoginContainer>
    );
  }
}
