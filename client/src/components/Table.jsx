import React from 'react'

import TableBody from './TableBody';
import TableHeader from './TableHeader';

const Table = ({
  datas,
  handleActivate,
  onOpen,
  data,
  searchTerm,
  handleDelete,
}) => {
  console.log("datas:", datas);
  return (
    <>
      <div className="m-10 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          {/* table header */}
          <TableHeader
            fname="First Name"
            lname="Last Name"
            role="Role"
            email="Email Address"
            status="Status"
            action="Action"
          />

          {/* table body */}
          <TableBody
            datas={datas}
            handleActivate={handleActivate}
            handleDelete={handleDelete}
            data={data}
            searchTerm={searchTerm}
          />
        </table>
      </div>
    </>
  );
};

export default Table
