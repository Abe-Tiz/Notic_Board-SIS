import React from 'react'
import TableHeaderPost from '../posts/TableHeaderPost';

const ListSingMessage = ({ messages }) => {

  return (
    <>
      <div className="m-10 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <TableHeaderPost
            fname="Name"
            lname="Email"
            role="Content"
          />
          <tbody
            className="bg-base-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
          >
            {messages.map((message) => (
              <tr
                key={message._id}
                className="bg-base-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="border px-4 py-2">
                  {message.user?.fname} {message.user?.lname}
                  <p className='m-2 text-yellow-500 font-bold font-serif'>"{ message.user?.role}"</p>
                </td>
                <td className="border px-4 py-2">{message.user?.email}</td>
                <td className="border px-4 py-2">{message.content?.content}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ListSingMessage
