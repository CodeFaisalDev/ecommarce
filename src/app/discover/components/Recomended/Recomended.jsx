import ProductCarosul from "../../../../components/ProductCarosul";
import ProductCard from "../../../../components/ProductCard";

// Temporary data
const recomendedItems = [
  { label: "product1", data: <ProductCard /> },
  { label: "product2", data: <ProductCard /> },
  { label: "product3", data: <ProductCard /> },
  { label: "product4", data: <ProductCard /> },
  { label: "product5", data: <ProductCard /> },
  { label: "product6", data: <ProductCard /> },
  { label: "product7", data: <ProductCard /> },
];

const Recomended = () => {
  return (
    <div className="w-full flex flex-col items-center justify-center">
      <ProductCarosul carosuelItems={recomendedItems} name={"Recomended"} />
    </div>
  );
};

export default Recomended;
