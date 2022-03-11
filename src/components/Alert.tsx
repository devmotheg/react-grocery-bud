/*!
 * @author Mohamed Muntasir
 * @link https://github.com/devmotheg
 */

import React from "react";

const Alert = ({ color, msg }: AlertProps) => {
  let styling = "bg-green-200 text-green-900";
  if (color === "red") styling = "bg-red-200 text-red-900";

  return (
    <span
      className={`block p-1 mb-4 text-sm font-bold tracking-widest rounded w-fit mx-auto ${styling}`}>
      {msg}
    </span>
  );
};

export default Alert;
