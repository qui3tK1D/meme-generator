import React from "react";

const Input = function (props) {
  return (
    <input
      type={props.type}
      placeholder={props.placeholder}
      className={props.className}
      onChange={props.onChange}
      name={props.name}
      value={props.value}
    />
  );
};

export default Input;
