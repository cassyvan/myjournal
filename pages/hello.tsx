import QuoteCard from "@/components/layout/quoteCard";
import Card from "@/components/layout/card";
import { Quote } from "@/utils/quotetype";
import axios from "axios";
import { useEffect, useState } from "react";
import { journalPrompts } from "@/utils/prompts";

const Dashboard = () => {
  const [quote, setQuote] = useState<Quote>();

  useEffect(() => {
    async function fetchQuote() {
      try {
        const response = await axios.get("/api/quote");
        setQuote(response.data);
      } catch (error) {
        console.error("Error fetching quote: ", error);
      }
    }
    fetchQuote();
  }, []);

  const prompts = journalPrompts;

  return (
    <div className="w-140 flex flex-col gap-y-6 pb-20">
      <h2 className="text-left">Welcome!</h2>
      <div>
        <QuoteCard title="Inspo quote of the day..." quote={quote} />
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
