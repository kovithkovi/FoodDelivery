import React, { useContext } from "react";
import { StoreContext } from "../../context/StoreContext";
import FoodItem from "../FoodItem/FoodItem";
function FoodDiplay({ category }) {
  const { food_list } = useContext(StoreContext);
  return (
    <div className="max-w-screen-xl container mx-auto px-4 relative">
      <h2 className="text-3xl">Top dishes near you</h2>
      <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-1 custom:grid-cols-1 gap-6 mt-5 justify-center items-center relative">
        {food_list.map((item) => {
          if (category === "All" || category === item.category) {
            return (
              <FoodItem
                key={item._id}
                id={item._id}
                name={item.name}
                price={item.price}
                description={item.description}
                image={item.image}
              />
            );
          }
        })}
      </div>
    </div>
  );
}

export default FoodDiplay;
