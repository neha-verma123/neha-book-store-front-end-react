import { Link, useNavigate } from "react-router-dom";
import "./Product.css";
export default function Product({ data }) {
  const navigate = useNavigate();
  return (
    <div
      className="post"
      key={data?._id}
      onClick={() => navigate(`/product-details/${data?._id}`)}
    >
      <img
        className="postImg"
        src={data?.image || "fallback-image-url.jpg"}
        alt="NO_IMAGE_AVAILABLE"
        onError={(e) =>
          (e.target.src =
            "https://upload.wikimedia.org/wikipedia/commons/1/14/No_Image_Available.jpg")
        }
      />
      <div className="postInfo">
        <span className="postTitle">{data?.title}</span>

        <span className="postDate">{data?.price}</span>

        <span className="postDate">{data?.category}</span>
      </div>
      <p className="postDesc">{data?.description}</p>
    </div>
  );
}
