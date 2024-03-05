import { NextApiRequest, NextApiResponse } from "next";
import db from "../../../firebase/firestore";

const addEntry = async (req: NextApiRequest, res: NextApiResponse) => {
  try {
    const id = await db.collection("entries").add({
      ...req.body,
      created: new Date().toISOString(),
    });
    res.status(200).json(id);
  } catch (e) {
    res.status(400).end();
  }
};

export default addEntry;
