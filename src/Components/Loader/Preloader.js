import React from "react";
import "./preloader.css";


const Preloader = () => {
  return (
    <div className="flex items-center justify-center h-[80vh]">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>{" "}
    </div>
  );
};

export default Preloader;
