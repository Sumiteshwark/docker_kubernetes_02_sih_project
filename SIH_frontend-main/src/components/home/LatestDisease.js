import React from "react";
import { Link } from "react-router-dom";

const LatestDisease = ({ cards }) => {
  return (
    <>
      <div className="text-xl font-bold text-left">
        <h2 className="border-b-2 mb-0  border-red-400 inline-block ">
          Latest Disease
        </h2>
      </div>

      <div className="flex flex-row items-center justify-between gap-4 lg:gap-6 w-full overflow-auto grid-container">
        {cards.map((card, index) => (
          <Link key={index} to="/" className="">
            <div className="flex flex-col gap-2 items-center my-3">
              <div className="flex flex-col items-center justify-center h-[240px] w-[260px] md:h-[200px] lg:h-[275px] md:w-[210px] lg:w-[285px] my-2">
                <img
                  width={100}
                  height={100}
                  src={card.image}
                  alt={card.title}
                  className="w-full h-full object-cover"
                />
                <div className="relative w-[80%] rounded -mt-10">
                  <div className="bg-white p-1 shadow-md rounded-lg">
                    <div className="mt-1 font-medium uppercase justify-center flex text-sm md:text-base">
                      {card.title}
                    </div>
                    <div className="mt-2 text-center text-sm text-[#22191C] font-400 pb-4">
                      {card.description.length > 20
                        ? card.description.slice(0, 50) + "..."
                        : card.description}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
};

export default LatestDisease;
