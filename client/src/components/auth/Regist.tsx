import React, { Component, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import Button from "../../presentational/Button";
import Input from "../../presentational/Input";
import Api from "../../service/Api";

function Regist() {
  const IdInput = styled(Input)``;
  const PasswordInput = styled(Input).attrs({ type: "password" })``;
  const EmailInput = styled(Input)``;

  const [userId,setUserId] = useState("");
  const [password,setPassword] = useState("");
  const [email,setEmail] = useState("");
  const navigate = useNavigate();
  const regist = async () =>{
    try{
      const res = await Api.post("http://localhost:8000/users/regist",{
        userId,password,email
      });
      if(res.status===200){
        alert('회원가입이 성공하였습니다.');
        navigate('/');
      }
    }catch(e){
      console.log(e);
    }
  }
  return (
    <div>
      <IdInput width={550} fontSize={14} />
      <PasswordInput width={550} fontSize={14} />
      <EmailInput width={550} fontSize={14} />
      <Button width={550} height={50} description={"회원가입"} onClick{async ()=> { 
        await regist();
        }} ></Button>
    </div>
  );
}

export default Regist;
