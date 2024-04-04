import { Link } from "react-router-dom";
import DynamicIcon from "./DynamicIcon";

const CustomSidebar = ({ collapsed, fname,lname, image, role }) => {

  return (
    <div
      className={`bg-purple   h-screen fixed  overflow-y-hidden text-white transition-all duration-300 ${
        collapsed ? "w-28" : "w-60"
      }`}
    >
      <div className="flex flex-col h-full mt-0">
        {collapsed ? (
          // collapsed btn
          <div className="flex flex-col items-center">
            <Link
              className="text-white p-2 hover:bg-gray-800 rounded"
              to="/adminDashboard"
              data-tooltip-id="my-dashboard"
              data-tooltip-content="Dashboard"
            >
              {/* <BellOutlined className="text-2xl" /> */}
              {/* <MdSpaceDashboard className="text-2xl" /> */}
              <DynamicIcon
                library="md"
                iconName="MdSpaceDashboard"
                className="text-2xl"
              />
            </Link>
            <Link
              className="text-white p-2 hover:bg-gray-800 rounded"
              to="/adminDashboard/addDonor"
              data-tooltip-id="add-donor"
              data-tooltip-content="Add Donor"
            >
              {/* <IoIosPersonAdd className="text-2xl" /> */}
              {/* <MdOutlineGroupAdd className="text-2xl" /> */}
              <DynamicIcon
                library="md"
                iconName="MdOutlineGroupAdd"
                className="text-2xl"
              />
            </Link>
            <Link
              className="text-white p-2 mt-2 hover:bg-gray-800 rounded"
              to="/adminDashboard/donorList"
              data-tooltip-id="donor-list"
              data-tooltip-content="Donor List"
            >
              <DynamicIcon
                library="pi"
                iconName="PiUserListBold"
                className="text-2xl"
              />
            </Link>
            <Link
              className="text-white p-2 mt-2 hover:bg-gray-800 rounded"
              to="/adminDashboard/addUser"
              data-tooltip-id="add-user"
              data-tooltip-content="Add User"
            >
              <DynamicIcon
                library="io"
                iconName="IoIosPersonAdd"
                className="text-2xl"
              />
            </Link>
            <Link
              className="text-white p-2 mt-2 hover:bg-gray-800 rounded"
              to="/adminDashboard/userList"
              data-tooltip-id="user-list"
              data-tooltip-content="User List"
            >
              <DynamicIcon
                library="ci"
                iconName="CiBoxList"
                className="text-2xl"
              />
            </Link>
            <Link
              className="text-white p-2 mt-2 hover:bg-gray-800 rounded"
              to="/adminDashboard/activate"
              data-tooltip-id="user-list"
              data-tooltip-content="User List"
            >
              <DynamicIcon
                library="vsc"
                iconName="VscActivateBreakpoints"
                className="text-2xl"
              />
            </Link>
            <Link
              to="/adminDashboard/addhospital"
              className="flex gap-2 text-white p-2 mt-2 hover:bg-gray-800 rounded"
              data-tooltip-id="user-list"
              data-tooltip-content="Add Hospital"
            >
              {/* <CiBoxList className="text-2xl" /> */}
              <DynamicIcon
                library="ci"
                iconName="CiHospital1"
                className="text-2xl"
              />
            </Link>
            <Link
              className="text-white p-2 mt-2 hover:bg-gray-800 rounded"
              to="/adminDashboard/create-post"
              data-tooltip-id="popular-posts"
              data-tooltip-content="Create Blog"
            >
              <DynamicIcon
                library="md"
                iconName="MdVisibility"
                className="text-2xl"
              />
            </Link>
            <Link
              className="text-white p-2 mt-2 hover:bg-gray-800 rounded"
              to="/adminDashboard/posts"
              data-tooltip-id="popular-posts"
              data-tooltip-content="Create Blog"
            >
              <DynamicIcon
                library="fa"
                iconName="FaBookOpen"
                className="text-2xl"
              />
            </Link>
          </div>
        ) : (
          <>
            {/* user progfile inage */}
            {/* <img
              className="w-28 h-25 rounded-full mb-2 ml-10 mt-5"
              src={image}
              alt="user photo"
            /> */}
              <span className="text-lg font-semibold ml-10">{fname} {" "} { lname}</span>
            <span className="text-lg font-semibold ml-10 text-pink-500">
              {role}
            </span>

            {/* btn */}
            <div className="w-64- mt-4 flex flex-col justify-center items-center">
              <Link
                to="/admin"
                className=" flex gap-2 w-36 text-white p-2 hover:bg-gray-800 rounded"
                // onClick={handleReport}
                data-tooltip-id="my-dashboard"
                data-tooltip-content="Dashboard"
              >
                <DynamicIcon
                  library="md"
                  iconName="MdSpaceDashboard"
                  className="text-2xl"
                />
                <span className="ml-2">Dahboard</span>
              </Link>
              <Link
                to="/admin/signup"
                className=" flex gap-2 w-36 text-white p-2 hover:bg-gray-800 rounded"
                // onClick={handleAddDonorClick}

                data-tooltip-id="add-donor"
                data-tooltip-content="Add Donor"
              >
                <DynamicIcon
                  library="md"
                  iconName="MdOutlineGroupAdd"
                  className="text-2xl"
                />
                <span className="ml-2">Add User</span>
              </Link>
              <Link
                to="/admin/login"
                className="flex gap-2 w-36 text-white p-2 mt-2 hover:bg-gray-800 rounded"
                // onClick={handleDisplayDonorClick}
                data-tooltip-id="donor-list"
                data-tooltip-content="Donor List"
              >
                {/* <PiUserListBold className="text-2xl" /> */}
                <DynamicIcon
                  library="pi"
                  iconName="PiUserListBold"
                  className="text-2xl"
                />
                <span className="ml-2">Login</span>
              </Link>
             
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default CustomSidebar;
