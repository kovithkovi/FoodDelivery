import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import axios from "axios";
import { assets } from "../../assets/assets";
const List = () => {
  const url = "http://localhost:3000";
  const [data, setData] = useState([]);

  const fetchList = async () => {
    try {
      const response = await axios.get(`${url}/api/food/list`);
      console.log(response.data);
      setData(response.data);
    } catch (error) {
      toast.error("Failed to fetch data");
      console.error(error);
    }
  };

  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="mt-10">
      <p>All Food List</p>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Category</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {data.map((item) => (
              <tr key={item._id}>
                <td>
                  <img
                    src={`${url}/images/` + item.image}
                    alt={item.name}
                    style={{ width: "50px", height: "50px" }}
                  />
                </td>
                <td>{item.name}</td>
                <td>{item.category}</td>
                <td>$ {item.price}</td>
                <td>
                  <img
                    src={assets.cross_icon}
                    alt="dlete"
                    className="w-[15px] hover:cursor-pointer"
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default List;
