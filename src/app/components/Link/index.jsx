import React from "react";

export default function Link({ children }) {
  return (
    <a className="text-gray-800 font-medium cursor-pointer no-underline hover:border-b-[#55ab40] hover:border-b hover:border-solid">
      {children}
    </a>
  );
}
