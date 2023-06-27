import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useGlobalHook } from "../Hooks/Context";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Loader from "../Components/Loader/Loader";
import {useNavigate} from 'react-router-dom'
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
  } = useGlobalHook();
  const navigate = useNavigate()
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

  useEffect(() => {
    
    if(localStorage.getItem("user")){
      const userDetails = JSON.parse(localStorage.getItem("user"))
      const mail = userDetails.mail
      getApiData(`${api}/bookmarks/${mail}`, setAllBookmarkData);
    }else{
      navigate("/login")
    }
    
  }, [allBookmarkData]);
  return (
    <>
      {isLoading ? (
        <Loader />
      ) : isError ? (
        <p className="error">Do not have any bookmark please add it by clicking add button</p>
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
