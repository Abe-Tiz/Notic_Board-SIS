import React from "react";
import DynamicIcon from "./DynamicIcon";
import { useNavigate } from "react-router-dom";


const LinkButton = ({ user, isLoggedIn }) => {
  const navigate = useNavigate();
  // console.log("logedin : ", user.data.image);
  //! handle Logout
  const handleLogout = () => {
     localStorage.removeItem("users");
    navigate("/");
  };
  // console.log("logedin : ", isLoggedIn);
  return (
    <>
      {isLoggedIn ? (
        <a
          href="/login"
          className="bg-purple font-serif font-bold items-center text-white btn hover:bg-pink sm:btn-sm md:btn-md lg:btn-lg"
        >
          <DynamicIcon
            library="ai"
            iconName="AiOutlineLogin"
            className="text-2xl"
          />
          <span>Login</span>
        </a>
      ) : (
        <div className="dropdown dropdown-end">
          <div
            tabIndex={0}
            role="button"
            className="btn btn-ghost btn-circle avatar"
          >
            <div className="w-10 rounded-full">
              <img alt="Tailwind CSS Navbar component" src={user && user.data.image} />
            </div>
          </div>
          <ul
            tabIndex={0}
            className="mt-3 p-2 shadow bg-purple menu menu-sm dropdown-content rounded-box w-52 z-40"
          >
            <li
              onClick={handleLogout}
              className="text-white p-5 cursor-pointer"
            >
              <span>
                <DynamicIcon
                  library="ai"
                  iconName="AiOutlineLogin"
                  className="text-2xl text-white"
                />
                Logout
              </span>
            </li>
          </ul>
        </div>
      )}
    </>
  );
};

export default LinkButton;
