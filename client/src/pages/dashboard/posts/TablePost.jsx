import React from "react";
// import TableHeader from "./TableHeader";
import TableBodyPost from "./TableBodyPost";
// import TableHeader from './../../../components/TableHeader';
import TableHeaderPost from "./TableHeaderPost";

const TablePost = ({
  datas,
  handleActivate,
  onOpen,
  data,
  searchTerm,
  handleDelete,
}) => {
  // console.log("datas:", datas);
  return (
    <>
      <div className="m-10 relative overflow-x-auto shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
          {/* table header */}
          <TableHeaderPost
            fname="title"
            lname="Subtitle"
            role="Content"
            action="Action"
          />

          {/* table body */}
          <TableBodyPost
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

export default TablePost;
