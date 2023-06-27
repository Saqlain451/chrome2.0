import React, { useState } from "react";
import { useGlobalHook } from "../Hooks/Context";
import AddForm from "../Components/AddForm";
import { BiGridAlt } from "react-icons/bi";
import { BsList } from "react-icons/bs";
const Button = () => {
  const { isShowForm, changeShow, isGrid, grid, getApiData, setAllBookmarkData,api } = useGlobalHook();

  const [isBtnActive, setIsBtnActive] = useState({
    "Social Media" : true,
    "Coading Practice" : false,
    "Code Editor" : false,
    "Ai" : false,
    Other : false
  })

  const btnClickHandler = (e)=>{
    const name  = e.target.innerText;
    setIsBtnActive({[name] : true})
    if(localStorage.getItem("user")){
      const userDetails = JSON.parse(localStorage.getItem("user"))
      const mail = userDetails.mail
      const btnName = name.replace(/\s/g, "");
      console.log(`${api}/bookmarks/${mail}/${btnName}`)
      getApiData("https://chrome-vkfx.onrender.com/bookmarks/jobs.sakil.mustak@gmail.com/SocialMedia", setAllBookmarkData)
  }
  }

  return (
    <>
      <div className="button-wrapper">
        <div className="btn-left">
          <button className= {isBtnActive["Social Media"]? "active-btn" : ""}  onClick={btnClickHandler}>
            Social Media
          </button>
          <button className={isBtnActive["Coading Practice"]? "active-btn" : ""} onClick={btnClickHandler}>
            Coading Practice
          </button>
          <button className={isBtnActive["Code Editor"]? "active-btn" : ""} onClick={btnClickHandler}>
            Code Editor
          </button>
          <button className={isBtnActive.Ai? "active-btn" : ""} onClick={btnClickHandler}>
            Ai
          </button>
          <button className={isBtnActive.Other? "active-btn" : ""} onClick={btnClickHandler}>
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
    </>
  );
};

export default Button;
