import React from "react";
import Home from "./Pages/Home.jsx";
import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar.jsx";
import Footer from "./components/Footer/Footer.jsx";
import Cart from "./Pages/Cart.jsx";
import Order from "./Pages/Order.jsx";
function App() {
  return (
    <div>
      <Navbar />
      <Routes>
        <Route
          path="/"
          element={
            <>
              <Home />
            </>
          }
        ></Route>
        <Route
          path="/cart"
          element={
            <>
              <Cart />
            </>
          }
        ></Route>
        <Route path="/order" element={<Order />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
