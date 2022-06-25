import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import React from "react";
import Main from "./components/main/Main";
import Auth from "./pages/auth/Auth";

function App() {
  const client = new QueryClient();
  return (
    <div className="App">
      <QueryClientProvider client={client}>
        <BrowserRouter>
          <Routes>
            <Route path="/auth/*" element={<Auth />}></Route>
            <Route path="/" element={<Main />}></Route>
          </Routes>
        </BrowserRouter>
        <ReactQueryDevtools />
      </QueryClientProvider>
    </div>
  );
}

export default App;
