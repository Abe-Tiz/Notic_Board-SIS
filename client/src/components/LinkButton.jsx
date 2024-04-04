import React from "react";

const LinkButton = ({ title }) => {
  return (
    <>
        <a
            href="/login"
            className="bg-purple font-serif font-bold items-center text-white btn hover:bg-pink sm:btn-sm md:btn-md lg:btn-lg"
        >
            Login
        </a>
    
    </>
  );
};

export default LinkButton;
