import React, { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Button from "../../../components/Button";
 

const CreatePost = () => {
  const [inputData, setInputData] = useState({
    title: "",
    content: "",
    image: "",
  });

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

    //    console.log("input data:",inputData);
    
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:5000/news/post",
        inputData
      );
    //   console.log("response data:",response.data);

      Swal.fire({
        position: "top",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: true,
        timer: 5000,
      });

    //   setInputData({
    //     title: "",
    //     content: "",
    //     image: "",
    //   });
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
          Create Post
        </h2>
        <div className="flex flex-wrap -mx-3 mb-6">
          {/* title */}
          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label
              className=" text-white block uppercase tracking-wide text-xs font-bold mb-2"
              for="grid-first-name"
            >
              Title:
            </label>
            <input
              className="appearance-none block w-full bg-gray-200 text-gray-700 border rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
              id="grid-first-name"
              type="text"
              placeholder="Enter First Name"
              onChange={handleChange}
              name="title"
            />
            {/* <p className="text-red-500 text-xs italic">Please fill out this field.</p> */}
          </div>
          {/* image */}
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

        {/* content */}
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full px-3">
            <label
              className=" text-white block uppercase tracking-wide text-xs font-bold mb-2"
              for="grid-password"
            >
              Content:
            </label>
            <textarea
              className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
              id="grid-password"
              placeholder="Enter your Contents Here..."
              onChange={handleChange}
                          name="content"
                          rows={4}
            />
          </div>
        </div>

        {/* btn */}
        <Button title="Submit" />
      </form>
    </div>
  );
};

export default CreatePost;
