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
      .then(({ data, status }) => {
        setImage(data.data.links[0]);
      });
  }, [config]);
  return (
    <div>
      <H2 title={"Lets Try With a Random Data"} />
      <div className="w-full h-full p-10">
        {image && <img src={image} alt="demo" className="object-contain w-full max-w-[800px] rounded-[32px]" />}
      </div>
      <div className="flex justify-between">
        <Button onClick={prev} label="Prev" />
        <Button onClick={next} label="Next" />
      </div>
    </div>
  );
};

export default TryArea;
