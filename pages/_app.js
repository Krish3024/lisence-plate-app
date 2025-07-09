// import Navbar from "@/components/Navbar";
// import UploadForm from "@/components/UploadForm";
// import "@/styles/globals.css";
// import { useState } from "react";

// export default function App({ Component, pageProps }) {

//   const [rnum, setRnum] = useState('');

//   return (
//     <div className="app-container flex justify-center items-center min-h-screen bg-gray-200">
//       <main className="main-content">
//         <Navbar />
//         <Component rnum={rnum} {...pageProps} />
//       </main>
//     </div>
//   )
// }
import Navbar from "@/components/Navbar";
import UploadForm from "@/components/UploadForm";
import "@/styles/globals.css";
import { useState } from "react";
import HeroSection from "@/components/HeroSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";

export default function App({ Component, pageProps }) {
  const [rnum, setRnum] = useState('');

  // ✅ safer than direct comparison
  const isUploadForm = Component?.name === "UploadForm";

  return (
    <div className="app-container flex flex-col min-h-screen bg-gray-200">
      <Navbar />
      <Component rnum={rnum} {...pageProps} />
      <Footer />
    </div>
  );
}
