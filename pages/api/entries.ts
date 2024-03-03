import { NextApiRequest, NextApiResponse } from "next";
import db from "../../firebase/firestore";
import { DocumentData } from "@firebase/firestore-types";

const getEntries = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const entries = await db.collection("entries").orderBy("created").get();
    const entriesData: DocumentData[] = entries.docs.map((entry) => ({
      id: entry.id,
      ...entry.data(),
    }));
    res.status(200).json({ entriesData });
  } catch (e) {
    res.status(400).end();
  }
};

export default getEntries;
