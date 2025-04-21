// /pages/api/logs/getAll.js
import { connectDB } from "../../../lib/mongodb";
import Entry from "../../../models/Entry";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await connectDB();

  try {
    const logs = await Entry.find().sort({ createdAt: -1 });
    return res.status(200).json(logs);
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error });
  }
}
