import React from "react";
import { Link } from "../Icons";

export default function ({ name, desc, url }) {
  return (
    <a
      href={url}
      target="_blank"
      className="bg-[#111111] p-4 cursor-pointer sm:flex-row sm:justify-between rounded-xl transition-all duration-300 hover:bg-[#191919]"
    >
      <div className="relative">
        <div className="absolute right-0">
          <Link />
        </div>
      </div>
      <h2 className="mb-2 text-xl font-bold">{name}</h2>
      <p>{desc}</p>
    </a>
  );
}
