import UploadForm from "@/components/UploadForm";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-200">
      <UploadForm />
    </div>
  )
}
