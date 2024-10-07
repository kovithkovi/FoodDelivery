import React from "react";
import { assets } from "../../assets/assets";
import { NavLink } from "react-router-dom";

const SlideBar = () => {
  return (
    <div className="h-screen flex flex-col gap-8 border-r-2 border-gray-400 ml-[30px] lg:ml-0">
      <NavLink
        to="/add"
        className={
          ({ isActive }) =>
            `flex border-t-2 border-b-2 border-l-2 border-gray-400 gap-5 p-2 mt-[50px] hover:cursor-pointer ${
              isActive ? "bg-red-100 border-red-200" : ""
            }` // Apply bg color for active link
        }
      >
        <img src={assets.add_icon} alt="" />
        <p className="hidden md:block">Add Item</p>
      </NavLink>
      <NavLink
        to="/list"
        className={
          ({ isActive }) =>
            `flex gap-5 p-2 border-t-2 border-b-2 border-l-2 border-gray-400 ${
              isActive ? "bg-red-100 border-red-200" : ""
            }` // Apply bg color for active link
        }
      >
        <img src={assets.order_icon} alt="" />
        <p className="hidden md:block">List Items</p>
      </NavLink>
      <NavLink
        to="/order"
        className={
          ({ isActive }) =>
            `flex gap-5 p-2 border-t-2 border-b-2 border-l-2 border-gray-400 ${
              isActive ? "bg-red-100 border-red-200bg-red-200" : ""
            }` // Apply bg color for active link
        }
      >
        <img src={assets.order_icon} alt="" />
        <p className="hidden md:block">Orders</p>
      </NavLink>
    </div>
  );
};

export default SlideBar;
