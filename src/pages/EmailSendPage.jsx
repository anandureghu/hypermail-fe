import React, { useState } from "react";
import { H2 } from "../components/common";
import MailConfig from "../views/mail/MailConfig";
import MailStatus from "../views/mail/MailStatus";

const EmailSendPage = () => {
  const steps = ["status"];
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
    <div className="px-[3%] py-2">
      <div className="steps flex gap-3 items-start justify-center transition-all">
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
      <div
        className={`flex items-center ${
          selectedStep === 3 ? "justify-start" : "justify-start"
        }  h-full flex-col gap-10 my-5`}
      >
        <div
          className={`bg-slate-50 rounded-[32px] drop-shadow-xl p-10 transition-all ${
            selectedStep === 3 ? "w-full" : ""
          }`}
        >
          {/* {selectedStep === 0 && <MailConfig next={next} prev={prev} />} */}
          {selectedStep === 0 && <MailStatus next={next} prev={prev} />}
        </div>
      </div>
    </div>
  );
};

export default EmailSendPage;
