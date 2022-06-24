import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Main from "../src/pages/main";
import Auth from "../src/pages/auth";

function App() {
  return (
    // eslint-disable-next-line react/react-in-jsx-scope
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
