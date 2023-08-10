import { useState } from "react";
import UploadArea from "./UploadArea";
import ConfigArea from "./ConfigArea";
import TryArea from "./TryArea";
import ConfirmArea from "./ConfirmArea";

const Home = () => {
  const steps = ["upload", "config", "try", "confirm"];
  const [selectedStep, setSelectedStep] = useState(steps[0]);
  return (
    <div className="px-[3%] pb-5 h-[calc(100vh-72px)]">
      <div className="flex items-center justify-center h-full flex-col gap-10">
        <div className="steps flex gap-3 items-center">
          {steps.map((step) => {
            return (
              <span
                onClick={() => setSelectedStep(step)}
                className={`
              cursor-pointer transition-all capitalize p-3 px-5 rounded-3xl shadow-xl 
              hover:scale-110 hover:shadow-2xl w-[100px] text-center
              active:shadow active:scale-100
              ${
                selectedStep === step
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
        <div className="min-h-[500px] bg-slate-50 w-full rounded-[32px] drop-shadow-xl p-10">
          {selectedStep === "upload" && <UploadArea />}
          {selectedStep === "config" && <ConfigArea />}
          {selectedStep === "try" && <TryArea />}
          {selectedStep === "confirm" && <ConfirmArea />}
        </div>
      </div>
    </div>
  );
};

export default Home;
