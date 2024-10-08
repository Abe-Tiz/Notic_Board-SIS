import React, { useEffect, useState } from 'react'
import SearchComponent from './SearchComponent';
import useSearch from './../Hooks/useSearch';
import Table from './Table';
import LoadingCircle from './LoadingCircle';
import Swal  from 'sweetalert2';
import  axios  from 'axios';
// import useLoggedInUser from '../Hooks/useLoggedInUser';

const Display = () => {
  const [datas, setDatas] = useState([]);
  const [loading, setLoading] = useState(false);
  const { searchTerm, handleChange, data, error } = useSearch("user");
 
  
    const fetchUser = async () => {
      try {
        const response = await axios.get("http://localhost:5000/user");
        const userdata = response.data;

        if (userdata && userdata.length > 0) {
          const notLoggedInUsers = userdata.filter(
            (u) => u.role !== 'admin'
          );
          // console.log("not loggedin:",notLoggedInUsers);
          setLoading(true);
          setDatas(notLoggedInUsers);
        } else {
          Swal.fire({
            position: "top",
            icon: "warning",
            title: "Array is Empty",
            showConfirmButton: false,
            timer: 5000,
          });
        }
      } catch (error) {
        Swal.fire({
          position: "top",
          icon: "error",
          title: error.message,
          showConfirmButton: false,
          timer: 5000,
        });
      }
    };


    
  
  // handle the  users 
    useEffect(() => {
      fetchUser();
    }, []);
  // console.log("user : ",user.data._id)
  
  const handleDelete = async (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          await axios.delete(`http://localhost:5000/user/delete/${id}`);
          setDatas(datas.filter((data) => data._id !== id));
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success",
          });
        } catch (error) {
          Swal.fire({
            position: "top",
            icon: "error",
            title: "Error Occured",
            showConfirmButton: false,
            timer: 5000,
          });
        }
      }
    });
  };

  
  return (
    <>
      <div className="w-full mt-5 flex justify-end ">
        {/* search component */}
        <SearchComponent searchTerm={searchTerm} handleChange={handleChange} />
      </div>

      {/* donor table */}
      {loading ? (
        <Table
          datas={datas}
          // handleActivate={handleActivate}
          handleDelete={handleDelete}
          data={data}
          searchTerm={searchTerm}
        />
      ) : (
        <LoadingCircle />
      )}
    </>
  );
};

export default Display
