import signOutUser from "@/firebase/auth/signout";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import router, { useRouter } from "next/router";
import { ReactNode } from "react";

interface props {
  title: string;
  icon?: ReactNode;
}

const RoundedPinkButton = ({ title, icon }: props) => {
  return (
    <button
      onClick={() => {}}
      className="text-white bg-pink-400 px-8 py-4 rounded-full shadow-lg hover:bg-pink-100 hover:text-pink-300 text-center"
    >
      {icon}
      {title}
    </button>
  );
};

export default RoundedPinkButton;
