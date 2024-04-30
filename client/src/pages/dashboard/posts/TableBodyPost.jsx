import React from "react";
import { Link } from "react-router-dom";
import { RiEdit2Line, RiDeleteBin2Line } from "react-icons/ri";
import LinkSid from "../../../components/LinkSid";
import useFetchPosts from "../../../Hooks/useFetchPosts";
// import useSearch from "../useHooks/useSearch";
import LoadingCircle from '../../../components/LoadingCircle';

const TableBodyPost = ({
  // datas,
  data,
  handleActivate,
  handleDelete,
  searchTerm,
}) => {

   const { posts, loading, setPosts } = useFetchPosts();
  const renderData = searchTerm ? data : posts;
  // console.log("search term", searchTerm);
  // console.log("posts:", posts);

  return (
    <>
      {loading ? (
        <LoadingCircle />
      ) : (
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
                      <img src={res.image} alt={res.title} />
                    </div>
                  </div>
                  <div className="text-base font-semibold">{res.title}</div>
                </div>
              </th>
              <td className="px-6 py-4 text-base font-semibold text-gray-900">
                {res.subTitle}
              </td>
              <td className="px-6 py-4">{res.content}</td>
              <td className="flex px-6 py-4">
                <Link
                  to={`/admin/edit/${res._id}`}
                  className="flex items-center bg-transparent border-0 p-1 mr-5 font-medium text-white "
                >
                  <RiEdit2Line size={20} color="#000" className="mr-2" />
                </Link>
                <button
                  onClick={() => handleDelete(res._id)}
                  className="flex items-center bg-transparent p-1 font-medium border-0 dark:text-blue-50"
                >
                  <RiDeleteBin2Line
                    size={20}
                    color="#000"
                    className="mr-2 text-red-400 text-xl"
                  />
                </button>
                <LinkSid
                  path={`/admin/send/${res._id}`}
                  title="Allocate"
                  customeClass="w-auto p-2 bg-sky-600"
                />
              </td>
            </tr>
          ))}
        </tbody>
      )}
    </>
  );
};

export default TableBodyPost;
