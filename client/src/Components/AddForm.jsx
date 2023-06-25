import React from "react";
import { useGlobalHook } from "../Hooks/Context";

const AddForm = () => {

    const{setIsShowForm,bookmarkData, handleChange,submitHandler} = useGlobalHook()
    
   

  return (
    <>
    <div className="form-wrapper" onClick={()=>{setIsShowForm(false)}}></div>
      <form onSubmit={submitHandler} className="form-modal">
        <h1>Add bookmark</h1>
        <label htmlFor="">Bookmark Name
        <input type="text" name="name"  value={bookmarkData.name} onChange={handleChange}/>
        </label>
        <label htmlFor="">Page Url
        <input type="text" name="link"  value={bookmarkData.link} onChange={handleChange}/>
        </label>
        <label htmlFor="">Font Awsome Icon Class
        <input type="text" name="icon"  value={bookmarkData.icon} onChange={handleChange}/>
        </label>
        <label htmlFor="">Bookmark Category
        <input type="text" name="type" value={bookmarkData.type} onChange={handleChange}/>
        </label>
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddForm;
