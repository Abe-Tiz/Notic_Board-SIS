import React from "react";
import DynamicIcon from "./DynamicIcon";
import { useNavigate } from "react-router-dom";


const LinkButton = ({ title, user }) => {
  const navigate = useNavigate();

  //! handle Logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      {user ? (
        <p onClick={handleLogout} className="text-white flex gap-2 px-5 cursor-pointer">
          <DynamicIcon
            library="ai"
            iconName="AiOutlineLogin"
            className="text-2xl"
          />
          Logout
        </p>
      ) : (
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
      )}
    </>
  );
};

export default LinkButton;
