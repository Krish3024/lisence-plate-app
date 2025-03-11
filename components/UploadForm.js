// import { useState } from "react";
// import axios from "axios";

// export default function UploadForm() {
//   const [file, setFile] = useState(null);
//   const [imagePreview, setImagePreview] = useState(null);
//   const [outputImage, setOutputImage] = useState(null);
//   const [ocrText, setOcrText] = useState("");

//   const handleFileChange = (event) => {
//     const selectedFile = event.target.files[0];
//     if (selectedFile) {
//       setFile(selectedFile);
//       setImagePreview(URL.createObjectURL(selectedFile)); // Create a preview URL
//     }
//   };

//   const handleUpload = async () => {
//     if (!file) {
//       alert("Please select an image first!");
//       return;
//     }

//     const formData = new FormData();
//     formData.append("image", file);

//     try {
//       const response = await axios.post("http://127.0.0.1:5000/detect", formData, {
//         headers: { "Content-Type": "multipart/form-data" },
//       });

//       if (response.status === 200) {
//         setOcrText(response.data.ocr_text); // Store OCR text
//         setOutputImage(response.data.image_url); // Store output image URL
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to process image!");
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
//       <h1 className="text-2xl font-bold mb-4">Upload Image for OCR</h1>
      
//       <input 
//         type="file" 
//         accept=".jpg, .jpeg" 
//         onChange={handleFileChange} 
//         className="mb-4"
//       />
      
//       {imagePreview && (
//         <div className="mb-4">
//           <h2 className="text-lg font-semibold">Input Image:</h2>
//           <img src={imagePreview} alt="Input Preview" className="w-60 h-auto rounded-lg shadow-md" />
//         </div>
//       )}

//       <button 
//         onClick={handleUpload} 
//         className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
//       >
//         Upload & Extract Text
//       </button>

//       {ocrText && (
//         <div className="mt-4 p-4 bg-white shadow-md rounded-lg">
//           <h2 className="text-lg font-semibold">Extracted Text:</h2>
//           <p className="text-gray-700">{ocrText}</p>
//         </div>
//       )}

//       {outputImage && (
//         <div className="mt-4">
//           <h2 className="text-lg font-semibold">Processed Image:</h2>
//           <img src={outputImage} alt="Processed Output" className="w-60 h-auto rounded-lg shadow-md" />
//         </div>
//       )}
//     </div>
//   );
// }

import { useState } from "react";
import axios from "axios";

export default function UploadForm() {
  const [file, setFile] = useState(null);
  const [imagePreview, setImagePreview] = useState(null);
  const [outputImage, setOutputImage] = useState(null);
  const [ocrText, setOcrText] = useState("");

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0];
    if (selectedFile) {
      setFile(selectedFile);
      setImagePreview(URL.createObjectURL(selectedFile)); // Create a preview URL
    }
  };

  const handleUpload = async () => {
    if (!file) {
      alert("Please select an image first!");
      return;
    }

    const formData = new FormData();
    formData.append("image", file);

    try {
      const response = await axios.post("http://127.0.0.1:5000/detect", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      if (response.status === 200) {
        setOcrText(response.data.ocr_text); // Store OCR text
        setOutputImage(response.data.image_url); // Store output image URL
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Failed to process image!");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen p-6 bg-gray-100">
      <h1 className="text-2xl font-bold mb-4">Upload Image for OCR</h1>
      
      <input 
        type="file" 
        accept=".jpg, .jpeg" 
        onChange={handleFileChange} 
        className="mb-4"
      />
      
      {imagePreview && (
        <div className="mb-4">
          <h2 className="text-lg font-semibold">Input Image:</h2>
          <img src={imagePreview} alt="Input Preview" className="w-60 h-auto rounded-lg shadow-md" />
        </div>
      )}

      <button 
        onClick={handleUpload} 
        className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600"
      >
        Upload & Extract Text
      </button>

      {ocrText && (
        <div className="mt-4 p-4 bg-white shadow-md rounded-lg">
          <h2 className="text-lg font-semibold">Extracted Text:</h2>
          <p className="text-gray-700">{ocrText}</p>
        </div>
      )}

      {outputImage && (
        <div className="mt-4">
          <h2 className="text-lg font-semibold">Processed Image:</h2>
          <img src={outputImage} alt="Processed Output" className="w-60 h-auto rounded-lg shadow-md" />
        </div>
      )}
    </div>
  );
}
