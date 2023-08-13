import React, { useEffect, useState } from "react";
import { H2 } from "../components/common";
import Button from "../components/Button";
import { httpService } from "../service/httpService";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const ConfirmArea = ({ prev }) => {
  const config = useSelector((state) => state.config);
  const [images, setImages] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    httpService.post("/images/generate", config).then(({ status }) => {
      if (status === 201) {
        httpService.get("/images/generated").then(({ data }) => {
          setImages(data.data);
        });
      }
    });
  }, [config]);

  return (
    <div className="w-full">
      <H2 title={"Lets Try With a Random Data"} />
      <div className="w-full h-full p-10">
        {!Object.values(images).length && (
          <p className="text-gray-400 animate-bounce text-center">
            Generating...
          </p>
        )}

        {Object.values(images).length && (
          <div className="flex flex-wrap gap-3">
            {Object.values(images).map((image) => {
              return (
                <img
                  src={image.fileLink}
                  alt={image.id}
                  className="object-contain w-full max-w-[800px] rounded-[32px]"
                />
              );
            })}
          </div>
        )}
      </div>
      <div className="flex justify-between">
        <Button onClick={prev} label="Prev" />
        <Button onClick={() => navigate("/email")} label="Confirm" />
      </div>
    </div>
  );
};

export default ConfirmArea;
