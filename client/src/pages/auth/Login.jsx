import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Button from "../../components/Button";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [inputData, setInputData] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  // Handle form submission
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // Send inputData to the server
      const response = await axios.post(
        "http://localhost:5000/user/login",
        inputData
      );

      const data = response.data;
      console.log("data:",data)
      if (data.user.role === "admin") {
        localStorage.setItem("admin", data.token);
        localStorage.setItem("loggedIn", true);
        Swal.fire(data.message);
        navigate("/admin");
      } else {
        localStorage.setItem("users", data.token); // Changed from "users" to "user"
        localStorage.setItem("loggedIn", true);
        // axios.defaults.headers.common["Authorization"] = `Bearer ${data.token}`;
        Swal.fire(data.message);
        navigate("/list-news");
      }
    } catch (error) {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: error.response.data.message,
        showConfirmButton: true,
        timer: 5000,
      });
    }
  };

  // Update state with form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData((prevValue) => ({
      ...prevValue,
      [name]: value,
    }));
  };

  return (
    <>
      <div className="flex justify-center items-center p-10">
        <form onSubmit={handleSubmit} className="w-full max-w-lg">
          <h2 className="text-3xl text-green-400 font-serif font-bold mb-10 text-center">
            Login to Account
          </h2>
          <div className="flex flex-wrap flex-col justify-center items-center -mx-3 mb-6">
            <div className="flex flex-wrap -mx-3 mb-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password" // Corrected from "for" to "htmlFor"
              >
                Email
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="email"
                placeholder="Enter your Email"
                onChange={handleChange}
                name="email"
              />
            </div>
            <div className="flex flex-wrap -mx-3 mb-2">
              <label
                className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
                htmlFor="grid-password" // Corrected from "for" to "htmlFor"
              >
                Password
              </label>
              <input
                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-password"
                type="password"
                placeholder="Enter password"
                onChange={handleChange}
                name="password"
              />
            </div>

            <Button title="Login" />
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
