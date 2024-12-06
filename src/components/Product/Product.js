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
        src={
          "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY="
        }
        alt=""
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
