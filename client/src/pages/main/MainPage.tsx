import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";
import Main from "../../components/main/Main";

export default function MainPage() {
  return (
    <Routes>
      <Route path="/" element={<Main />}></Route>
    </Routes>
  );
}
