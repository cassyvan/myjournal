import { ReactNode, MouseEvent } from "react";

interface props {
  title?: string;
  icon?: ReactNode;
  onClick?: any;
  type?: "submit" | "reset" | "button";
}

const RoundedPinkButton = ({ title, icon, onClick, type }: props) => {
  return (
    <button
      onClick={onClick}
      className="text-white bg-pink-400 px-8 py-4 rounded-full shadow-lg hover:bg-pink-100 hover:text-pink-300 text-center"
      type={type}
    >
      {icon}
      {title}
    </button>
  );
};

export default RoundedPinkButton;
