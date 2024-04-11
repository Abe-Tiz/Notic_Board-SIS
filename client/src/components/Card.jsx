
import CommentBox from './CommentBox';
import DynamicIcon from './DynamicIcon';

const Card = ({
  handleLiked,
  countLike,
  handleCommente,
  userId,
  key,
  post,
}) => {
  return (
    <>
      <div key={key} className="card bg-black text-white shadow-xl">
        <figure>
          <img
            src={post.image}
            alt="Shoes"
            className="w-full h-64 rounded-lg "
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{post.title}</h2>
          <p>{post.content}</p>
          <div className="card-actions justify-end">
            <div
              onClick={handleLiked}
              className=" text-red-300 p-3 mt-4 rounded flex gap-2 cursor-pointer mr-4"
            >
              <DynamicIcon
                library="ai"
                iconName="AiFillLike"
                className="text-2xl"
              />
              {countLike === 0 ? null : countLike}
            </div>

            <CommentBox countMessage={post.message.length} newsId={post._id} userId={userId} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Card
