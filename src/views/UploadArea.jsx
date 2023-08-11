import { FileUploader } from "react-drag-drop-files";
import { httpService } from "../service/httpService";
import Button from "../components/Button";
import { H2 } from "../components/common";
import { useDispatch, useSelector } from "react-redux";
import { setFields, setFiles } from "../store/slice/appSlice";

const UploadArea = ({ next, prev }) => {
  const dispatch = useDispatch();
  const { files } = useSelector((state) => state.app);
  const handleFileUpload = (file, name) => {
    dispatch(setFiles({ files: { ...files, [name]: file } }));
  };

  const uploadFiles = () => {
    const formData = new FormData();
    formData.append("image", files.image);
    formData.append("data", files.data);
    for (const font of files.font) {
      formData.append("font", font);
    }
    httpService
      .post("/upload", formData, {
        headers: {
          "Content-Type": "multipart/form-data;",
        },
      })
      .then(({ status, data }) => {
        if (status === 200) {
          next();
          const fields = data.data.fields;
          dispatch(setFields({ fields }));
        }
      });
  };
  console.log(files);
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
            fileOrFiles={files.image}
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
            fileOrFiles={files.font.length ? files.font : null}
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
            fileOrFiles={files.data}
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
