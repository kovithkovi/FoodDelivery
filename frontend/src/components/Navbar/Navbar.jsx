import React, { useEffect, useState, useContext } from "react";
import "./Navbar.css";
import { assets } from "../../assets/assets.js";
import Login from "../LoginPopUp/Login.jsx";
import { StoreContext } from "../../context/StoreContext.jsx";
import { Link, useNavigate, useLocation } from "react-router-dom";

function Navbar() {
  const { cartItem, getTotalCartAmount } = useContext(StoreContext);
  const navigate = useNavigate();
  const location = useLocation(); // Get the current location

  const hasItemsInCart = cartItem && Object.keys(cartItem).length > 0;
  const [menu, setMenu] = useState("home");

  const handleMenuClick = (menuName) => {
    setMenu(menuName);
  };

  const [sticky, setScroll] = useState(false);
  useEffect(() => {
    const handleScroll = () => {
      setScroll(window.scrollY > 0);
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Update the menu state based on the current location
  useEffect(() => {
    if (location.pathname === "/cart" || location.pathname === "/order") {
      setMenu(""); // Clear the menu state
    } else if (location.hash) {
      setMenu(location.hash.substring(1)); // Set menu based on hash
    } else {
      setMenu("home"); // Default to home
    }
  }, [location]);

  const scrollToSection = (id) => {
    navigate("/"); // Navigate to the root path
    setTimeout(() => {
      const section = document.getElementById(id);
      if (section) {
        const headerOffset = 100; // Adjust this value according to your navbar height
        const elementPosition = section.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.scrollY - headerOffset;

        window.scrollTo({
          top: offsetPosition,
          behavior: "smooth",
        });

        // Update the menu state after scrolling
        setMenu(id);
      }
    }, 100); // Wait for navigation to complete before scrolling
  };

  const nav = (
    <>
      <li>
        <a
          className={`md:text-lg text-md underline-offset ${
            menu === "home" ? "underline" : ""
          }`}
          onClick={() => scrollToSection("home")}
        >
          Home
        </a>
      </li>
      <li>
        <a
          className={`md:text-lg text-md underline-offset ${
            menu === "menu" ? "underline" : ""
          }`}
          onClick={() => scrollToSection("menu")}
        >
          Menu
        </a>
      </li>
      <li>
        <a
          className={`md:text-lg text-md underline-offset ${
            menu === "mobile-app" ? "underline" : ""
          }`}
          onClick={() => handleMenuClick("mobile-app")}
          href="#app-download"
        >
          Mobile-app
        </a>
      </li>
      <li>
        <a
          className={`md:text-lg text-md underline-offset ${
            menu === "contact-us" ? "underline" : ""
          }`}
          onClick={() => handleMenuClick("contact-us")}
          href="#contact-us"
        >
          Contact Us
        </a>
      </li>
    </>
  );

  return (
    <div
      className={`max-w-screen-2xl container mx-auto md:px-20 px-4 fixed top-0 left-0 right-0 z-50 ${
        sticky ? "sticky-navbar shadow-md bg-white" : ""
      }`}
    >
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
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
          <Link to="/">
            <img src={assets.logo} className="w-20 md:w-40 md:m-4 m-2" />
          </Link>
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
            <Link to="/cart">
              <img
                src={assets.basket_icon}
                alt=""
                className="mx-5 block hover:cursor-pointer"
              />
            </Link>
            <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
          </div>
          <Login />
        </div>
      </div>
    </div>
  );
}

export default Navbar;
