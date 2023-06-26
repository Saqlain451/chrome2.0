import React from "react";
import Home from "./pages/Home";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Login from "./pages/Log/Login";
import { ToastContainer } from "react-toastify";
import Register from "./pages/Register/Register";
const App = () => {
  return (
    <>
     <BrowserRouter>
        <Routes>
          <Route index element={<Home/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/register" element={<Register/>}/>
        </Routes>
        <ToastContainer/>
     </BrowserRouter>
    </>
  );
};

export default App;
