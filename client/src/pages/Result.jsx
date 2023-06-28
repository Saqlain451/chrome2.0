import React, { useEffect, useState } from "react";
import Card from "../Components/Card";
import { useGlobalHook } from "../Hooks/Context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Components/Loader/Loader";
import { useNavigate } from "react-router-dom";
import AddForm from "../Components/AddForm";
import { BsList } from "react-icons/bs";
import { BiGridAlt } from "react-icons/bi";
const Result = () => {
  const {
    getApiData,
    api,
    setAllBookmarkData,
    allBookmarkData,
    editBookmark,
    isGrid,
    isLoading,
    isError,
    isShowForm,
    changeShow,
    grid,
  } = useGlobalHook();
  const navigate = useNavigate();
  const deleteBookmrk = async (id) => {
    try {
      const data = await fetch(`${api}/delete/${id}`, {
        method: "DELETE",
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
      console.error("Error:", error);
    }
  };

  const [isBtnActive, setIsBtnActive] = useState({
    "Social Media": true,
    "Code Editor": false,
    Deployment: false,
    Ai: false,
    Other: false,
  });
  

  const btnClickHandler = (e) => {
    const name = e.target.innerText;
    setIsBtnActive({ [name]: true });
    if (localStorage.getItem("user")) {
      const userDetails = JSON.parse(localStorage.getItem("user"));
      const mail = userDetails.mail;
      const btnName = name.replace(/\s/g, "");
      console.log(`${api}/bookmarks/${mail}/${btnName}`);
      getApiData(
        `${api}/bookmarks/${mail}/${btnName}`,
        setAllBookmarkData
      );
    }
  };

  useEffect(() => {
    if (localStorage.getItem("user")) {
      const userDetails = JSON.parse(localStorage.getItem("user"));
      const mail = userDetails.mail;
      getApiData(
        `${api}/bookmarks/${mail}/SocialMedia`,
        setAllBookmarkData
      );
    } else {
      navigate("/login");
    }
  }, []);
  return (
    <>
      <div className="button-wrapper">
        <div className="btn-left">
          <button
            className={isBtnActive["Social Media"] ? "active-btn" : ""}
            onClick={btnClickHandler}
          >
            Social Media
          </button>
         
          <button
            className={isBtnActive["Code Editor"] ? "active-btn" : ""}
            onClick={btnClickHandler}
          >
            Code Editor
          </button>
          <button
            className={isBtnActive.Deployment? "active-btn" : ""}
            onClick={btnClickHandler}
          >
            Deployment
          </button>
          <button
            className={isBtnActive.Ai ? "active-btn" : ""}
            onClick={btnClickHandler}
          >
            Ai
          </button>
          <button
            className={isBtnActive.Other ? "active-btn" : ""}
            onClick={btnClickHandler}
          >
            Other
          </button>

          <button
            onClick={changeShow}
            className="btn-add"
            aria-label="add bookmark"
          >
            +
          </button>
        </div>

        <button className="btn-grid" onClick={grid} aria-label="show different">
          {isGrid ? <BsList /> : <BiGridAlt />}
        </button>
      </div>
      {isShowForm && <AddForm />};
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p className="error">
          Do not have any bookmark please add it by clicking add button
        </p>
      ) : (
        <div className={isGrid ? "bookmark-grid-view" : "bookmarks-wrapper"}>
          {allBookmarkData &&
            allBookmarkData.map((bookmarks) => {
              const { _id, name, link, icon } = bookmarks;
              return (
                <Card
                  key={_id}
                  name={name}
                  link={link}
                  icon={icon}
                  id={_id}
                  deleteBookmrk={deleteBookmrk}
                  editBookmark={editBookmark}
                />
              );
            })}
        </div>
      )}
    </>
  );
};

export default Result;
