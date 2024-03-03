import { ReactNode } from "react";

interface props {
  title?: string;
  content: ReactNode;
}

const Card = ({ title, content }: props) => {
  return (
    <div className="py-8">
      <h3 className="text-left pb-2">{title}</h3>
      <div className="block max-w-2xl p-6 bg-white border border-sky-200 rounded-lg shadow">
        <p className="font-normal text-gray-700">{content}</p>
      </div>
    </div>
  );
};

export default Card;
