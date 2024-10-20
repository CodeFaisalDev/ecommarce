import ProductCard from "../ProductCard";

// Temporary data
const recomendedItems = [
  { label: "product1", data: <ProductCard /> },
  { label: "product2", data: <ProductCard /> },
  { label: "product3", data: <ProductCard /> },
];

const MostPopular = () => {
  return (
    <div className="mt-10 w-full flex justify-center items-center">
      <div className="w-60% flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col text-center">
          <h1 className="text-lg text-primary">Most Popular</h1>
          <span className="text-2xl">Our Exclusive Cakes</span>
        </div>
        <div className="flex max-lg:flex-col gap-5 xl:gap-10">
          {recomendedItems.map((item) => (
            <div key={item.label} className="flex gap-4">
              {item.data}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MostPopular;
