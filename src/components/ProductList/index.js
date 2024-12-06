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
      console.log("res", res);
      if (res.status === 200) {
        setProductList(res?.data?.results);
      }
    } catch (error) {
      console.error("error:", error);
    }
  };

  const toggleAddBookPopup = () => {
    setVisibleAddBookPopup(!visibleAddBookPopup);
  };

  console.log("productList", productList);

  return (
    <div className="posts">
      <div className="add-button-container">
        <button className="add-button" onClick={() => toggleAddBookPopup()}>
          Add New Books In Library
        </button>
      </div>
      {productList &&
        productList?.length > 0 &&
        productList?.map((data) => {
          return <Product data={data} />;
        })}

      {visibleAddBookPopup && (
        <AddBookModal
          show={visibleAddBookPopup}
          onHide={toggleAddBookPopup}
          fetchProductList={fetchProductList}
        />
      )}
    </div>
  );
}
