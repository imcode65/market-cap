import React from "react";
import { Routes, Route } from "react-router-dom";
import Navbar from "./layouts/Navbar";
import Dashboard from "./layouts/Dashbaord";
import "./App.css";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Dashboard />}></Route>
      </Routes>
    </>
  );
}

export default App;
