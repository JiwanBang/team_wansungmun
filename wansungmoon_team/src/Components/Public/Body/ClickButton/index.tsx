import { MouseEvent, ReactNode } from "react";

interface IProps {
  textColor: "white" | "black";
  bgColor: "blue" | "gray" | "red" | "green" | "orange" | "yellow";
  children: string | ReactNode;
  isRounded?: boolean;
  onClick?: (e: MouseEvent<HTMLButtonElement>) => void;
}
const ClickButton = ({
  textColor,
  bgColor,
  children,
  onClick,
}: IProps): JSX.Element => {
  const textColorStorage = {
    black: " text-black",
    white: " text-white",
  };
  const bgColorStorage = {
    blue: " bg-blueButton-default",
    gray: " bg-cusGray",
    red: " bg-redButton",
    green: " bg-greenButton",
    orange: " bg-orangeButton",
    yellow: " bg-yellow",
  };
  return (
    <button
      className={
        "min-w-24 text-sm font-bold px-1 py-2 rounded-lg" +
        textColorStorage[textColor] +
        bgColorStorage[bgColor]
      }
      onClick={onClick}
    >
      {children}
    </button>
  );
};

export default ClickButton;
