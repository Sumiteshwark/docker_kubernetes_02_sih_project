import React, { useState } from "react";
import axios from 'axios';
import { HiEye } from "react-icons/hi";
import { Link } from "react-router-dom";
import { BASE_URL } from "../../Common";

const Login = (message) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const userType = 'customer';

  const [showPassword, setShowPassword] = useState(false);
  const [emailError, setEmailError] = useState("");
  const [passwordError, setPasswordError] = useState("");
  const [loginError, setLoginError] = useState("");

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  axios.defaults.withCredentials=true;
  const handleLogin = async () => {
    setEmailError("");
    setPasswordError("");
    setLoginError("");

    if (!email) {
      setEmailError("Email is required");
      return;
    }

    if (!password) {
      setPasswordError("Password is required");
      return;
    }

    try {
    	const response = await axios.post(
    		`${BASE_URL}/api/v1/login`,
    		{
    			email,
    			password,
    		}
    	);

      // console.log(response);
    	if (response.data.success === false) {
    		setLoginError(response.data.message);
    		return;
    	}
      const currentPathname = window.location.pathname;
      if (currentPathname === '/login') {
        window.location.href = '/';
      } else {
        window.location.reload();
      }
    } catch (error) {
    	setLoginError(error.response.data.message);
    }
  };

  return (
    <>
    <div className="text-red-500 w-full text-center">
      {message.message}
    </div>
    <div className="flex justify-center items-center h-[50vh]">
      <div className="sm:pl-4 flex sm:w-[480px] h-fit w-[340px] bg-gray-100 flex-col mt-20 p-3 justify-center rounded-md">
        <div className="flex w-full flex-col mb-2">
          <p className="flex-wrap text-xl text-center items-center font-semibold my-2">
            Login
          </p>
          <p className="flex-wrap text-xs mb-2 text-center text-gray-500">
            Continue to Kritrim_Tatav
          </p>
        </div>

        <div className="flex w-full flex-col">
          <input
            type="email"
            placeholder="email@gmail.com"
            className={`w-full h-[47px] py-1 px-2  border border-gray-400 rounded-md ${
              emailError ? "border-red-500" : ""
            }`}
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {emailError && <p className="text-red-500 text-xs">{emailError}</p>}
        </div>

        <div className="grid-flow-col max-md:gap-3 justify-between">
          <div className="relative flex">
            <input
              type={showPassword ? "text" : "password"}
              placeholder="Password"
              className={`flex border w-full h-[47px] border-gray-400 py-1 px-2 rounded-md my-2 ${
                passwordError ? "border-red-500" : ""
              }`}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
            <HiEye
              name="eye-fill"
              onClick={togglePasswordVisibility}
              className="absolute right-2 top-1/2 transform -translate-y-1/2 hover:cursor-pointer"
            />
          </div>
          {passwordError && (
            <p className="text-red-500 text-xs">{passwordError}</p>
          )}
          {loginError && <p className="text-red-500 text-xs">{loginError}</p>}

          <div className="flex justify-end">
            <input type="radio" className="w-4 h-4 mr-2 " />
            <span className="text-xs mb-2 text-[14px] text-gray-900">
              Remember Me
            </span>
          </div>
        </div>

        <div className="w-full flex flex-col my-1">
          <button
            onClick={handleLogin}
            className="w-full text-white my-2 bg-orange-400 rounded-md h-[48px] text-center flex items-center justify-center"
          >
            Login
          </button>
        </div>

        <div className="w-full my-2">
          <p className="text-xs mb-1 mr-2 text-center text-gray-400 font-semibold">
            New to Kritrim_Tatav?
            <Link
              to="/register"
              className="font-semibold hover:font-fontBold text-sm mb-2 mx-1 text-orange-400"
            >
              Sign Up
            </Link>
          </p>
        </div>
        <div className="flex flex-row justify-center mb-1">
          <button className="text-[14px] mb-1 text-gray-600 mx-2 hover:font-semibold">
            {" "}
            Help
          </button>
          <button className="text-[14px] mb-1 text-gray-600 mx-2 hover:font-semibold">
            Privacy
          </button>
          <button className="text-[14px] mb-1 text-gray-600 mx-2 hover:font-semibold">
            Terms
          </button>
        </div>
      </div>
    </div>
    </>
  );
};

export default Login;
