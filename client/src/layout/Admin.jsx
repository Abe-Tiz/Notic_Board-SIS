import React, { useEffect, useState } from "react";
import { Layout } from "antd";

import { useNavigate } from "react-router-dom";
import { Outlet } from "react-router-dom";
import CustomSidebar from './../components/CustomSidebar';
import HeaderComponent from './../components/HeaderComponent';
import useLoggedInUser from './../Hooks/useLoggedInUser';
 
const { Content } = Layout;

const Admin = () => {
  const navigate = useNavigate();
   const { user, setUser, getLoggedInUser } = useLoggedInUser("admin");

  const [state, setState] = useState({
    collapsed: false,
  });

  useEffect(() => {
    getLoggedInUser();
  }, []);
 
  // console.log("admin:",user.data)

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
          fname={user && user.data.fname}
          lname={user && user.data.lname}
          role={user && user.data.role}
          image={user && user.data.image}
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
            image={user && user.data.image}
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
