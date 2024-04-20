import React from 'react'

const ListSingMessage = ({ messages }) => {

    console.log(messages)
  return (
    <>
      <div className="m-10 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          <thead className="bg-blue-300 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="px-6 py-3">
                Name
              </th>
              <th scope="col" className="px-6 py-3">
                Email
              </th>
              <th scope="col" className="px-6 py-3">
                Role
              </th>
              <th scope="col" className="px-6 py-3">
                Title
              </th>
              <th scope="col" className="px-6 py-3">
                Content
              </th>
            </tr>
          </thead>
          <tbod>
            {messages.map((message) => (
              <tr
                key={message._id}
                className="bg-base-200 border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600"
              >
                <td className="border px-4 py-2">
                  {message.user.fname} {message.user.lname}
                </td>
                <td className="border px-4 py-2">{message.user.email}</td>
                <td className="border px-4 py-2">{message.user.role}</td>
                <td className="border px-4 py-2">{message.content.title}</td>
                <td className="border px-4 py-2">{message.content.content}</td>
              </tr>
            ))}
          </tbod>
        </table>
      </div>
    </>
  );
};

export default ListSingMessage
