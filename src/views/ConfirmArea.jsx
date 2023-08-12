import React, { useEffect, useState } from "react";
import { H2 } from "../components/common";
import Button from "../components/Button";
import { httpService } from "../service/httpService";
import { useSelector } from "react-redux";

const ConfirmArea = ({ prev }) => {
  const config = useSelector((state) => state.config);
  const [images, setImages] = useState([]);
  useEffect(() => {
    httpService.post("/images/generate", config).then(({ data, status }) => {
      setImages(data.data.links);
    });
  }, [config]);
  return (
    <div className="w-full">
      <H2 title={"Lets Try With a Random Data"} />
      <div className="w-full h-full p-10">
        {!images.length && (
          <p className="text-gray-400 animate-bounce text-center">
            Generating...
          </p>
        )}

        {images.length && (
          <div className="flex flex-wrap gap-3">
            {images.map((image) => {
              return (
                <img
                  src={image}
                  alt="demo"
                  className="object-contain w-full max-w-[800px] rounded-[32px]"
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="flex justify-between">
        <Button onClick={prev} label="Prev" />
      </div>
    </div>
  );
};

export default ConfirmArea;
