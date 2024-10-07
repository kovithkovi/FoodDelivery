import React from "react";
import { assets } from "../../assets/assets";

const AppDownload = () => {
  return (
    <div className="max-w-xl container mx-auto m-[130px] flex flex-col items-center gap-10 relative">
      <p
        className="text-4xl text-black font-bold text-center"
        id="app-download"
      >
        For Better Experience Download <br /> Tomoto App
      </p>
      <div className="flex flex-col gap-10 md:flex-row">
        <img
          src={assets.play_store}
          alt=""
          className="transition-transform duration-300 hover:scale-110"
        />
        <img
          src={assets.app_store}
          alt=""
          className="transition-transform duration-300 hover:scale-110"
        />
      </div>
    </div>
  );
};

export default AppDownload;
