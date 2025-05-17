import React from "react";

const NewsLetter = () => {
  return (
    <div className="w-full py-16 text-white">
      <div className="max-w-[1240px] mx-auto grid lg:grid-cols-3">
        <div className="lg:col-span-2 my-4">
          <h1 className="md:text-4xl sm:text-3xl text-2xl font-bold py-3">
            Want tips & tricks tooptimize your flow ?{" "}
          </h1>
          <p>Sign up to our lews letter and stay upto date .</p>
        </div>
        <div className="wy-4">
          <div className="flex flex-col sm:flex-row items-center justify-between w-full">
            <input
              type="email"
              placeholder="Enter E-mail"
              className="p-3 bg-white my-4 flex w-full rounded-md text-black"
            />
            <button className="bg-[#00fd9a] cursor-pointer text-black w-[200px] rounded-md font-medium my-6 ml-4 px-6 py-3">
              Notify me
            </button>
          </div>
          <p className="">
            We Care About Your Data . Read our{" "}
            <span className="text-[#00fd9a] cursor-pointer">
              Privacy Policy!
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default NewsLetter;
