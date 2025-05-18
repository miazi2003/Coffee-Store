import React from "react";
import { NavLink } from "react-router";

const Header = () => {
  return (
    <div>
      <div className="navbar bg-[#372727] text-neutral-content flex items-center justify-center gap-4">
        <img className="h-12 w-12 " src="https://i.ibb.co/wrKnvvBj/logo1.png" alt="" />
        <h3 className="font text-3xl ">Espresso Emporium</h3>
      </div>
    </div>
  );
};

export default Header;
