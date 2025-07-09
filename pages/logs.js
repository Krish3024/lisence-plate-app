// import { useEffect, useState } from "react";

// export default function LogsPage() {
//   const [logs, setLogs] = useState([]);
//   const [loading, setLoading] = useState(true);

//   const fetchLogs = async () => {
//     const res = await fetch("/api/logs/getAll");
//     const data = await res.json();
//     setLogs(data);
//     setLoading(false);
//   };

//   const deleteLog = async (id) => {
//     const res = await fetch(`/api/logs/delete?id=${id}`, {
//       method: "DELETE",
//     });

//     if (res.ok) {
//       setLogs((prev) => prev.filter((log) => log._id !== id));
//     } else {
//       alert("Failed to delete log");
//     }
//   };

//   useEffect(() => {
//     fetchLogs();
//   }, []);

//   const pageStyles = {
//     minHeight: "100vh",
//     background: "linear-gradient(to bottom right, #f3f4f6, #e5e7eb)",
//     display: "flex",
//     flexDirection: "column",
//     alignItems: "center",
//     padding: "40px 20px",
//   };

//   const containerStyles = {
//     maxWidth: "800px",
//     width: "100%",
//   };

//   const headingStyles = {
//     fontSize: "32px",
//     fontWeight: "bold",
//     textAlign: "center",
//     marginBottom: "40px",
//     color: "#1f2937",
//   };

//   const cardStyles = {
//     backgroundColor: "#ffffff",
//     borderRadius: "16px",
//     padding: "20px",
//     boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
//     marginBottom: "20px",
//     display: "flex",
//     justifyContent: "space-between",
//     alignItems: "flex-start",
//   };

//   const textStyles = {
//     margin: "4px 0",
//     color: "#374151",
//     fontSize: "16px",
//   };

//   const dateStyles = {
//     fontSize: "14px",
//     color: "#6b7280",
//   };

//   const buttonStyles = {
//     backgroundColor: "#ef4444",
//     color: "#ffffff",
//     border: "none",
//     borderRadius: "8px",
//     padding: "8px 16px",
//     fontSize: "14px",
//     cursor: "pointer",
//     boxShadow: "0 2px 6px rgba(0, 0, 0, 0.1)",
//     transition: "background-color 0.2s",
//   };

//   return (
//     <div style={pageStyles}>
//       <div style={containerStyles}>
//         <h1 style={headingStyles}>📋 Entry Logs</h1>

//         {loading ? (
//           <p style={{ textAlign: "center", color: "#6b7280" }}>Loading logs...</p>
//         ) : logs.length === 0 ? (
//           <p style={{ textAlign: "center", color: "#6b7280" }}>No logs found.</p>
//         ) : (
//           logs.map((log) => (
//             <div key={log._id} style={cardStyles}>
//               <div>
//                 <p style={textStyles}>
//                   <strong>👤 Name:</strong> {log.name}
//                 </p>
//                 <p style={textStyles}>
//                   <strong>🚗 Plate:</strong> {log.plateNumber}
//                 </p>
//                 <p style={dateStyles}>
//                   <strong>🕒 Entry done at:</strong>{" "}
//                   {log.entryTime
//                     ? new Date(log.entryTime).toLocaleString("en-GB", {
//                         year: "numeric",
//                         month: "short",
//                         day: "numeric",
//                         hour: "2-digit",
//                         minute: "2-digit",
//                         second: "2-digit",
//                         hour12: false,
//                         timeZone: "Asia/Kolkata",
//                       })
//                     : "N/A"}
//                 </p>
//               </div>
//               <button
//                 onClick={() => deleteLog(log._id)}
//                 style={buttonStyles}
//                 onMouseOver={(e) => (e.target.style.backgroundColor = "#dc2626")}
//                 onMouseOut={(e) => (e.target.style.backgroundColor = "#ef4444")}
//               >
//                 Delete
//               </button>
//             </div>
//           ))
//         )}
//       </div>
//     </div>
//   );
// }


"use client"

import { useEffect, useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Trash2, User, Car, Clock, AlertCircle, FileText, Loader2 } from "lucide-react"

