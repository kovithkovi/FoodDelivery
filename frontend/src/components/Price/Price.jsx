import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";

const Price = () => {
  const { cartItem, getTotalCartAmount } = useContext(StoreContext);

  const totalItemsInCart = Object.values(cartItem).reduce(
    (total, quantity) => total + quantity,
    0
  );

  const delivery = totalItemsInCart > 0 ? 5 : 0;
  const total = getTotalCartAmount() + delivery;
  const navigate = useNavigate();

  return (
    <div className="p-4 sm:p-6">
      <div className="flex flex-col-reverse mb-[100px] gap-[70px] lg:flex-row max-w-screen-md mx-auto justify-center items-center">
        <div className="flex flex-col w-full max-w-lg items-center justify-center">
          <h2 className="text-3xl font-bold mb-3">Cart Total</h2>
          <div className="mt-3 w-full">
            {[
              { label: "Sub Total", amount: getTotalCartAmount().toFixed(2) },
              { label: "Delivery", amount: delivery },
              { label: <b>Total</b>, amount: <b>${total.toFixed(2)}</b> },
            ].map((item, index) => (
              <div key={index} className="flex justify-between space-x-10">
                <p className="text-xl">{item.label}</p>
                <p className="text-xl">${item.amount}</p>
              </div>
            ))}
            <hr className="my-2 border-2" />
          </div>
          <button
            className="btn border-2 border-black hover:bg-[tomato] hover:text-white mt-4 w-full max-w-xs"
            onClick={() => navigate("/order")}
          >
            PROCEED TO PAYMENT
          </button>
        </div>
      </div>
    </div>
  );
};

export default Price;
