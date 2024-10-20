"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { ShoppingCart, Search, Menu, X } from "lucide-react";
import NavLinks from "./NavLinks";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Disable body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = ""; // Clean up
    };
  }, [isMenuOpen]);

  return (
    <nav className="flex shadow-2xl bg-white justify-between items-center py-4 px-6 md:px-10 max-w-[1920px] h-20 max-md:h-24 border-b rounded-b-[2rem]">
      {/* Logo */}
      <div className="flex items-center space-x-10">
        <Link href="/" className="text-xl font-bold text-primary">
          COCO
        </Link>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex space-x-4">
        <NavLinks />
      </div>

      {/* Icons */}
      <div className="flex items-center space-x-4 max-md:space-x-7 text-primary">
        <button aria-label="Search">
          <Search className="h-6 w-6" />
        </button>
        <button aria-label="Shopping cart">
          <ShoppingCart className="h-6 w-6" />
        </button>
        {/* Menu button */}
        <button
          aria-label="Menu"
          className="md:hidden"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <Menu className="h-6 w-6" />
        </button>
      </div>

      {/* Mobile Menu */}
      <div
        className={`fixed inset-0 bg-white z-50 transform ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
      >
        {/* Close Button inside the mobile menu */}
        <button
          aria-label="Close Menu"
          className="absolute top-4 right-6 mt-5 text-primary"
          onClick={() => setIsMenuOpen(false)}
        >
          <X className="h-8 w-8" />
        </button>

        <div className="flex flex-col text-[2rem] font-semibold items-start justify-center h-full space-y-8">
          <NavLinks />
        </div>
      </div>
    </nav>
  );
}
