import { useCallback, useEffect, useRef, useState } from "react";
import "./upload.css";

const UploadImage = ({ handleOnChange, previewImage }) => {
  const fileInput = useRef();

  // ALL STATE
  const [file, setFile] = useState(null);
  const [photoURL, setPhotoURL] = useState(previewImage);

  const uploadFileTarget = () => {
    fileInput.current.click();
  };

  const handleChange = useCallback(
    (event) => {
      const files = event.target.files;
      if (files && files.length > 0) {
        const file = files[0];

        if (file.size > 200 * 1024 * 1024) {
          alert("File size should not exceed 200 MB.");
          return;
        }

        const acceptedFormats = [
          "image/jpeg",
          "image/png",
          "image/gif",
          "image/webp",
        ];

        if (!acceptedFormats.includes(file.type)) {
          alert("Only image formats are allowed.");
          return;
        }
        setFile(Array.from(files));
        setPhotoURL(URL.createObjectURL(file));
      }
    },
    [handleOnChange]
  );

  return (
    <div>
      <div
        onClick={() => uploadFileTarget()}
        className={`fileUpload cursor-pointer`}
      >
        <input
          type="file"
          name="fileUpload"
          accept="image/*"
          style={{ display: "none" }}
          ref={fileInput}
          onChange={handleChange}
          onClick={(e) => (e.target.value = null)} // Reset file input value to allow the same file upload again
        />
        <div className="flex items-center cursor-pointer">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 20 20"
            fill="none"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M3.75 2.5V5H2.5V2.5C2.5 2.16848 2.6317 1.85054 2.86612 1.61612C3.10054 1.3817 3.41848 1.25 3.75 1.25H16.25C16.5815 1.25 16.8995 1.3817 17.1339 1.61612C17.3683 1.85054 17.5 2.16848 17.5 2.5V5H16.25V2.5H3.75ZM4.63125 12.1313L3.75 11.25L10 5L16.25 11.25L15.3687 12.1313L10.625 7.39375V18.75H9.375V7.39375L4.63125 12.1313Z"
              fill="#414655"
            ></path>
          </svg>
          <span>Update Book Image</span>
        </div>
        <button
          type="button"
          className={"browseButton"}
          onClick={() => uploadFileTarget()}
        >
          Browse
        </button>
      </div>
    </div>
  );
};

export default UploadImage;
