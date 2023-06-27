import React from "react";


const Card = ({ name, link, icon,id,deleteBookmrk,editBookmark}) => {
  
  return (
    <div className="bookmark">
      <a href={link}>
        <i className={icon} />
        {name}
      </a>
      <div className="icons">
      <i className="fa-solid fa-pen-to-square" onClick={()=>{editBookmark(id,name,link,icon)}}></i>
      <i className="fa-solid fa-trash-can" onClick={()=>{deleteBookmrk(id)}}></i>
      </div>
    </div>
  );
};

export default Card;
