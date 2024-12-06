import React from "react";
import "./CartList.css";
// import { useDispatch, useSelector } from "react-redux";
// import { CART_DATA } from "../../store/Action/webAction";

const CartList = ({ img, data }) => {
  // const dispatch = useDispatch();
  // const { CART_STATE } = useSelector((state) => ({
  //   CART_STATE: state?.shoppingReducer?.cartData || [],
  // }));

  const handleDelete = (item) => {
    // const temp = [...CART_STATE];
    // const result = temp.filter((el) => el?.id !== item?.id);
    // console.log("temp", result);
    // dispatch(CART_DATA(result));
  };
  return (
    <div className="post">
      <img
        className="postImg"
        src={
          "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY="
        }
        alt=""
      />
      <div className="cart-title">
        <p>tITLE</p>
      </div>
      <div className="delete-icon" onClick={() => handleDelete(data)}>
        <i className="topIcon fas fa-trash-alt colored"></i>
      </div>
    </div>
  );
};

export default CartList;
