import React from "react";

const Stepper = ({ steps }) => {
  return (
    <div>
      {steps.map((step, i) => {
        return <div>{i}</div>;
      })}
    </div>
  );
};

export default Stepper;
