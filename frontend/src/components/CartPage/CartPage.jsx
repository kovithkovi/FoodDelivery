import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import { useNavigate } from "react-router-dom";
import Price from "../Price/Price";

const CartPage = () => {
  const { cartItem, food_list, removeFromCart, getTotalCartAmount } =
    useContext(StoreContext);

  const totalItemsInCart = Object.values(cartItem).reduce(
    (total, quantity) => total + quantity,
    0
  );

  return (
    <div className="md:max-w-screen-xl max-w-screen-md w-full container mx-auto relative">
      <div className="my-[120px] items-center lg:ml-[180px] md:ml-[50px]">
        {totalItemsInCart > 0 ? (
          <div className="flex justify-center">
            <table className="table table-zebra px-5">
              <thead>
                <tr>
                  <th>Items</th>
                  <th>Title</th>
                  <th>Price</th>
                  <th>Quantity</th>
                  <th>Total</th>
                  <th>Remove</th>
                </tr>
              </thead>
              <tbody>
                {food_list.map((item, index) => {
                  if (cartItem[item._id] > 0) {
                    return (
                      <tr key={index}>
                        <td>
                          <img
                            src={item.image}
                            alt={item.name}
                            className="md:w-[50px] md:h-[50px] w-[30px] h-[30px]"
                          />
                        </td>
                        <td>{item.name}</td>
                        <td>${item.price.toFixed(2)}</td>
                        <td>{cartItem[item._id]}</td>
                        <td>${(item.price * cartItem[item._id]).toFixed(2)}</td>
                        <td>
                          <button
                            className="btn btn-sm btn-ghost"
                            onClick={() => removeFromCart(item._id)}
                            aria-label={`Remove ${item.name} from cart`}
                          >
                            ✕
                          </button>
                        </td>
                      </tr>
                    );
                  }
                  return null;
                })}
              </tbody>
            </table>
          </div>
        ) : (
          <p className="text-3xl text-center mx-auto w-full overflow-hidden w-2/3">
            No items are added to the cart! Please add items.
          </p>
        )}
      </div>

      <div className="flex flex-col-reverse mb-[100px] md:gap-[70px] lg:flex-row max-w-screen-lg justify-center items-center mx-auto">
        <Price />
        <div className="w-2/3">
          <p className="text-xl my-3">
            If you have a promo code, enter it here:
          </p>
          <div className="flex">
            <input
              type="text"
              placeholder="Promo code"
              className="rounded-lg md:w-[300px] border-2 border-gray-400 text-xl"
            />
            <button className="btn hover:bg-[tomato] hover:text-white rounded-lg text-xl items-center border-black border-2">
              Submit
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartPage;
