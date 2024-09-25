import React, { useEffect, useState, useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import Login from "../LoginPopUp/Login.jsx";
import { StoreContext } from "../../context/StoreContext.jsx";
function Navbar() {
  const { cartItem } = useContext(StoreContext);
  console.log(cartItem);
  const hasItemsInCart = cartItem && Object.keys(cartItem).length > 0;
  const [menu, setMenu] = useState("home");
  const handleMenuClick = (menuName) => {
    setMenu(menuName);
  };
  const [sticky, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const nav = (
    <>
      <li>
        <a
          className={`md:text-lg text-md underline-offset ${
            menu == "home" ? "underline" : ""
          }`}
          onClick={() => handleMenuClick("home")}
        >
          Home
        </a>
      </li>
      <li>
        <a
          className={`md:text-lg text-md underline-offset ${
            menu == "menu" ? "underline" : ""
          }`}
          onClick={() => handleMenuClick("menu")}
        >
          Menu
        </a>
      </li>
      <li>
        <a
          className={`md:text-lg text-md underline-offset ${
            menu == "mobile-app" ? "underline" : ""
          }`}
          onClick={() => handleMenuClick("mobile-app")}
        >
          Mobile-app
        </a>
      </li>
      <li>
        <a
          className={`md:text-lg text-md underline-offset ${
            menu == "contact-us" ? "underline" : ""
          }`}
          onClick={() => handleMenuClick("contact-us")}
        >
          Contact Us
        </a>
      </li>
    </>
  );
  return (
    <>
      <div
        className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 
      ${sticky ? "sticky-navbar shadow-md bg-white" : ""}`}
      >
        <div className="navbar">
          <div className="navbar-start">
            <div className="dropdown">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost lg:hidden"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </div>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow"
              >
                {nav}
              </ul>
            </div>
            <img src={assets.logo} className="w-20 md:w-40 md:m-4 m-2" />
          </div>
          <div className="navbar-center hidden lg:flex">
            <ul className="menu menu-horizontal px-1">{nav}</ul>
          </div>
          <div className="navbar-end">
            <img
              src={assets.search_icon}
              alt=""
              className="mx-5 md:block hidden hover:cursor-pointer"
            />
            <div className="relative">
              <img
                src={assets.basket_icon}
                alt=""
                className="mx-5 md:block hidden hover:cursor-pointer"
              />
              {hasItemsInCart && <div className="dot"></div>}
            </div>
            <Login />
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
