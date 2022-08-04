import React, { useEffect, useState } from "react";
import { useQueries } from "react-query";
import Api from "../../service/Api";
//수정해야함
export default function Main() {
  const getUserData = async () => {
    try {
      const res = await Api.get("/users");
      return res.data;
    } catch (e) {
      console.log(e);
    }
  };
  const { status, data, error } = useQueries("users", getUserData());
  useEffect(() => {}, []);
  return <div>Main</div>;
}
