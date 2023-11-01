import React from "react";

const Button = (props: any) => {
    const {onClick, text} = props;
  return (
    <button
      onClick={onClick}
      className="bg-zo-primary w-full font-semibold text-base px-16 py-4 text-zo-stroke"
    >
      {text}
    </button>
  );
};

export default Button;
