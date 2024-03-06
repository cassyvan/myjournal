import { Quote } from "@/utils/quotetype";

interface props {
  title?: string;
  quote?: Quote;
}

const QuoteCard = ({ title, quote }: props) => {
  return (
    <div className="pt-4">
      <h3 className="text-left pb-2">{title}</h3>
      <div className="block p-6 bg-white border border-sky-200 rounded-lg shadow w-full">
        <div className="font-normal text-gray-700 w-full h-full p-2">
          <p>{quote?.quote}</p>
          <p className="text-right italic pt-2">{` - ${quote?.author}`}</p>
        </div>
      </div>
    </div>
  );
};

export default QuoteCard;
