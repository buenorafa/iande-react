import React from "react";

export default function TitleSection({ children }) {
  return (
    <div className="text-center mb-6">
      <h2 className="text-gray-800 inline-block font-bold text-3xl border-b-2 border-b-[#55ab40] border-solid">
        {children}
      </h2>
    </div>
  );
}
