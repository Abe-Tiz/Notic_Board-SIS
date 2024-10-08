import React, { useEffect, useState } from "react";
import { Badge } from "antd";
import { GiHamburgerMenu } from "react-icons/gi";
import { TfiMenuAlt } from "react-icons/tfi";
// import { useNavigate } from "react-router-dom";
// import useSearch from "../Hooks/useSearch";
 
const HeaderComponent = ({ state, toggleSidebar,image }) => {
  const [isDropdownOpen, setDropdownOpen] = useState(false);
//   const { t } = useTranslation();
  // const navigate = useNavigate();
  // const { searchTerm, handleChange, donor, error, getDonorByName } = useSearch('user');

  //! handle Logout
  // const handleLogout = () => {
  //   localStorage.clear();
  //   navigate("/");
  // };


  const toggleDropdown = () => {
    setDropdownOpen(!isDropdownOpen);
  };

  return (
    <div
      className={`bg-purple p-2  flex md:justify-between md:gap-5 justify-around text-center items-center fixed z-50  md:pr-5 pr-10  ${
        state.collapsed ? ` w-11/12 ml-8` : `w-4/5 ml-0`
      }`}
    >
      <div className="flex items-center">
        {state.collapsed ? (
          <TfiMenuAlt
            className="text-2xl text-gray-400 mr-2 cursor-pointer"
            onClick={toggleSidebar}
          />
        ) : (
          <GiHamburgerMenu
            className="text-2xl text-gray-400 mr-2 cursor-pointer"
            onClick={toggleSidebar}
          />
        )}
        {/* language selector */}
        {/* <LanguageSelector /> */}
      </div>

      <div className="bg-indigo-900 flex items-center justify-center space-x-4">
        <div className="flex-none gap-2">
          {/* notification section  */}
          <div className="dropdown dropdown-end">
            {/* notification */}
            <div
              tabIndex={0}
              role="button"
              className="ml-5 btn btn-ghost btn-circle items-center justify-center text-center mr-5"
            >
              <div className="indicator flex items-center  ">
                <Badge className="mr-5 flex ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-10 w-10 text-5xl -mr-5 text-white"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                    />
                  </svg>

                  <span className="badge badge-secondary">0</span>
                </Badge>
              </div>
            </div>

            <div
              tabIndex={0}
              className="mt-3 z-[1] card card-compact dropdown-content w-52 bg-base-100 shadow"
            >
              {/* notification component */}
              {/* <Notification newDonorCount="5" /> */}
            </div>
          </div>

          {/* profile section */}
          <div className="dropdown dropdown-end ">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost btn-circle avatar mr-5"
            >
              <div className="w-10 rounded-full">
                {/* <img alt="Tailwind CSS Navbar component" src={state.image} /> */}
                <img src={image} />
              </div>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52 text-lg text-black"
            >
              <li>
                <a href="#"> Setting</a>
              </li>
              <li>
                <a href="#">Profile</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderComponent;
