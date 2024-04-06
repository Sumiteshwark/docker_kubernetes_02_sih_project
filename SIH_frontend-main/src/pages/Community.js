import React from "react";
import { FaUserCircle, FaThumbsUp, FaThumbsDown } from "react-icons/fa";

const Community = ({ user }) => {
  return (
    <>
      <div className="mb-8 min-w-[310px]">
        <div className="md:px-12 lg:px-[120px] w-full">

          <div className="bg-gray-200 border-b-2 border-[#2a6c75] md:flex items-center py-3 rounded-md mt-6">
            <div className="px-[1px]">
              <img
                width={100}
                height={100}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ1a_QtqFLmYctpXtcNUJjX7ovBtrVro23Y7FvDc3-XA&s"
                alt="community"
                className="w-full object-cover h-[200px] md:min-w-[350px] md:w-[350px] md:h-[250px] rounded-lg"
              />
            </div>
            <div className="px-4 w-full">
              <div className="flex items-center gap-4 my-2">
                <div>
                  <FaUserCircle
                    className="text-[#2a6c75]"
                    style={{ fontSize: "30px" }}
                  />
                </div>
                <div>
                  <div className="text-sm text-[#2a6c75] font-bold">
                    Sumit -
                    <span className="text-gray-700 font-semibold text-xs">
                      {" "}
                      Bihar
                    </span>
                  </div>
                  <div className="text-xs text-gray-700">1 day</div>
                </div>
              </div>
              <div className="text-sm font-semibold mt-1">
                What are common symptoms, causes, and treatments for a specific skin disease?
              </div>
              <div className="text-sm mt-1">Can you provide a concise overview of a specific skin disease, detailing its symptoms, causes, risk factors, and available treatment options, while also highlighting any potential complications or preventive measures?</div>
              <div className="flex items-center justify-between md:px-12 text-xs text-gray-700 mt-2">
                <div>Reviews</div>
                <div>
                  <span>6</span> answers
                </div>
              </div>
              <div className="border-b-[1px] border-gray-400 mt-1"> </div>
              <div className="flex items-center justify-around mt-2">
                <div className="flex items-center gap-2">
                  <FaThumbsUp className="text-gray-700" />
                  <div className="text-xs">Upvote</div>
                </div>
                <div className="flex items-center gap-2">
                  <FaThumbsDown className="text-gray-700" />
                  <div className="text-xs">Downvote</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 border-b-2 border-[#2a6c75] md:flex items-center py-3 rounded-md mt-6">
            <div className="px-[1px]">
              <img
                width={100}
                height={100}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ1a_QtqFLmYctpXtcNUJjX7ovBtrVro23Y7FvDc3-XA&s"
                alt="community1"
                className="w-full object-cover h-[200px] md:min-w-[350px] md:w-[350px] md:h-[250px] rounded-lg"
              />
            </div>
            <div className="px-4 w-full">
              <div className="flex items-center gap-4 my-2">
                <div>
                  <FaUserCircle
                    className="text-[#2a6c75]"
                    style={{ fontSize: "30px" }}
                  />
                </div>
                <div>
                  <div className="text-sm text-[#2a6c75] font-bold">
                    Sumit -
                    <span className="text-gray-700 font-semibold text-xs">
                      {" "}
                      Bihar
                    </span>
                  </div>
                  <div className="text-xs text-gray-700">1 day</div>
                </div>
              </div>
              <div className="text-sm font-semibold mt-1">
                What are common symptoms, causes, and treatments for a specific skin disease?
              </div>
              <div className="text-sm mt-1">Can you provide a concise overview of a specific skin disease, detailing its symptoms, causes, risk factors, and available treatment options, while also highlighting any potential complications or preventive measures?</div>
              <div className="flex items-center justify-between md:px-12 text-xs text-gray-700 mt-2">
                <div>Reviews</div>
                <div>
                  <span>6</span> answers
                </div>
              </div>
              <div className="border-b-[1px] border-gray-400 mt-1"> </div>
              <div className="flex items-center justify-around mt-2">
                <div className="flex items-center gap-2">
                  <FaThumbsUp className="text-gray-700" />
                  <div className="text-xs">Upvote</div>
                </div>
                <div className="flex items-center gap-2">
                  <FaThumbsDown className="text-gray-700" />
                  <div className="text-xs">Downvote</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-200 border-b-2 border-[#2a6c75] md:flex items-center py-3 rounded-md mt-6">
            <div className="px-[1px]">
              <img
                width={100}
                height={100}
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQJ1a_QtqFLmYctpXtcNUJjX7ovBtrVro23Y7FvDc3-XA&s"
                alt="community2"
                className="w-full object-cover h-[200px] md:min-w-[350px] md:w-[350px] md:h-[250px] rounded-lg"
              />
            </div>
            <div className="px-4 w-full">
              <div className="flex items-center gap-4 my-2">
                <div>
                  <FaUserCircle
                    className="text-[#2a6c75]"
                    style={{ fontSize: "30px" }}
                  />
                </div>
                <div>
                  <div className="text-sm text-[#2a6c75] font-bold">
                    Sumit -
                    <span className="text-gray-700 font-semibold text-xs">
                      {" "}
                      Bihar
                    </span>
                  </div>
                  <div className="text-xs text-gray-700">1 day</div>
                </div>
              </div>
              <div className="text-sm font-semibold mt-1">
                What are common symptoms, causes, and treatments for a specific skin disease?
              </div>
              <div className="text-sm mt-1">Can you provide a concise overview of a specific skin disease, detailing its symptoms, causes, risk factors, and available treatment options, while also highlighting any potential complications or preventive measures?</div>
              <div className="flex items-center justify-between md:px-12 text-xs text-gray-700 mt-2">
                <div>Reviews</div>
                <div>
                  <span>6</span> answers
                </div>
              </div>
              <div className="border-b-[1px] border-gray-400 mt-1"> </div>
              <div className="flex items-center justify-around mt-2">
                <div className="flex items-center gap-2">
                  <FaThumbsUp className="text-gray-700" />
                  <div className="text-xs">Upvote</div>
                </div>
                <div className="flex items-center gap-2">
                  <FaThumbsDown className="text-gray-700" />
                  <div className="text-xs">Downvote</div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </>
  );
};

export default Community;
