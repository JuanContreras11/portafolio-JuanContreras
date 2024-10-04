import React from "react";

const Badge = (props) => {
  return (
    <span className="bg-blue-100 text-blue-800 text-sm font-medium  px-2.5 py-0.5 rounded dark:bg-blue-900 dark:text-blue-300">
      {props.children}
    </span>
  );
};

export default Badge;
