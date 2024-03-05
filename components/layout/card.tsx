import { Quote } from "@/utils/quotetype";
import { ReactNode } from "react";

interface props {
  title?: string;
  content?: string;
  quote?: Quote;
}

const Card = ({ title, content, quote }: props) => {
  return (
    <div className="py-8">
      <h3 className="text-left pb-2">{title}</h3>
      <div className="block p-6 bg-white border border-sky-200 rounded-lg shadow w-full">
        <div className="font-normal text-gray-700 w-full h-full p-2">
          <p>{content}</p>
          <p>{quote?.Quote}</p>
          <p className="text-right italic pt-2">{` - ${quote?.Author}`}</p>
        </div>
      </div>
    </div>
  );
};

export default Card;
