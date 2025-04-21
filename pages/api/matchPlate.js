import { connectDB } from "../../lib/mongodb";
import User from "../../models/User";
import Entry from "../../models/Entry";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await connectDB();

  const { detectedText } = req.body;

  if (!detectedText) {
    return res.status(400).json({ message: "License plate is required" });
  }

  try {
    const user = await User.findOne({ plateNumber: detectedText });

    if (user) {
      const newEntry = new Entry({
        name: user.name,
        plateNumber: detectedText,
      });

      await newEntry.save();
      return res.status(200).json({ matched: true, name: user.name });
    } else {
      return res.status(404).json({ matched: false });
    }
  } catch (error) {
    return res.status(500).json({ message: "Server Error", error });
  }
}
