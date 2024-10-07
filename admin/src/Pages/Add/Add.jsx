import React, { useEffect, useState } from "react";
import { assets } from "../../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";
const Add = () => {
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Salad",
  });

  const onChangeHander = (event) => {
    setData({ ...data, [event.target.name]: event.target.value });
  };

  const url = "http://localhost:3000";

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", data.price);
    formData.append("category", data.category);
    formData.append("image", image);
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Salad",
      });
      setImage(false);
      toast.success(response.data.message, {
        autoClose: 2000,
      });
    } else {
      toast.error(response.data.message);
    }
  };

  return (
    <div className="ml-[30px] mt-10">
      <form action="" onSubmit={onSubmitHandler}>
        <div className="flex flex-col gap-2 my-4">
          <p>Upload Image</p>
          <label htmlFor="image">
            <img
              src={image ? URL.createObjectURL(image) : assets.upload_area}
              alt=""
              className="w-[100px] h-auto"
            />
          </label>
          <input
            type="file"
            id="image"
            name="image"
            className="hidden"
            onChange={(e) => setImage(e.target.files[0])}
            required
          />
        </div>
        <div className="flex flex-col gap-2 my-4">
          <p>Product Name: </p>
          <input
            type="text"
            value={data.name}
            onChange={onChangeHander}
            name="name"
            placeholder="Type here..."
            className="border border-black p-[5px] text-lg w-2/3"
            required
          />
        </div>
        <div className="flex flex-col gap-2 my-4">
          <p>Product description</p>
          <textarea
            name="description"
            placeholder="Write content here..."
            rows="5"
            value={data.description}
            onChange={onChangeHander}
            className="border border-black p-[5px] text-lg w-2/3"
            required
          ></textarea>
        </div>
        <div className="flex gap-20">
          <div className="flex flex-col gap-2">
            <p>Prodcut category</p>
            <select
              name="category"
              id=""
              onChange={onChangeHander}
              className="border border-black p-2 bg-white"
              required
            >
              <option value="Salad">Salad</option>
              <option value="Rolls">Rolls</option>
              <option value="Deserts">Deserts</option>
              <option value="Sandwich">Sandwich</option>
              <option value="Cake">Cake</option>
              <option value="Pure Veg">Pure Veg</option>
              <option value="Pasta">Pasta</option>
              <option value="Noodles">Noodles</option>
            </select>
          </div>
          <div className="flex flex-col gap-2">
            <p>Product price</p>
            <input
              type="number"
              name="price"
              value={data.price}
              onChange={onChangeHander}
              placeholder="$20"
              className="border border-black p-2"
              required
            />
          </div>
        </div>
        <button type="submit" className="btn btn-outline mt-5">
          ADD
        </button>
      </form>
    </div>
  );
};

export default Add;
