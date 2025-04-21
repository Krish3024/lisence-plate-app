import { connectDB } from "../../lib/mongodb";
import Entry from "../../models/User";

export default async function handler(req, res) {
  if (req.method !== "GET") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await connectDB();

  try {
    const entries = await Entry.find().sort({ entryTime: -1 });
    res.status(200).json({ entries });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
}
