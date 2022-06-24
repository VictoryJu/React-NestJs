import React, { Component } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "../../components/auth/login";
import Regist from "../../components/auth/regist";
export default class auth extends Component {
  render() {
    return (
      <BrowserRouter>
        <Route path="/login" element={<Login />}></Route>
        <Route path="/regist" element={<Regist />}></Route>
      </BrowserRouter>
    );
  }
}
