
import CommentBox from './CommentBox';
import DynamicIcon from './DynamicIcon';

const Card = ({
  handleLiked,
  countLike,
  timeSincePosted,
  userId,
  key,
  post,
}) => {
  // console.log(`posted news: ${userId}: post Id: ${post._id}`)
  return (
    <>
      <div key={key} className="card bg-black shadow-xl">
        <figure>
          <img
            src={post.image}
            alt="Shoes"
            className="w-full h-64 rounded-lg "
          />
        </figure>
        <span className="flex items-centercard-title -mt-16 mb-16 bg-black text-center text-white p-3 mx-16 rounded-lg shadow-lg shadow-purple-1  border border-spacing-14">
          {post.title}{" "}
        </span>
        <div className="card-body">
          <div className="bg-base-200 shadow-lg shadow-purple-1 p-4 rounded-lg">
            <h2 className="card-title font-serif  font-bold mb-2 ">
              {post.subTitle}{" "}
              <span className="text-blue-900 italic font-serif font-thin text-sm ml-3">
                {" "}
                {timeSincePosted}
              </span>
            </h2>
            <p className="font-thin">{post.content}</p>
            <div className="card-actions justify-around">
              <div
                onClick={handleLiked}
                className=" p-3 mt-4 rounded flex gap-2 cursor-pointer mr-4"
              >
                <DynamicIcon
                  library="ai"
                  iconName="AiFillLike"
                  className="text-2xl"
                />
                {countLike === 0 ? null : countLike}
              </div>

              <CommentBox
                countMessage={post.message ? post.message.length : 0}
                newsId={post._id}
                userId={userId}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card
