import React, { useState } from "react";

const UploadFile = () => {
  const [files, setFiles] = useState([]);

  const handleDrop = (event) => {
    event.preventDefault();
    const { files } = event.dataTransfer;
    if (files.length > 0) {
      setFiles([...files]);
    }
  };

  const handleDragOver = (event) => {
    event.preventDefault();
  };

  const handleDragStart = (event) => {
    event.dataTransfer.setData("text/plain", event.target.id);
  };

  return (
    <div
      className="upload-file"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
    >
      <div draggable="true" onDragStart={handleDragStart}>
        Drag me!
      </div>
    </div>
  );
};

export default UploadFile;
