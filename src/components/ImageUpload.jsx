import React from "react";
import "../styles/ImageUpload.css";

function ImageUpload(imgStateProps) {
  // Handle the file selection
  const handleFileUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      imgStateProps.setImage(file);
      imgStateProps.setPreview(URL.createObjectURL(file)); // Create a preview URL
    }
  };

  return (
    <div className="file-input">
      <input
        type="file"
        accept="image/*;capture=camera"
        onChange={handleFileUpload}
        name="file-input"
        id="file-input"
        className="file-input__input"
      />
      <label className="file-input__label" htmlFor="file-input">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          height="24px"
          viewBox="0 -960 960 960"
          width="24px"
          fill="#e8eaed"

          aria-hidden="true"
          focusable="false"

          role="img"
        ><path d="M480-480ZM200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h320v80H200v560h560v-320h80v320q0 33-23.5 56.5T760-120H200Zm40-160h480L570-480 450-320l-90-120-120 160Zm440-320v-80h-80v-80h80v-80h80v80h80v80h-80v80h-80Z" />
        </svg>
        <span>Add a pic!</span>
      </label>
    </div>
  );
}

export default ImageUpload;
