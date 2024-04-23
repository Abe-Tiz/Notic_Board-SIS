import React, { useState } from 'react'
import axios from 'axios'
import Swal from "sweetalert2";
import Button from './../../components/Button';

const Signup = () => {
  const [inputData, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    role: "",
    password: "",
    image:"",
  });

  const [image, setImage] = useState('');

  // Upload image
  const uploadImage = async (pics) => {
    if (!pics) {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Please select an image!",
        showConfirmButton: false,
        timer: 5000,
      });
      return;
    }

    if (pics.type === "image/jpeg" || pics.type === "image/png") {
      const data = new FormData();
      data.append("file", pics);
      data.append("upload_preset", "mern-chat-app");
      data.append("cloud_name", "dxa20yutc");

      try {
        const response = await axios.post(
          "https://api.cloudinary.com/v1_1/dxa20yutc/image/upload",
          data
        );
        setInputData((prevValue) => ({
          ...prevValue,
          image: response.data.url.toString(),
        }));
      //  console.log("image: ",response.data.url.toString())
        // console.log(response.data.url.toString());
      } catch (error) {
        console.log(error);
      }
    } else {
      Swal.fire({
        position: "top",
        icon: "warning",
        title: "Please select a valid image format (JPEG or PNG)!",
        showConfirmButton: false,
        timer: 5000,
      });
      return;
    }
  };
 
//  console.log("input data:",inputData);
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/user/register",
        inputData
      );
      console.log("response data:",response.data);

      Swal.fire({
        position: "top",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: true,
        timer: 5000,
      });

      setInputData({
        fname: "",
        lname: "",
        email: "",
        role: "",
        password: "",
        image: "",
      });
    } catch (error) {
      // console.error("Error occurred:", error.response.data.message);
      Swal.fire({
        position: "top",
        icon: "error",
        title: error.response.data.message,
        showConfirmButton: true,
        timer: 5000,
      });
    }
  };

  // Update state with form input changes
  const handleChange = (event) => {
    const { name, value } = event.target;
    setInputData((preValue) => ({
      ...preValue,
      [name]: value,
    }));
  };

  return (
    <div className="flex justify-center items-center p-10 ">
      <form onSubmit={handleSubmit} className="w-full max-w-lg">
        <h2 className="text-3xl  text-green-400 font-serif font-bold mb-10 text-center">
          Create Account
        </h2>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className=" text-white block uppercase tracking-wide text-xs font-bold mb-2"
              for="grid-first-name"
            >
              First Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Enter First Name"
              onChange={handleChange}
              name="fname"
            />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label
              className=" text-white block uppercase tracking-wide text-xs font-bold mb-2"
              for="grid-last-name"
            >
              Last Name
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-last-name"
              type="text"
              placeholder="Enter Last Name"
              onChange={handleChange}
              name="lname"
            />
          </div>
        </div>

        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className=" text-white block uppercase tracking-wide text-xs font-bold mb-2"
              for="grid-password"
            >
              Email:
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              type="email"
              placeholder="Enter your Email"
              onChange={handleChange}
              name="email"
            />
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-2">
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-city"
            >
              Password
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-city"
              type="password"
              placeholder="enter password"
              onChange={handleChange}
              name="password"
            />
          </div>
          <div className="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              className="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-state"
            >
              Role
            </label>
            <div class="relative">
              <select
                class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                id="grid-state"
                onChange={handleChange}
                name="role"
              >
                <option value="instructor">Instructor</option>
                <option value="coordinator">Coordinator</option>
                <option value="secretary">Secretary</option>
                <option value="admin">Admin</option>
              </select>
              <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                <svg
                  class="fill-current h-4 w-4"
                  xmlns="http://www.w3.org/2000/svg"
                  viewBox="0 0 20 20"
                >
                  <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                </svg>
              </div>
            </div>
          </div>
          <div class="w-full md:w-1/3 px-3 mb-6 md:mb-0">
            <label
              class="block uppercase tracking-wide text-white text-xs font-bold mb-2"
              for="grid-file"
            >
              Image
            </label>
            <input
              name="file"
              type="file"
              accept="image/*"
              onChange={(e) => uploadImage(e.target.files[0])}
              class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              autoComplete="off"
            />
          </div>
        </div>

        <Button title="Submit" />
        <label className="label">
          <a href="/login" className="label-text-alt link link-hover">
             Have you an account ? Sign In
          </a>
        </label>
      </form>
    </div>
  );
}

export default Signup
