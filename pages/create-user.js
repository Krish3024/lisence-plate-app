// pages/create-user.js
import { useState } from "react";

export default function CreateUser() {
  const [name, setName] = useState("");
  const [plateNumber, setPlateNumber] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Clear previous messages
    setMessage("");
    setError("");

    // Prepare data
    const userData = { name, plateNumber };

    try {
      const response = await fetch("/api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message);
        setName("");
        setPlateNumber("");
      } else {
        setError(data.message);
      }
    } catch (err) {
      setError("An error occurred. Please try again.");
    }
  };

  return (
    <div className="max-w-md mx-auto mt-10">
      <h1 className="text-2xl font-bold text-center">Create User</h1>
      <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mt-6">
        <div className="mb-4">
          <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="plateNumber" className="block text-sm font-medium text-gray-700">Plate Number</label>
          <input
            type="text"
            id="plateNumber"
            value={plateNumber}
            onChange={(e) => setPlateNumber(e.target.value)}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md"
            required
          />
        </div>

        <button
          type="submit"
          className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600"
        >
          Create User
        </button>
      </form>

      {message && (
        <div className="mt-4 text-green-500">{message}</div>
      )}
      {error && (
        <div className="mt-4 text-red-500">{error}</div>
      )}
    </div>
  );
}
