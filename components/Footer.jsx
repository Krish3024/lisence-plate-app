"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { Mail, Phone, MapPin, Github, Twitter, Linkedin, Heart, Instagram } from "lucide-react"

export default function Footer() {
  const footerLinks = {
    product: [
      { name: "Features", href: "#features" },
      { name: "Pricing", href: "#pricing" },
      { name: "API Docs", href: "#api" },
      { name: "Integrations", href: "#integrations" },
    ],
    company: [
      { name: "About Us", href: "#about" },
      { name: "Careers", href: "#careers" },
      { name: "Blog", href: "#blog" },
      { name: "Press", href: "#press" },
    ],
    support: [
      { name: "Help Center", href: "#help" },
      { name: "Contact", href: "#contact" },
      { name: "Status", href: "#status" },
      { name: "Updates", href: "#updates" },
    ],
    legal: [
      { name: "Privacy Policy", href: "#privacy" },
      { name: "Terms of Service", href: "#terms" },
      { name: "Cookie Policy", href: "#cookies" },
      { name: "GDPR", href: "#gdpr" },
    ],
  }

  const socialLinks = [
    { icon: <Github size={20} />, href: "https://github.com/Krish3024", name: "GitHub" },
    { icon: <Instagram size={20} />, href: "#", name: "Instagram" },
    { icon: <Linkedin size={20} />, href: "https://www.linkedin.com/in/krish-sahu-513189278/", name: "LinkedIn" },
  ]

  return (
    <footer
      style={{
        background: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
        color: "white",
        fontFamily: "-apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif",
      }}
    >
      {/* Main Footer Content */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "80px 20px 40px 20px",
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "2fr 1fr 1fr 1fr 1fr",
            gap: "40px",
            marginBottom: "60px",
          }}
        >
          {/* Company Info */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h3
              style={{
                fontSize: "2rem",
                fontWeight: "800",
                marginBottom: "20px",
                color: "white",
              }}
            >
              OCR Processor
            </h3>
            <p
              style={{
                fontSize: "1.1rem",
                lineHeight: "1.6",
                color: "rgba(255,255,255,0.8)",
                marginBottom: "30px",
                maxWidth: "300px",
              }}
            >
              Enter your lisence plate images and let our AI-powered OCR technology extract the text for you.
            </p>

            {/* Contact Info */}
            <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Mail size={16} style={{ color: "rgba(255,255,255,0.7)" }} />
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>support@ocrprocessor.com</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <Phone size={16} style={{ color: "rgba(255,255,255,0.7)" }} />
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>+1 (555) 123-4567</span>
              </div>
              <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
                <MapPin size={16} style={{ color: "rgba(255,255,255,0.7)" }} />
                <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>
                  123 Tech Street, Digital City
                </span>
              </div>
            </div>
          </motion.div>

          {/* Product Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                marginBottom: "20px",
                color: "white",
              }}
            >
              Product
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerLinks.product.map((link, index) => (
                <li key={index} style={{ marginBottom: "12px" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "white"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "rgba(255,255,255,0.7)"
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Company Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                marginBottom: "20px",
                color: "white",
              }}
            >
              Company
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerLinks.company.map((link, index) => (
                <li key={index} style={{ marginBottom: "12px" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "white"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "rgba(255,255,255,0.7)"
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Support Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                marginBottom: "20px",
                color: "white",
              }}
            >
              Support
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerLinks.support.map((link, index) => (
                <li key={index} style={{ marginBottom: "12px" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "white"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "rgba(255,255,255,0.7)"
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Legal Links */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h4
              style={{
                fontSize: "1.2rem",
                fontWeight: "700",
                marginBottom: "20px",
                color: "white",
              }}
            >
              Legal
            </h4>
            <ul style={{ listStyle: "none", padding: 0, margin: 0 }}>
              {footerLinks.legal.map((link, index) => (
                <li key={index} style={{ marginBottom: "12px" }}>
                  <Link
                    href={link.href}
                    style={{
                      color: "rgba(255,255,255,0.7)",
                      textDecoration: "none",
                      fontSize: "0.95rem",
                      transition: "color 0.3s ease",
                    }}
                    onMouseEnter={(e) => {
                      e.target.style.color = "white"
                    }}
                    onMouseLeave={(e) => {
                      e.target.style.color = "rgba(255,255,255,0.7)"
                    }}
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        {/* Social Links & Newsletter */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5, duration: 0.6 }}
          viewport={{ once: true }}
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            paddingTop: "40px",
            borderTop: "1px solid rgba(255,255,255,0.2)",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
            <span style={{ color: "rgba(255,255,255,0.8)", fontSize: "0.9rem" }}>Follow us:</span>
            <div style={{ display: "flex", gap: "15px" }}>
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  style={{
                    color: "rgba(255,255,255,0.7)",
                    transition: "color 0.3s ease",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    background: "rgba(255,255,255,0.1)",
                    textDecoration: "none",
                  }}
                  onMouseEnter={(e) => {
                    e.target.style.color = "white"
                    e.target.style.background = "rgba(255,255,255,0.2)"
                  }}
                  onMouseLeave={(e) => {
                    e.target.style.color = "rgba(255,255,255,0.7)"
                    e.target.style.background = "rgba(255,255,255,0.1)"
                  }}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: "5px",
              color: "rgba(255,255,255,0.8)",
              fontSize: "0.9rem",
            }}
          >
            Made with <Heart size={16} style={{ color: "#ff6b6b" }} /> by LPDR teams
          </div>
        </motion.div>
      </div>

      {/* Bottom Bar */}
      <div
        style={{
          borderTop: "1px solid rgba(255,255,255,0.2)",
          padding: "20px 0",
          background: "rgba(0,0,0,0.1)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 20px",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "0.9rem",
              margin: 0,
            }}
          >
            © 2024 LPDR. All rights reserved.
          </p>
          <p
            style={{
              color: "rgba(255,255,255,0.7)",
              fontSize: "0.9rem",
              margin: 0,
            }}
          >
            Version 2.1.0 | Last updated: January 2024
          </p>
        </div>
      </div>
    </footer>
  )
}
