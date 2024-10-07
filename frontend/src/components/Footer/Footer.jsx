import React from "react";
import { assets } from "../../assets/assets";

function Footer() {
  return (
    <div className="bg-[#323232] text-white" id="contact-us">
      <div className="md:flex max-w-screen-xl container mx-auto px-4 py-10 items-top">
        <div className="md:w-3/5 py-5">
          <img src={assets.logo} alt="" />
          <p className="py-5">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Velit
            aperiam, at voluptatibus eligendi quisquam ipsum? Voluptate esse
            reiciendis quas quaerat ex unde corporis itaque optio iusto,
            accusamus, laboriosam iure porro.
          </p>
          <div className="flex gap-4">
            <img
              src={assets.facebook_icon}
              alt=""
              className="hover:cursor-pointer"
            />
            <img
              src={assets.twitter_icon}
              alt=""
              className="hover:cursor-pointer"
            />
            <img
              src={assets.linkedin_icon}
              alt=""
              className="hover:cursor-pointer"
            />
          </div>
        </div>
        <div className="flex flex-cols gap- 10 -ml-10 md:ml-20">
          <div className="px-10">
            <h2 className="py-5 text-2xl font-bold">COMPANY</h2>
            <ul className="flex flex-col gap-3">
              <li>Home</li>
              <li>About us</li>
              <li>Delivery</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div className="">
            <h2 className="py-5 text-2xl font-bold">GET IN TOUCH</h2>
            <ul className="flex flex-col gap-3">
              <li>+1-212-456-7890</li>
              <li>contact@tomato.com</li>
            </ul>
          </div>
        </div>
      </div>
      <hr className="max-w-screen-xl container mx-auto px-4" />
      <p className="text-center py-4">
        Copyrighxt 2024 @ tomato.com - All Right Reserved.
      </p>
    </div>
  );
}

export default Footer;
