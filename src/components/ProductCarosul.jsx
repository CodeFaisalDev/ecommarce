"use client";
import React, { useState, useEffect } from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";

const ProductCarosul = ({ carosuelItems, name }) => {
  const [api, setApi] = useState(null);
  const [current, setCurrent] = useState(0);
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!api) {
      return;
    }

    // Set the total number of slides and the current slide index
    setCount(api.scrollSnapList().length);
    setCurrent(api.selectedScrollSnap() + 1);

    // Listen for slide changes
    api.on("select", () => {
      setCurrent(api.selectedScrollSnap() + 1);
    });

    // Cleanup the listener when the component is unmounted or api changes
    return () => {
      api.off("select");
    };
  }, [api]);

  // Function to handle clicking a dot to jump to the corresponding slide
  const goToSlide = (index) => {
    if (api) {
      api.scrollTo(index);
    }
  };

  return (
    <div className="w-full flex flex-col items-center justify-center overflow-hidden ">
      <h1 className="max-sm:flex hidden text-2xl text-primary m-10">{name}</h1>
      <div className="flex justify-center max-md:overflow-none">
        <Carousel
          className="w-[30%] md:w-[30%] lg:w-[45%] 2xl:w-[60%] overflow-hidden"
          setApi={setApi} // Pass setApi to capture the API instance
        >
          <div className="max-sm:hidden w-[90%] lg:w-[95%] flex justify-between items-center">
            <h1 className="text-2xl text-primary m-10">{name}</h1>
            <div className="relative flex space-x-2">
              <CarouselPrevious className="p-0" />
              <CarouselNext className="" />
            </div>
          </div>
          <CarouselContent className="flex">
            {carosuelItems.map((itm) => (
              <CarouselItem
                key={itm.label}
                className="flex max-sm:pl-0 justify-center basis-1/2 lg:basis-1/3 2xl:basis-1/4"
              >
                <div className="w-fit">{itm.data}</div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>

      {/* Dotted Indicator */}
      <div className="hidden max-md:flex space-x-2 mt-4">
        {Array(count)
          .fill()
          .map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`h-2 w-2 rounded-full ${
                current === index + 1
                  ? "bg-primary" // Active dot styling
                  : "bg-gray-400" // Inactive dot styling
              }`}
            />
          ))}
      </div>
    </div>
  );
};

export default ProductCarosul;
