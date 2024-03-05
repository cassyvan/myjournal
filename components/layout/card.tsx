import { ReactNode } from "react";

interface props {
  tip: string;
  title: string;
  prompts?: { key: number; title: string }[];
  color: string;
}

const Card = ({ title, tip, prompts, color }: props) => {
  return (
    <div className="pt-4">
      <div className="block p-6 bg-white border border-pink-200 rounded-lg w-full bg-opacity-80">
        <div className="font-normal text-gray-700 w-full h-full p-2">
          <p className={`${color}" text-xl  font-bold  "`}>{title}</p>
          <p className="my-2 font-medium">{tip}</p>
          <ul className="mt-6">
            {prompts &&
              prompts?.map((tip) => (
                <>
                  <li key={tip.key} className="italic">
                    {tip.title}
                  </li>
                  <br />
                </>
              ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Card;
