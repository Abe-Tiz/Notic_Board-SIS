import { useState, useEffect } from "react";
import axios from "axios";

const useFetchPosts = () => {
  const [posts, setPosts] = useState([]);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchPosts = async () => {
      // setLoading(true);
      try {
        const response = await axios.get("http://localhost:5000/news/");
        setPosts(response.data);
        setLoading(true)
      } catch (error) {
        setError(error);
      }  
    };

    fetchPosts();
  }, []);

  return { posts, error, loading, setPosts };
};

export default useFetchPosts;
