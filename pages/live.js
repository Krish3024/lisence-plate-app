// import { useEffect, useRef, useState } from "react";

// export default function Live() {
//   const videoRef = useRef(null);
//   const [stream, setStream] = useState(null);
//   const [detectedText, setDetectedText] = useState("");

//   useEffect(() => {
//     const fetchDetectedText = async () => {
//       try {
//         const response = await fetch("http://127.0.0.1:5000/latest_text");
//         const data = await response.json();
//         setDetectedText(data.detected_text);
//       } catch (error) {
//         console.error("Error fetching detected text:", error);
//       }
//     };

//     // Poll every 1 second for new detected text
//     const interval = setInterval(fetchDetectedText, 1000);
//     return () => clearInterval(interval);
//   }, []);

//   useEffect(() => {
//     const startStream = async () => {
//       try {
//         const response = await fetch("http://127.0.0.1:5000/video_feed");
//         if (!response.ok) throw new Error("Failed to load video feed");
//         setStream("http://127.0.0.1:5000/video_feed");
//       } catch (error) {
//         console.error("Error starting stream:", error);
//       }
//     };

//     startStream();
//   }, []);

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
//       <h1 className="text-3xl font-bold mb-4">Live License Plate Detection</h1>
//       {stream ? (
//         <>
//           <img ref={videoRef} src={stream} alt="Live Stream" className="rounded-lg shadow-lg w-full max-w-3xl" />
//           <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl text-center">
//             <h2 className="text-lg font-semibold">Detected License Plate:</h2>
//             <p className="text-xl font-bold text-green-400">{detectedText || "Waiting for detection..."}</p>
//           </div>
//         </>

//       ) : (
//         <p>Loading video feed...</p>
//       )}
//       {/* <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl text-center">
//         <h2 className="text-lg font-semibold">Detected License Plate:</h2>
//         <p className="text-xl font-bold text-green-400">{detectedText || "Waiting for detection..."}</p>
//       </div> */}
//     </div>
//   );
// }

import { useEffect, useRef, useState } from "react";
import { useRouter } from "next/router";

export default function Live() {
  const videoRef = useRef(null);
  const router = useRouter();
  const [stream, setStream] = useState(null);
  const [detectedText, setDetectedText] = useState("");

  useEffect(() => {
    const fetchDetectedText = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/latest_text");
        const data = await response.json();
        if (data.detected_text) {
          setDetectedText(data.detected_text);
          checkLicensePlate(data.detected_text);
        }
      } catch (error) {
        console.error("Error fetching detected text:", error);
      }
    };

    // Poll every 1 second for new detected text
    const interval = setInterval(fetchDetectedText, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const startStream = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/video_feed");
        if (!response.ok) throw new Error("Failed to load video feed");
        setStream("http://127.0.0.1:5000/video_feed");
      } catch (error) {
        console.error("Error starting stream:", error);
      }
    };

    startStream();
  }, []);

  const checkLicensePlate = async (plate) => {
    try {
      const response = await fetch("/api/matchPlate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ detectedText: plate }),
      });

      const data = await response.json();
      if (data.matched) {
        alert(`Entry marked for ${data.name}`);
        router.push("/entrySuccess");
      }
    } catch (error) {
      console.error("Error matching license plate:", error);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
      <h1 className="text-3xl font-bold mb-4">Live License Plate Detection</h1>
      {stream ? (
        <>
          <img ref={videoRef} src={stream} alt="Live Stream" className="rounded-lg shadow-lg w-full max-w-3xl" />
          <div className="mt-4 p-4 bg-gray-800 rounded-lg shadow-lg w-full max-w-3xl text-center">
            <h2 className="text-lg font-semibold">Detected License Plate:</h2>
            <p className="text-xl font-bold text-green-400">{detectedText || "Waiting for detection..."}</p>
          </div>
        </>
      ) : (
        <p>Loading video feed...</p>
      )}
    </div>
  );
}