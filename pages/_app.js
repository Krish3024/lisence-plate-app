import Navbar from "@/components/Navbar";
import UploadForm from "@/components/UploadForm";
import "@/styles/globals.css";
import { useState } from "react";

export default function App({ Component, pageProps }) {

  const [rnum, setRnum] = useState('');

  return (
    <div className="app-container flex justify-center items-center min-h-screen bg-gray-200">
      <main className="main-content">
        <Navbar />
        <Component rnum={rnum} {...pageProps} />
      </main>
    </div>
  )
}
