import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Auth from "./pages/auth/auth";
import Main from "./pages/auth/main";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/auth" element={<Auth />}></Route>
          <Route path="/main" element={<Main />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
