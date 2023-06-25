import React from "react";
import { useGlobalHook } from "../Hooks/Context";

const AddForm = () => {

    const{setIsShowForm,bookmarkData, handleChange,postApiData,api} = useGlobalHook()
    
    const submitHandler = (e)=>{
        e.preventDefault();
        postApiData(`${api}/addbookmark`,bookmarkData)
        setIsShowForm(false)
    }

  return (
    <>
    <div className="form-wrapper" onClick={()=>{setIsShowForm(false)}}></div>
      <form onSubmit={submitHandler} className="form-modal">
        <h1>Add bookmark</h1>
        <input type="text" name="name" placeholder="Name" value={bookmarkData.name} onChange={handleChange}/>
        <input type="text" name="link" placeholder="Enter the url" value={bookmarkData.link} onChange={handleChange}/>
        <input type="text" name="icon" placeholder="Enter the image link" value={bookmarkData.icon} onChange={handleChange}/>
        <input type="text" name="type" placeholder="Enter the Category" value={bookmarkData.type} onChange={handleChange}/>
        <button>Submit</button>
      </form>
    </>
  );
};

export default AddForm;
