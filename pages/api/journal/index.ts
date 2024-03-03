import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../firebase/firestore";
import { DocumentData } from "firebase/firestore";

const addEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const { slug }: { slug: string } = req.body;
    const entries = await db.collection("entries").get();
    const entriesData: DocumentData = entries.docs.map((entry) => entry.data());

    if (entriesData.some((entry: { slug: string }) => entry.slug === slug)) {
      res.status(400).end();
    } else {
      const { id } = await db.collection("entries").add({
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json({ id });
    }
  } catch (e) {
    res.status(400).end();
  }
};

export default addEntry;
