import React, { useState } from "react";
import Header from "../components/Header/Header.jsx";
import ExploreMenu from "../components/ExploreMenu/ExploreMenu.jsx";
import FoodDiplay from "../components/FoodDisplay/FoodDiplay.jsx";
import AppDownload from "../components/AppDownload/AppDownload.jsx";
function Home() {
  const [category, setCategory] = useState("All");
  return (
    <div>
      <Header />
      <ExploreMenu category={category} setCategory={setCategory} />
      <FoodDiplay category={category} />
      <AppDownload />
    </div>
  );
}

export default Home;
