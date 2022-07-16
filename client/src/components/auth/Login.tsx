import React, { Component, useState } from "react";
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

const IdInput = styled(Input)``;
const PasswordInput = styled(Input)``;

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

function Login() {
  const [data, setData] = useState("받아오기전");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const inputUserId = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("아이디입력중");
    const { value } = e.target;
    setUserId(value);
  };
  const inputUserPassowrd = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const getUserData = async () => {
    try {
      const res = await Api.get("http://localhost:8000/");
      console.log(res.data);
      setData(res.data);
    } catch (e) {
      console.log(e);
    }
  };

  const showInfo = () => {
    console.log("불렀다");

    console.log(userId, password);
  };

  return (
    <LoginContainer>
      <Title fontSize={24} fontWeight={600} description={"로그인창"}></Title>
      <div>
        <IdInput onChange={inputUserId} width={550} fontSize={15} />
      </div>
      <div style={{ marginTop: "10px" }}>
        <PasswordInput
          onChange={(e) => setUserId(e.target.value)}
          width={550}
          fontSize={15}
        />
      </div>
      <div style={{ marginTop: "20px" }}>
        <button
          onClick={async () => {
            await getUserData();
            showInfo();
          }}
          style={{ width: "580px", height: "50px" }}
        >
          {data}
        </button>
        <LoginButton
          onClick={async () => {
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

export default Login;
