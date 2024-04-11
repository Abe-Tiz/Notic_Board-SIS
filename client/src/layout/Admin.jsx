import React, { useEffect, useState } from "react";
import { Layout } from "antd";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import CustomSidebar from './../components/CustomSidebar';
import HeaderComponent from './../components/HeaderComponent';
 
const { Content } = Layout;

const Admin = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    fname: "",
    lname: "",
    image: "",
    isDropdownOpen: false,
    isLoggedin: false,
    collapsed: false,
    role: "",
  });

  const getLoggedInUser = async () => {
    fetch("http://localhost:5000/user/loggedin-user", {
      method: "POST",
      crossDomain: true,
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Origin": "*",
      },
      body: JSON.stringify({
        token: localStorage.getItem("admin"),
      }),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data.data, "user logged in");
        setState((prev) => ({
          ...prev,
          fname: data.data.fname,
          lname: data.data.lname,
          image: data.data.image,
          role: data.data.role,
          isLoggedin: true,
        }));

        if (data.data === "token expired") {
          localStorage.clear();
          navigate("/login");
        }
      });
  };
  

  useEffect(() => {
    getLoggedInUser();
  }, []);

  const toggleSidebar = () => {
    setState((prev) => ({ ...prev, collapsed: !prev.collapsed }));
  };

  //! handle Logout
  const handleLogout = () => {
    localStorage.clear();
    navigate("/");
  };

  return (
    <>
      <Layout className=" bg-indigo min-h-screen w-full grid  md:grid-cols-1 ">
        {/* side bar section */}
        <CustomSidebar
          collapsed={state.collapsed}
          toggleSidebar={toggleSidebar}
          fname={state.fname}
          lname={state.lname}
          role={state.role}
          image={state.image}
          handleLogout={handleLogout}
        />

        <Layout
          className={`${
            state.collapsed ? "ml-20" : "ml-64"
          }  bg-base-200 transition-all duration-300 ease-in-out flex-grow`}
        >
          {/* header componnet  */}
          <HeaderComponent
            state={state}
            toggleSidebar={toggleSidebar}
            // newDonorCount={newDonorCount}
            image={state.image}
          />

          {/* content section  */}
          <Content className="bg-indigo p-4 mt-10">
            <div className=" bg-indigo  w-full">
              <Outlet />
            </div>
          </Content>
        </Layout>
      </Layout>
    </>
  );
}

export default Admin
