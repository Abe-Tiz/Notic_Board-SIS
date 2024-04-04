// TableHeader.js
import React from "react";

const TableHeader = ({ fname, lname, role, email,status, action }) => {

  return (
    <thead className="bg-blue-300 text-xs text-gray-700 uppercase dark:bg-gray-700 dark:text-gray-400">
      <tr>
        <th scope="col" className="px-6 py-3">
          {fname}
        </th>
        <th scope="col" className="px-6 py-3">
          {lname}
        </th>
        <th scope="col" className="px-6 py-3">
          {role}
        </th>
        <th scope="col" className="px-6 py-3">
          {email}
        </th>
        <th scope="col" className="px-6 py-3">
          {status}
        </th>
        <th scope="col" className="px-6 py-3">
          {action}
        </th>
      </tr>
    </thead>
  );
};

export default TableHeader;
