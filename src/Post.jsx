import { format } from "date-fns";
import { Link } from "react-router-dom";

const Post = ({ _id, title, summary, content, cover, createdAt, author }) => {
  const a = cover?.split("\\");
  const newCover = a[0] + "/" + a[1];

  // const val = _id;

  return (
    <div className="post">
      <div className="image">
        {/* {console.log(val)} */}
        <Link to={`/post/${_id}`}>
          <img
            src={`${import.meta.env.VITE_BASE_URL}/` + newCover}
            alt="blog photo"
          />
        </Link>
      </div>
      <div className="texts">
        <Link to={`/post/${_id}`}>
          <h2>{title}</h2>
        </Link>
        <p className="info">
          <a className="author">{author?.username}</a>
          <time>{format(new Date(createdAt), "MMM d, yyy HH:mm")}</time>
        </p>
        <p className="summary">{summary}</p>
      </div>
    </div>
  );
};

export default Post;
