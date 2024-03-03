import { ReactNode } from "react";

interface props {
  content: string;
  date: string;
}

const JournalCard = ({ content, date }: props) => {
  console.log(date);
  return (
    <div className="py-2">
      <div className="block max-w-2xl max-h-96 p-6 bg-white border border-sky-200 rounded-lg shadow hover:bg-stone-100 hover:cursor-pointer">
        <div></div>
        <p className="text-sm text-gray-700 overflow-hidden line-clamp-4 overflow-ellipsis">
          {content}
        </p>
      </div>
    </div>
  );
};

export default JournalCard;
