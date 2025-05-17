import React, { useState } from "react";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
  const [resNavBar, setResNavBar] = useState(false);

  const handleResNavBar = () => {
    setResNavBar(!resNavBar);
  };

  return (
    <div className="text-white flex justify-between items-center h-24 max-width-[1240px] mx-auto px-4 ">
      <h1 className="w-full text-3xl text-[#00df9a] font-bold">GROW</h1>
      <ul className="flex hidden md:flex">
        <li className="p-4 cursor-pointer">Home</li>
        <li className="p-4 cursor-pointer">Company</li>
        <li className="p-4 cursor-pointer">Resourse</li>
        <li className="p-4 cursor-pointer">Contact</li>
        <li className="p-4 cursor-pointer">About</li>
      </ul>
      <div onClick={handleResNavBar} className="block md:hidden cursor-pointer">
        {resNavBar ? (
          <AiOutlineClose size="20px" />
        ) : (
          <AiOutlineMenu size="20px" />
        )}
      </div>
      <div
        className={
          resNavBar
            ? "fixed h-full left-0 bg-[#000300] top-0 w-[60%] border-r border-r-gray-900 ease-in-out duration-500"
            : "fixed left-[-100%] ease-in-out duration-500"
        }
      >
        <h1 className="w-full m-4 text-3xl text-[#00df9a] font-bold">GROW</h1>
        <ul className="uppercase p-4 ">
          <li className="p-4 border-b border-gray-700 cursor-pointer">Home</li>
          <li className="p-4 border-b border-gray-700 cursor-pointer">Company</li>
          <li className="p-4 border-b border-gray-700 cursor-pointer">Resourse</li>
          <li className="p-4 border-b border-gray-700 cursor-pointer">Contact</li>
          <li className="p-4">About</li>
        </ul>
      </div>
    </div>
  )
};

export default Navbar;
