import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Error from "./pages/Error";
import Community from "./pages/Community";
import Profile from "./pages/Profile";
import Register from "./components/profile/Register";
import Login from "./components/profile/Login";
import { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./components/Navbar";
import { BASE_URL } from "./Common";
// import jwt_decode from "jwt-decode";

function App() {
  const [authenticated, setAuthenticated] = useState(false);
  const [user, setUser] = useState({});

  useEffect(() => {
    const checkAuthentication = async () => {
      try {
        // Check if the user is authenticated
        const response = await axios.get(
          `${BASE_URL}/api/v1/checkLoggedIn`
        );

        if (response.data.success) {
          setAuthenticated(true);

          // If authenticated, fetch user details
          const token = response.data.token;
          if (token) {
            const userDetails = response.data.userDetails;
            const users=JSON.parse(userDetails);
            setUser(users);

            ////If we have to fetch user details from token
            // const decodedToken = jwt_decode(token);
            // const userId = decodedToken._id;
            // try {
            //   const userResponse = await axios.get(
            //     `${BASE_URL}/api/v1/getuser/${userId}`
            //   );
            //   setUser(userResponse.data.user);
            // } catch (error) {
            //   console.error("Error fetching user details:", error);
            // }
          }
        } else {
          setAuthenticated(false);
        }
      } catch (err) {
        console.log("Error checking authentication", err);
        setAuthenticated(false);
      }
    };

    checkAuthentication();
  }, []);
  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/profile" element={<Profile user={user}/>}></Route>
        <Route
          path="/community"
          element={
            authenticated ? (
              <Community user={user}/>
            ) : (
              <Login message="You must be logged in to access this page" />
            )
          }
        ></Route>
        <Route
          path="/register"
          element={!authenticated ? <Register /> : <Home />}
        ></Route>
        <Route
          path="/login"
          element={!authenticated ? <Login /> : <Home />}
        ></Route>
        <Route path="*" element={<Error />}></Route>
      </Routes>
    </div>
  );
}

export default App;
