import { Link, useNavigate } from "react-router-dom";
import "./Product.css";

export default function Product({}) {
  return (
    <div
      className="post"
      // onClick={() => navigate(`/product-details/${data?.id}`)}
    >
      <img
        className="postImg"
        src={
          "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY="
        }
        alt=""
      />
      <div className="postInfo">
        <span className="postTitle">title</span>
        <hr />
        <span className="postDate">Cetegory</span>
      </div>
      <p className="postDesc">description</p>
    </div>
  );
}
