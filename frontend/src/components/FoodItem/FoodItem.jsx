import React, { useContext } from "react";
import { assets } from "../../assets/assets";
import { StoreContext } from "../../context/StoreContext";

function FoodItem({ id, name, price, description, image }) {
  const { cartItem, addToCart, removeFromCart } = useContext(StoreContext);

  return (
    <div className="rounded-xl shadow-xl overflow-hidden relative">
      <div>
        <img src={image} alt="" />
        <div className="absolute lg:top-[190px] md:top-[175px] sm:top-[165px] right-2 custom:top-[180px]">
          {!cartItem[id] ? (
            <img
              className=" w-[30px]"
              onClick={() => addToCart(id)}
              src={assets.add_icon_white}
              alt=""
            />
          ) : (
            <div className="flex gap-2 -ml-[50px] -mt-2 items-center bg-white rounded-full p-1">
              <img
                className="w-[20px]"
                onClick={() => removeFromCart(id)}
                src={assets.remove_icon_red}
                alt=""
              />
              <p>{cartItem[id]}</p>
              <img
                className="w-[20px]"
                onClick={() => addToCart(id)}
                src={assets.add_icon_green}
                alt=""
              />
            </div>
          )}
        </div>
      </div>
      <div className="flex justify-between m-3 items-center">
        <p className="font-bold">{name}</p>
        <img src={assets.rating_starts} alt="" className="h-[15px]" />
      </div>
      <div className="m-3">
        <p className="text-sm color-gray-500">{description}</p>
        <p className="my-2 text-[tomato] text-lg">$ {price}</p>
      </div>
    </div>
  );
}

export default FoodItem;
