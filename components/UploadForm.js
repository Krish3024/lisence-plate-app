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
//       // const response = await axios.post("https://lisence-plate-flask.onrender.com/detect", formData, {
//       //   headers: { "Content-Type": "multipart/form-data" },
//       // });

//       if (response.status === 200) {
//         const fullText = response.data.ocr_text;
//         const trimmedText = fullText.split(" ")[0]; // Only take the first word
//         setOcrText(trimmedText);
//         setOutputImage(response.data.image_url); // Store output image URL
//         // const imageUrl = `http://127.0.0.1:5000/get_image/${response.data.file_id}`;
//         // console.log("Image URL:", imageUrl);
        
//         // setOutputImage(imageUrl);
//       }
//     } catch (error) {
//       console.error("Error:", error);
//       alert("Failed to process image!");
//     }
//   };
//   // const handleUpload = async () => {
//   //   if (!file) {
//   //     alert("Please select an image first!");
//   //     return;
//   //   }
  
//   //   const formData = new FormData();
//   //   formData.append("image", file);
  
//   //   try {
//   //     const response = await axios.post("http://127.0.0.1:5000/detect", formData, {
//   //       headers: { "Content-Type": "multipart/form-data" },
//   //     });
  
//   //     if (response.status === 200) {
//   //       const fullText = response.data.ocr_text;
//   //       const trimmedText = fullText.split(" ")[0]; // Only take the first word
//   //       setOcrText(trimmedText);
//   //       setOutputImage(response.data.image_url);
//   //     }
//   //   } catch (error) {
//   //     console.error("Error:", error);
//   //     alert("Failed to process image!");
//   //   }
//   // };
  

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

"use client"

import { useState } from "react"
import axios from "axios"
import { motion, AnimatePresence } from "framer-motion"
import { Upload, FileImage, Eye, Loader2, CheckCircle, AlertCircle } from "lucide-react"

