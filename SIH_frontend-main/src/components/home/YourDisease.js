import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom

const YourDisease = ({ cards }) => {
  return (
    <>
      {cards.length === 0 ? (
        ""
      ) : (
        <>
          <div className="text-xl font-bold text-left">
            <h2 className="border-b-2 mb-6  border-red-400 inline-block ">
              Uploaded Pictures
            </h2>
          </div>
          <div className="flex flex-row items-center justify-between gap-4 lg:gap-6 w-full overflow-auto grid-container">
            {cards.map((card, index) => (
              <Link key={index} to="/" className="">
                <div className="flex flex-col items-center gap-3 shrink-0 hover:font-semibold">
                  <div className="w-36 md:w-48 lg:w-[220px] h-36 md:h-48 lg:h-[220px] overflow-auto hover:shadow-lg rounded-[6px] border-[1px] p-2 border-[#EEEEEE]">
                    <img
                      width={100}
                      height={100}
                      src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ1a_QtqFLmYctpXtcNUJjX7ovBtrVro23Y7FvDc3-XA&s"
                      alt={card.title}
                      className="w-full h-full object-cover"
                    />
                  </div>

                  <div className="w-full">
                    <p className="w-full h-30 font-poppins text-sm lg:text-base leading-[150%] font-[600] ml-2">
                      {card.title}
                    </p>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </>
      )}
    </>
  );
};

export default YourDisease;
