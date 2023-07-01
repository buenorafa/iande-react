import React from "react";

export default function Card({ title, description, href }) {
  return (
    <div key={href}>
      <a
        className="inline-block rounded  transition ease-in-out duration-300 shadow-lg hover:shadow-2xl"
        href={href}
        target="_blank"
      >
        <div className="w-[300px] h-[450px] px-3 py-2">
          <h4 className="text-gray-800 font-bold text-2xl">{title}</h4>
          <hr className="bg-[#55ab40] h-0.5 mb-6" />
          <p className="text-gray-600">{description}</p>
        </div>
      </a>
    </div>
  );
}
