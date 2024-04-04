import Card from "@/components/layout/card";
import { journalPrompts } from "@/utils/prompts";
import { quoteOfTheDay } from "@/utils/quote-of-the-day";

const Dashboard = () => {
  const prompts = journalPrompts;
  const currDay = new Date().getDay();
  const quote = quoteOfTheDay[currDay];

  return (
    <div className="lg:w-140 md:w-3/5 flex flex-col gap-y-6 pb-20 lg:ml-24 md:ml-72 md:pr-2 sm:mx-4">
      <h2 className="text-left">Welcome!</h2>
      <div>
        <div className="pt-4">
          <h3 className="text-left pb-2">{"Inspo quote of the day..."}</h3>
          <div className="block p-6 bg-white border border-sky-200 rounded-lg shadow w-full">
            <div className="font-normal text-gray-700 w-full h-full p-2">
              <p>{quote.quote}</p>
              <p className="text-right italic pt-2">{` - ${quote.author}`}</p>
            </div>
          </div>
        </div>
      </div>
      <div>
        <p className="text-xl">
          {"MyJournal is built to help you in your practice of journaling."}
        </p>
        <br />
        <p className="text-xl">
          {
            "Journaling can enhance well-being, promote self-awareness, and provides a sense of clarity and direction in life."
          }
        </p>
      </div>
      <div>
        <p className="text-2xl font-medium pt-4">
          {"Below are some tips to help you get started"}
        </p>
        <Card
          title="Start with a Prompt"
          tip="Not sure where to begin? Try one of these prompts:"
          prompts={prompts}
          color="text-pink-500 "
        />
        <Card
          title="Be honest and authentic"
          tip="Write honestly and authentically about your thoughts, feelings, and experiences. Your journal is a private space for self-expression, so be true to yourself."
          color="text-sky-500 "
        />
        <Card
          title="Write freely"
          tip="Don't worry about grammar, spelling, or punctuation. Write freely and expressively, allowing your thoughts and emotions to flow without judgment."
          color="text-indigo-500 "
        />
      </div>
    </div>
  );
};

export default Dashboard;
