import signOutUser from "@/firebase/auth/signout";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import router, { useRouter } from "next/router";

const NewEntryButton = () => {
  return (
    <button
      onClick={() => {}}
      className="text-white bg-pink-400 px-8 py-4 mr-16 rounded-full shadow-lg hover:bg-pink-100 hover:text-pink-300"
    >
      <FontAwesomeIcon icon={faPlus} className="pr-2" />
      New Entry
    </button>
  );
};

export default NewEntryButton;
