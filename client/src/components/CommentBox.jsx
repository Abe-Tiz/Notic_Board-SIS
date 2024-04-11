import React, { useState } from "react";
import axios from "axios";

const CommentBox = ({ newsId, userId }) => {
  const [commentContent, setCommentContent] = useState("");
  const [showInput, setShowInput] = useState(false);

  const handleAddCommentClick = () => {
    setShowInput(true);
  };

  const handleCommentChange = (e) => {
    setCommentContent(e.target.value);
  };

const handleCommentSubmit = async () => {
  console.log(`Submitting comment: ${commentContent}`);
  console.log(`News ID: ${newsId}, User ID: ${userId}`);

  try {
    const response = await axios.post(
      `http://localhost:5000/news/comment`, // Make sure the URL is correct
      {
        userId: userId,
        content: commentContent,
        newsId: newsId,
      }
    );

    console.log("Response:", response);
    // Handle successful comment submission
    setCommentContent("");
    setShowInput(false);
    console.log("Comment added!", response.data); // Log the response data
  } catch (error) {
    console.error("Failed to add comment", error.response || error); // Log the error response if available
  }
};


  return (
    <div>
      {showInput ? (
        <>
          <textarea
            value={commentContent}
            onChange={handleCommentChange}
            placeholder="Write your comment here..."
          />
          <button onClick={handleCommentSubmit}>Submit Comment</button>
        </>
      ) : (
        <button onClick={handleAddCommentClick}>Add Comment</button>
      )}
    </div>
  );
};

export default CommentBox;
