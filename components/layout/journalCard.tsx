import { useJournalContext } from "@/context/entryContext";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";

interface props {
  content: string;
  date: string;
}

const JournalCard = ({ content, date }: props) => {
  const entryDate = new Date(date);
  const weekDay = entryDate.toLocaleString("default", { weekday: "short" });
  const dateNum = entryDate.getDate();

  const pathName = usePathname();
  const router = useRouter();

  const { updateEntry } = useJournalContext();

  const showModal = () => {
    updateEntry(content);
    router.push({ pathname: pathName, query: "modal=true" });
  };

  return (
    <div className="">
      <div
        className="block h-36 p-6 bg-white border border-sky-200 rounded-lg shadow hover:bg-stone-100 hover:cursor-pointer relative"
        onClick={() => showModal()}
      >
        <div className="absolute text-center">
          <div className="bg-zinc-100 px-3.5 py-1.5 rounded-lg -mt-2 -ml-2 shadow-md">
            <div>{weekDay}</div>
            <div className="font-bold">{dateNum}</div>
          </div>
          <FontAwesomeIcon
            icon={faTrash}
            className="p-2 -ml-2 mt-2 hover:text-pink-400"
          />
        </div>
        <p className="text-sm text-gray-700 overflow-hidden line-clamp-4 overflow-ellipsis pl-16">
          {content}
        </p>
      </div>
    </div>
  );
};

export default JournalCard;
