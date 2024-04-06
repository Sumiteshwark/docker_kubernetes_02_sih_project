import React from "react";
import { Button } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";

const Profile = ({ user }) => {
  const navigate = useNavigate();
  return (
    <>
      {Object.keys(user).length === 0 ? (
        <div className="mb-8 min-w-[310px]">
          <div className="px-4 md:px-12 lg:px-[120px] w-full mt-12">
            <div className="w-full md:flex items-center justify-center md:gap-20 lg:gap-40">
              <div className=" w-[200px] h-[200px] md:min-w-[300px] md:min-h-[300px] items-center justify-center m-auto md:m-0">
                <img
                  width={100}
                  height={100}
                  src="./assets/profile.jpg"
                  alt="profile1"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col items-center bg-gray-100 p-8 lg:p-12 rounded-lg">
                <div className="text-xl md:text-2xl font-bold text-center mt-6 mb-2 text-[#1c484e]">
                  Your Account
                </div>
                <div className="text-s mb-4 text-center text-gray-700">
                  Join Kritrim_Tatav Community
                </div>
                <Button
                  variant="outlined"
                  className="rounded-full border-primary min-w-[60%] hover:border-[black] hover:bg-primary hover:text-white"
                  onClick={() => navigate("/login")}
                >
                  Sign In
                </Button>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="mb-8 min-w-[310px]">
          <div className="px-4 md:px-12 lg:px-[120px] w-full mt-12">
            <div className="w-full md:flex items-center justify-center md:gap-20 lg:gap-40">
              <div className=" w-[200px] h-[200px] md:min-w-[300px] md:min-h-[300px] items-center justify-center m-auto md:m-0">
                <img
                  width={100}
                  height={100}
                  src="./assets/profile.jpg"
                  alt="profile2"
                  className="w-full h-full object-cover rounded-full"
                />
              </div>
              <div className="flex flex-col items-center bg-gray-100 p-8 lg:p-12 rounded-lg md:min-w-[200px] lg:min-w-[300px]">
                <div className="text-xl md:text-2xl font-bold text-center mt-6 mb-2 text-[#1c484e]">
                  {user.name}
                </div>
                <div className="text-s mb-4 text-center text-gray-700">
                  {user.email}
                </div>
                <Button
                  variant="outlined"
                  className="rounded-full border-primary min-w-[60%] hover:border-[black] hover:bg-primary hover:text-white"
                  // onClick={() => navigate("/login")}
                >
                  Edit
                </Button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Profile;
