import { ButtonHTMLAttributes, DetailedHTMLProps } from "react";

const Button = (
  props: DetailedHTMLProps<
    ButtonHTMLAttributes<HTMLButtonElement>,
    HTMLButtonElement
  >
) => {
  return (
    <button
      {...props}
      className={`${props.className} bg-white p-2 sm:p-3 rounded-xl text-slate-900`}
    ></button>
  );
};

export default Button;
