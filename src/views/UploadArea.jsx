import React, { useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import { httpService } from "../service/httpService";
import Button from "../components/Button";
import { H2 } from "../components/common";

const UploadArea = ({ next, prev }) => {
  const [state, setState] = useState({
    image: null,
    font: [],
    data: null,
  });

  const handleFileUpload = (file, name) => {
    setState((prevValue) => {
      return { ...prevValue, [name]: file };
    });
  };

  const uploadFiles = () => {
    const formData = new FormData();
    formData.append("image", state.image);
    formData.append("data", state.data);
    for (const font of state.font) {
      formData.append("font", font);
    }
    httpService
      .post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data;",
        },
      })
      .then(({ status }) => {
        if (status === 200) {
          next();
        }
      });
  };

  return (
    <div>
      <div className="flex flex-col gap-5">
        <H2 title={"Upload Base Details"} />
        <div>
          <label
            htmlFor="base-image-upload"
            className="font-medium text-gray-400"
          >
            Upload Base file
          </label>
          <FileUploader
            id="base-image-upload"
            handleChange={(file) => handleFileUpload(file, "image")}
            name="image"
            types={["JPG", "PNG"]}
            label="Upload base image"
            classes="mt-2"
          />
        </div>

        <div>
          <label htmlFor="upload-fonts" className="font-medium text-gray-400">
            Upload Fonts
          </label>
          <FileUploader
            id="upload-fonts"
            handleChange={(file) => handleFileUpload(file, "font")}
            name="font"
            label="Upload fonts"
            multiple
            classes="mt-2"
          />
        </div>

        <div>
          <label
            htmlFor="upload-csv-data"
            className="font-medium text-gray-400"
          >
            Upload CSV Data
          </label>
          <FileUploader
            id="upload-csv-data"
            handleChange={(file) => handleFileUpload(file, "data")}
            name="data"
            label="Upload CSV data"
            types={["csv"]}
            classes="mt-2"
          />
        </div>
      </div>
      <div className="flex justify-end py-5">
        <Button onClick={uploadFiles} label={"Next"} />
      </div>
    </div>
  );
};

export default UploadArea;
