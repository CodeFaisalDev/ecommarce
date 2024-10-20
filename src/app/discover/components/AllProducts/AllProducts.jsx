import ProductCard from "@/components/ProductCard";
import React from "react";

const tempdata = [
  { lable: "ProductCard1", card: <ProductCard /> },
  { lable: "ProductCard1", card: <ProductCard /> },
  { lable: "ProductCard1", card: <ProductCard /> },
  { lable: "ProductCard1", card: <ProductCard /> },
  { lable: "ProductCard1", card: <ProductCard /> },
  { lable: "ProductCard1", card: <ProductCard /> },
  { lable: "ProductCard1", card: <ProductCard /> },
  { lable: "ProductCard1", card: <ProductCard /> },
  { lable: "ProductCard1", card: <ProductCard /> },
  { lable: "ProductCard1", card: <ProductCard /> },
  { lable: "ProductCard1", card: <ProductCard /> },
  { lable: "ProductCard1", card: <ProductCard /> },
  { lable: "ProductCard1", card: <ProductCard /> },
  { lable: "ProductCard1", card: <ProductCard /> },
  { lable: "ProductCard1", card: <ProductCard /> },
];

const AllProducts = () => {
  return (
    <div className="mt-10 w-fit flex flex-col items-center justify-center">
      <h1 className="w-full max-sm:flex md:text-left text-2xl text-primary m-10">
        AllProducts
      </h1>

      <div className="grid max-md:grid-cols-2 md:grid-cols-4 gap-x-3 md:gap-x-9 gap-y-6 md:gap-y-9">
        {tempdata.map((item) => (
          <div key={item.lable} className="flex-grow gap-10">
            {item.card}
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllProducts;
