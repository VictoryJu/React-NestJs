import React, { Component } from "react";
import { Route, Routes } from "react-router-dom";
import DragMain from "../../components/drag/DragMain";

export default class Todo extends Component {
  render() {
    return (
      <Routes>
        <Route path="/" element={<DragMain />}></Route>
      </Routes>
    );
  }
}
