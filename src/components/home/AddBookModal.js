import React, { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { validationMessage } from "../../constants/validationMessage";
import { ErrorMessage } from "@hookform/error-message";
import UploadImage from "../shared/upload/UploadImage";
import "./AddBookModal.css";
import { integerInput } from "../../helper/helper";
import { apiPost } from "../../services/apiFetch";
import { pathObj } from "../../services/pathObj";

const AddBookModal = ({ onHide, show, fetchProductList }) => {
  const {
    register,
    formState: { errors },
    handleSubmit,
    setValue,
    watch,
  } = useForm();

  const [selectedFile, setSelectedFile] = useState(null);
  const [preview, setPreview] = useState(null);

  const onSubmit = async (data) => {
    const formData = new FormData();

    formData.append("title", data?.bookTitle || "");
    formData.append("category", data?.bookCategory || "");
    formData.append("price", data?.bookPrice || "");
    formData.append("description", data?.bookDescription || "");

    if (selectedFile) {
      formData.append("image", selectedFile);
    }
    try {
      const res = await apiPost(
        pathObj.ADD_BOOk,
        formData,
        "multipart/form-data"
      );
      if (res.status === 200) {
        fetchProductList();
        onHide();
      }
    } catch (error) {
      console.error("error:", error);
    }
  };

  const handleFileSelect = (file) => {
    if (file) {
      setSelectedFile(file);
      const filePreview = URL.createObjectURL(file);
      setPreview(filePreview);
    }
  };

  console.log("preview", preview);

  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form
          className="p-3"
          onSubmit={handleSubmit(onSubmit)}
          noValidate
          autoComplete="off"
        >
          <Form.Group className="mb-3">
            <Form.Label>Book Title</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter book title"
              name="bookTitle"
              {...register("bookTitle", {
                required: validationMessage.bookTitle,
              })}
            />
            <ErrorMessage
              errors={errors}
              name="bookTitle"
              render={({ message }) => (
                <p className="error-message text-start py-2 px-1 text-danger">
                  {message}
                </p>
              )}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Book Category</Form.Label>
            <Form.Select
              name="bookCategory"
              {...register("bookCategory", {
                required: validationMessage.bookTitle,
              })}
            >
              <option value="">Select category</option>
              <option value="fiction">Fiction</option>
              <option value="non-fiction">Non-Fiction</option>
              <option value="science">Science</option>
              <option value="history">History</option>
            </Form.Select>
            <ErrorMessage
              errors={errors}
              name="bookCategory"
              render={({ message }) => (
                <p className="error-message text-start py-2 px-1 text-danger">
                  {message}
                </p>
              )}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Book Price</Form.Label>
            <Form.Control
              type="text"
              placeholder="Enter book title"
              name="bookPrice"
              {...register("bookPrice", {
                required: validationMessage.bookTitle,
              })}
              maxLength={4}
              onKeyPress={(e) => integerInput(e)}
            />
            <ErrorMessage
              errors={errors}
              name="bookPrice"
              render={({ message }) => (
                <p className="error-message text-start py-2 px-1 text-danger">
                  {message}
                </p>
              )}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Book Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter book description"
              style={{ resize: "none" }}
              name="bookDescription"
              {...register("bookDescription", {
                required: validationMessage.bookTitle,
              })}
            />
            <ErrorMessage
              errors={errors}
              name="bookDescription"
              render={({ message }) => (
                <p className="error-message text-start py-2 px-1 text-danger">
                  {message}
                </p>
              )}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Book Image</Form.Label>
            <UploadImage
              handleOnChange={handleFileSelect}
              previewImage={preview}
            />
            <div className="profilePhotoPreview">
              {preview && (
                <img
                  className="uploadedImage"
                  src={
                    selectedFile && selectedFile.type === "application/pdf"
                      ? "https://i.pinimg.com/736x/81/97/55/81975517a51651e8f8940759360d01da.jpg"
                      : selectedFile &&
                        selectedFile.type ===
                          "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet"
                      ? "https://image.similarpng.com/very-thumbnail/2021/09/Microsoft-Excel-icon-design-on-transparent-background-PNG.png"
                      : preview
                  }
                  alt="No_Uploaded_Image"
                />
              )}
            </div>
          </Form.Group>

          <div className="d-flex justify-content-between align-items-center mt-3">
            <Button
              variant="outline-danger"
              className="px-4 py-2 fw-bold shadow-sm"
              onClick={onHide}
              type="button"
            >
              <i className="bi bi-x-circle me-2"></i> Close
            </Button>
            <Button
              variant="primary"
              className="px-4 py-2 fw-bold shadow-sm"
              style={{ backgroundColor: "#728158" }}
              type="submit"
            >
              Submit
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default AddBookModal;
