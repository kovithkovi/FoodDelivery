import React from "react";
import { assets } from "../../assets/assets.js";
const Navbar = () => {
  console.log(assets);

  return (
    <div className="max-w-screen-xl container mx-auto flex justify-between border-b border-gray-400 pb-2 relative">
      <img
        src={assets.logo}
        alt=""
        className="w-[140px] h-auto ml-[30px] lg:ml-0"
      />
      <img
        src={assets.profile_image}
        alt=""
        className="w-[40px] h-[40px] rounded-full my-auto mr-[30px] lg:mr-0"
      />
    </div>
  );
};

export default Navbar;
