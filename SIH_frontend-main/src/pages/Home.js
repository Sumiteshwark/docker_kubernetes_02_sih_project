import React from "react";
import LatestDisease from "../components/home/LatestDisease";
import YourDisease from "../components/home/YourDisease";
import UploadDisease from "../components/home/UploadDisease";
import { cards } from "../components/home/diseaseCard";

const Home = () => {
  return (
    <>
    <div className="mb-8 min-w-[310px]">
      <div className="px-4 md:px-12 lg:px-[120px] w-full mt-8">
        <LatestDisease cards={cards} />
      </div>
      <div className="px-4 md:px-12 lg:px-[120px] w-full mt-8">
        <UploadDisease />
      </div>
      <div className="px-4 md:px-12 lg:px-[120px] w-full mt-8">
        <YourDisease cards={cards} />
      </div>
    </div>
    </>
  );
};

export default Home;
