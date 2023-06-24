import React from "react";

const Card = ({name,link,icon,type}) => {
  return (
    <a className="bookmark" href={link}>
      <i className="fa-solid fa-code-branch" />
      {name}
    </a>
  );
};

export default Card;
