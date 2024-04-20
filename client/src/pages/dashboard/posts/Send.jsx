import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";// Make sure to import axios

const Send = () => {
  const [userRoles, setUserRoles] = useState([]);
  const [selected, setSelected] = useState("");
  const { id } = useParams();

  // Function to fetch users and extract unique roles
  const getUsers = async () => {
    try {
      const response = await axios.get("http://localhost:5000/user/");
      const roles = response.data.map((user) => user.role); // Extract the role from each user
      setUserRoles([...new Set(roles)]);
    } catch (error) {
      console.error("Error fetching users:", error);
    }
  };

  // useEffect to call getUsers on component mount
  useEffect(() => {
    getUsers();
  }, []);

  // Handler for when a role is selected from the dropdown
  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  // Function to handle form submission
  const handleSubmit = async (event) => {
    event.preventDefault(); // Prevent the default form submit action
    try {
      const response = await axios.post("http://localhost:5000/single/send", {
        id,
        role: selected,
      });
      // console.log(response.data);  
    } catch (error) {
      console.error("Error sending message:", error);
    }
  };

  return (
    <>
      <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
        <form onSubmit={handleSubmit}>
          <label
            className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2"
            htmlFor="user-role"
          >
            TO:
          </label>
          <select
            className="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
            id="user-role"
            name="userRole"
            value={selected}
            onChange={handleChange}
          >
            <option value="">-- Select a role --</option>
            {userRoles.map((role, index) => (
              <option key={index} value={role}>
                {role}
              </option>
            ))}
          </select>

          <button
            type="submit"
            className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
            // onClick={handleSubmit}
          >
            Send Message
          </button>
        </form>
      </div>
    </>
  );
};

export default Send;
