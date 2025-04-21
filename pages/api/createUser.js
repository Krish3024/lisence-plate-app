// pages/api/create-user.js
import { connectDB } from "../../lib/mongodb";
import User from "../../models/User";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  await connectDB();

  const { name, plateNumber } = req.body;

  if (!name || !plateNumber) {
    return res.status(400).json({ message: "Name and plate number are required" });
  }

  try {
    const existingUser = await User.findOne({ plateNumber });
    if (existingUser) {
      return res.status(400).json({ message: "Plate number already exists" });
    }

    const newUser = new User({ name, plateNumber });
    await newUser.save();

    res.status(201).json({ message: "User created successfully", user: newUser });
  } catch (error) {
    res.status(500).json({ message: "Server Error", error });
  }
}
