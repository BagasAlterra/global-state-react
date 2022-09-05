import React from "react";
import "../style/Rectangle.css";

const Rectangle = (props) => {
  return (
    <div
      className="card-container"
      style={{ backgroundColor: props.backgroundColor }}
    ></div>
  );
};

export default Rectangle;
