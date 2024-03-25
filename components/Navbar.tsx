"use client";
import Link from "next/link";
import React, { useState } from "react";
import { RiMenu3Line } from "react-icons/ri";
import { IoClose } from "react-icons/io5";

const Navbar = () => {
  const [isClick, setisClick] = useState(false);
  const toggleNavbar = () => {
    setisClick(!isClick);
  };
  return (
    <div>
      <nav className="bg-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <Link href="/" className="text-white">
                  Admin Dashboard
                </Link>
              </div>
            </div>
            <div className="hidden md:block">
              <div className="ml-4 flex items-center space-x-4">
                <Link
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Home
                </Link>
                <Link
                  href="/track"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Track
                </Link>
                <Link
                  href="/"
                  className="text-white hover:bg-white hover:text-black rounded-lg p-2"
                >
                  Logout
                </Link>
              </div>
            </div>
            <div className="md:hidden flex items-center">
              <button
                className="inline-flex items-center justify-center p-2 rounded-md text-white md:text-white hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-wite"
                onClick={toggleNavbar}
              >
                {isClick ? <IoClose /> : <RiMenu3Line />}
              </button>
            </div>
          </div>
        </div>
        {isClick && (
          <div className="md:hidden">
            <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
              <Link
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Home
              </Link>
              <Link
                href="/track"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Track
              </Link>
              <Link
                href="/"
                className="text-white block hover:bg-white hover:text-black rounded-lg p-2"
              >
                Logout
              </Link>
            </div>
          </div>
        )}
      </nav>
    </div>
  );
};

export default Navbar;
