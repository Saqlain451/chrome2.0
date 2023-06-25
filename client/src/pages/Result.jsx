import React, { useEffect } from "react";
import Card from "../Components/Card";
import { useGlobalHook } from "../Hooks/Context";
import {toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
const Result = () => {
  const {
    getApiData,
    api,
    setAllBookmarkData,
    allBookmarkData,
    submitHandler,
    editBookmark,
    isGrid
  } = useGlobalHook();


  const deleteBookmrk = async (id) => {
    try {
      const data = await fetch(`${api}/delete/${id}`,{
        method:"DELETE"
      })
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
      console.error('Error:', error);
    }
  };

  


  useEffect(() => {
    getApiData(`${api}/bookmarks`, setAllBookmarkData);
  }, [submitHandler]);
  return (
    <>
      <div className= {isGrid?"bookmark-grid-view" : "bookmarks-wrapper"}>
        {allBookmarkData && allBookmarkData.map((bookmarks) => {
          const { _id, name, link, icon } = bookmarks;
          return (
            <Card
              key={_id}
              name={name}
              link={link}
              icon={icon}
              id={_id}
              deleteBookmrk={deleteBookmrk}
              editBookmark = {editBookmark}
            />
          );
        })}
      </div>
    </>
  );
};

export default Result;
