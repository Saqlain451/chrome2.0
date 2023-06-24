import React from "react";
import Card from "../Components/Card";
import AddForm from "../Components/AddForm";
import { useGlobalHook } from "../Hooks/Context";

const Result = () => {
    const{isShowForm,changeShow} = useGlobalHook()
  return (
    <>
      <div className="bookmarks-wrapper">
        <Card />
        <button onClick={changeShow}>add</button>
      </div>
      {isShowForm && <AddForm />}
      
    </>
  );
};

export default Result;
