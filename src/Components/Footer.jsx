import React from "react";
import {
  FaFacebookSquare,
  FaGithubSquare,
  FaInstagram,
  FaTwitterSquare,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div className="max-w-[1240px] bg-black mx-auto py-16 px-4 lg:grid-cols-3 gap-8 text-gray-300">
      <div>
        <h1 className="w-full m-4 text-3xl text-[#00df9a] font-bold">GROW</h1>
        <p className="py-4">
          Grow helps identify trends, patterns, and anomalies in the stock
          market using historical and real-time data. It enables informed
          decision-making through predictive models, sentiment analysis, and
          algorithmic trading. This drives market growth by enhancing investment
          strategies, reducing risks, and increasing efficiency
        </p>
        <div className="flex justify-between md:w-[75%]   my-6">
          <FaFacebookSquare  size={30} className="cursor-pointer" />
          <FaInstagram size={30} className="cursor-pointer" />
          <FaGithubSquare size={30} className="cursor-pointer" />
          <FaTwitterSquare size={30} className="cursor-pointer" />
        </div>
      </div>
      <div className="lg:col-span-2 mt-6 flex justify-between">
        {/* Solutions */}
        <div>
          <h6 className="font-medium text-gray-400 cursor-pointer underline ">Solutions</h6>
          <ul>
            <li className="py-2 text-sm cursor-pointer">Analytics</li>
            <li className="py-2 text-sm cursor-pointer">Marketing</li>
            <li className="py-2 text-sm cursor-pointer">Commerce</li>
            <li className="py-2 text-sm cursor-pointer">Insights</li>
          </ul>
        </div>
        {/*Support */}
        <div>
          <h6 className="font-medium underline cursor-pointer text-gray-400">Support</h6>
          <ul>
            <li className="py-2 cursor-pointer text-sm">Pricing</li>
            <li className="py-2 cursor-pointer text-sm">Documentation</li>
            <li className="py-2 cursor-pointer text-sm">Guides</li>
            <li className="py-2 cursor-pointer text-sm">API Status</li>
          </ul>
        </div>
        {/*Company */}
        <div>
          <h6 className="font-medium underline cursor-pointer text-gray-400">Company</h6>
          <ul>
            <li className="py-2 cursor-pointer text-sm">About</li>
            <li className="py-2 cursor-pointer text-sm">Blog</li>
            <li className="py-2 cursor-pointer text-sm">Jobs</li>
            <li className="py-2 cursor-pointer text-sm">Press</li>
            <li className="py-2 cursor-pointer text-sm">Careers</li>
          </ul>
        </div>
        {/*Legal */}
        <div>
          <h6 className="font-medium underline cursor-pointer text-gray-400">Legal</h6>
          <ul>
            <li className="py-2 cursor-pointer text-sm">Claim</li>
            <li className="py-2 cursor-pointer text-sm">Policy</li>
            <li className="py-2 cursor-pointer text-sm">Terms</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
