import React from "react";
// import axios from 'axios';
// import {Link} from 'react-router-dom';
import {
  FaWpforms,
  FaChevronRight,
  FaHandHoldingMedical,
  FaCamera,
} from "react-icons/fa";

const UploadDisease = () => {
  return (
    <>
    <div className="text-xl font-bold text-left">
        <h2 className="border-b-2 mb-6 border-red-400 inline-block ">
          Check your disease
        </h2>
      </div>
    <div className="bg-gray-100 ">
      <div className="flex justify-around items-center gap-4 px-4 py-8">
        <div>
          <FaCamera className="text-2xl md:text-6xl lg:text-8xl mx-auto text-secondary" />
          <div className="mt-2 md:mt:4 text-center text-sm md:text-lg text-black font-400 md:w-[60%] mx-auto">Take a picture</div>
        </div>
        <div>
          <FaChevronRight className="text-2xl md:text-3xl lg:text-4xl text-gray-500" />
        </div>
        <div>
          <FaWpforms className="text-2xl md:text-6xl lg:text-8xl mx-auto text-secondary" />
          <div className="mt-2 md:mt:4 text-center text-sm md:text-lg text-black font-400 md:w-[60%] mx-auto">See diagnosis</div>
        </div>
        <div>
          <FaChevronRight className="text-2xl md:text-3xl lg:text-4xl text-gray-500" />
        </div>
        <div>
          <FaHandHoldingMedical className="text-2xl md:text-6xl lg:text-8xl mx-auto text-secondary" />
          <div className="mt-2 md:mt:4 text-center text-sm md:text-lg text-black font-400 md:w-[60%] mx-auto">Get medicine</div>
        </div>
      </div>
      <div className="w-[90%] m-auto max-w-[500px] pb-8">
          <button
            // onClick={handleLogin}
            className="w-full text-white my-2 md:mt-10 bg-primary rounded-3xl h-[48px] text-center flex items-center justify-center"
          >
            Take a picture
          </button>
        </div>
    </div>
    </>
  );
};

export default UploadDisease;
