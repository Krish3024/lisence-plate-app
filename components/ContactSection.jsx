"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Mail, Phone, MapPin, Send, CheckCircle, MessageSquare } from "lucide-react"

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState(null)

  const handleInputChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false)
      setSubmitStatus("success")
      setFormData({ name: "", email: "", subject: "", message: "" })

      setTimeout(() => {
        setSubmitStatus(null)
      }, 5000)
    }, 2000)
  }

  const contactInfo = [
    {
      icon: <Mail size={24} />,
      title: "Email Us",
      info: "krishsah5216@gmail.com",
      description: "Get in touch via email",
    },
    {
      icon: <Phone size={24} />,
      title: "Call Us",
      info: "+91-74409XXXXX",
      description: "Mon-Fri 9AM-6PM IST",
    },
    {
      icon: <MapPin size={24} />,
      title: "Location",
      info: "VIT Chennai, Chennai",
      description: "",
    },
  ]

  return (
    <div
      style={{
        background: "linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%)",
        padding: "100px 20px",
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
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          style={{ textAlign: "center", marginBottom: "80px" }}
        >
          <h2
            style={{
              fontSize: "3rem",
              fontWeight: "800",
              color: "#667eea",
              marginBottom: "20px",
              textShadow: "2px 2px 4px rgba(0,0,0,0.1)",
            }}
          >
            Get In Touch
          </h2>
          <p
            style={{
              fontSize: "1.2rem",
              color: "#666",
              maxWidth: "600px",
              margin: "0 auto",
              lineHeight: "1.6",
            }}
          >
            Have questions about our OCR service? We'd love to hear from you. Send us a message and we'll respond as
            soon as possible.
          </p>
        </motion.div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "60px",
            alignItems: "start",
          }}
        >
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <div
              style={{
                background: "rgba(255, 255, 255, 0.95)",
                borderRadius: "25px",
                padding: "40px",
                boxShadow: "0 25px 50px rgba(0,0,0,0.15)",
                border: "1px solid rgba(255, 255, 255, 0.3)",
              }}
            >
              <h3
                style={{
                  fontSize: "1.8rem",
                  fontWeight: "700",
                  color: "#333",
                  marginBottom: "30px",
                  display: "flex",
                  alignItems: "center",
                  gap: "12px",
                }}
              >
                <MessageSquare size={28} style={{ color: "#667eea" }} />
                Send Message
              </h3>

              <form onSubmit={handleSubmit}>
                <div style={{ marginBottom: "25px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "8px",
                    }}
                  >
                    Full Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "15px",
                      border: "2px solid rgba(102, 126, 234, 0.2)",
                      borderRadius: "12px",
                      fontSize: "1rem",
                      fontFamily: "inherit",
                      transition: "all 0.3s ease",
                      background: "rgba(255,255,255,0.8)",
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

                <div style={{ marginBottom: "25px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "8px",
                    }}
                  >
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "15px",
                      border: "2px solid rgba(102, 126, 234, 0.2)",
                      borderRadius: "12px",
                      fontSize: "1rem",
                      fontFamily: "inherit",
                      transition: "all 0.3s ease",
                      background: "rgba(255,255,255,0.8)",
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

                <div style={{ marginBottom: "25px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "8px",
                    }}
                  >
                    Subject
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleInputChange}
                    required
                    style={{
                      width: "100%",
                      padding: "15px",
                      border: "2px solid rgba(102, 126, 234, 0.2)",
                      borderRadius: "12px",
                      fontSize: "1rem",
                      fontFamily: "inherit",
                      transition: "all 0.3s ease",
                      background: "rgba(255,255,255,0.8)",
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

                <div style={{ marginBottom: "30px" }}>
                  <label
                    style={{
                      display: "block",
                      fontSize: "1rem",
                      fontWeight: "600",
                      color: "#333",
                      marginBottom: "8px",
                    }}
                  >
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows="5"
                    style={{
                      width: "100%",
                      padding: "15px",
                      border: "2px solid rgba(102, 126, 234, 0.2)",
                      borderRadius: "12px",
                      fontSize: "1rem",
                      fontFamily: "inherit",
                      transition: "all 0.3s ease",
                      background: "rgba(255,255,255,0.8)",
                      resize: "vertical",
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
                    padding: "18px",
                    fontSize: "1.1rem",
                    fontWeight: "700",
                    borderRadius: "15px",
                    cursor: isSubmitting ? "not-allowed" : "pointer",
                    transition: "all 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    gap: "10px",
                    fontFamily: "inherit",
                  }}
                >
                  {isSubmitting ? (
                    "Sending..."
                  ) : (
                    <>
                      <Send size={20} />
                      Send Message
                    </>
                  )}
                </motion.button>

                <AnimatePresence>
                  {submitStatus === "success" && (
                    <motion.div
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: -10 }}
                      style={{
                        marginTop: "20px",
                        padding: "15px",
                        background: "rgba(34, 197, 94, 0.1)",
                        border: "2px solid rgba(34, 197, 94, 0.3)",
                        borderRadius: "12px",
                        display: "flex",
                        alignItems: "center",
                        gap: "10px",
                      }}
                    >
                      <CheckCircle size={20} style={{ color: "#059669" }} />
                      <span style={{ color: "#059669", fontWeight: "600" }}>
                        Message sent successfully! We'll get back to you soon.
                      </span>
                    </motion.div>
                  )}
                </AnimatePresence>
              </form>
            </div>
          </motion.div>

          {/* Contact Information */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            style={{ display: "flex", flexDirection: "column", gap: "30px" }}
          >
            {contactInfo.map((contact, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.2, duration: 0.6 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
                style={{
                  background: "rgba(255, 255, 255, 0.95)",
                  padding: "30px",
                  borderRadius: "20px",
                  boxShadow: "0 15px 35px rgba(0,0,0,0.1)",
                  border: "1px solid rgba(255, 255, 255, 0.3)",
                  display: "flex",
                  alignItems: "center",
                  gap: "20px",
                }}
              >
                <div
                  style={{
                    background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
                    padding: "15px",
                    borderRadius: "15px",
                    color: "white",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  {contact.icon}
                </div>
                <div>
                  <h4
                    style={{
                      fontSize: "1.3rem",
                      fontWeight: "700",
                      color: "#333",
                      marginBottom: "5px",
                      fontFamily: "inherit",
                    }}
                  >
                    {contact.title}
                  </h4>
                  <p
                    style={{
                      fontSize: "1.1rem",
                      fontWeight: "600",
                      color: "#667eea",
                      marginBottom: "5px",
                      fontFamily: "inherit",
                    }}
                  >
                    {contact.info}
                  </p>
                  <p
                    style={{
                      fontSize: "0.9rem",
                      color: "#666",
                      margin: 0,
                      fontFamily: "inherit",
                    }}
                  >
                    {contact.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </div>
    </div>
  )
}
