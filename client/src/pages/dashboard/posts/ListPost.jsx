import React, { useEffect, useState } from 'react'
import  axios  from 'axios';
import Card from '../../../components/Card';
import Swal from 'sweetalert2';
import useLoggedInUser from '../../../Hooks/useLoggedInUser';
import useFetchPosts from '../../../Hooks/useFetchPosts';

const ListPost = () => {
  // const [posts, setPosts] = useState([]);
  const [countLike, setCountLike] = useState(0);
  const [countComment, setCountComment] = useState(0);

  const { user, getLoggedInUser } = useLoggedInUser();
  
  const { posts, error, loading } = useFetchPosts();
  // get posts
  // const fetchPosts = async () => {
  //   try {
  //     const response = await axios.get("http://localhost:5000/news/");
  //     const data = response.data;
  //     setPosts(data);
  //   } catch (error) {
  //     console.log("Error", error);
  //   }
  // };

  useEffect(() => {
    // fetchPosts();
    getLoggedInUser();
  }, []);

  // handle liked
  const handleLiked = async (postId) => {
    try {
      const userId = user.data._id;
      const response = await axios.post(
        "http://localhost:5000/news/update-like",
        { postId, userId }
      );
      if (response.data) {
        setPosts(
          posts.map((post) => (post._id === postId ? response.data : post))
        );
      }
    } catch (error) {
      console.error("Error updating likes", error.data);
      // Swal.fire(error.data);
    }
  };

 

  // console.log("posts:", posts);
  return (
    <>
      <div className="flex flex-wrap -mx-1">
        {posts.map((post, index) => (
          <div className="w-full sm:w-1/2 md:w-1/3 px-2 mb-4 " key={index}>
            <Card
              handleLiked={() => handleLiked(post._id)}
              countLike={post.like ? post.like.length : 0}
              post={post}
              userId={user.data._id}
            />
          </div>
        ))}
      </div>
    </>
  );
}

export default ListPost
