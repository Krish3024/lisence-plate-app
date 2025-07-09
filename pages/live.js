"use client"

import { useEffect, useRef, useState } from "react"
import { useRouter } from "next/router"
import { motion, AnimatePresence } from "framer-motion"
import { Video, Activity, AlertCircle, CheckCircle, Loader2, Eye } from "lucide-react"

export default function Live() {
  const videoRef = useRef(null)
  const router = useRouter()
  const [stream, setStream] = useState(null)
  const [detectedText, setDetectedText] = useState("")
  const [isConnected, setIsConnected] = useState(false)
  const [lastDetectionTime, setLastDetectionTime] = useState(null)

  useEffect(() => {
    const fetchDetectedText = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/latest_text")
        const data = await response.json()
        if (data.detected_text) {
          setDetectedText(data.detected_text)
          setLastDetectionTime(new Date())
          checkLicensePlate(data.detected_text)
        }
      } catch (error) {
        console.error("Error fetching detected text:", error)
        setIsConnected(false)
      }
    }

    const interval = setInterval(fetchDetectedText, 1500)
    return () => clearInterval(interval)
  }, [])

  useEffect(() => {
    const startStream = async () => {
      try {
        const response = await fetch("http://127.0.0.1:5000/video_feed")
        if (!response.ok) throw new Error("Failed to load video feed")
        setStream("http://127.0.0.1:5000/video_feed")
        setIsConnected(true)
      } catch (error) {
        console.error("Error starting stream:", error)
        setIsConnected(false)
      }
    }

    startStream()
  }, [])

  const checkLicensePlate = async (plate) => {
    try {
      const response = await fetch("/api/matchPlate", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ detectedText: plate }),
      })
      const data = await response.json()
      if (data.matched) {
        router.push("/entrySuccess")
      }
    } catch (error) {
      console.error("Error matching license plate:", error)
    }
  }

  return (
    <div>
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #1e293b 0%, #334155 100%)",
          padding: "40px 20px",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
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
                color: "white",
                marginBottom: "20px",
                textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
              }}
            >
              Live License Plate Detection
            </h1>
            <p
              style={{
                fontSize: "1.2rem",
                color: "rgba(255,255,255,0.8)",
                maxWidth: "600px",
                margin: "0 auto",
              }}
            >
              Real-time monitoring and automatic license plate recognition system
            </p>
          </motion.div>

          {/* Status Bar */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: "flex",
              justifyContent: "center",
              gap: "30px",
              marginBottom: "40px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px 25px",
                borderRadius: "25px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <div
                style={{
                  width: "12px",
                  height: "12px",
                  borderRadius: "50%",
                  background: isConnected ? "#10b981" : "#ef4444",
                  boxShadow: `0 0 10px ${isConnected ? "#10b981" : "#ef4444"}`,
                }}
              />
              <span style={{ color: "white", fontWeight: "600" }}>{isConnected ? "Connected" : "Disconnected"}</span>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "10px",
                background: "rgba(255,255,255,0.1)",
                padding: "15px 25px",
                borderRadius: "25px",
                border: "1px solid rgba(255,255,255,0.2)",
              }}
            >
              <Activity size={16} style={{ color: "#fbbf24" }} />
              <span style={{ color: "white", fontWeight: "600" }}>Live Monitoring</span>
            </div>
          </motion.div>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "2fr 1fr",
              gap: "40px",
              alignItems: "start",
            }}
          >
            {/* Video Feed */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  borderRadius: "25px",
                  padding: "30px",
                  boxShadow: "0 25px 50px rgba(0,0,0,0.3)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <h2
                  style={{
                    fontSize: "1.8rem",
                    fontWeight: "700",
                    color: "#333",
                    marginBottom: "25px",
                    display: "flex",
                    alignItems: "center",
                    gap: "12px",
                  }}
                >
                  <Video size={28} style={{ color: "#667eea" }} />
                  Live Camera Feed
                </h2>

                {stream ? (
                  <div
                    style={{
                      position: "relative",
                      borderRadius: "20px",
                      overflow: "hidden",
                      boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                    }}
                  >
                    <img
                      ref={videoRef}
                      src={stream || "/placeholder.svg"}
                      alt="Live Stream"
                      style={{
                        width: "100%",
                        height: "auto",
                        display: "block",
                      }}
                    />
                    <div
                      style={{
                        position: "absolute",
                        top: "15px",
                        right: "15px",
                        background: "rgba(0,0,0,0.7)",
                        color: "white",
                        padding: "8px 15px",
                        borderRadius: "20px",
                        fontSize: "0.9rem",
                        fontWeight: "600",
                        display: "flex",
                        alignItems: "center",
                        gap: "8px",
                      }}
                    >
                      <div
                        style={{
                          width: "8px",
                          height: "8px",
                          borderRadius: "50%",
                          background: "#ef4444",
                          animation: "pulse 2s infinite",
                        }}
                      />
                      LIVE
                    </div>
                  </div>
                ) : (
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                      justifyContent: "center",
                      height: "400px",
                      background: "rgba(0,0,0,0.05)",
                      borderRadius: "20px",
                      border: "2px dashed rgba(0,0,0,0.1)",
                    }}
                  >
                    <Loader2
                      size={48}
                      style={{ color: "#667eea", marginBottom: "20px", animation: "spin 1s linear infinite" }}
                    />
                    <p style={{ color: "#666", fontSize: "1.1rem", fontWeight: "600" }}>Connecting to camera feed...</p>
                  </div>
                )}
              </div>
            </motion.div>

            {/* Detection Panel */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.6, duration: 0.8 }}
              style={{ display: "flex", flexDirection: "column", gap: "25px" }}
            >
              {/* Current Detection */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  borderRadius: "20px",
                  padding: "30px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.4rem",
                    fontWeight: "700",
                    color: "#333",
                    marginBottom: "20px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                  }}
                >
                  <Eye size={24} style={{ color: "#667eea" }} />
                  Current Detection
                </h3>

                <AnimatePresence mode="wait">
                  {detectedText ? (
                    <motion.div
                      key={detectedText}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      exit={{ opacity: 0, scale: 0.9 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div
                        style={{
                          background: "rgba(34, 197, 94, 0.1)",
                          border: "2px solid rgba(34, 197, 94, 0.3)",
                          borderRadius: "15px",
                          padding: "20px",
                          textAlign: "center",
                        }}
                      >
                        <CheckCircle size={24} style={{ color: "#059669", marginBottom: "10px" }} />
                        <p
                          style={{
                            fontSize: "1.8rem",
                            fontWeight: "800",
                            color: "#065f46",
                            margin: "10px 0",
                            fontFamily: "monospace",
                            letterSpacing: "2px",
                          }}
                        >
                          {detectedText}
                        </p>
                        {lastDetectionTime && (
                          <p
                            style={{
                              fontSize: "0.9rem",
                              color: "#059669",
                              margin: 0,
                            }}
                          >
                            Detected at {lastDetectionTime.toLocaleTimeString()}
                          </p>
                        )}
                      </div>
                    </motion.div>
                  ) : (
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                      <div
                        style={{
                          background: "rgba(156, 163, 175, 0.1)",
                          border: "2px dashed rgba(156, 163, 175, 0.3)",
                          borderRadius: "15px",
                          padding: "30px",
                          textAlign: "center",
                        }}
                      >
                        <AlertCircle size={24} style={{ color: "#6b7280", marginBottom: "10px" }} />
                        <p
                          style={{
                            fontSize: "1.1rem",
                            color: "#6b7280",
                            margin: 0,
                          }}
                        >
                          Waiting for license plate detection...
                        </p>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* System Status */}
              <div
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  borderRadius: "20px",
                  padding: "25px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.2)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                }}
              >
                <h3
                  style={{
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    color: "#333",
                    marginBottom: "20px",
                  }}
                >
                  System Status
                </h3>

                <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "#666", fontSize: "0.95rem" }}>Camera Feed</span>
                    <span
                      style={{
                        color: isConnected ? "#059669" : "#dc2626",
                        fontWeight: "600",
                        fontSize: "0.9rem",
                      }}
                    >
                      {isConnected ? "Active" : "Inactive"}
                    </span>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "#666", fontSize: "0.95rem" }}>OCR Processing</span>
                    <span
                      style={{
                        color: "#059669",
                        fontWeight: "600",
                        fontSize: "0.9rem",
                      }}
                    >
                      Running
                    </span>
                  </div>

                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    <span style={{ color: "#666", fontSize: "0.95rem" }}>Auto Detection</span>
                    <span
                      style={{
                        color: "#059669",
                        fontWeight: "600",
                        fontSize: "0.9rem",
                      }}
                    >
                      Enabled
                    </span>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>

        <style jsx>{`
          @keyframes pulse {
            0%, 100% { opacity: 1; }
            50% { opacity: 0.5; }
          }
          @keyframes spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
          }
        `}</style>
      </div>
    </div>
  )
}
