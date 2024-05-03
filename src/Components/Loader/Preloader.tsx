import React from "react";
import "./preloader.css";
type Props = {};

const Preloader = (props: Props) => {
  return (
    <div className="flex items-center justify-center h-[100vh]">
      <div className="three-body">
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
        <div className="three-body__dot"></div>
      </div>{" "}
    </div>
  );
};

export default Preloader;
