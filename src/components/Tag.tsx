import React from "react";

import type { JSX } from "react";

interface TagProps {
  stack: string;
  component: string;
}

const Tag = ({ stack, component }: TagProps): JSX.Element => {
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
};

export default Tag;
