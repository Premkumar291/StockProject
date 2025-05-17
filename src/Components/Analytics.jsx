import React from "react";
import AnalyticsImage from "../assets/Images/GrowStackAnalytics.jpg";

const Analytics = () => {
  return (
    <div className="w-full bg-white py-16 px-4">
      <div className="max-w-[1240px] mx-auto grid md:grid-cols-2">
        <img className="w-[500px] mx-auto my-4" src={AnalyticsImage} alt="/" />
        <div className="flex flex-col justify-center item-center">
          <p className="text-[#00df9a] font-bold">DATA ANALYTICS DASHBOARD</p>
          <h1 className="md:text-4l sm:text-3xl text-2xl font-bold py-2 ">
            Manage Data Analytics Centrally
          </h1>
          <p className="">
            The Data Analytics Dashboard provides a centralized platform for
            monitoring, analyzing, and managing key data insights across the
            organization. It enables data-driven decision-making through
            interactive visualizations, real-time updates, and unified access to
            critical business metrics
          </p>
          <button className="bg-black ml-30 cursor-pointer text-[#00fd9a] w-[200px] item-center rounded-md font-medium my-6 mx- md:mx-0 py-3 ">
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default Analytics;
