import Link from "next/link";
import db from "../../firebase/firestore";
import JournalCard from "@/components/layout/journalCard";
import { useRouter } from "next/router";
import { usePathname } from "next/navigation";

interface Entry {
  body: string;
  created: string;
  id: string;
  slug: string;
  title: string;
}

interface Entries {
  entriesData: Entry[];
}

const JournalHomePage = ({ entriesData }: Entries) => {
  const pathName = usePathname();
  const router = useRouter();

  const showModal = () => {
    router.push({ pathname: pathName, query: "modal=true" });
  };

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
              <div key={entry.id} onClick={showModal}>
                <JournalCard content={entry.body} date={entry.created} />
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
};

export default JournalHomePage;