export default function LogsPage() {
  const [logs, setLogs] = useState([])
  const [loading, setLoading] = useState(true)
  const [deletingId, setDeletingId] = useState(null)

  const fetchLogs = async () => {
    try {
      const res = await fetch("/api/logs/getAll")
      const data = await res.json()
      setLogs(data)
    } catch (error) {
      console.error("Error fetching logs:", error)
    } finally {
      setLoading(false)
    }
  }

  const deleteLog = async (id) => {
    setDeletingId(id)
    try {
      const res = await fetch(`/api/logs/delete?id=${id}`, {
        method: "DELETE",
      })
      if (res.ok) {
        setLogs((prev) => prev.filter((log) => log._id !== id))
      } else {
        alert("Failed to delete log")
      }
    } catch (error) {
      console.error("Error deleting log:", error)
      alert("Failed to delete log")
    } finally {
      setDeletingId(null)
    }
  }

  useEffect(() => {
    fetchLogs()
  }, [])

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
            maxWidth: "1000px",
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
              <FileText size={48} />
              Entry Logs
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                color: "#666",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Track and manage all vehicle entry records in your system
            </p>
          </motion.div>

          {loading ? (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                padding: "80px 20px",
              }}
            >
              <Loader2
                size={48}
                style={{ color: "#667eea", marginBottom: "20px", animation: "spin 1s linear infinite" }}
              />
              <p style={{ color: "#666", fontSize: "1.1rem" }}>Loading entry logs...</p>
            </motion.div>
          ) : logs.length === 0 ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "25px",
                padding: "60px 40px",
                textAlign: "center",
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <AlertCircle size={64} style={{ color: "#6b7280", marginBottom: "20px" }} />
              <h3
                style={{
                  fontSize: "1.5rem",
                  fontWeight: "700",
                  color: "#333",
                  marginBottom: "10px",
                }}
              >
                No Entry Logs Found
              </h3>
              <p style={{ color: "#666", fontSize: "1.1rem" }}>
                There are no vehicle entry records to display at the moment.
              </p>
            </motion.div>
          ) : (
            <div style={{ display: "flex", flexDirection: "column", gap: "20px" }}>
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  borderRadius: "15px",
                  padding: "20px 30px",
                  boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                }}
              >
                <span style={{ color: "#667eea", fontWeight: "700", fontSize: "1.1rem" }}>
                  Total Entries: {logs.length}
                </span>
                <button
                  onClick={fetchLogs}
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    color: "white",
                    border: "none",
                    padding: "10px 20px",
                    borderRadius: "10px",
                    cursor: "pointer",
                    fontWeight: "600",
                    fontSize: "0.9rem",
                  }}
                >
                  Refresh
                </button>
              </motion.div>

              <AnimatePresence>
                {logs.map((log, index) => (
                  <motion.div
                    key={log._id}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, x: -100 }}
                    transition={{ delay: index * 0.1, duration: 0.6 }}
                    whileHover={{ y: -5 }}
                    style={{
                      background: "rgba(255, 255, 255, 0.95)",
                      borderRadius: "20px",
                      padding: "30px",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                      border: "1px solid rgba(255, 255, 255, 0.3)",
                      display: "flex",
                      justifyContent: "space-between",
                      alignItems: "flex-start",
                    }}
                  >
                    <div style={{ flex: 1 }}>
                      <div
                        style={{
                          display: "grid",
                          gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
                          gap: "20px",
                          marginBottom: "20px",
                        }}
                      >
                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <div
                            style={{
                              background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                              padding: "10px",
                              borderRadius: "10px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <User size={18} style={{ color: "white" }} />
                          </div>
                          <div>
                            <p style={{ fontSize: "0.9rem", color: "#666", margin: 0 }}>Name</p>
                            <p style={{ fontSize: "1.1rem", fontWeight: "700", color: "#333", margin: 0 }}>
                              {log.name}
                            </p>
                          </div>
                        </div>

                        <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                          <div
                            style={{
                              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
                              padding: "10px",
                              borderRadius: "10px",
                              display: "flex",
                              alignItems: "center",
                              justifyContent: "center",
                            }}
                          >
                            <Car size={18} style={{ color: "white" }} />
                          </div>
                          <div>
                            <p style={{ fontSize: "0.9rem", color: "#666", margin: 0 }}>License Plate</p>
                            <p
                              style={{
                                fontSize: "1.1rem",
                                fontWeight: "700",
                                color: "#333",
                                margin: 0,
                                fontFamily: "monospace",
                                letterSpacing: "1px",
                              }}
                            >
                              {log.plateNumber}
                            </p>
                          </div>
                        </div>
                      </div>

                      <div style={{ display: "flex", alignItems: "center", gap: "12px" }}>
                        <div
                          style={{
                            background: "linear-gradient(135deg, #f59e0b 0%, #d97706 100%)",
                            padding: "8px",
                            borderRadius: "8px",
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <Clock size={16} style={{ color: "white" }} />
                        </div>
                        <div>
                          <p style={{ fontSize: "0.85rem", color: "#666", margin: 0 }}>Entry Time</p>
                          <p style={{ fontSize: "1rem", fontWeight: "600", color: "#333", margin: 0 }}>
                            {log.entryTime
                              ? new Date(log.entryTime).toLocaleString("en-GB", {
                                  year: "numeric",
                                  month: "short",
                                  day: "numeric",
                                  hour: "2-digit",
                                  minute: "2-digit",
                                  second: "2-digit",
                                  hour12: false,
                                  timeZone: "Asia/Kolkata",
                                })
                              : "N/A"}
                          </p>
                        </div>
                      </div>
                    </div>

                    <motion.button
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      onClick={() => deleteLog(log._id)}
                      disabled={deletingId === log._id}
                      style={{
                        background:
                          deletingId === log._id ? "#ccc" : "linear-gradient(135deg, #ef4444 0%, #dc2626 100%)",
                        color: "white",
                        border: "none",
                        padding: "12px 20px",
                        borderRadius: "12px",
                        cursor: deletingId === log._id ? "not-allowed" : "pointer",
                        fontWeight: "600",
                        fontSize: "0.9rem",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                        boxShadow: "0 4px 15px rgba(239, 68, 68, 0.3)",
                        transition: "all 0.3s ease",
                      }}
                    >
                      {deletingId === log._id ? (
                        <Loader2 size={16} style={{ animation: "spin 1s linear infinite" }} />
                      ) : (
                        <Trash2 size={16} />
                      )}
                      {deletingId === log._id ? "Deleting..." : "Delete"}
                    </motion.button>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}
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
