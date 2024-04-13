import React, { useState } from "react";
import axios from "axios";
import Button from "../../../components/Button";
import Swal from "sweetalert2";
 
const ActivateAccount = () => {
  const [email, setEmail] = useState();


  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://localhost:5000/user/activate", {
        email,
      });
      const data = response.data;
      console.log("data:",data);
      Swal.fire(response.data.message);
    } catch (error) {
      if (error.response) {
          Swal.fire(error.response.data.message);
      } else {
         Swal.fire(error.message);
      }
    }
  };

  return (
    <>
      <div className="signup__container container">
        <div className="login-form m-10">
          <h3 className="title text-2xl md:text-3xl font-semibold text-white">
            Activate User Account
          </h3>

          <div className="form">
            <form onSubmit={handleSubmit}>
              <div className="flex flex-col gap-4 mt-4">
                <div className="mt-4">
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium text-white dark:text-white"
                  >
                    Email:
                    <span class="text-red-500">*</span>
                  </label>

                  <div className="flex flex-col items-start">
                    <input
                      name="email"
                      type="email"
                      className="block w-full  border-2 border-gray-300 bg-gray-50 p-2.5 text-sm text-gray-900 placeholder-gray-300 focus:border-purple-500 focus:ring-purple-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-purple-500 dark:focus:ring-purple-500 [&:not(:placeholder-shown):not(:focus):invalid~span]:block invalid:[&:not(:placeholder-shown):not(:focus)]:border-red-400 valid:[&:not(:placeholder-shown)]:border-green-500"
                      autoComplete="off"
                      required
                      pattern="[a-z0-9._+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                      placeholder="Enter your email address"
                      onChange={(e) => setEmail(e.target.value)}
                    />
                    <span className="mt-1 hidden text-sm text-red-400">
                     Please enter valid email address!
                    </span>
                  </div>
                </div>
                {/* <ButtonComponent
                  customClass="w-64 justify-center  mb-3"
                  title="Activate"
                /> */}
                <Button title="Activate" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default ActivateAccount;
