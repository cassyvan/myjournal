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

  return (
    <div className="flex flex-col items-center">
      <h2>Journal</h2>
      <div className="w-135 min-w-full mt-8">
        {entriesData.map((entry) => (
          <div key={entry.id} onClick={showModal}>
            <JournalCard content={entry.body} date={entry.created} />
            <br />
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
