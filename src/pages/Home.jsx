import { useState } from "react";
import UploadArea from "../views/UploadArea";
import ConfigArea from "../views/ConfigArea";
import TryArea from "../views/TryArea";
import ConfirmArea from "../views/ConfirmArea";

const Home = () => {
  const steps = ["upload", "config", "try", "confirm"];
  const [selectedStep, setSelectedStep] = useState(0);
  const next = () => {
    const nextIndex =
      selectedStep >= steps.length ? steps.length : selectedStep + 1;
    setSelectedStep(nextIndex);
  };

  const prev = () => {
    const prevIndex = selectedStep <= 0 ? 0 : selectedStep - 1;
    setSelectedStep(prevIndex);
  };

  return (
    <div className="px-[3%] pb-5 h-[calc(100vh-72px)]">
      <div className="steps flex gap-3 items-start justify-center">
        {steps.map((step, i) => {
          return (
            <span
              onClick={() => setSelectedStep(i)}
              className={`
              cursor-pointer transition-all capitalize p-3 px-5 rounded-3xl shadow-xl 
              hover:scale-110 hover:shadow-2xl w-[100px] text-center
              active:shadow active:scale-100
              ${
                selectedStep === i
                  ? "gd-main  text-slate-50 font-semibold scale-100"
                  : ""
              }
              `}
            >
              {step}
            </span>
          );
        })}
      </div>
      <div className="flex items-center justify-center h-full flex-col gap-10">
        <div className="bg-slate-50 rounded-[32px] drop-shadow-xl p-10">
          {selectedStep === 0 && <UploadArea next={next} prev={prev} />}
          {selectedStep === 1 && <ConfigArea next={next} prev={prev} />}
          {selectedStep === 2 && <TryArea next={next} prev={prev} />}
          {selectedStep === 3 && <ConfirmArea next={next} prev={prev} />}
        </div>
      </div>
    </div>
  );
};

export default Home;
