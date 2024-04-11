
import DynamicIcon from './DynamicIcon';

const Card = ({
  handleLiked,
  countLike,
  handleCommente,
  countComment,
  key,
  post,
}) => {
  return (
    <>
      <div key={key} className="card bg-pink text-white shadow-xl">
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
              className="badge bg-yellow-600 p-5 text-white cursor-pointer"
            >
              
              <DynamicIcon
                library="ai"
                iconName="AiFillLike"
                className="text-2xl"
              />
              {countLike === 0 ? null : countLike}
            </div>

            <div
              onClick={handleCommente}
              className="badge bg-secondary text-white p-5 cursor-pointer"
            >
              comment {countComment === 0 ? null : countComment}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Card
