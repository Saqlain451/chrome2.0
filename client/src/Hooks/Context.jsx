import React, { useContext, useState } from "react";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// create context ----->
const appContext = React.createContext();

// create provide ------>

const AppProvider = ({ children }) => {
  const [isShowForm, setIsShowForm] = useState(false);
  const changeShow = () => {
    setIsShowForm(true);
  };

  // add bookmarks ---->

  const [bookmarkData, setBookmarkData] = useState({
    name: "",
    link: "",
    type: "",
    icon: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setBookmarkData({ ...bookmarkData, [name]: value });
  };

  const api = import.meta.env.VITE_API;
  //   console.log(api)

  const postApiData = async (url, inpData) => {
    try {
      const data = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(inpData),
      });
      const res = await data.json();
      res.msg
        ? toast.success(res.msg, {
            position: "top-center",
            autoClose: 2000,
            theme: "dark",
          })
        : toast.error(res.err, {
            position: "top-center",
            autoClose: 2000,
            theme: "dark",
          });
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <appContext.Provider
      value={{
        isShowForm,
        changeShow,
        setIsShowForm,
        bookmarkData,
        handleChange,
        postApiData,
        api,
      }}
    >
      {children}
    </appContext.Provider>
  );
};

// create a global hook to pass all the state ---->
const useGlobalHook = () => useContext(appContext);

export { AppProvider, useGlobalHook };
