import React from 'react'

const Button = ({title}) => {
  return (
    <>
      <button className="bg-purple font-serif font-bold items-center text-white btn hover:bg-pink sm:btn-sm md:btn-md lg:btn-lg">
         {title}
      </button>
    </>
  );
}

export default Button
