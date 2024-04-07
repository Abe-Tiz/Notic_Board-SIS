import React from "react";
import { Link } from "react-router-dom";
import { RiEdit2Line, RiDeleteBin2Line } from "react-icons/ri";
// import useSearch from "../useHooks/useSearch";

const TableBody = ({
  datas,
  data,
  handleActivate,
  handleDelete,
  searchTerm,
}) => {
  const renderData = searchTerm ? data : datas;
  // console.log("search term", searchTerm);
  //   console.log("donor", renderDonors);

  return (
    <tbody>
      {renderData.map((res) => (
        <tr
          key={res._id}
          className="bg-base-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
        >
          <th
            scope="row"
            className="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white"
          >
            <div className="ps-3 flex justify-center items-center">
              <div
                role="button"
                className="btn btn-ghost btn-circle avatar mr-5"
              >
                <div className="w-10 rounded-full">
                  {/* <img alt="Tailwind CSS Navbar component" src={state.image} /> */}
                  <img src={res.image} />
                </div>
              </div>
              <div className="text-base font-semibold">{res.fname}</div>
            </div>
          </th>
          <td className="px-6 py-4 text-base font-semibold text-gray-900">
            {res.lname}
          </td>
          <td className="px-6 py-4">{res.role}</td>
          <td className="px-6 py-4">{res.email}</td>
          <td className="px-6 py-4">
            {res.verified ? (
              <p className="hover:bg-base-200 text-blue-700 px-4 py-2 rounded font-bold">
                Active
              </p>
            ) : (
              <button
                onClick={() => handleActivate(res._id)}
                className="bg-purple hover:bg-pink text-white px-4 py-2 rounded"
              >
                Pending
              </button>
            )}
          </td>
          <td className="flex px-6 py-4">
            <Link
              to={`/admin/edit/${res._id}`}
              className="flex items-center bg-transparent border-2 p-1  mr-5 font-medium text-white hover:text-purple dark:text-blue-500   hover:border-purple"
            >
              <RiEdit2Line size={20} color="#000" className="mr-2" />
            </Link>
            <button
              onClick={() => handleDelete(res._id)}
              className="flex items-center bg-transparent border-2 p-1 font-medium text-white hover:text-green-700 dark:text-blue-500   hover:border-green-700"
            >
              <RiDeleteBin2Line size={20} color="#000" className="mr-2" />
            </button>
          </td>
        </tr>
      ))}
    </tbody>
  );
};

export default TableBody;
