import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../components/auth/Login";
import Regist from "../../components/auth/Regist";

export default class Auth extends Component {
  render() {
    return (
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/regist" element={<Regist />}></Route>
        </Routes>
      </BrowserRouter>
    );
  }
}