export default function UploadForm() {
  const [file, setFile] = useState(null)
  const [imagePreview, setImagePreview] = useState(null)
  const [outputImage, setOutputImage] = useState(null)
  const [ocrText, setOcrText] = useState("")
  const [isLoading, setIsLoading] = useState(false)
  const [error, setError] = useState("")

  const handleFileChange = (event) => {
    const selectedFile = event.target.files[0]
    if (selectedFile) {
      setFile(selectedFile)
      setImagePreview(URL.createObjectURL(selectedFile))
      setError("")
      setOcrText("")
      setOutputImage(null)
    }
  }

  const handleUpload = async () => {
    if (!file) {
      setError("Please select an image first!")
      return
    }

    setIsLoading(true)
    setError("")

    const formData = new FormData()
    formData.append("image", file)

    try {
      const response = await axios.post("http://127.0.0.1:5000/detect", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      })

      if (response.status === 200) {
        const fullText = response.data.ocr_text
        const trimmedText = fullText.split(" ")[0]
        setOcrText(trimmedText)
        setOutputImage(response.data.image_url)
      }
    } catch (error) {
      console.error("Error:", error)
      setError("Failed to process image! Please try again.")
    } finally {
      setIsLoading(false)
    }
  }

  const handleDragOver = (e) => {
    e.preventDefault()
  }

  const handleDrop = (e) => {
    e.preventDefault()
    const droppedFile = e.dataTransfer.files[0]
    if (droppedFile && (droppedFile.type === "image/jpeg" || droppedFile.type === "image/jpg")) {
      setFile(droppedFile)
      setImagePreview(URL.createObjectURL(droppedFile))
      setError("")
      setOcrText("")
      setOutputImage(null)
    }
  }

  return (
    <div data-upload-section
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        padding: "40px 20px",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        style={{
          maxWidth: "900px",
          margin: "0 auto",
        }}
      >
        <motion.h1
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.6 }}
          style={{
            fontSize: "3rem",
            fontWeight: "800",
            textAlign: "center",
            marginBottom: "50px",
            color: "#667eea",
            textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            fontFamily: "inherit",
          }}
        >
          OCR Image Processor
        </motion.h1>

        <div
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "25px",
            boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              padding: "30px",
              borderBottom: "1px solid rgba(0,0,0,0.05)",
              background: "rgba(102, 126, 234, 0.05)",
            }}
          >
            <h2
              style={{
                display: "flex",
                alignItems: "center",
                gap: "12px",
                fontSize: "1.8rem",
                fontWeight: "700",
                color: "#333",
                margin: 0,
                fontFamily: "inherit",
              }}
            >
              <FileImage size={28} style={{ color: "#667eea" }} />
              Upload & Process Image
            </h2>
          </div>

          <div style={{ padding: "40px" }}>
            {/* File Upload Area */}
            <motion.div
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              onDragOver={handleDragOver}
              onDrop={handleDrop}
              style={{
                border: "3px dashed #667eea",
                borderRadius: "20px",
                padding: "50px 30px",
                textAlign: "center",
                marginBottom: "40px",
                background: imagePreview ? "rgba(102, 126, 234, 0.08)" : "rgba(102, 126, 234, 0.03)",
                cursor: "pointer",
                transition: "all 0.3s ease",
                position: "relative",
              }}
            >
              <input
                type="file"
                accept=".jpg, .jpeg"
                onChange={handleFileChange}
                style={{ display: "none" }}
                id="file-input"
              />
              <label htmlFor="file-input" style={{ cursor: "pointer", display: "block" }}>
                <Upload size={60} style={{ color: "#667eea", marginBottom: "20px" }} />
                <p
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "600",
                    color: "#333",
                    margin: "15px 0",
                    fontFamily: "inherit",
                  }}
                >
                  {file ? file.name : "Click to upload or drag and drop"}
                </p>
                <p
                  style={{
                    fontSize: "1rem",
                    color: "#666",
                    fontFamily: "inherit",
                  }}
                >
                  Supports JPG, JPEG files
                </p>
              </label>
            </motion.div>

            {/* Error Message */}
            <AnimatePresence>
              {error && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  style={{
                    background: "rgba(239, 68, 68, 0.1)",
                    border: "2px solid rgba(239, 68, 68, 0.3)",
                    borderRadius: "15px",
                    padding: "20px",
                    marginBottom: "30px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <AlertCircle size={24} style={{ color: "#ef4444" }} />
                  <span style={{ color: "#ef4444", fontSize: "1.1rem", fontWeight: "500", fontFamily: "inherit" }}>
                    {error}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Image Preview */}
            <AnimatePresence>
              {imagePreview && (
                <motion.div
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.5 }}
                  style={{ marginBottom: "40px" }}
                >
                  <h3
                    style={{
                      fontSize: "1.4rem",
                      fontWeight: "700",
                      marginBottom: "20px",
                      color: "#333",
                      display: "flex",
                      alignItems: "center",
                      gap: "10px",
                      fontFamily: "inherit",
                    }}
                  >
                    <Eye size={24} style={{ color: "#667eea" }} />
                    Input Image Preview
                  </h3>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      padding: "30px",
                      background: "rgba(0,0,0,0.02)",
                      borderRadius: "20px",
                      border: "1px solid rgba(0,0,0,0.05)",
                    }}
                  >
                    <img
                      src={imagePreview || "/placeholder.svg"}
                      alt="Input Preview"
                      style={{
                        maxWidth: "400px",
                        maxHeight: "400px",
                        borderRadius: "15px",
                        boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                      }}
                    />
                  </div>
                </motion.div>
              )}
            </AnimatePresence>

            {/* Upload Button */}
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ textAlign: "center", marginBottom: "40px" }}
            >
              <button
                onClick={handleUpload}
                disabled={!file || isLoading}
                style={{
                  background: isLoading ? "#ccc" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  border: "none",
                  padding: "18px 50px",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  borderRadius: "30px",
                  cursor: isLoading ? "not-allowed" : "pointer",
                  boxShadow: "0 15px 35px rgba(102, 126, 234, 0.4)",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                  margin: "0 auto",
                  fontFamily: "inherit",
                }}
              >
                {isLoading ? (
                  <>
                    <Loader2 size={24} style={{ animation: "spin 1s linear infinite" }} />
                    Processing...
                  </>
                ) : (
                  <>
                    <Upload size={24} />
                    Extract Text
                  </>
                )}
              </button>
            </motion.div>

            {/* Results Section */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: ocrText && outputImage ? "1fr 1fr" : "1fr",
                gap: "40px",
              }}
            >
              {/* OCR Text Result */}
              <AnimatePresence>
                {ocrText && (
                  <motion.div
                    initial={{ opacity: 0, x: -50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: -50 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      style={{
                        background: "rgba(34, 197, 94, 0.1)",
                        border: "2px solid rgba(34, 197, 94, 0.3)",
                        borderRadius: "20px",
                        padding: "25px",
                      }}
                    >
                      <h4
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          color: "#059669",
                          fontSize: "1.3rem",
                          fontWeight: "700",
                          marginBottom: "20px",
                          fontFamily: "inherit",
                        }}
                      >
                        <CheckCircle size={24} />
                        Extracted Text
                      </h4>
                      <p
                        style={{
                          fontSize: "1.5rem",
                          fontWeight: "700",
                          color: "#065f46",
                          padding: "20px",
                          background: "rgba(255,255,255,0.8)",
                          borderRadius: "15px",
                          textAlign: "center",
                          margin: 0,
                          fontFamily: "inherit",
                        }}
                      >
                        {ocrText}
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>

              {/* Processed Image */}
              <AnimatePresence>
                {outputImage && (
                  <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 50 }}
                    transition={{ duration: 0.6 }}
                  >
                    <div
                      style={{
                        background: "rgba(59, 130, 246, 0.1)",
                        border: "2px solid rgba(59, 130, 246, 0.3)",
                        borderRadius: "20px",
                        padding: "25px",
                      }}
                    >
                      <h4
                        style={{
                          display: "flex",
                          alignItems: "center",
                          gap: "10px",
                          color: "#2563eb",
                          fontSize: "1.3rem",
                          fontWeight: "700",
                          marginBottom: "20px",
                          fontFamily: "inherit",
                        }}
                      >
                        <FileImage size={24} />
                        Processed Image
                      </h4>
                      <div
                        style={{
                          display: "flex",
                          justifyContent: "center",
                          padding: "20px",
                          background: "rgba(255,255,255,0.8)",
                          borderRadius: "15px",
                        }}
                      >
                        <img
                          src={outputImage || "/placeholder.svg"}
                          alt="Processed Output"
                          style={{
                            maxWidth: "300px",
                            maxHeight: "300px",
                            borderRadius: "12px",
                            boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
                          }}
                        />
                      </div>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </div>
      </motion.div>

      <style jsx>{`
        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </div>
  )
}
