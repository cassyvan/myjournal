import { useEffect, useState } from "react";
import Link from "next/link";
import axios from "axios";
import db from "../../firebase/firestore";

interface Entry {
  id: string;
  title: string;
  slug: string;
}

interface Entries {
  entriesData: Entry[];
}

const JournalHomePage = ({ entriesData }: Entries) => {
  return (
    <div className="flex flex-col items-center gap-8">
      <h2>Journal</h2>
      <div className="grid grid-cols-2  max-w-6xl h-[10rem] sm:flex sm:flex-col sm:mx-6">
        {entriesData.map((entry) => (
          <div key={entry.id}>
            <Link href={`/admin/edit/${entry.id}`}>{entry.title}</Link>
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
