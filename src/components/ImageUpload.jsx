import React, { useState } from 'react';

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
    <div>
      <input 
        type="file" 
        accept="image/*" 
        onChange={handleFileUpload} 
      />
      {/* {imgStateProps.preview && (
        <div>
          <img src={imgStateProps.preview} alt="Preview" style={{ width: '200px', height: 'auto' }} />
        </div>
      )} */}
    </div>
  );
}

export default ImageUpload;
