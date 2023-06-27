import React from "react";
import Header from "./Header";
import Search from "./Search";
import Result from "./Result";
import { ToastContainer } from "react-toastify";
const Home = () => {
  return (
    <>
      <Header />
      <Search />
      <Result />
      <ToastContainer />
    </>
  );
};

export default Home;
