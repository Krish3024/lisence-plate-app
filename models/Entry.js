import mongoose from "mongoose";

const EntrySchema = new mongoose.Schema({
  name: { type: String, required: true },
  plateNumber: { type: String, required: true },
  entryTime: { type: Date, default: Date.now },
});

export default mongoose.models.Entry || mongoose.model("Entry", EntrySchema);
