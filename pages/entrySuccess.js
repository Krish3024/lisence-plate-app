// import Link from "next/link";

// export default function EntrySuccess() {
//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gray-900 text-white">
//       <h1 className="text-3xl font-bold mb-4">Entry Recorded Successfully!</h1>
//       <p className="text-lg">Your entry has been marked in the system.</p>
//       <Link
//         href="/"
//         className="mt-4 px-4 py-2 bg-green-500 rounded-lg hover:bg-green-600 transition"
//       >
//         Back to Home
//       </Link>
//     </div>
//   );
// }

"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { CheckCircle, Home, ArrowRight, Car } from "lucide-react"

export default function EntrySuccess() {
  return (
    <div>
      <div
        style={{
          minHeight: "100vh",
          background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          padding: "40px 20px",
          fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Background decorative elements */}
        <div
          style={{
            position: "absolute",
            top: "10%",
            right: "15%",
            width: "200px",
            height: "200px",
            background: "rgba(255,255,255,0.1)",
            borderRadius: "50%",
            filter: "blur(100px)",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: "20%",
            left: "10%",
            width: "150px",
            height: "150px",
            background: "rgba(255,255,255,0.08)",
            borderRadius: "50%",
            filter: "blur(80px)",
          }}
        />

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8 }}
          style={{
            background: "rgba(255, 255, 255, 0.95)",
            borderRadius: "30px",
            padding: "60px 50px",
            textAlign: "center",
            boxShadow: "0 30px 60px rgba(0,0,0,0.2)",
            border: "1px solid rgba(255, 255, 255, 0.3)",
            maxWidth: "500px",
            width: "100%",
            position: "relative",
            zIndex: 2,
          }}
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3, duration: 0.6, type: "spring", stiffness: 200 }}
            style={{
              background: "linear-gradient(135deg, #10b981 0%, #059669 100%)",
              width: "100px",
              height: "100px",
              borderRadius: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              margin: "0 auto 30px auto",
              boxShadow: "0 15px 35px rgba(16, 185, 129, 0.4)",
            }}
          >
            <CheckCircle size={50} style={{ color: "white" }} />
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.8 }}
            style={{
              fontSize: "2.5rem",
              fontWeight: "800",
              color: "#333",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Entry Successful!
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            style={{
              fontSize: "1.2rem",
              color: "#666",
              marginBottom: "40px",
              lineHeight: "1.6",
            }}
          >
            Your vehicle entry has been successfully recorded in the system. Welcome!
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9, duration: 0.8 }}
            style={{
              background: "rgba(16, 185, 129, 0.1)",
              border: "2px solid rgba(16, 185, 129, 0.3)",
              borderRadius: "15px",
              padding: "20px",
              marginBottom: "40px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "12px",
            }}
          >
            <Car size={24} style={{ color: "#059669" }} />
            <span
              style={{
                color: "#059669",
                fontWeight: "700",
                fontSize: "1.1rem",
              }}
            >
              Access Granted - Entry Logged
            </span>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1, duration: 0.8 }}
            style={{
              display: "flex",
              gap: "15px",
              justifyContent: "center",
              flexWrap: "wrap",
            }}
          >
            <Link href="/" style={{ textDecoration: "none" }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                  color: "white",
                  padding: "15px 30px",
                  borderRadius: "25px",
                  cursor: "pointer",
                  fontWeight: "700",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 10px 25px rgba(102, 126, 234, 0.3)",
                  border: "none",
                }}
              >
                <Home size={20} />
                Back to Home
              </motion.div>
            </Link>

            <Link href="/live" style={{ textDecoration: "none" }}>
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "transparent",
                  color: "#667eea",
                  border: "2px solid #667eea",
                  padding: "13px 30px",
                  borderRadius: "25px",
                  cursor: "pointer",
                  fontWeight: "600",
                  fontSize: "1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "#667eea"
                  e.target.style.color = "white"
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent"
                  e.target.style.color = "#667eea"
                }}
              >
                Continue Monitoring
                <ArrowRight size={20} />
              </motion.div>
            </Link>
          </motion.div>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.3, duration: 0.8 }}
            style={{
              fontSize: "0.9rem",
              color: "#999",
              marginTop: "30px",
              margin: 0,
            }}
          >
            Entry recorded at {new Date().toLocaleString()}
          </motion.p>
        </motion.div>
      </div>
    </div>
  )
}
