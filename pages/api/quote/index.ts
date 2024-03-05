import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../firebase/firestore";

const quoteCollection = async (req: NextApiRequest, res: NextApiResponse) => {
  const currDate = new Date();

  try {
    if (req.method === "GET") {
      const doc = await db
        .collection("inspoquotes")
        .doc(currDate.getDay().toString())
        .get();
      if (!doc.exists) {
        res.status(404).end();
      } else {
        res.status(200).json(doc.data());
      }
    }
    res.status(200).end();
  } catch (e) {
    res.status(400).end();
  }
};

export default quoteCollection;
