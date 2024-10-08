import { Link } from "react-router-dom";
import DynamicIcon from "./DynamicIcon";
import LinkSid from "./LinkSid";

const CustomSidebar = ({ collapsed, fname, lname, handleLogout, role,image }) => {
  return (
    <div
      className={`bg-purple   h-screen fixed  overflow-x-hidden text-white transition-all duration-300 z-50 ${
        collapsed ? "w-28" : "w-60 ml-0"
      }`}
    >
      <div className="flex flex-col  h-full mt-0">
        {collapsed ? (
          // collapsed btn
          <div className="flex flex-col items-center h-full overflow-x-hidden">
            <Link
              className="text-white p-2 hover:bg-gray-800 rounded"
              to="/admin"
              data-tooltip-id="my-dashboard"
              data-tooltip-content="Dashboard"
            >
              <DynamicIcon
                library="md"
                iconName="MdSpaceDashboard"
                className="text-2xl"
              />
            </Link>

            <Link
              className="text-white p-2 mt-2 hover:bg-gray-800 rounded"
              to="/admin"
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
              to="/admin/display-user"
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
              to="/admin/post-news"
              data-tooltip-id="user-list"
              data-tooltip-content="User List"
            >
              <DynamicIcon
                library="md"
                iconName="MdOutlineNewspaper"
                className="text-2xl"
              />
            </Link>
            <Link
              className="text-white p-2 mt-2 hover:bg-gray-800 rounded"
              to="/admin/list-news"
              data-tooltip-id="post-list"
              data-tooltip-content="Post List"
            >
              <DynamicIcon
                library="md"
                iconName="MdOutlineNewspaper"
                className="text-2xl"
              />
            </Link>
            <Link
              className="text-white p-2 mt-2 hover:bg-gray-800 rounded"
              to="/admin/activate"
              data-tooltip-id="post-list"
              data-tooltip-content="Post List"
            >
              <DynamicIcon
                library="md"
                iconName="MdOutlineNewspaper"
                className="text-2xl"
              />
            </Link>
          </div>
        ) : (
          <>
            {/* user progfile inage */}
            <div className="flex flex-col ">
              <div className="avatar">
                <div className="w-24 rounded-full  mb-2 ml-10 mt-5 ">
                  <img src={image} />
                </div>
              </div>

              <span className="text-lg text-white font-serif font-light ml-10">
                {fname} {lname}
              </span>
              <span className="text-sm font-thin ml-10 text-green-400">
                {role}
              </span>
            </div>

            {/* btn */}
            <div className="w-64- mt-4 flex flex-col justify-between h-full items-center">
              <div>
                <LinkSid
                  title="Dahboard"
                  icon={
                    <DynamicIcon
                      library="md"
                      iconName="MdSpaceDashboard"
                      className="text-2xl"
                    />
                  }
                  path="/admin"
                />

                <LinkSid
                  title="Add User"
                  icon={
                    <DynamicIcon
                      library="md"
                      iconName="MdOutlineGroupAdd"
                      className="text-2xl"
                    />
                  }
                  path="/admin"
                />

                <LinkSid
                  title="User List"
                  icon={
                    <DynamicIcon
                      library="pi"
                      iconName="PiUserListBold"
                      className="text-2xl"
                    />
                  }
                  path="/admin/display-user"
                />

                <LinkSid
                  title="Create Post"
                  icon={
                    <DynamicIcon
                      library="md"
                      iconName="MdOutlineNewspaper"
                      className="text-2xl"
                    />
                  }
                  path="/admin/post-news"
                />
                <LinkSid
                  title="Post List"
                  icon={
                    <DynamicIcon
                      library="md"
                      iconName="MdOutlineNewspaper"
                      className="text-2xl"
                    />
                  }
                  path="/admin/list-news"
                />
                <LinkSid
                  title="Activate Account"
                  icon={
                    <DynamicIcon
                      library="md"
                      iconName="MdOutlineNewspaper"
                      className="text-2xl"
                    />
                  }
                  path="/admin/activate"
                />
                <LinkSid
                  title="List Single"
                  icon={
                    <DynamicIcon
                      library="md"
                      iconName="MdOutlineNewspaper"
                      className="text-2xl"
                    />
                  }
                  path="/admin/view-single"
                />
              </div>
            </div>
          </>
        )}
        <Link
          onClick={handleLogout}
          className="flex gap-2 w-36 text-white p-2 mb-10 hover:bg-gray-800 rounded"
          // onClick={handleDisplayDonorClick}
          data-tooltip-id="donor-list"
          data-tooltip-content="Donor List"
        >
          {/* <PiUserListBold className="text-2xl" /> */}
          <DynamicIcon
            library="ai"
            iconName="AiOutlineLogin"
            className="text-2xl"
          />
          <span className="ml-2">Logout</span>
        </Link>
      </div>
    </div>
  );
};

export default CustomSidebar;
