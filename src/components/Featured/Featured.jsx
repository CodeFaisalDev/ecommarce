import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

const Featured = () => {
  return (
    <div className="w-full flex justify-center m-10 md:m-20">
      <div className="w-[80%] max-sm:gap-5 grid md:grid-cols-2 items-center justify-center">
        <div className="w-full flex justify-center">
          <div className="w-64 md:w-72 lg:w-96 xl:w-[30rem]">
            <Image
              src="/placeholder.jpg"
              alt="Featured Product"
              width={1920}
              height={1080}
              objectFit="cover"
              className="rounded-3xl shadow-lg justify-center"
            />
          </div>
        </div>
        <div className=" flex flex-col gap-5 lg:gap-10">
          <div className="max-sm:text-center text-black font-bold text-3xl lg:text-4xl xl:text-5xl">
            Name Of The Product
          </div>
          <div className="max-sm:text-center text-black font-semibold text-xs md:text-sm lg:text-lg">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec
            eleifend est vel ipsum faucibus, vel finibus neque ornare.
          </div>
          <div className="max-sm:text-center">
            <Button className="p-6 lg:p-8">Add to Cart</Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Featured;
