import React from "react";
import Price from "../Price/Price";

const OrderPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto my-20 flex justify-between flex-col gap-10 md:flex-row">
      <div className="items-center mx-auto">
        <p className="text-4xl my-10">Delivery Information</p>
        <div className="my-5 flex gap-2">
          <input
            type="text"
            name=""
            id="first_name"
            placeholder="First name"
            className="px-4 py-2 text-lg"
          />
          <input
            type="text"
            placeholder="Last name"
            id="last_name"
            className="px-4 py-2 text-lg"
          />
        </div>
        <input
          type="email"
          name=""
          id="email"
          placeholder="Email address"
          className="px-4 py-2 text-lg w-full"
        />
        <div className="my-5 flex gap-2">
          <input
            type="text"
            name=""
            id="city"
            placeholder="city"
            className="px-4 py-2 text-lg"
          />
          <input
            type="text"
            placeholder="state"
            id="state"
            className="px-4 py-2 text-lg"
          />
        </div>
        <div className="my-5 flex gap-2">
          <input
            type="number"
            name=""
            id="zipCode"
            placeholder="Zip Code"
            className="px-4 py-2 text-lg"
          />
          <input
            type="text"
            placeholder="Country"
            id="country"
            className="px-4 py-2 text-lg"
          />
        </div>
        <input
          type="number"
          placeholder="Phone"
          id="phone"
          className="px-4 py-2 text-lg w-full"
        />
      </div>
      <div className="items-center justify-center my-auto mx-auto">
        <Price />
      </div>
    </div>
  );
};

export default OrderPage;
