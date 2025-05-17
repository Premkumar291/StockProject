import React from "react";
import singleUser from "../assets/Images/single.png";
import doubleUser from "../assets/Images/double.png";
import tripleUser from "../assets/Images/triple.png";

const Cards = () => {
  return (
    <div className="w-full py-[10rem] px-4 bg-white">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8">
        {/* Single User Card  */}
        <div className="w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={singleUser}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Single User</h2>
          <p className="text-center text-4xl font-bold">₹500/M</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"> 1 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">500 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">Send upto 2GB</p>
          </div>
          <button className="bg-[#00fd9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 cursor-pointer">
            Start Trail
          </button>
        </div>

        {/* Dual User */}

        <div className="w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={doubleUser}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-white"
          />
          <h2 className="text-2xl font-bold text-center py-8">Dual User</h2>
          <p className="text-center text-4xl font-bold">₹1000/M</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"> 2 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">1000 GB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">Send upto 5GB</p>
          </div>
          <button className="bg-[#00fd9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 cursor-pointer">
            Start Trail
          </button>
        </div>

        {/* Multiple User */}

        <div className="w-full  shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300">
          <img
            src={tripleUser}
            alt=""
            className="w-20 mx-auto mt-[-3rem] bg-white "
          />
          <h2 className="text-2xl font-bold text-center py-8">Multiple User</h2>
          <p className="text-center text-4xl font-bold">₹3000/M</p>
          <div className="text-center font-medium">
            <p className="py-2 border-b mx-8 mt-8"> upto 15 Granted User</p>
            <p className="py-2 border-b mx-8 mt-8">10 TB Storage</p>
            <p className="py-2 border-b mx-8 mt-8">Send upto 100GB</p>
          </div>
          <button className="bg-[#00fd9a] w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3 cursor-pointer">
            Start Trail
          </button>
        </div>
      </div>
    </div>
  );
};

export default Cards;
