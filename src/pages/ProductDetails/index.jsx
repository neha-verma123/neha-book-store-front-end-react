import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { Fragment, useEffect, useState } from "react";
import { apiGet } from "../../services/apiFetch";
import { pathObj } from "../../services/pathObj";
// import { useDispatch, useSelector } from "react-redux";
// import { CART_DATA, PRODUCT_DETAILS } from "../../store/Action/webAction";

export default function ProductDetails() {
  // const dispatch = useDispatch();
  const params = useParams();
  const navigate = useNavigate();

  // const { PRODUCT_DATA, CART_STATE } = useSelector((state) => ({
  //   PRODUCT_DATA: state?.shoppingReducer?.productDetails,
  //   CART_STATE: state?.shoppingReducer?.cartData || [],
  // }));

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
        // dispatch(PRODUCT_DETAILS(res?.data));
      }
    } catch (error) {
      console.error("error:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleAddToCart = (item) => {
    // const temp = [...CART_STATE];
    const temp = [];
    temp.push(item);

    // if (CART_STATE.some((el) => el.id === item.id)) {
    if (temp.some((el) => el.id === item.id)) {
      alert(`${item?.title} already added into cart`);
      setVisibleGoToCart(false);
    } else {
      // dispatch(CART_DATA(temp));
      setVisibleGoToCart(true);
    }
  };

  return (
    <div className="singlePost">
      {/* {loading ? (
        <div className="loader">LOADING...</div>
      ) : ( */}
      <Fragment>
        {/* {PRODUCT_DATA && Object.keys(PRODUCT_DATA).length > 0 ? ( */}
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
            <button
              type="button"
              className="add-to-cart"
              onClick={() => {
                visibleGoToCart
                  ? navigate("/cart")
                  : // : handleAddToCart(PRODUCT_DATA);
                    handleAddToCart(["sata"]);
              }}
            >
              {visibleGoToCart ? "Go to cart" : "Add to cart"}
            </button>
          </div>
        </div>
        {/* ) : (<div className="singlePostWrapper">NO Item Found</div>
          )} */}
      </Fragment>
      {/* // )} */}
    </div>
  );
}
