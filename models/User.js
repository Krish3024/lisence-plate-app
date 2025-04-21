import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
  name: { type: String, required: true },
  plateNumber: { type: String, required: true, unique: true },
});

export default mongoose.models.User || mongoose.model("User", UserSchema);
