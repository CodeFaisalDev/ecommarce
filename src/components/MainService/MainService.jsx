"use client";
import { Cake, CakeSlice, Dessert, Donut, Sandwich } from "lucide-react";
import React, { useState, useEffect } from "react";

const services = [
  { label: "Cupcake", icon: <Dessert size={80} /> },
  { label: "Birthday", icon: <Cake size={80} /> },
  { label: "Pastry", icon: <CakeSlice size={80} /> },
  { label: "Donut", icon: <Donut size={80} /> },
  { label: "Aniversary", icon: <Sandwich size={80} /> },
];

const MainService = () => {
  const [isLargeScreen, setIsLargeScreen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      // Check if the screen width is greater than or equal to the 'md' breakpoint (768px)
      setIsLargeScreen(window.innerWidth >= 768);
    };

    // Add event listener to track window resizing
    window.addEventListener("resize", handleResize);

    // Call handleResize initially to set the correct state based on the current window size
    handleResize();

    // Clean up the event listener on component unmount
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Conditionally slice the services array based on the screen size
  const displayedServices = isLargeScreen ? services : services.slice(0, 4);

  return (
    <div className="mt-16 lg:mt-24 w-full flex justify-center items-center">
      <div className="w-60% flex flex-col justify-center items-center gap-10">
        <div className="flex flex-col text-center">
          <h1 className="text-lg text-primary">Most Popular</h1>
          <span className="text-2xl">Our Exclusive Cakes</span>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-5 justify-center items-center gap-5 xl:gap-16">
          {displayedServices.map((service) => (
            <div
              key={service.label}
              className="flex flex-col items-center text-center gap-4"
            >
              <span className="text-primary items-center space-x-2 p-3 rounded-full border-[.3rem] border-black">
                {service.icon}
              </span>
              <span className="text-lg">{service.label}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default MainService;
