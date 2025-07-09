// // pages/create-user.js
// import { useState } from "react";

// export default function CreateUser() {
//   const [name, setName] = useState("");
//   const [plateNumber, setPlateNumber] = useState("");
//   const [message, setMessage] = useState("");
//   const [error, setError] = useState("");

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     // Clear previous messages
//     setMessage("");
//     setError("");

//     // Prepare data
//     const userData = { name, plateNumber };

//     try {
//       const response = await fetch("/api/createUser", {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(userData),
//       });

//       const data = await response.json();

//       if (response.ok) {
//         setMessage(data.message);
//         setName("");
//         setPlateNumber("");
//       } else {
//         setError(data.message);
//       }
//     } catch (err) {
//       setError("An error occurred. Please try again.");
//     }
//   };

//   return (
//     <div className="max-w-md mx-auto mt-10">
//       <h1 className="text-2xl font-bold text-center">Create User</h1>
//       <form onSubmit={handleSubmit} className="bg-white p-6 rounded-lg shadow-lg mt-6">
//         <div className="mb-4">
//           <label htmlFor="name" className="block text-sm font-medium text-gray-700">Name</label>
//           <input
//             type="text"
//             id="name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="plateNumber" className="block text-sm font-medium text-gray-700">Plate Number</label>
//           <input
//             type="text"
//             id="plateNumber"
//             value={plateNumber}
//             onChange={(e) => setPlateNumber(e.target.value)}
//             className="mt-1 p-2 w-full border border-gray-300 rounded-md"
//             required
//           />
//         </div>

//         <button
//           type="submit"
//           className="w-full bg-blue-500 text-white py-2 rounded-md mt-4 hover:bg-blue-600"
//         >
//           Create User
//         </button>
//       </form>

//       {message && (
//         <div className="mt-4 text-green-500">{message}</div>
//       )}
//       {error && (
//         <div className="mt-4 text-red-500">{error}</div>
//       )}
//     </div>
//   );
// }

"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { UserPlus, User, Car, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export default function CreateUser() {
  const [name, setName] = useState("")
  const [plateNumber, setPlateNumber] = useState("")
  const [message, setMessage] = useState("")
  const [error, setError] = useState("")
  const [isSubmitting, setIsSubmitting] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    setMessage("")
    setError("")

    const userData = { name, plateNumber }

    try {
      const response = await fetch("/api/createUser", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      })

      const data = await response.json()

      if (response.ok) {
        setMessage(data.message)
        setName("")
        setPlateNumber("")
      } else {
        setError(data.message)
      }
    } catch (err) {
      setError("An error occurred. Please try again.")
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div>
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
          padding: "40px 20px",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "600px",
            margin: "0 auto",
          }}
        >
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            style={{ textAlign: "center", marginBottom: "50px" }}
          >
            <h1
              style={{
                fontSize: "3rem",
                fontWeight: "800",
                color: "#667eea",
                marginBottom: "20px",
                textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                gap: "15px",
              }}
            >
              <UserPlus size={48} />
              Create New User
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#666",
                maxWidth: "500px",
                margin: "0 auto",
              }}
            >
              Add a new user to the license plate recognition system
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
            style={{
              background: "rgba(255, 255, 255, 0.95)",
              borderRadius: "25px",
              padding: "50px",
              boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
              border: "1px solid rgba(255, 255, 255, 0.3)",
            }}
          >
            <form onSubmit={handleSubmit}>
              <div style={{ marginBottom: "30px" }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    color: "#333",
                    marginBottom: "12px",
                  }}
                >
                  <User size={20} style={{ color: "#667eea" }} />
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  required
                  placeholder="Enter full name"
                  style={{
                    width: "100%",
                    padding: "18px 20px",
                    border: "2px solid rgba(102, 126, 234, 0.2)",
                    borderRadius: "15px",
                    fontSize: "1.1rem",
                    fontFamily: "inherit",
                    transition: "all 0.3s ease",
                    background: "rgba(255,255,255,0.8)",
                    outline: "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#667eea"
                    e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(102, 126, 234, 0.2)"
                    e.target.style.boxShadow = "none"
                  }}
                />
              </div>

              <div style={{ marginBottom: "40px" }}>
                <label
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    color: "#333",
                    marginBottom: "12px",
                  }}
                >
                  <Car size={20} style={{ color: "#667eea" }} />
                  License Plate Number
                </label>
                <input
                  type="text"
                  value={plateNumber}
                  onChange={(e) => setPlateNumber(e.target.value.toUpperCase())}
                  required
                  placeholder="Enter license plate number"
                  style={{
                    width: "100%",
                    padding: "18px 20px",
                    border: "2px solid rgba(102, 126, 234, 0.2)",
                    borderRadius: "15px",
                    fontSize: "1.1rem",
                    fontFamily: "monospace",
                    letterSpacing: "2px",
                    transition: "all 0.3s ease",
                    background: "rgba(255,255,255,0.8)",
                    outline: "none",
                  }}
                  onFocus={(e) => {
                    e.target.style.borderColor = "#667eea"
                    e.target.style.boxShadow = "0 0 0 3px rgba(102, 126, 234, 0.1)"
                  }}
                  onBlur={(e) => {
                    e.target.style.borderColor = "rgba(102, 126, 234, 0.2)"
                    e.target.style.boxShadow = "none"
                  }}
                />
              </div>

              <motion.button
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                type="submit"
                disabled={isSubmitting}
                style={{
                  width: "100%",
                  background: isSubmitting ? "#ccc" : "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  border: "none",
                  padding: "20px",
                  fontSize: "1.2rem",
                  fontWeight: "700",
                  borderRadius: "15px",
                  cursor: isSubmitting ? "not-allowed" : "pointer",
                  transition: "all 0.3s ease",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  gap: "12px",
                  fontFamily: "inherit",
                  boxShadow: "0 10px 25px rgba(102, 126, 234, 0.3)",
                }}
              >
                {isSubmitting ? (
                  <>
                    <Loader2 size={24} style={{ animation: "spin 1s linear infinite" }} />
                    Creating User...
                  </>
                ) : (
                  <>
                    <UserPlus size={24} />
                    Create User
                  </>
                )}
              </motion.button>
            </form>

            {/* Success/Error Messages */}
            <AnimatePresence>
              {message && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  style={{
                    marginTop: "30px",
                    padding: "20px",
                    background: "rgba(34, 197, 94, 0.1)",
                    border: "2px solid rgba(34, 197, 94, 0.3)",
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <CheckCircle size={24} style={{ color: "#059669" }} />
                  <span
                    style={{
                      color: "#059669",
                      fontWeight: "600",
                      fontSize: "1.1rem",
                    }}
                  >
                    {message}
                  </span>
                </motion.div>
              )}

              {error && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -20 }}
                  style={{
                    marginTop: "30px",
                    padding: "20px",
                    background: "rgba(239, 68, 68, 0.1)",
                    border: "2px solid rgba(239, 68, 68, 0.3)",
                    borderRadius: "15px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <AlertCircle size={24} style={{ color: "#dc2626" }} />
                  <span
                    style={{
                      color: "#dc2626",
                      fontWeight: "600",
                      fontSize: "1.1rem",
                    }}
                  >
                    {error}
                  </span>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        </div>

        <style jsx>{`
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  )
}
