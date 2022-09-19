import { BrowserRouter, Route, Routes } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";
import "./App.css";
import React from "react";
import Main from "./components/main/Main";
import Auth from "./pages/auth/Auth";
import Todo from "./pages/todo/Todo";
import { RecoilRoot } from "recoil";

function App() {
  const client = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
        refetchOnMount: false,
      },
    },
  });
  return (
    <div className="App">
      <RecoilRoot>
        <QueryClientProvider client={client}>
          <BrowserRouter>
            <Routes>
              <Route path="/auth/*" element={<Auth />}></Route>
              <Route path="/todo/*" element={<Todo />}></Route>
              <Route path="/" element={<Main />}></Route>
            </Routes>
          </BrowserRouter>
          <ReactQueryDevtools />
        </QueryClientProvider>
      </RecoilRoot>
    </div>
  );
}

export default App;
