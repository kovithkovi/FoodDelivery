import { useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import SlideBar from "./components/SlideBar/SlideBar";
import { Link, Route, Routes } from "react-router-dom";
import Add from "./Pages/Add/Add";
import List from "./Pages/List/List";
import Order from "./Pages/Order/Order";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
function App() {
  return (
    <div>
      <ToastContainer /> {/* Auto close after 3 seconds */}
      <Navbar />
      <div className="flex max-w-screen-xl container mx-auto">
        {/* Use flex layout */}
        <div className="w-1/4">
          {/* Sidebar width set to 1/4 */}
          <SlideBar />
        </div>
        <div className="w-3/4 pl-5">
          <Routes>
            <Route path="/add" element={<Add />}></Route>
            <Route path="/list" element={<List />}></Route>
            <Route path="/order" element={<Order />}></Route>
          </Routes>
        </div>
      </div>
    </div>
  );
}

export default App;
