// /pages/api/logs/delete.js
import { connectDB } from "../../../lib/mongodb";
import Entry from "../../../models/Entry";

export default async function handler(req, res) {
  const { id } = req.query;

  if (req.method !== "DELETE") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await connectDB();

  try {
    const deleted = await Entry.findByIdAndDelete(id);

    if (!deleted) {
      return res.status(404).json({ message: "Log not found" });
    }

    return res.status(200).json({ message: "Log deleted" });
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error });
  }
}
