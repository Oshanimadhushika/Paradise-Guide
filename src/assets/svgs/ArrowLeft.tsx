import React from "react";

const ArrowLeft = () => {
  return (
    <svg
      width="60"
      height="60"
      viewBox="0 0 60 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <rect
        x="59.5"
        y="59.5"
        width="59"
        height="59"
        rx="29.5"
        transform="rotate(180 59.5 59.5)"
        stroke="white"
      />
      <path
        d="M43.3333 30H16.6666M16.6666 30L26.6666 20M16.6666 30L26.6666 40"
        stroke="white"
        strokeWidth="1.125"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default ArrowLeft;
