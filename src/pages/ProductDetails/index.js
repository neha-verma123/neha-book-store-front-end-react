import { Link, useLocation, useNavigate, useParams } from "react-router-dom";
import "./ProductDetails.css";
import { Fragment, useEffect, useState } from "react";
import { apiDelete, apiGet } from "../../services/apiFetch";
import { pathObj } from "../../services/pathObj";
import { Button } from "react-bootstrap";
import Swal from "sweetalert2";
import AddBookModal from "../../components/home/AddBookModal";

export default function ProductDetails() {
  const params = useParams();
  const navigate = useNavigate();

  const [loading, setLoading] = useState(false);
  const [productData, setProductData] = useState({});
  const [visibleAddBookPopup, setVisibleAddBookPopup] = useState(false);

  useEffect(() => {
    fetchProjectDetailsApi(params?.id);
  }, []);

  const fetchProjectDetailsApi = async (id) => {
    const url = `${id}`;
    setLoading(true);
    try {
      const res = await apiGet(pathObj.BOOK_BY_ID + url);
      if (res.status === 200) {
        console.log("res", res);
        setProductData(res?.data?.results);
        setLoading(false);
      }
    } catch (error) {
      console.error("error:", error);
      setLoading(false);
    }
  };

  const handelDelete = async () => {
    Swal.fire({
      text: "Are you sure you want to delete?",
      icon: "error",
      showCancelButton: true,
      confirmButtonColor: "#728158",
      confirmButtonText: "Delete",
      cancelButtonColor: "#d33",
      reverseButtons: true,
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
          const paramsData = params?.id;
          const url = `${paramsData}`;
          const res = await apiDelete(pathObj.DELETE_BOOK + url);
          if (res.status === 200) {
            navigate("/");
          }
        } catch (error) {
          console.error("error:", error);
          setLoading(false);
        }
      }
    });
  };

  const toggleAddBookPopup = () => {
    setVisibleAddBookPopup(!visibleAddBookPopup);
  };

  return (
    <div className="singlePost">
      {loading ? (
        <div class="d-flex justify-content-center align-items-center min-vh-100">
          <div class="spinner-border" role="status"></div>
        </div>
      ) : (
        <Fragment>
          <div className="singlePostWrapper">
            <img
              className="singlePostImg"
              src={
                "https://media.istockphoto.com/id/173015527/photo/a-single-red-book-on-a-white-surface.jpg?s=612x612&w=0&k=20&c=AeKmdZvg2_bRY2Yct7odWhZXav8CgDtLMc_5_pjSItY="
              }
              alt=""
            />
            <h1 className="singlePostTitle">{productData?.title}</h1>
            <div className="singlePostInfo ">
              <span>{productData?.price}</span>
            </div>
            <div className="singlePostInfo">
              <span>{productData?.category}</span>
            </div>
            <p className="singlePostDesc" style={{ textAlign: "justify" }}>
              {productData?.description}
            </p>
            <div className="d-flex justify-content-center align-items-center w-100 gap-3">
              <Button
                variant="outline-danger"
                className="px-4 py-2 fw-bold shadow-sm d-flex justify-content-center align-items-center w-100"
                type="button"
                onClick={() => handelDelete()}
              >
                <i className="bi bi-trash me-2"></i> Delete
              </Button>
              <Button
                variant="primary"
                className="px-4 py-2 fw-bold shadow-sm d-flex justify-content-center align-items-center w-100"
                style={{ backgroundColor: "#728158", borderColor: "#728158" }}
                type="button"
                onClick={() => toggleAddBookPopup()}
              >
                <i className="bi bi-pencil me-2"></i> Edit
              </Button>
            </div>
          </div>
        </Fragment>
      )}

      {visibleAddBookPopup && (
        <AddBookModal
          show={visibleAddBookPopup}
          onHide={toggleAddBookPopup}
          fetchProjectDetailsApi={fetchProjectDetailsApi}
          modalType="edit"
          productData={productData}
        />
      )}
    </div>
  );
}
