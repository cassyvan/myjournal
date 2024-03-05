import Card from "@/components/layout/card";
import { Quote } from "@/utils/quotetype";
import axios from "axios";
import { useEffect, useState } from "react";

const Dashboard = () => {
  const content = <p>insert quote here</p>;
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

  return (
    <div>
      <h2 className="pb-4">Welcome!</h2>
      <div>
        <Card title="Inspo quote of the day..." quote={quote} />
      </div>
    </div>
  );
};

export default Dashboard;
