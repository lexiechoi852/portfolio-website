import React from "react";

interface TagProps {
  stack: string;
  component: string;
}

export default function Tag({ stack, component }: TagProps) {
  const generateClassName = (c: string) => {
    let className =
      "inline-flex items-center rounded-full bg-blue-200 px-3 py-1 text-sm font-bold uppercase text-blue-700";
    if (c === "projects") {
      className =
        "inline-flex items-center rounded-full bg-green-200 px-3 py-1 text-sm font-bold uppercase text-green-700";
      return className;
    }
    return className;
  };
  return (
    <div key={stack} className={generateClassName(component)}>
      {stack}
    </div>
  );
}
