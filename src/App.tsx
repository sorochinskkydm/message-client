import React from "react";
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Main from "./pages/Main/Main";
import Auth from "./pages/Auth/Auth";
import Register from "./pages/Register/Register";
import CreateProject from "./pages/CreateProject/CreateProject";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Auth />} />
        <Route path="/main" element={<Main />} />
        <Route path="/register" element={<Register />} />
        <Route path="/create-project" element={<CreateProject />} />
      </Routes>
    </div>
  );
}

export default App;
