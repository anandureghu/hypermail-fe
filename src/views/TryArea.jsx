import React, { useEffect, useState } from "react";
import { H2 } from "../components/common";
import { useSelector } from "react-redux";
import { httpService } from "../service/httpService";
import Button from "../components/Button";

const TryArea = ({ prev, next }) => {
  const config = useSelector((state) => state.config);
  const [image, setImage] = useState("");
  useEffect(() => {
    httpService
      .post("/images/generate", config, { params: { demo: true } })
      .then(({ status }) => {
        if (status === 201) {
          httpService.get("/images/generated").then(({ data }) => {
            setImage(Object.values(data.data)[0].fileLink);
          });
        }
      });
  }, [config]);
  console.log(image);
  return (
    <div>
      <H2 title={"Lets Try With a Random Data"} />
      <div className="w-full h-full p-10">
        {!image && (
          <p className="text-gray-400 animate-bounce text-center">
            Generating...
          </p>
        )}
        {image && (
          <img
            src={image}
            alt="demo"
            className="object-contain w-full max-w-[800px] rounded-[32px]"
          />
        )}
      </div>
      <div className="flex justify-between">
        <Button onClick={prev} label="Prev" />
        <Button onClick={next} label="Next" />
      </div>
    </div>
  );
};

export default TryArea;
