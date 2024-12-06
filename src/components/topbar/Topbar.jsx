import { Link } from "react-router-dom";
import "./topbar.css";

export default function Topbar() {
  return (
    <div className="top">
      <div className="topLeft">
        <i className="topIcon fab fa-facebook-square"></i>
        <i className="topIcon fab fa-instagram-square"></i>
        <i className="topIcon fab fa-pinterest-square"></i>
        <i className="topIcon fab fa-twitter-square"></i>
      </div>
      <div className="topCenter">
        <ul className="topList">
          <li className="topListItem">
            <Link className="link" to="/home">
              HOME
            </Link>
          </li>
          <li className="topListItem">
            <Link className="link" to="/">
              LOGIN
            </Link>
          </li>
          <li className="topListItem">
            {" "}
            <Link className="link" to="/register">
              REGISTER{" "}
            </Link>
          </li>
        </ul>
      </div>
      <div className="topRight">
        <Link className="link" to="/settings">
          <img
            className="topImg"
            src="https://images.pexels.com/photos/1858175/pexels-photo-1858175.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
            alt=""
          />
        </Link>

        <i className="topSearchIcon fas fa-search"></i>
      </div>
    </div>
  );
}
