import React from "react";
import DynamicIcon from "./DynamicIcon";

const LinkButton = ({ title }) => {
  return (
    <>
      <a
        href="/login"
        className="bg-purple font-serif font-bold items-center text-white btn hover:bg-pink sm:btn-sm md:btn-md lg:btn-lg"
      >
        <DynamicIcon library="fa" iconName="FaUser" className="text-xl" /> <span>Login</span>
      </a>
    </>
  );
};

export default LinkButton;
