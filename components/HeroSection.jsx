"use client"

import { motion } from "framer-motion"
import { Zap, Shield, Clock, ArrowRight, Sparkles } from "lucide-react"
import Link from "next/link";

export default function HeroSection() {
  const features = [
    {
      icon: <Zap size={24} />,
      title: "Lightning Fast",
      description: "Process images in seconds with our advanced trained lisence-plate-detection and OCR model",
    },
    {
      icon: <Shield size={24} />,
      title: "Secure & Private",
      description: "Your images are processed securely and never stored permanently",
    },
    {
      icon: <Clock size={24} />,
      title: "24/7 Available",
      description: "Access our OCR service anytime, anywhere, from any device",
    },
  ]

  const scrollToUpload = () => {
    const uploadSection = document.querySelector("[data-upload-section]")
    if (uploadSection) {
      uploadSection.scrollIntoView({ behavior: "smooth" })
    }
  }

  return (
    <div
      style={{
        minHeight: "100vh",
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        display: "flex",
        alignItems: "center",
        padding: "80px 20px",
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
          right: "10%",
          width: "300px",
          height: "300px",
          background: "rgba(255,255,255,0.1)",
          borderRadius: "50%",
          filter: "blur(100px)",
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "20%",
          left: "5%",
          width: "200px",
          height: "200px",
          background: "rgba(255,255,255,0.08)",
          borderRadius: "50%",
          filter: "blur(80px)",
        }}
      />

      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          textAlign: "center",
          position: "relative",
          zIndex: 2,
        }}
      >
        <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }}>
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              background: "rgba(255,255,255,0.15)",
              padding: "8px 20px",
              borderRadius: "25px",
              marginBottom: "30px",
              border: "1px solid rgba(255,255,255,0.2)",
            }}
          >
            <Sparkles size={20} style={{ color: "#fbbf24" }} />
            <span style={{ color: "white", fontSize: "14px", fontWeight: "600" }}>Advanced OCR Technology</span>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
            style={{
              fontSize: "4rem",
              fontWeight: "900",
              color: "white",
              marginBottom: "30px",
              lineHeight: "1.1",
              textShadow: "2px 2px 4px rgba(0,0,0,0.3)",
            }}
          >
            Extract Text from Your lisence plates
            <br />
            <span style={{ color: "#fbbf24" }}>Instantly</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            style={{
              fontSize: "1.3rem",
              color: "rgba(255,255,255,0.9)",
              marginBottom: "50px",
              maxWidth: "600px",
              margin: "0 auto 50px auto",
              lineHeight: "1.6",
            }}
          >
            Enter your lisence plate images and let our AI-powered OCR technology extract the text for you.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
            style={{
              display: "flex",
              gap: "20px",
              justifyContent: "center",
              flexWrap: "wrap",
              marginBottom: "80px",
            }}
          >
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={scrollToUpload}
              style={{
                background: "white",
                color: "#667eea",
                border: "none",
                padding: "18px 40px",
                fontSize: "1.1rem",
                fontWeight: "700",
                borderRadius: "30px",
                cursor: "pointer",
                boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
                transition: "all 0.3s ease",
                display: "flex",
                alignItems: "center",
                gap: "10px",
                fontFamily: "inherit",
              }}
            >
              Get Started Now
              <ArrowRight size={20} />
            </motion.button>

            <Link href="https://drive.google.com/file/d/1gpMKM2Y9TXIIJTdqbj0tOJnYKjSdxRRQ/view?usp=drive_link" scroll={true}>
              <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: "transparent",
                  color: "white",
                  border: "2px solid rgba(255,255,255,0.3)",
                  padding: "16px 40px",
                  fontSize: "1.1rem",
                  fontWeight: "600",
                  borderRadius: "30px",
                  cursor: "pointer",
                  transition: "all 0.3s ease",
                  fontFamily: "inherit",
                }}
                onMouseEnter={(e) => {
                  e.target.style.background = "rgba(255,255,255,0.1)";
                  e.target.style.borderColor = "rgba(255,255,255,0.5)";
                }}
                onMouseLeave={(e) => {
                  e.target.style.background = "transparent";
                  e.target.style.borderColor = "rgba(255,255,255,0.3)";
                }}
              >
                Learn More
              </motion.button>
            </Link>

          </motion.div>

          {/* Features Section */}
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1, duration: 0.8 }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
              gap: "30px",
              maxWidth: "900px",
              margin: "0 auto",
            }}
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                whileHover={{ y: -10 }}
                style={{
                  background: "rgba(255,255,255,0.1)",
                  padding: "30px",
                  borderRadius: "20px",
                  border: "1px solid rgba(255,255,255,0.2)",
                  backdropFilter: "blur(10px)",
                  textAlign: "center",
                }}
              >
                <div
                  style={{
                    color: "#fbbf24",
                    marginBottom: "15px",
                    display: "flex",
                    justifyContent: "center",
                  }}
                >
                  {feature.icon}
                </div>
                <h3
                  style={{
                    color: "white",
                    fontSize: "1.3rem",
                    fontWeight: "700",
                    marginBottom: "10px",
                    fontFamily: "inherit",
                  }}
                >
                  {feature.title}
                </h3>
                <p
                  style={{
                    color: "rgba(255,255,255,0.8)",
                    fontSize: "1rem",
                    lineHeight: "1.5",
                    margin: 0,
                    fontFamily: "inherit",
                  }}
                >
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}
