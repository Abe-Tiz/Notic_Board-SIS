import React from 'react'

const Navbar = () => {

  const navList = (
      <>
            <li>
              <a className='text-white'> News</a >
            </li>
            <li>
              <a className='text-white'> Features</a>
            </li>
            <li>
              <a className='text-white'> request</a>
            </li>
          </>
  )
  return (
    <>
      <div className="navbar bg-indigo">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-black rounded-box w-52"
            >
             {navList }
            </ul>
          </div>
          <a className="btn btn-ghost text-xl text-white">daisyUI</a>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1 bg-indigo">
           { navList }
          </ul>
        </div>
        <div className="navbar-end ">
          <a href='/login' className="btn bg-pink hover:bg-purple text-black ">Login</a>
        </div>
      </div>
    </>
  );
}

export default Navbar
