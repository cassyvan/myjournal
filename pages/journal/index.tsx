import JournalCard from "@/components/layout/journalCard";
import { Entry } from "@/utils/types/entrytype";
import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { useAuthContext } from "@/context/AuthContext";
import { useEntriesContext } from "@/context/entriesContext";
import { JournalContext, useJournalContext } from "@/context/entryContext";

const JournalHomePage = () => {
  const [loading, setLoading] = useState(true);
  const { entriesData, updateEntriesData } = useEntriesContext();
  const { user } = useAuthContext();
  const userId = user?.uid;
  const { selectedEntry, updateEntry } = useJournalContext();

  useEffect(() => {
    async function fetchEntries() {
      try {
        const response = await axios.get(`/api/journal?userId=${userId}`);
        updateEntriesData(response.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching entries: ", error);
      }
    }
    fetchEntries();
  }, []);

  const groupEntriesByYear = () => {
    const groupedEntries: { [yearMonth: string]: Entry[] } = {};
    entriesData?.forEach((entry: Entry) => {
      const date = new Date(entry.created);
      const yearMonth = date.toLocaleDateString("default", {
        year: "numeric",
        month: "long",
      });
      if (!groupedEntries[yearMonth]) {
        groupedEntries[yearMonth] = [];
      }
      groupedEntries[yearMonth].push(entry);
    });

    const sortedGroupedEntries = Object.entries(groupedEntries).sort(
      ([yearMonthA], [yearMonthB]) => {
        return yearMonthB.localeCompare(yearMonthA);
      }
    );

    return sortedGroupedEntries;
  };

  const groupedEntries = groupEntriesByYear();

  return (
    <div className="flex flex-col lg:w-138 lg:ml-32 md:ml-72 md:w-3/5 sm:px-4">
      <h2>Journal</h2>
      <div className="mt-2">
        {loading ? (
          <p>Loading...</p>
        ) : groupedEntries.length !== 0 ? (
          groupedEntries.map(([yearMonth, entries]) => (
            <div key={yearMonth}>
              <h3 className="text-left py-5">{yearMonth}</h3>
              {entries.map((entry) => (
                <div key={entry.id}>
                  <JournalCard entry={entry} />
                  <br />
                </div>
              ))}
            </div>
          ))
        ) : (
          <div className="text-center pt-14 italic">
            <p>
              {"No journal entries created. Click 'New Entry' to get started"}
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JournalHomePage;
