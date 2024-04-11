import { useState, useEffect, useCallback } from "react";
import axios from "axios";

const useLoggedInUser = () => {
  const [user, setUser] = useState(null);
  const [isPost, setIsPost] = useState(false);

  const getLoggedInUser = useCallback(async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/user/loggedin-user",
        {
          token: localStorage.getItem("admin"),
        }
      );

      console.log(response.data, "user logged in");
      setUser(response.data);
      setIsPost((prev) => !prev);

      // if (response.data === "token expired") {
      //   localStorage.clear();
      //   navigate("/login");
      // }
    } catch (error) {
      console.error("Error fetching logged in user", error);
    }
  }, []);

  useEffect(() => {
    getLoggedInUser();
  }, [getLoggedInUser]);

  return { user, isPost, getLoggedInUser };
};

export default useLoggedInUser;
