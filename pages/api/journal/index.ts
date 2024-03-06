import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../firebase/firestore";

const entryHandler = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const { userId } = req.body;
    try {
      const id = await db.collection("entries").add({
        userId: userId,
        ...req.body,
        created: new Date().toISOString(),
      });
      res.status(200).json(id);
    } catch (e) {
      res.status(400).end();
    }
  } else if (req.method === "GET") {
    const { userId } = req.query;
    try {
      const snapshot = await db
        .collection("entries")
        .where("userId", "==", userId)
        .get();
      const entries = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      res.status(200).json(entries);
    } catch (e) {
      res.status(400).end();
    }
  } else {
    res.status(405).end();
  }
};

export default entryHandler;
