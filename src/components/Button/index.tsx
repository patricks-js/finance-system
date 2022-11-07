import { ButtonHTMLAttributes } from "react";

import { Children } from "../../@types/Children";

type ButtonProps = {
  styles?: string;
} & Children &
  ButtonHTMLAttributes<HTMLButtonElement>;

export const Button = (props: ButtonProps) => {
  return (
    <button
      className={`bg-teal-500 text-gray-100 font-medium text-base transition-colors duration-300 hover:bg-teal-600 hover:text-gray-200 focus:ring-2 focus:ring-offset-2 focus:ring-teal-400 py-2 px-9 rounded ${props.styles}`}
      {...props}>
      {props.children}
    </button>
  );
};
