import React from 'react'

const Hero = () => {
  return (
    <>
      <div className="hero min-h-screen bg-base-200">
        <div className="hero-content flex-col lg:flex-row-reverse">
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT6O7iSlNQd2yP49SRoy8EJOVhKEUxegzTxpw&s"
            className="max-w-sm rounded-lg shadow-2xl"
          />
          <div>
            <h1 className="text-5xl font-bold">
              SIS News and Task Assagniment
            </h1>
            <p className="py-6">
              Welcome to our News and Task Management System! Here, you can stay
              up-to-date with the latest news posted, while also tracking the progress and assignments of our
              staff members.
            </p>
            <button className="btn btn-primary">Get News</button>
          </div>
        </div>
      </div>
    </>
  );
}

export default Hero
