import React, { useEffect, useState } from 'react'
import  axios  from 'axios';
import Card from '../../../components/Card';
import Swal from 'sweetalert2';

const ListPost = () => {
  const [posts, setPosts] = useState([]);
  const [countLike, setCountLike] = useState(0);
  const [countComment, setCountComment] = useState(0);
  const [isPost,setIsPost] = useState(false);

  const [state, setState] = useState({
    fname: "",
    lname: "",
    image: "",
    isDropdownOpen: false,
    isLoggedin: false,
    collapsed: false,
    role: "",
  });
  // get posts
  const fetchPosts = async () => {
    try {
      const response = await axios.get("http://localhost:5000/news/");
      const data = response.data;
      // console.log("posts:", data);
      setPosts(data);
    } catch (error) {
      console.log("Error", error);
    }
  };

     const getLoggedInUser = async () => {
       fetch("http://localhost:5000/user/loggedin-user", {
         method: "POST",
         crossDomain: true,
         headers: {
           "Content-Type": "application/json",
           Accept: "application/json",
           "Access-Control-Allow-Origin": "*",
         },
         body: JSON.stringify({
           token: localStorage.getItem("admin"),
         }),
       })
         .then((res) => res.json())
         .then((data) => {
           console.log(data.data, "user logged in");
           setState((prev) => ({
             ...prev,
             id: data.data._id,
           }));
           setIsPost(!isPost)

        //    if (data.data === "token expired") {
        //      localStorage.clear();
        //      navigate("/login");
        //    }
         });
    };
    
  useEffect(() => {
      fetchPosts();
      getLoggedInUser();
  }, []);

  // handle liked
const handleLiked = async (postId) => {
  try {
    const userId = state.id;
    const response = await axios.post(
      "http://localhost:5000/news/update-like",
      { postId, userId }
    );

    // Update the posts state with the new like count
      if (response.data) {
        // console.log("updated like",response.data);
      setPosts(
        posts.map((post) => (post._id === postId ? response.data : post))
        );
          // Swal.fire(response.data);
    }
  } catch (error) {
    console.error("Error updating likes", error.data);
    //  Swal.fire(response.data);
  }
};

  // handle commented
  const handleCommente = () => {
    setCountComment(countComment + 1);
  };

  // console.log("posts:", posts);
  return (
    <>
      <div className="flex flex-wrap -mx-1">
        {
          isPost ? posts.map((post, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4 " key={index}>
            <Card
              handleLiked={() => handleLiked(post._id)}
              countLike={post.like.length}
              handleCommente={handleCommente}
              countComment={countComment}
              post={post}
            />
          </div>
        )) : <p className='bg-white text-red-600 m-24'>noooo</p>
        }
      </div>
    </>
  );
}

export default ListPost
