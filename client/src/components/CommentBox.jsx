import React, { useState } from "react";
import axios from "axios";
import useFetchPosts from './../Hooks/useFetchPosts';


const CommentBox = ({ newsId, userId, countMessage }) => {
  const [commentContent, setCommentContent] = useState("");
  const [showInput, setShowInput] = useState(false);
  const { comments, setComments } = useState([]);

  const { posts } = useFetchPosts();



  const handleAddCommentClick = () => {
    setShowInput(true);
    
  };

  // console.log("posts:", posts)
  
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
    
    const filteredMessages = posts
      .filter((post) => post._id === newsId)
    .flatMap((post) => post.message);

    const filteredUser = posts
      .filter((post) => post._id === newsId)
    .flatMap((post) => post.message.user);

      // console.log("filtered user:", filteredMessages);

  return (
    <div>
      {showInput ? (
        <>
          <div className="flex flex-col  justify-center items-center gap-4  mt-4">
            <div className="font-serif bg-base-200 rounded-lg shadow-lg shadow-purple-1 w-full">
              {filteredMessages.map((message, index) => (
                <>
                  <div key={index} className="p-1 border   m-1">
                      {message.content}
                  </div>
                
                </>
              ))}
            </div>

            <textarea
              rows={3}
              cols={24}
              className="border-2 border-purple text-purple px-2 rounded-md bg-brown-400 overflow-hidden"
              value={commentContent}
              onChange={handleCommentChange}
              placeholder="Write your comment here..."
            />
            <button
              className="btn btn-secondary btn-outline"
              onClick={handleCommentSubmit}
            >
              post
            </button>
          </div>
        </>
      ) : (
        <button
          className="  rounded-md p-3  mt-4 font-sans  hover:shadow-md  "
          onClick={handleAddCommentClick}
        >
          <span> Comment {countMessage ? countMessage : null}</span>
        </button>
      )}
    </div>
  );
};

export default CommentBox;
