import React from "react";
import { menu_list } from "../../assets/assets.js";
function ExploreMenu({ category, setCategory }) {
  return (
    <div
      className="max-w-screen-xl container mx-auto px-4 py-4 relative"
      id="menu"
    >
      <h1 className="text-3xl mb-4">Explore our menu</h1>
      <p className="mb-8 md:w-2/3 w-full">
        Choose from a diverse menu featuring a delectable array of dishes. Our
        mission is to satisfy your cravings and elevate your dining experience,
        one delicious meal at a time.
      </p>
      <div className="flex gap-11 overflow-x-auto scrollbar-hide md:max-w-full items-center">
        {menu_list.map((item, index) => (
          <div
            key={index}
            className="hover:cursor-pointer"
            onClick={() =>
              setCategory((prev) =>
                prev === item.menu_name ? "All" : item.menu_name
              )
            }
          >
            <div className="image-container">
              <img
                src={item.menu_image}
                alt={item.menu_name}
                className={`menu
                ${
                  category === item.menu_name
                    ? "border-[3px] border-[tomato] rounded-full p-[2px]"
                    : ""
                }`}
                style={{ width: "100%", height: "auto" }}
              />
            </div>
            <p className="text-center mt-2">{item.menu_name}</p>
          </div>
        ))}
      </div>
      <hr className="border-t-2 border-gray-400 mt-10" />
    </div>
  );
}

export default ExploreMenu;
