import Featured from "@/components/Featured/Featured";
import React from "react";
import Recomended from "./components/Recomended/Recomended";
import BestSeller from "./components/BestSeller/BestSeller";
import AllProducts from "./components/AllProducts/AllProducts";

const Discover = () => {
  return (
    <div className="flex flex-col justify-center items-center max-w-[1920px]">
      <Featured />
      <Recomended />
      <BestSeller />
      <AllProducts />
    </div>
  );
};

export default Discover;
