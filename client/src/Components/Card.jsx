import React from "react";

const Card = ({ name, link, icon,id,deleteBookmrk}) => {
  return (
    <div className="bookmark">
      <a href={link}>
        <i className={icon} />
        {name}
      </a>
      <div className="icons">
      <i className="fa-solid fa-pen-to-square"></i>
      <i class="fa-solid fa-trash-can" onClick={()=>{deleteBookmrk(id)}}></i>
      </div>
    </div>
  );
};

export default Card;
