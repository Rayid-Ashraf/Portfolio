import React from "react";

export default function Blog({ title, date, url }) {
  return (
    <a
      href={url}
      target="_blank"
      className="flex flex-col gap-1 pb-1 mt-3 transition-all duration-300 border-b border-gray-500 border-dashed cursor-pointer sm:flex-row sm:justify-between hover:border-gray-300"
    >
      <div>
        <p className="text-lg">{title}</p>
      </div>
      <div>
        <span className="text-gray-400 ">{date}</span>
      </div>
    </a>
  );
}
