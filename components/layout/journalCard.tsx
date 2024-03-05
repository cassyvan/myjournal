import { JournalContext, useJournalContext } from "@/context/entryContext";
import { Entry } from "@/utils/entrytype";
import { faTrash } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import axios from "axios";
import { usePathname } from "next/navigation";
import { useRouter } from "next/router";
import { useState } from "react";
import DeleteDialogue from "./deleteDialogue";

interface props {
  entry: Entry;
}

const JournalCard = ({ entry }: props) => {
  const [deleteDialogue, setDeleteDialogue] = useState(false);

  const entryDate = new Date(entry.created);
  const weekDay = entryDate.toLocaleString("default", { weekday: "short" });
  const dateNum = entryDate.getDate();

  const pathName = usePathname();
  const router = useRouter();

  const { updateEntry } = useJournalContext();

  const showModal = () => {
    updateEntry(entry);
    router.push({ pathname: pathName, query: "modal=true" });
  };

  const openDeleteDialogue = () => {
    setDeleteDialogue(true);
  };

  const handleConfirmDelete = async () => {
    await axios.delete(`/api/journal/${entry.id}`);
    setDeleteDialogue(false);
    router.push("/journal");
  };

  const closeDeleteDialogue = () => {
    setDeleteDialogue(false);
  };

  return (
    <div>
      <div className="block h-36 bg-white border border-sky-200 rounded-lg shadow hover:bg-stone-100 hover:cursor-pointer relative">
        <div className="absolute text-center mt-3 ml-4">
          <div className="bg-zinc-100 px-3.5 py-1.5 rounded-lg shadow-md">
            <div>{weekDay}</div>
            <div className="font-bold">{dateNum}</div>
          </div>
          <FontAwesomeIcon
            icon={faTrash}
            className="p-2 mt-2 hover:text-pink-400"
            onClick={openDeleteDialogue}
          />
        </div>
        <div className="w-full h-full p-6" onClick={() => showModal()}>
          <p className="text-sm text-gray-700 overflow-hidden line-clamp-4 overflow-ellipsis pl-16">
            {entry.body}
          </p>
        </div>
      </div>
      <div>
        <DeleteDialogue
          isOpen={deleteDialogue}
          onClose={closeDeleteDialogue}
          onConfirm={handleConfirmDelete}
        />
      </div>
    </div>
  );
};

export default JournalCard;
