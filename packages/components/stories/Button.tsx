import React from "react";
import "./button.css";
import cn from "classnames";
interface ButtonProps {
  /**
   * Is this the principal call to action on the page? 每个属性的props的解释
   */
  primary?: boolean;
  /**
   * What background color to use
   */
  backgroundColor?: string;
  /**
   * How large should the button be?
   */
  size?: "small" | "medium" | "large";
  /**
   * Button contents
   */
  label: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
}

/**
 * Primary UI component for user interaction 石晓波
 */
export const Button = ({
  primary = false,
  size = "medium",
  backgroundColor,
  label,
  ...props
}: ButtonProps) => {
  const mode = primary
    ? "storybook-button--primary"
    : "storybook-button--secondary";
  console.log(size, mode);
  const aaa = () => {
    const a = "1";
    console.log(a);
  };

  const cc = { c: 1 };
  console.log(cc);
  console.log(cc);
  const aaaaa = {
    a: 1,
    b: 2,
    c: 3,
  };

  console.log(aaaaa);

  const bb = (v: string) => {
    console.log(v);
  };

  console.log(aaa, bb);
  return (
    <button
      type="button"
      className={cn(
        "px-10",
        "w-[100px]",
        "bg-inherit",
        "bg-primary",
        "text-red-100",
      )}
      // className="bg-sky-700 px-4 py-2 text-white hover:bg-sky-800 sm:px-8 sm:py-3"
      style={{
        backgroundColor,
      }}
      {...props}>
      {label}
    </button>
  );
};
