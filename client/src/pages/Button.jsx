import React from "react";
import { useGlobalHook } from "../Hooks/Context";
import AddForm from "../Components/AddForm";
import { BiGridAlt } from "react-icons/bi";
import { BsList } from "react-icons/bs";
const Button = () => {
  const { isShowForm, changeShow, isGrid, grid } = useGlobalHook();
  return (
    <>
      <button onClick={changeShow} className="buttons">
        <i className="fa-solid fa-plus" title="Add Bookmarks"></i>
      </button>
      <button className="btn-grid" onClick={grid}>
       {isGrid? <BsList/> :<BiGridAlt />} 
      </button>
      {isShowForm && <AddForm />};
    </>
  );
};

export default Button;
