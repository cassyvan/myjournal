import Link from "next/link";
import db from "../../firebase/firestore";
import JournalCard from "@/components/layout/journalCard";
import { Entry } from "@/utils/entry";

interface Entries {
  entriesData: Entry[];
}

const JournalHomePage = ({ entriesData }: Entries) => {
  const groupEntriesByYear = () => {
    const groupedEntries: { [yearMonth: string]: Entry[] } = {};
    entriesData.forEach((entry) => {
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
    <div className="flex flex-col items-center">
      <h2>Journal</h2>
      <div className="w-138 min-w-full mt-2">
        {groupedEntries.map(([yearMonth, entries]) => (
          <div key={yearMonth}>
            <h3 className="text-left py-5">{yearMonth}</h3>
            {entries.map((entry) => (
              <div key={entry.id}>
                <JournalCard entry={entry} />
                <br />
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export const getStaticProps = async () => {
  try {
    const entries = await db
      .collection("entries")
      .orderBy("created", "desc")
      .get();
    const entriesData = entries.docs.map((entry) => ({
      id: entry.id,
      ...entry.data(),
    }));
    return {
      props: { entriesData },
      revalidate: 10,
    };
  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: { error: "Error fetching data" },
    };
  }
};

export default JournalHomePage;
