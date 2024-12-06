import "./cart.css";
import CartList from "../../components/cart/CartList";
// import { useSelector } from "react-redux";

export default function ProductList() {
  // const { CART_STATE } = useSelector((state) => ({
  //   CART_STATE: state?.shoppingReducer?.cartData || [],
  // }));
  return (
    <div className="posts">
      {/* {CART_STATE.length === 0 ? <div>Cart is empty</div> : null} */}
      {/* {CART_STATE &&
        CART_STATE.length > 0 &&
        CART_STATE.map((data) => { */}
      {/* return <CartList key={data?.id} img={data?.thumbnail} data={data} />; */}
      <CartList />
      {/* })} */}
    </div>
  );
}
