import React from "react";
import { useGlobalHook } from "../Hooks/Context";

const AddForm = () => {

    const{setIsShowForm} = useGlobalHook()
    const handleChange= ()=>{

    }

    const submitHandler = (e)=>{
        e.preventDefault();
        setIsShowForm(false)
    }
  return (
    <>
    <div className="form-wrapper"></div>
      <form onSubmit={submitHandler} className="form-modal">
        <input type="text" name="" placeholder="" value={""} onChange={handleChange}/>
        <input type="text" name="" placeholder="" value={""} onChange={handleChange}/>
        <input type="text" name="" placeholder="" value={""} onChange={handleChange}/>
        <input type="text" name="" placeholder="" value={""} onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddForm;
