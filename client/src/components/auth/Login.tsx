import React, { Component } from "react";
import styled from "styled-components";
import Button from "../../presentational/Button";
import Input from "../../presentational/Input";
import Title from "../../presentational/Title";
import Api from "../../service/Api";

const LoginContainer = styled.div`
  padding-top: 100px;
  width: 100%;
  text-align: center;
`;

const NameInput = styled(Input).attrs((props) => ({
  type: "text",
}));

const PasswordInput = styled(Input).attrs((props) => ({
  type: "password",
}));

const LoginButton = styled(Button)`
  &:hover {
    transition: 0.3s ease-out;
    background-color: red;
    opacity: 0.7;
  }
`;

const login = async (id: string, password: string) => {
  const body = {
    id,
    password,
  };
  const res = await Api.post("/login", body);
  console.log(res);
};

const getUserData = async () => {
  const res = await Api.get("/");
  console.log("클리=ㄱ했삼");

  console.log(res);
};

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
            onClick={async (): Promise<any> => {
              await getUserData();
            }}
            width={580}
            height={50}
            padding={15}
            description={"로그인"}
          ></LoginButton>
        </div>
      </LoginContainer>
    );
  }
}
