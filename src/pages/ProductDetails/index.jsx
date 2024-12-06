import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { Fragment, useEffect, useState } from "react";
import { apiGet } from "../../services/apiFetch";
import { pathObj } from "../../services/pathObj";

export default function ProductDetails() {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [visibleGoToCart, setVisibleGoToCart] = useState(false);

  useEffect(() => {
    fetchProjectDetailsApi();
  }, []);

  const fetchProjectDetailsApi = async () => {
    setLoading(true);
    try {
      const res = await apiGet(pathObj.PROJECT_DETAILS + "/" + params?.id);
      if (res.status === 200) {
        console.log(res?.data);
      }
    } catch (error) {
      console.error("error:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="singlePost">
      {/* {loading ? (
        <div className="loader">LOADING...</div>
      ) : ( */}
      <Fragment>
        <div className="singlePostWrapper">
          <img
            className="singlePostImg"
            src={
              "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY="
            }
            alt=""
          />
          <h1 className="singlePostTitle">Title</h1>
          <div className="singlePostInfo">
            <span>Cetegory</span>
          </div>
          <p className="singlePostDesc">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
            voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
            <br />
            <br />
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste error
            quibusdam ipsa quis quidem doloribus eos, dolore ea iusto impedit!
            Voluptatum necessitatibus eum beatae, adipisci voluptas a odit modi
            eos! Lorem, ipsum dolor sit amet consectetur adipisicing elit. Iste
            error quibusdam ipsa quis quidem doloribus eos, dolore ea iusto
            impedit! Voluptatum necessitatibus eum beatae, adipisci voluptas a
            odit modi eos! Lorem, ipsum dolor sit amet consectetur adipisicing
            elit. Iste error quibusdam ipsa quis quidem doloribus eos, dolore ea
            iusto impedit! Voluptatum necessitatibus eum beatae, adipisci
            voluptas a odit modi eos! Lorem, ipsum dolor sit amet consectetur.
          </p>
          <div className="cart-container">
            <button type="button" className="add-to-cart">
              Edit
            </button>
          </div>
        </div>
      </Fragment>
    </div>
  );
}
