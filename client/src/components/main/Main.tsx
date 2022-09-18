import axios from "axios";
import React, { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { Link, useNavigate } from "react-router-dom";
import Api from "../../service/Api";

interface IUser {
  id: number;
  name: string;
  age: number;
}

const Main = () => {
  const getUser = async () => {
    const { data } = await Api.get("http://localhost:8000/users");
    return data;
  };
  const navigate = useNavigate();
  const goTodo = () => {
    navigate("/todo");
  };

  const { isLoading, data, error } = useQuery(["users"], getUser);
  if (data) {
    return (
      <>
        {data.map((v: IUser, idx: number) => {
          return (
            <div key={v.id}>
              <span>{v.name}</span>
              <span>{v.age}</span>
            </div>
          );
        })}
        <button onClick={() => goTodo()}>Todo로 이동</button>
      </>
    );
  } else if (isLoading) {
    return <h1>... isLoading</h1>;
  } else return;
};

export default Main;
