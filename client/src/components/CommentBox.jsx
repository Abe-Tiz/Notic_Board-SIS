import React, { useState } from "react";
import axios from "axios";


const CommentBox = ({ newsId, userId, countMessage }) => {
  const [commentContent, setCommentContent] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleAddCommentClick = () => {
    setShowInput(true);
  };

  const handleCommentChange = (e) => {
    setCommentContent(e.target.value);
  };

  const handleCommentSubmit = async () => {
    try {
      const response = await axios.post(
        `http://localhost:5000/news/comment`, // Make sure the URL is correct
        {
          userId: userId,
          content: commentContent,
          newsId: newsId,
        }
      );

      // console.log("Response:", response);
      setCommentContent("");
      setShowInput(false);

      console.log("Comment added!", response); // Log the response data
    } catch (error) {
      console.error("Failed to add comment", error.response || error); // Log the error response if available
    }
  };

  return (
    <div>
      {showInput ? (
        <>
          <div className="flex flex-col md:flex-row justify-center items-center gap-4  mt-4">
            <textarea
              rows={3}
              cols={24}
              className="text-purple px-2 rounded-md bg-brown-400 overflow-hidden"
              value={commentContent}
              onChange={handleCommentChange}
              placeholder="Write your comment here..."
            />
            <button onClick={handleCommentSubmit}>post</button>
          </div>
        </>
      ) : (
        <button
          className=" text-green-600  rounded-md p-3  mt-4 font-sans  hover:shadow-md  "
          onClick={handleAddCommentClick}
        >
          <span> Comment {countMessage ? countMessage : null}</span>
        </button>
      )}
    </div>
  );
};

export default CommentBox;
