import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useLoggedInUser = (type) => {
  const [user, setUser] = useState(null);
  const [isPost, setIsPost] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false); // Default to true assuming user is logged in

  const getLoggedInUser = useCallback(async () => {
    try {
      let token = null;
      if (type === "admin") {
        token = localStorage.getItem("admin");
      } else {
         token = localStorage.getItem("users");
      }
      const response = await axios.post(
        "http://localhost:5000/user/loggedin-user",
        {
          token: token,
        }
      );
      if (response.data.status === "ok") {
        setUser(response.data);
        setIsPost(!isPost);
      } else {
        setIsLoggedIn(!isLoggedIn);
      }
    } catch (error) {
      console.error("Error fetching logged in user", error);
    }
  }, [isPost]);

  useEffect(() => {
    getLoggedInUser();
  }, [getLoggedInUser]);

  return { user,setUser, isPost, isLoggedIn, getLoggedInUser };
};

export default useLoggedInUser;
