import JournalCard from "@/components/layout/journalCard";
import { Entry } from "@/utils/entrytype";
import { useEffect } from "react";
import axios from "axios";
import { useAuthContext } from "@/context/AuthContext";
import { useEntriesContext } from "@/context/entriesContext";

interface Entries {
  entriesData: Entry[];
}

const JournalHomePage = () => {
  const { entriesData, updateEntriesData } = useEntriesContext();
  const { user } = useAuthContext();
  const userId = user?.uid;

  useEffect(() => {
    async function fetchEntries() {
      try {
        const response = await axios.get(`/api/journal?userId=${userId}`);
        updateEntriesData(response.data);
      } catch (error) {
        console.error("Error fetching quote: ", error);
      }
    }
    fetchEntries();
  }, [entriesData, updateEntriesData, userId]);

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
        return yearMonthA.localeCompare(yearMonthB);
      }
    );

    return sortedGroupedEntries;
  };

  const groupedEntries = groupEntriesByYear();
  return (
    <div className="flex flex-col items-center">
      <h2>Journal</h2>
      <div className="w-138 min-w-full mt-2">
        {groupedEntries.length !== 0 ? (
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
