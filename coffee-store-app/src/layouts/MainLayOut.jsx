import React from "react";
import { Outlet } from "react-router";
import Header from "../Component/Header";

const MainLayOut = () => {
  return (
    <div>
        
      <Header></Header>

      <div className="mx-auto">
        <Outlet></Outlet>
      </div>

    </div>
  );
};

export default MainLayOut;
