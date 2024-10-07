import React from "react";
import "./Header.css";

function Header() {
  return (
    <div
      className="header max-w-screen-xl container mx-auto flex flex-col items-start justify-center text-left px-4 relative"
      id="home"
    >
      <div className="md:w-2/3 mt-20 px-10">
        <p className="md:text-6xl md:mb-4 md:ml-20 text-5xl py-6">
          Order your <br />
          favourite food here
        </p>
        <p className="md:text-lg md:mb-6 md:ml-20 hidden md:block">
          Choose from a diverse menu featuring a delectable array of dishes
          crafted with the finest ingredients and culinary expertise. Our
          mission is to satisfy your cravings and elevate your dining
          experience, one delicious meal at a time.
        </p>
        <button className="btn md:ml-20 rounded-3xl px-8 ml-4 my-5">
          View Menu
        </button>
      </div>
    </div>
  );
}

export default Header;
