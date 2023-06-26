import React from "react";
import { useGlobalHook } from "../Hooks/Context";
import AddForm from "../Components/AddForm";
import { BiGridAlt } from "react-icons/bi";
import { BsList } from "react-icons/bs";
import {MdAdd} from 'react-icons/md'
const Button = () => {
  const { isShowForm, changeShow, isGrid, grid } = useGlobalHook();
  return (
    <>
    <div className="button-wrapper">
      <button onClick={changeShow} className="btn-add" aria-label="add bookmark">
        <MdAdd/>
      </button>
      <button className="btn-grid" onClick={grid} aria-label="show different">
       {isGrid? <BsList/> :<BiGridAlt />} 
      </button>
    </div>
      {isShowForm && <AddForm />};
    </>
  );
};

export default Button;
