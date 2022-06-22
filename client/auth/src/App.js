import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./component/auth/login";
import Auth from "./component/auth/regist";
import Main from "./component/main/main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/login" element={<Login />}></Route>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/main" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
