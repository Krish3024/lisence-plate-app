import Link from "next/link";

export default function EntrySuccess() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Entry Recorded Successfully!</h1>
      <p className="text-lg">Your entry has been marked in the system.</p>
      <Link
        href="/"
        className="mt-4 px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition"
      >
        Back to Home
      </Link>
    </div>
  );
}
