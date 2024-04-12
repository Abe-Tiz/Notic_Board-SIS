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
  const { posts, error, loading, setPosts } = useFetchPosts();
  
  // console.log("user",user.data._id)

  useEffect(() => {
    getLoggedInUser();
  }, [getLoggedInUser]);

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
      console.error("Error updating likes", error);
      // Swal.fire(error.data);
    }
  };

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
