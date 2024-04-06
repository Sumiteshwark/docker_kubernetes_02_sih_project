import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { BASE_URL } from "../Common";
import {
  Navbar,
  Collapse,
  Typography,
  Button,
  IconButton,
} from "@material-tailwind/react";
import { Link } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa";
import axios from "axios";

const Navbars = () => {
  const [openNav, setOpenNav] = useState(false);
  const [authenticated, setAuthenticated] = useState(false);

  axios.defaults.withCredentials = true;
  const checkauthentication = async () => {
    try {
      const response = await axios.get(
        `${BASE_URL}/api/v1/checkLoggedIn`
      );
      if (response.data.success === true) {
        setAuthenticated(true);
      }
    } catch (err) {
      console.log("Error checking authentication", err);
      setAuthenticated(false);
    }
  };

  const navigate = useNavigate();
  const buttonClick = () => {
    navigate("/login");
  };

  axios.defaults.withCredentials = true;
  const buttonClickOut = async () => {
    try {
      await axios.post(`${BASE_URL}/api/v1/logout`);
      setAuthenticated(false);
      window.location.href = "/";
      // navigate("/");
    } catch (err) {
      console.log("Error logging out", err);
    }
  };

  useEffect(() => {
    checkauthentication();
    window.addEventListener(
      "resize",
      () => window.innerWidth >= 960 && setOpenNav(false)
    );
  }, []);

  const navList = (
    <ul className="mb-8 mt-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/" className="flex items-center md:text-lg">
          Home
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/community" className="flex items-center md:text-lg">
          Community
        </Link>
      </Typography>
      <Typography
        as="li"
        variant="small"
        color="blue-gray"
        className="p-1 font-normal"
      >
        <Link to="/contact" className="flex items-center md:text-lg">
          Contact
        </Link>
      </Typography>
    </ul>
  );

  return (
    <Navbar className="mx-auto max-w-screen-xl py-2 px-4 lg:px-8 lg:py-4 mb-4 mt-2 w-[90%] min-w-[310px]">
      <div className="container mx-auto flex items-center justify-between text-blue-gray-900">
        <div className="flex">
          <Typography
            as={Link}
            to="/profile"
            className="mr-4 cursor-pointer py-1.5 md:text-lg flex items-center"
          >
            <FaUserCircle
              className="text-primary"
              style={{ fontSize: "24px" }}
            />
          </Typography>
          <Typography
            as={Link}
            to="/"
            className="mr-4 cursor-pointer py-1.5  md:text-lg"
          >
            Kritrim_Tatav
          </Typography>
        </div>
        <div className="hidden lg:block">{navList}</div>
        {authenticated ? (
          <Button
            size="sm"
            className="hidden lg:inline-block bg-secondary text-black"
            onClick={buttonClickOut}
          >
            <span>LogOut</span>
          </Button>
        ) : (
          <Button
            size="sm"
            className="hidden lg:inline-block bg-secondary text-black"
            onClick={buttonClick}
          >
            <span>LogIn / SignUp</span>
          </Button>
        )}

        <IconButton
          variant="text"
          className="ml-auto h-6 w-6 text-inherit hover:bg-transparent focus:bg-transparent active:bg-transparent lg:hidden"
          ripple={false}
          onClick={() => setOpenNav(!openNav)}
        >
          {openNav ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              className="h-6 w-6"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
        </IconButton>
      </div>
      <Collapse open={openNav}>
        <div className="container mx-auto">
          {navList}
          {authenticated ? (
            <Button
              size="sm"
              fullWidth
              className="mb-2 bg-secondary text-black"
              onClick={buttonClickOut}
            >
              <span>LogOut</span>
            </Button>
          ) : (
            <Button
              size="sm"
              fullWidth
              className="mb-2 bg-secondary text-black"
              onClick={buttonClick}
            >
              <span>LogIn / SignUp</span>
            </Button>
          )}
        </div>
      </Collapse>
    </Navbar>
  );
};

export default Navbars;
