import React from "react";
import Header from "./Header";
import Search from "./Search";
import Button from "./Button";
import Result from "./Result";
import { ToastContainer } from "react-toastify";
const Home = () => {
  return (
    <>
      <Header />
      <Search />
      {/* <Button /> */}
      <Result />
      <ToastContainer />
    </>
  );
};

export default Home;
