import React from 'react'
import { Link } from 'react-router-dom';

const LinkSid = ({ path, title, icon, customeClass }) => {
  return (
    <div>
      <Link
        to={path}
        className={` ${customeClass} flex gap-2 w-52 text-white  hover:bg-gray-800 rounded p-2 m-2 `}
        // onClick={handleReport}
        data-tooltip-id="my-dashboard"
        data-tooltip-content={title}
      >
        {icon}
        <span className="ml-2">{title}</span>
      </Link>
    </div>
  );
};

export default LinkSid
