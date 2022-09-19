import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../presentational/Button";
import Input from "../../presentational/Input";
import Title from "../../presentational/Title";
import Api from "../../service/Api";
import { useRecoilState } from "recoil";
import { tokenState } from "../../states/tokenState";

const LoginContainer = styled.div`
  padding-top: 100px;
  width: 100%;
  text-align: center;
`;

const IdInput = styled(Input)``;
const PasswordInput = styled(Input)``;

const LoginButton = styled(Button)``;
const RegistButton = styled(Button)``;

function Login() {
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

  const navigate = useNavigate();
  const [token, setToken] = useRecoilState(tokenState);
  const login = async () => {
    try {
      const res = await Api.post("http://localhost:8000/users/login", {
        userId,
        password,
      });
      console.log(res.data);
      if (res.status === 200) {
        setToken(true);
        navigate("/main");
      }
    } catch (e) {
      console.log(e);
    }
  };
  const tempLogin = () => {
    setToken(true);
    navigate("/todo");
  };

  return (
    <LoginContainer>
      <Title fontSize={24} fontWeight={600} description={"로그인창"}></Title>
      <div>
        <IdInput onChange={inputUserId} width={550} fontSize={15} />
      </div>
      <div style={{ marginTop: "10px" }}>
        <PasswordInput onChange={inputUserPassowrd} width={550} fontSize={15} />
      </div>
      <div style={{ marginTop: "20px" }}>
        <LoginButton
          onClick={async () => {
            await tempLogin();
          }}
          width={580}
          height={50}
          padding={15}
          description={"로그인"}
        ></LoginButton>
      </div>
      <div style={{ marginTop: "5px" }}>
        <RegistButton
          onClick={() => navigate("../regist")}
          width={580}
          height={50}
          padding={15}
          description={"회원가입"}
        />
      </div>
    </LoginContainer>
  );
}

export default Login;
