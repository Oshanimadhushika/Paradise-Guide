"use client";

import React from "react";
import dynamic from "next/dynamic";

const QRCode = dynamic(() => import("antd").then((mod) => mod.QRCode), {
  ssr: false, 
});

interface QRCodeComponentProps {
  value: string;
}

const QRCodeComponent: React.FC<QRCodeComponentProps> = ({ value }) => {
  return (
    <QRCode
      value={value}
      color="#000000"
      style={{ background: "white" }}
      bordered={false}
      className="shadow-md rounded-lg p-2 bg-white/90"
      size={80}
    />
  );
};

export default QRCodeComponent;
