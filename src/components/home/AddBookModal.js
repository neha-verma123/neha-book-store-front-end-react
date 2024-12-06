import React from "react";
import { Button, Modal, Form } from "react-bootstrap";

const AddBookModal = ({ onHide, show }) => {
  return (
    <Modal show={show} onHide={onHide} centered>
      <Modal.Header closeButton>
        <Modal.Title>Add New Book</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form className="p-3">
          <Form.Group className="mb-3">
            <Form.Label>Book Title</Form.Label>
            <Form.Control type="text" placeholder="Enter book title" required />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Book Category</Form.Label>
            <Form.Select>
              <option>Select category</option>
              <option>Fiction</option>
              <option>Non-Fiction</option>
              <option>Science</option>
              <option>History</option>
            </Form.Select>
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Book Description</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              placeholder="Enter book description"
              style={{ resize: "none" }}
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Book Image</Form.Label>
            <Form.Control type="file" />
          </Form.Group>
        </Form>
      </Modal.Body>
      <Modal.Footer className="d-flex justify-content-between align-items-center">
        <Button
          variant="outline-danger"
          className="px-4 py-2 fw-bold shadow-sm"
          onClick={onHide}
        >
          <i className="bi bi-x-circle me-2"></i> Close
        </Button>
        <Button
          variant="primary"
          onClick={() => alert("Form submitted!")}
          className="px-4 py-2 fw-bold shadow-sm"
        >
          <i className="bi bi-check-circle me-2"></i> Save Changes
        </Button>
      </Modal.Footer>
    </Modal>
  );
};

export default AddBookModal;
