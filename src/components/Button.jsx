import React from "react";

const Button = ({ label, onClick }) => {
  return (
    <button
      className="gd-main px-5 py-2 text-white rounded-[32px]"
      onClick={onClick}
    >
      {label}
    </button>
  );
};

export default Button;
