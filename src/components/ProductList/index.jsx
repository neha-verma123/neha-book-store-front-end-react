import { apiGet } from "../../services/apiFetch";
import { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./ProductList.css";
import { pathObj } from "../../services/pathObj";
import AddBookModal from "../home/AddBookModal";

export default function ProductList() {
  const [productList, setProductList] = useState([]);
  const [visibleAddBookPopup, setVisibleAddBookPopup] = useState(false);

  useEffect(() => {
    fetchProductList();
  }, []);

  const fetchProductList = async () => {
    try {
      const res = await apiGet(pathObj.PRODUCTS);
      if (res.status === 200) {
        setProductList(res?.data?.products);
        // dispatch(PRODUCT_LISTING(res?.data?.products));
      }
    } catch (error) {
      console.error("error:", error);
    }
  };

  const toggleAddBookPopup = () => {
    setVisibleAddBookPopup(!visibleAddBookPopup);
  };

  return (
    <div className="posts">
      <div className="add-button-container">
        <button className="add-button" onClick={() => toggleAddBookPopup()}>
          Add New Books In Library
        </button>
      </div>
      {Array(20)
        .fill("")
        .map((el) => {
          return (
            <Product img="https://images.pexels.com/photos/6685428/pexels-photo-6685428.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500" />
          );
        })}

      {visibleAddBookPopup && (
        <AddBookModal show={visibleAddBookPopup} onHide={toggleAddBookPopup} />
      )}
    </div>
  );
}
