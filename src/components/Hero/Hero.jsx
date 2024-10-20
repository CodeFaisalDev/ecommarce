import React from "react";
import { Button } from "../ui/button";

const Hero = () => {
  return (
    <div className="relative shadow-2xl h-[70vh] xl:h-screen w-full rounded-t-[2rem] rounded-b-[2rem] md:rounded-b-[10rem] xl:rounded-b-[20rem]">
      {/* Video Background */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover rounded-t-[2rem] rounded-b-[2rem] md:rounded-b-[10rem] xl:rounded-b-[20rem]"
        src="/hero.mp4"
        autoPlay
        loop
        muted
      ></video>

      {/* Overlay and Content */}
      <div className="relative z-10 bg-black bg-opacity-90 flex flex-col justify-center items-center h-full rounded-t-[2rem] rounded-b-[2rem] md:rounded-b-[10rem] xl:rounded-b-[20rem]">
        <div className="w-[70%] flex flex-col gap-10 max-md:text-center max-md:justify-center max-md:items-center">
          <h1 className="text-primary-foreground text-5xl md:text-6xl xl:text-8xl font-extrabold mb-4 drop-shadow-md text-pretty">
            Welcome to COCO Sweet
            <br className="hidden md:flex" /> Delights Bakery
          </h1>
          <p className="text-primary-foreground text-sm xl:text-lg max-w-2xl drop-shadow-md">
            Freshly baked treats every day! From delicious cakes to savory
            pastries, everything is made with love and the finest ingredients.
            Visit us and indulge in our mouth-watering creations.
          </p>
          <Button className="w-fit p-8 text-md">Taste Our Products</Button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
