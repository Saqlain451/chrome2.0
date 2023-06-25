import React from "react";
import { useGlobalHook } from "../Hooks/Context";

const AddForm = () => {

    const{setIsShowForm,bookmarkData, handleChange,submitHandler,isUpdate,updateData,changeUpdateHandler,updateHandler} = useGlobalHook()
    
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
        <input type="text" name="type" value={updateData.type} onChange={changeUpdateHandler}/>
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
        <input type="text" name="type" value={bookmarkData.type} onChange={handleChange}/>
        </label>
        <button>Submit</button>
      </form>}
     
    </>
  );
};

export default AddForm;
