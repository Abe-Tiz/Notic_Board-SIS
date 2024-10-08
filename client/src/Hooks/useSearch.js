import { useState } from "react";
import axios from "axios";

const useSearch = (searchType) => {
  const [searchTerm, setSearchTerm] = useState("");
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetchData = async () => {
    try {
      let url;
      switch (searchType) {
        case "user":
          url = "http://localhost:5000/user/search";
          break;
        // case "user":
        //   url = "http://localhost:4000/user/search";
        //   break;
        // Add more cases for other search types as needed
      }

      const response = await axios.post(url, {
        fname: searchTerm,
      });
      console.log(response.data);
      setData(response.data);
      setError(null);
    } catch (err) {
      setError(err.response ? err.response.data.error : err.message);
      setData([]);
    }
  };

  const handleChange = (e) => {
    setSearchTerm(e.target.value);

    if (e.target.value) {
      fetchData();
    }
  };

  return {
    searchTerm,
    setSearchTerm,
    data,
    error,
    handleChange,
  };
};

export default useSearch;
