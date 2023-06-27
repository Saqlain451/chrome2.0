import React, { useEffect } from "react";
import { useGlobalHook } from "../Hooks/Context";
import { useNavigate } from "react-router-dom";

const AddForm = () => {
    const navigate = useNavigate()
    const{setIsShowForm,bookmarkData, handleChange,submitHandler,isUpdate,updateData,changeUpdateHandler,updateHandler} = useGlobalHook()
    useEffect(()=>{
      if(!localStorage.getItem("user")){
        navigate("/login");
      }
    },[])
  return (
    <>
    <div className="form-wrapper" onClick={()=>{setIsShowForm(false)}}></div>
    {isUpdate?<form onSubmit={updateHandler} className="form-modal">
        <h1>Update bookmark</h1>
        <label htmlFor="">Bookmark Name
        <input type="text" name="name"  value={updateData.name} onChange={changeUpdateHandler}/>
        </label>
        <label htmlFor="">Page Url
        <input type="text" name="link"  value={updateData.link} onChange={changeUpdateHandler}/>
        </label>
        <label htmlFor="">Font Awsome Icon Class
        <input type="text" name="icon"  value={updateData.icon} onChange={changeUpdateHandler}/>
        </label>
        <label htmlFor="">Bookmark Category
        <select name="type" value={updateData.type} onChange={changeUpdateHandler}>
          <option value="">Select Bookmark Category</option>
          <option value="SocialMedia">Social Media</option>
          <option value="CoadingPractice">Coading Practice</option>
          <option value="CodeEditor">Code Editor</option>
          <option value="Ai">Ai</option>
          <option value="Other">Other</option>
        </select>
        </label>
        <button>Update</button>
      </form>: <form onSubmit={submitHandler} className="form-modal">
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
        <select name="type" value={bookmarkData.type} onChange={handleChange}>
          <option value="">Select Bookmark Category</option>
          <option value="SocialMedia">Social Media</option>
          <option value="CoadingPractice">Coading Practice</option>
          <option value="CodeEditor">Code Editor</option>
          <option value="Ai">Ai</option>
          <option value="Other">Other</option>
        </select>
        </label>
        <button>Submit</button>
      </form>}
    </>
  );
};

export default AddForm;
