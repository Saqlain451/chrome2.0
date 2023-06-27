import React, { useContext, useState } from "react";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
// create context ----->
const appContext = React.createContext();

// create provide ------>

const AppProvider = ({ children }) => {

  const userDet = JSON.parse(localStorage.getItem("user"));
  // console.log(userDet.mail)

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
  const [isLogin, setIslogin] = useState(false);
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
      console.log(res);
      if (res.msg) {
        toast.success(res.msg, {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
        });
        if(res.userDetails){
          localStorage.setItem("user",JSON.stringify({...res.userDetails}))
          setIslogin(true);
        }
      } else {
        toast.error(res.err, {
          position: "top-center",
          autoClose: 2000,
          theme: "dark",
        });
      }
    } catch (error) {
      console.error(error);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if(userDet){
      const mail = userDet.mail;
      postApiData(`${api}/addbookmark`, {...bookmarkData,mail});
    }
    setIsShowForm(false);
  };

  // ---------Read all data from api ----->

  const [allBookmarkData, setAllBookmarkData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const getApiData = async (url, setFunc) => {
    // setIsError(false);
    try {
      const data = await fetch(url);
      const res = await data.json();
      res ? setIsLoading(false) : setIsLoading(true);
      res.success.length ? setFunc(res.success) : setIsError(true);
    } catch (error) {
      console.log(error);
    }
  };

  // --------------- try to implement update function -------------->

  const [isUpdate, setIsUpdate] = useState(false);
  const [updateId, setUpdateId] = useState("");
  const [updateData, setUpdateData] = useState({
    name: "",
    link: "",
    type: "",
    icon: "",
  });

  const editBookmark = (id,name,link,icon) => {
    setUpdateId(id);
    setUpdateData({
     name,link,icon
    })
    setIsShowForm(true);
    setIsUpdate(true);
  };

  const changeUpdateHandler = (e) => {
    const { name, value } = e.target;
    setUpdateData({ ...updateData, [name]: value });
  };

  const updateHandler = async (e) => {
    e.preventDefault();
    try {
      const res = await fetch(`${api}/bookmark/${updateId}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updateData),
      });
      const data = await res.json();
      console.log(data.msg);
      data.msg
        ? toast.success(data.msg, {
            position: "top-center",
            autoClose: 2000,
            theme: "dark",
          })
        : toast.error(data.err, {
            position: "top-center",
            autoClose: 2000,
            theme: "dark",
          });
    } catch (error) {
      console.log(error);
    }
    setIsShowForm(false);
  };

  // ---------------------
  const [isGrid, setIsGrid] = useState(false);
  const grid = () => {
    setIsGrid(isGrid ? false : true);
  };

  // -------- Login part -------->

  const [loginData, setLoginData] = useState({
    mail: "",
    pass: "",
  });

  const loginChangeHandler = (e) => {
    const { name, value } = e.target;
    setLoginData({ ...loginData, [name]: value });
  };

  const loginHanlder = (e) => {
    e.preventDefault();
    postApiData(`${api}/login`, { ...loginData });
  };

  // sart register part -------->

  const [registerData, setRegisterData] = useState({
    name: "",
    mail: "",
    pass: "",
    cpass: "",
  });

  const regChangeHanler = (e) => {
    const { name, value } = e.target;
    setRegisterData({ ...registerData, [name]: value });
  };

  const regSubHandler = (e) => {
    e.preventDefault();
    postApiData(`${api}/register`, registerData);
    setRegisterData({
      name: "",
      mail: "",
      pass: "",
      cpass: "",
    });
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
        getApiData,
        setAllBookmarkData,
        allBookmarkData,
        submitHandler,
        isUpdate,
        setIsUpdate,
        updateData,
        changeUpdateHandler,
        editBookmark,
        updateHandler,
        isGrid,
        grid,
        isLoading,
        isError,
        loginData,
        loginChangeHandler,
        loginHanlder,
        isLogin,
        registerData,
        regChangeHanler,regSubHandler
      }}
    >
      {children}
    </appContext.Provider>
  );
};

// create a global hook to pass all the state ---->
const useGlobalHook = () => useContext(appContext);

export { AppProvider, useGlobalHook };
